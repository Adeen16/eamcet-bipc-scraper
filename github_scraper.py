"""
TS EAMCET 2025 BiPC Scraper — GitHub Actions Edition
Designed to run as a SINGLE consolidated job on GitHub's Ubuntu runners.
Accepts CLI arguments for districts, workers, and serial range.

Usage:
  python github_scraper.py --districts ALL --workers 4 --serial-start 1000 --serial-end 15000
"""

import argparse
import csv
import os
import sys
import time
import random
import threading
from concurrent.futures import ThreadPoolExecutor

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager

# ─── Constants ────────────────────────────────────────────────────────────────
YEAR_PREFIX = "25"
ALL_DISTRICTS = [
    "01","02","03","04","05","06","07","08","09","10",
    "11","12","13","14","15","16","17","18","19","20",
    "21","22","23","24","25","26","27","28","29","30",
    "31","32","33"
]
LETTERS = list("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
BASE_URL = (
    "https://www.results.manabadi.co.in/2025/TS/EAMCET/AM/"
    "Telangana-eamcet-Agriculture-Results-2025-May-10052025.htm"
)
CSV_COLUMNS = [
    "Hall_Ticket", "Name", "Botany", "Zoology",
    "Physics", "Chemistry", "EAMCET_Marks", "Result", "Rank"
]
OUTPUT_FILE = "github_results.csv"

# ─── Globals ──────────────────────────────────────────────────────────────────
lock = threading.Lock()
seen_tickets = set()
csv_file = None
csv_writer_obj = None
total_processed = 0
total_found = 0
start_time = time.time()


def parse_args():
    parser = argparse.ArgumentParser(description="EAMCET Scraper for GitHub Actions")
    parser.add_argument("--districts", type=str, default="ALL",
                        help="Comma-separated district codes or ALL")
    parser.add_argument("--workers", type=int, default=4,
                        help="Number of parallel browser workers")
    parser.add_argument("--serial-start", type=int, default=1000,
                        help="Starting serial number")
    parser.add_argument("--serial-end", type=int, default=15000,
                        help="Ending serial number")
    return parser.parse_args()


def generate_tickets(districts, serial_start, serial_end):
    """Generate all hall ticket numbers to check."""
    tickets = []
    for dist in districts:
        for letter in LETTERS:
            for serial in range(serial_start, serial_end + 1):
                ticket = f"{YEAR_PREFIX}{dist}{letter}{serial:05d}"
                if ticket not in seen_tickets:
                    tickets.append(ticket)
    return tickets


def init_csv():
    global csv_file, csv_writer_obj, seen_tickets

    # Load existing results if resuming
    if os.path.exists(OUTPUT_FILE):
        try:
            with open(OUTPUT_FILE, "r", encoding="utf-8-sig") as f:
                reader = csv.DictReader(f)
                for row in reader:
                    ht = row.get("Hall_Ticket", "").strip()
                    if ht:
                        seen_tickets.add(ht)
        except Exception:
            pass

    print(f"[RESUME] Skipping {len(seen_tickets):,} already found tickets.")

    exists = os.path.exists(OUTPUT_FILE)
    csv_file = open(OUTPUT_FILE, "a", newline="", encoding="utf-8-sig")
    csv_writer_obj = csv.DictWriter(csv_file, fieldnames=CSV_COLUMNS)
    if not exists:
        csv_writer_obj.writeheader()
        csv_file.flush()


def write_result(row: dict):
    global total_found
    with lock:
        ht = row.get("Hall_Ticket", "")
        if ht in seen_tickets:
            return
        seen_tickets.add(ht)
        csv_writer_obj.writerow(row)
        csv_file.flush()
        total_found += 1
        print(f"  ✓ [{total_found:5}] {ht} | {row.get('Name','')[:30]:30s} | Rank={row.get('Rank','')}")


def create_driver():
    opts = Options()
    opts.add_argument("--headless=new")
    opts.add_argument("--no-sandbox")
    opts.add_argument("--disable-dev-shm-usage")
    opts.add_argument("--disable-gpu")
    opts.add_argument("--disable-extensions")
    opts.add_argument("--mute-audio")
    opts.add_argument("--disable-renderer-backgrounding")
    opts.add_argument("--disable-background-timer-throttling")
    opts.add_argument("--disable-backgrounding-occluded-windows")
    opts.add_argument("--disable-client-side-phishing-detection")
    opts.add_argument("--disable-default-apps")
    opts.add_argument("--disable-hang-monitor")
    opts.add_argument("--disable-popup-blocking")
    opts.add_argument("--disable-prompt-on-repost")
    opts.add_argument("--disable-sync")
    opts.add_argument("--no-first-run")
    opts.add_argument("--disable-crash-reporter")
    opts.add_argument("--blink-settings=imagesEnabled=false")
    opts.add_argument("--window-size=1280,1024")
    opts.add_argument("--log-level=3")
    opts.add_argument(
        "--user-agent=Mozilla/5.0 (X11; Linux x86_64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    )
    service = Service(ChromeDriverManager().install())
    driver = webdriver.Chrome(service=service, options=opts)
    driver.set_page_load_timeout(30)
    return driver


def progress_reporter():
    while True:
        time.sleep(30)
        elapsed = (time.time() - start_time) / 60
        speed = total_processed / elapsed if elapsed > 0 else 0
        print(f"[PROGRESS {elapsed:.1f}m] Found={total_found} | Processed={total_processed} | Speed={speed:.0f}/min")
        sys.stdout.flush()


def worker(worker_id, tickets):
    global total_processed

    if not tickets:
        return

    print(f"[Worker {worker_id}] Starting... ({len(tickets):,} tickets assigned)")

    try:
        driver = create_driver()
        driver.get(BASE_URL)
        time.sleep(4)

        try:
            driver.find_element(By.ID, "htno")
            print(f"[Worker {worker_id}] Page OK, starting scrape loop...")
        except Exception:
            print(f"[Worker {worker_id}] ERROR: Page not loaded.")
            return

        consecutive_failures = 0
        tickets_since_restart = 0

        for ticket in tickets:
            # Periodic browser restart every 300 tickets
            if tickets_since_restart >= 300:
                print(f"[Worker {worker_id}] Periodic restart (300 tickets)...")
                try:
                    driver.quit()
                    driver = create_driver()
                    driver.get(BASE_URL)
                    time.sleep(4)
                    tickets_since_restart = 0
                except Exception as e:
                    print(f"[Worker {worker_id}] Restart failed: {e}")
                    break

            try:
                # Clear previous result and set new ticket
                driver.execute_script("""
                    var els = ['sid0','sid1','sid2','sid3','sid4','sid5','sid6','sid7','sid8','sMsg'];
                    els.forEach(function(id) {
                        var e = document.getElementById(id);
                        if (e) e.innerHTML = '&nbsp;';
                    });
                    document.getElementById('htno').value = arguments[0];
                """, ticket)

                # Submit
                driver.execute_script("doSubmit('resultsfrm');")

                # Fast poll: check every 0.15s for up to 5s
                found = False
                for _ in range(30):
                    time.sleep(0.15 + (random.random() * 0.05))
                    try:
                        name = driver.find_element(By.ID, "sid1").text.strip()
                        if name:
                            found = True
                            break
                        msg = driver.find_element(By.ID, "sMsg").text.strip()
                        if msg and msg != "\xa0" and len(msg) > 2:
                            break
                    except Exception:
                        pass

                if found:
                    try:
                        name      = driver.find_element(By.ID, "sid1").text.strip()
                        htno_val  = driver.find_element(By.ID, "sid0").text.strip()
                        botany    = driver.find_element(By.ID, "sid2").text.strip()
                        zoology   = driver.find_element(By.ID, "sid3").text.strip()
                        physics   = driver.find_element(By.ID, "sid4").text.strip()
                        chemistry = driver.find_element(By.ID, "sid5").text.strip()
                        eamcet    = driver.find_element(By.ID, "sid6").text.strip()
                        result    = driver.find_element(By.ID, "sid7").text.strip()
                        rank      = driver.find_element(By.ID, "sid8").text.strip()

                        if name and name.lower() != "undefined":
                            write_result({
                                "Hall_Ticket":  htno_val or ticket,
                                "Name":         name,
                                "Botany":       botany,
                                "Zoology":      zoology,
                                "Physics":      physics,
                                "Chemistry":    chemistry,
                                "EAMCET_Marks": eamcet,
                                "Result":       result,
                                "Rank":         rank,
                            })
                    except Exception as e:
                        print(f"[Worker {worker_id}] Extraction error for {ticket}: {e}")

                    consecutive_failures = 0

            except Exception as e:
                consecutive_failures += 1
                if consecutive_failures > 20:
                    print(f"[Worker {worker_id}] 20+ errors, reloading page...")
                    try:
                        driver.get(BASE_URL)
                        time.sleep(5)
                        consecutive_failures = 0
                    except Exception:
                        break

            with lock:
                total_processed += 1
                tickets_since_restart += 1

    except Exception as e:
        print(f"[Worker {worker_id}] Fatal: {e}")
    finally:
        try:
            driver.quit()
        except Exception:
            pass


def main():
    args = parse_args()

    # Parse districts
    if args.districts.upper() == "ALL":
        districts = ALL_DISTRICTS
    else:
        districts = [d.strip().zfill(2) for d in args.districts.split(",")]

    workers = args.workers
    serial_start = args.serial_start
    serial_end = args.serial_end

    print("=" * 60)
    print("TS EAMCET 2025 BiPC - GitHub Actions Mega Scraper")
    print(f"Districts: {districts}")
    print(f"Workers: {workers}")
    print(f"Serial Range: {serial_start} - {serial_end}")
    print("=" * 60)

    init_csv()
    all_tickets = generate_tickets(districts, serial_start, serial_end)
    print(f"Tickets queued: {len(all_tickets):,}")

    if not all_tickets:
        print("Nothing to do!")
        return

    # Split across workers
    chunks = [[] for _ in range(workers)]
    for i, t in enumerate(all_tickets):
        chunks[i % workers].append(t)

    # Background reporter
    threading.Thread(target=progress_reporter, daemon=True).start()

    print(f"\nLaunching {workers} Chrome workers...")

    try:
        with ThreadPoolExecutor(max_workers=workers) as pool:
            futures = [pool.submit(worker, i, chunks[i]) for i in range(workers)]
            for f in futures:
                f.result()
    except KeyboardInterrupt:
        print("\n[STOPPED by user] Progress saved.")

    if csv_file:
        csv_file.close()

    elapsed = (time.time() - start_time) / 60
    print(f"\n{'=' * 60}")
    print(f"COMPLETE! Found: {total_found} records in {elapsed:.1f} minutes")
    print(f"File: {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
