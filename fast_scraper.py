"""
TS EAMCET 2025 BiPC Fast Scraper - OPTIMIZED VERSION
- Reuses the same browser page for all tickets (no reload per ticket)
- Fast JS polling: detects result or error in 0.3-1s instead of 8s
- Writes DIRECTLY to final_results.csv on every found record
- 2 Chrome workers in parallel

Run: python fast_scraper.py
Press Ctrl+C to stop. Progress is saved automatically.
"""

import csv
import os
import sys
import time
import threading
from concurrent.futures import ThreadPoolExecutor

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager

# ─── Configuration ────────────────────────────────────────────────────────────
YEAR_PREFIX   = "25"
DISTRICTS     = ["12", "11", "13", "14", "15", "10", "09", "08", "07", "06", "05", "04", "03", "02", "01", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33"]
LETTERS       = list("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
SERIAL_START  = 1000   
SERIAL_END    = 15000
WORKERS       = 35     # Extreme Turbo Mode for 16GB RAM
OUTPUT_FILE   = "final_results.csv"
CHECKED_LOG   = "checked_tickets.log" 

BASE_URL = (
    "https://www.results.manabadi.co.in/2025/TS/EAMCET/AM/"
    "Telangana-eamcet-Agriculture-Results-2025-May-10052025.htm"
)
CSV_COLUMNS = [
    "Hall_Ticket", "Name", "Botany", "Zoology",
    "Physics", "Chemistry", "EAMCET_Marks", "Result", "Rank"
]

# ─── Globals ──────────────────────────────────────────────────────────────────
lock            = threading.Lock()
seen_tickets    = set()
csv_file        = None
csv_writer_obj  = None
checked_log_f   = None  # File handle for the checked log
total_processed = 0
total_found     = 0
start_time      = time.time()

# ─── Progress Persistence ─────────────────────────────────────────────────────
def init_csv():
    global csv_file, csv_writer_obj, seen_tickets, checked_log_f
    
    # 1. Load found tickets from CSV
    if os.path.exists(OUTPUT_FILE):
        try:
            with open(OUTPUT_FILE, "r", encoding="utf-8-sig") as f:
                reader = csv.DictReader(f)
                for row in reader:
                    ht = row.get("Hall_Ticket", "").strip()
                    if ht: seen_tickets.add(ht)
        except Exception: pass
        
    # 2. Load checked (invalid) tickets from log
    if os.path.exists(CHECKED_LOG):
        try:
            with open(CHECKED_LOG, "r") as f:
                for line in f:
                    ht = line.strip()
                    if ht: seen_tickets.add(ht)
        except Exception: pass
    
    print(f"[RESUME] Skipping {len(seen_tickets):,} already checked tickets.")

    # 3. Open files for appending
    exists = os.path.exists(OUTPUT_FILE)
    csv_file = open(OUTPUT_FILE, "a", newline="", encoding="utf-8-sig")
    csv_writer_obj = csv.DictWriter(csv_file, fieldnames=CSV_COLUMNS)
    if not exists:
        csv_writer_obj.writeheader()
        csv_file.flush()
        
    checked_log_f = open(CHECKED_LOG, "a", buffering=1) # buffering=1 for line-buffered persistence

def log_checked(ticket: str):
    with lock:
        checked_log_f.write(f"{ticket}\n")
        # No need to flush if buffering=1, but safe:
        # checked_log_f.flush()

def write_result(data: dict):
    global total_found
    with lock:
        if data["Hall_Ticket"] in seen_tickets:
            return
        seen_tickets.add(data["Hall_Ticket"])
        csv_writer_obj.writerow(data)
        csv_file.flush()
        total_found += 1
        print(f"  ✓ [{total_found:5d}] {data['Hall_Ticket']} | {data['Name'][:28]:28s} | Rank={data['Rank']}")

# ─── Ticket Generation ─────────────────────────────────────────────────────────
def generate_all_tickets():
    tickets = []
    for district in DISTRICTS:
        for letter in LETTERS:
            for serial in range(SERIAL_START, SERIAL_END + 1):
                ticket = f"{YEAR_PREFIX}{district}{letter}{serial:05d}"
                if ticket not in seen_tickets:
                    tickets.append(ticket)
    return tickets

# ─── Chrome Driver ─────────────────────────────────────────────────────────────
def create_driver():
    opts = Options()
    # HEADLESS ENABLED for high-concurrency 16GB RAM mode
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
    opts.add_experimental_option("excludeSwitches", ["enable-logging"])
    opts.add_argument(
        "--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    )
    service = Service(ChromeDriverManager().install())
    driver = webdriver.Chrome(service=service, options=opts)
    driver.set_page_load_timeout(30)
    return driver

# ─── Worker ───────────────────────────────────────────────────────────────────
def worker(worker_id: int, tickets: list):
    global total_processed

    print(f"[Worker {worker_id}] Starting... ({len(tickets):,} tickets assigned)")
    driver = None

    try:
        driver = create_driver()
        driver.get(BASE_URL)
        time.sleep(4)

        try:
            driver.find_element(By.ID, "htno")
            print(f"[Worker {worker_id}] Page OK, starting scrape loop...")
        except Exception:
            print(f"[Worker {worker_id}] ERROR: Page not loaded. URL={driver.current_url[:60]}")
            return

        consecutive_failures = 0
        tickets_since_restart = 0
        consecutive_empty = 0
        current_context = ""

        for ticket in tickets:
            current_context = f"Dist {ticket[2:4]} Let {ticket[4]}"
            
            # AUTO-SKIP: If we hit 1000 empty tickets in a row, this range is dead
            if consecutive_empty >= 1000:
                # We skip to the next district/letter by returning (main loop handles chunks)
                # But here we just break this worker's current chunk block if it's too dead
                # Better: just reset and keep going, but log it.
                pass 

            # Periodic browser restart
            # Every 200 tickets to stay safe with 35 workers on 16GB
            if tickets_since_restart >= 200:
                print(f"[Worker {worker_id}] Periodic restart (200 tickets)...")
                try:
                    driver.quit()
                    driver = create_driver()
                    driver.get(BASE_URL)
                    time.sleep(5)
                    tickets_since_restart = 0
                except Exception as e:
                    print(f"[Worker {worker_id}] Restart failed: {e}")
                    break

            try:
                # Clear previous result via JS
                driver.execute_script("""
                    ['sid0','sid1','sid2','sid3','sid4','sid5','sid6','sid7','sid8'].forEach(function(id){
                        var el = document.getElementById(id);
                        if(el) el.innerHTML = '';
                    });
                    var msg = document.getElementById('sMsg');
                    if(msg) msg.innerHTML = '&nbsp;';
                """)

                # Type ticket number
                htno = driver.find_element(By.ID, "htno")
                htno.clear()
                htno.send_keys(ticket)

                # Set MED degree
                driver.execute_script("document.getElementById('Degree').value = 'a';")

                # Submit
                driver.execute_script("doSubmit('resultsfrm');")

                # Fast poll: check every 0.12s
                import random
                found = False
                for _ in range(35):   # 35 * (0.12 + jitter) = ~5s max
                    time.sleep(0.12 + (random.random() * 0.03)) 
                    try:
                        name = driver.find_element(By.ID, "sid1").text.strip()
                        if name:
                            found = True
                            break
                        # Also check for error message (means invalid ticket)
                        msg = driver.find_element(By.ID, "sMsg").text.strip()
                        if msg and msg != "\xa0" and len(msg) > 2:
                            break  # Invalid ticket confirmed, stop waiting
                    except Exception:
                        pass

                if found:
                    # Removed delay for max speed
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

                        # Validation: discard invalid/undefined data
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
                    consecutive_empty = 0

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

            # Mark ticket as tried (win or lose)
            log_checked(ticket)

            with lock:
                total_processed += 1
                tickets_since_restart += 1
                if not found:
                    consecutive_empty += 1

    except Exception as e:
        print(f"[Worker {worker_id}] Fatal: {e}")
    finally:
        if driver:
            try:
                driver.quit()
            except Exception:
                pass
        print(f"[Worker {worker_id}] Done.")

# ─── Progress Reporter ─────────────────────────────────────────────────────────
def progress_reporter():
    while True:
        time.sleep(30)
        elapsed = (time.time() - start_time) / 60
        rate    = total_processed / elapsed if elapsed > 0 else 0
        eta_min = (len(seen_tickets) / rate) if rate > 0 else 0
        print(
            f"\n[PROGRESS {elapsed:.1f}m] Found={total_found} | "
            f"Processed={total_processed} | Speed={rate:.0f}/min\n"
        )

# ─── Main ─────────────────────────────────────────────────────────────────────
def main():
    print("=" * 60)
    print("TS EAMCET 2025 BiPC Scraper - Optimized")
    print("=" * 60)
    total_est = len(DISTRICTS) * len(LETTERS) * (SERIAL_END - SERIAL_START + 1)
    print(f"Districts: {DISTRICTS}")
    print(f"Serials: {SERIAL_START} to {SERIAL_END}")
    print(f"Total tickets to check: {total_est:,}")
    print(f"Workers: {WORKERS}")
    print(f"Output: {OUTPUT_FILE}")
    print("=" * 60)

    init_csv()

    all_tickets = generate_all_tickets()
    print(f"Tickets queued: {len(all_tickets):,}")

    if not all_tickets:
        print("Nothing to do!")
        return

    # Split across workers
    chunks = [[] for _ in range(WORKERS)]
    for i, t in enumerate(all_tickets):
        chunks[i % WORKERS].append(t)

    # Background reporter
    threading.Thread(target=progress_reporter, daemon=True).start()

    print(f"\nLaunching {WORKERS} Chrome workers - please wait...")

    try:
        with ThreadPoolExecutor(max_workers=WORKERS) as pool:
            futures = [pool.submit(worker, i, chunks[i]) for i in range(WORKERS)]
            for f in futures:
                f.result()
    except KeyboardInterrupt:
        print("\n[STOPPED by user] Progress saved.")

    if csv_file:
        csv_file.close()
    if checked_log_f:
        checked_log_f.close()

    elapsed = (time.time() - start_time) / 60
    print(f"\n{'='*60}")
    print(f"COMPLETE! Found: {total_found} records in {elapsed:.1f} minutes")
    print(f"File: {OUTPUT_FILE}")

if __name__ == "__main__":
    main()
