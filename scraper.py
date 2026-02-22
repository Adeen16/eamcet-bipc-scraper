"""
Selenium-based scraper for TS EAMCET BiPC results.

Uses headless Chrome to:
1. Navigate to the results form page
2. Fill in the hall ticket number
3. Submit via JavaScript doSubmit()
4. Extract rendered data from sid0–sid8 spans
"""

import logging
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from typing import Callable, Dict, List, Optional

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from webdriver_manager.chrome import ChromeDriverManager

import config
from parser import parse_result

logger = logging.getLogger(__name__)


# ─── WebDriver Factory ────────────────────────────────────────────────

def create_driver() -> webdriver.Chrome:
    """Create a headless Chrome WebDriver instance."""
    opts = Options()
    # opts.add_argument("--headless=new")  # DISABLED for stability/visibility
    opts.add_argument("--no-sandbox")
    opts.add_argument("--disable-dev-shm-usage")
    opts.add_argument("--disable-gpu")
    opts.add_argument("--disable-extensions")
    opts.add_argument("--disable-images")
    opts.add_argument("--blink-settings=imagesEnabled=false")
    opts.add_argument("--window-size=600,600")
    opts.add_argument(
        "--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    )
    opts.add_experimental_option("excludeSwitches", ["enable-logging"])
    opts.add_argument("--log-level=3")

    service = Service(ChromeDriverManager().install())
    driver = webdriver.Chrome(service=service, options=opts)
    driver.set_page_load_timeout(config.PAGE_LOAD_TIMEOUT)
    return driver


# ─── Page Validation ──────────────────────────────────────────────────

def is_results_page(driver: webdriver.Chrome) -> bool:
    """Check if we're on the actual results form page (not redirected)."""
    try:
        driver.find_element(By.ID, "htno")
        return True
    except Exception:
        return False


# ─── Single Ticket Scraper ────────────────────────────────────────────

def scrape_ticket(
    driver: webdriver.Chrome,
    hall_ticket: str,
    base_url: str,
) -> Optional[Dict[str, str]]:
    """
    Scrape a single hall ticket result by navigating to the form page,
    filling in the ticket, and submitting via doSubmit().

    Args:
        driver:       Selenium WebDriver instance.
        hall_ticket:   Hall ticket number to look up.
        base_url:     Results page base URL.

    Returns:
        Parsed result dict or None if invalid/error.
    """
    for attempt in range(config.MAX_RETRIES):
        try:
            # Navigate to the base results page
            driver.get(base_url)
            time.sleep(1)

            # Check if we're on the actual results page
            if not is_results_page(driver):
                logger.warning(
                    f"Results page not loaded for {hall_ticket} "
                    f"(possibly redirected to homepage)"
                )
                return None

            # Fill in the hall ticket number
            htno_input = driver.find_element(By.ID, "htno")
            htno_input.clear()
            htno_input.send_keys(hall_ticket)

            # Set the Degree dropdown to 'a' (MED/BiPC)
            driver.execute_script(
                f"document.getElementById('Degree').value = '{config.DEGREE_PARAM}';"
            )

            # Submit the form via JavaScript
            driver.execute_script("doSubmit('resultsfrm');")

            # Wait for JS data population
            time.sleep(config.JS_RENDER_WAIT)

            # Try to wait for name span to have content
            try:
                WebDriverWait(driver, 3).until(
                    lambda d: d.find_element(By.ID, config.FIELD_IDS["name"])
                              .text.strip() != ""
                )
            except Exception:
                pass  # Name may be empty for invalid tickets

            page_source = driver.page_source
            result = parse_result(page_source)
            return result

        except Exception as e:
            wait_time = config.RETRY_BACKOFF_BASE * (2 ** attempt)
            logger.warning(
                f"Attempt {attempt + 1}/{config.MAX_RETRIES} failed for "
                f"{hall_ticket}: {e}. Retrying in {wait_time}s..."
            )
            time.sleep(wait_time)

            # Recreate driver on serious error
            try:
                driver.quit()
            except Exception:
                pass
            return None  # Let the worker recreate the driver

    logger.error(f"All {config.MAX_RETRIES} attempts failed for {hall_ticket}")
    return None


def scrape_ticket_fast(
    driver: webdriver.Chrome,
    hall_ticket: str,
) -> Optional[Dict[str, str]]:
    """
    Fast scraping: reuses the already-loaded results page, just clears
    and resubmits the form. No navigation needed after the first load.

    Args:
        driver:       Selenium WebDriver with results page already loaded.
        hall_ticket:   Hall ticket number to look up.

    Returns:
        Parsed result dict or None if invalid/error.
    """
    try:
        # Clear the input and enter new ticket
        htno_input = driver.find_element(By.ID, "htno")
        htno_input.clear()
        htno_input.send_keys(hall_ticket)

        # Submit
        driver.execute_script("doSubmit('resultsfrm');")

        # Wait for page reload and JS population
        time.sleep(config.JS_RENDER_WAIT)

        # Wait a bit more for the data to populate
        try:
            WebDriverWait(driver, 2).until(
                EC.presence_of_element_located((By.ID, config.FIELD_IDS["name"]))
            )
        except Exception:
            pass

        page_source = driver.page_source
        return parse_result(page_source)

    except Exception as e:
        logger.debug(f"Fast scrape failed for {hall_ticket}: {e}")
        return None


# ─── Worker Function ──────────────────────────────────────────────────

def _worker(
    tickets: List[str],
    base_url: str,
    on_result: Callable[[Dict[str, str]], None],
    on_progress: Callable[[int, int], None],
    worker_id: int,
) -> Dict[str, int]:
    """
    Worker function that processes a batch of tickets with its own driver.
    """
    stats = {"processed": 0, "valid": 0, "invalid": 0, "errors": 0}
    driver = None
    page_loaded = False

    try:
        logger.info(f"Worker-{worker_id}: Starting, {len(tickets)} tickets to process")
        driver = create_driver()

        # Load the results page once
        driver.get(base_url)
        time.sleep(2)
        page_loaded = is_results_page(driver)

        if not page_loaded:
            logger.error(
                f"Worker-{worker_id}: Results page not available "
                f"(redirected to homepage). Aborting worker."
            )
            stats["errors"] = len(tickets)
            return stats

        for ticket in tickets:
            try:
                # Use fast mode: resubmit form on same page
                result = scrape_ticket_fast(driver, ticket)

                if result:
                    on_result(result)
                    stats["valid"] += 1
                else:
                    stats["invalid"] += 1

                # Check if we're still on the results page
                if not is_results_page(driver):
                    logger.warning(
                        f"Worker-{worker_id}: Lost results page, reloading..."
                    )
                    driver.get(base_url)
                    time.sleep(2)

            except Exception as e:
                logger.error(f"Worker-{worker_id}: Error on {ticket}: {e}")
                stats["errors"] += 1

                # Recreate driver on serious error
                try:
                    driver.quit()
                except Exception:
                    pass
                driver = create_driver()
                driver.get(base_url)
                time.sleep(2)

            stats["processed"] += 1

            if stats["processed"] % config.LOG_INTERVAL == 0:
                on_progress(stats["processed"], stats["valid"])

            # Polite delay
            time.sleep(config.REQUEST_DELAY)

    finally:
        if driver:
            try:
                driver.quit()
            except Exception:
                pass

    logger.info(
        f"Worker-{worker_id}: Done. "
        f"Processed={stats['processed']}, Valid={stats['valid']}, "
        f"Invalid={stats['invalid']}, Errors={stats['errors']}"
    )
    return stats


# ─── Batch Scraper ────────────────────────────────────────────────────

def scrape_batch(
    tickets: List[str],
    on_result: Callable[[Dict[str, str]], None],
    base_url: str,
    max_workers: int = config.MAX_WORKERS,
) -> Dict[str, int]:
    """
    Scrape a batch of tickets using a thread pool of Selenium instances.
    """
    total = len(tickets)
    logger.info(f"Starting batch scrape: {total:,} tickets, {max_workers} workers")

    chunk_size = max(1, total // max_workers)
    chunks = [tickets[i:i + chunk_size] for i in range(0, total, chunk_size)]
    actual_workers = min(max_workers, len(chunks))

    aggregate = {"processed": 0, "valid": 0, "invalid": 0, "errors": 0}
    start_time = time.time()

    def on_progress(processed: int, valid: int) -> None:
        elapsed = time.time() - start_time
        rate = processed / elapsed if elapsed > 0 else 0
        logger.info(
            f"Progress: ~{processed} tickets "
            f"({valid} valid, {rate:.1f} tickets/sec)"
        )

    with ThreadPoolExecutor(max_workers=actual_workers) as executor:
        futures = {
            executor.submit(
                _worker, chunk, base_url, on_result, on_progress, idx
            ): idx
            for idx, chunk in enumerate(chunks)
        }

        for future in as_completed(futures):
            worker_id = futures[future]
            try:
                stats = future.result()
                for key in aggregate:
                    aggregate[key] += stats[key]
            except Exception as e:
                logger.error(f"Worker-{worker_id} raised exception: {e}")

    elapsed = time.time() - start_time
    logger.info(
        f"Batch scrape complete in {elapsed:.1f}s. "
        f"Processed={aggregate['processed']}, Valid={aggregate['valid']}, "
        f"Invalid={aggregate['invalid']}, Errors={aggregate['errors']}"
    )
    return aggregate


# ─── Single Ticket Convenience ────────────────────────────────────────

def scrape_single(hall_ticket: str, base_url: str) -> Optional[Dict[str, str]]:
    """
    Scrape a single ticket (for validation mode).

    Returns parsed result dict or None.
    """
    driver = None
    try:
        driver = create_driver()
        return scrape_ticket(driver, hall_ticket, base_url)
    finally:
        if driver:
            try:
                driver.quit()
            except Exception:
                pass
