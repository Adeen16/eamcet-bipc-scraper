import asyncio
import aiohttp
import aiocsv
import aiofiles
import os
import time
import sys
from typing import Set

# --- Configuration ---
# Direct API for TS EAMCET results
BASE_URL = "https://www.results.manabadi.co.in/2025/TS/EAMCET/AM/TSEAMCETMResults2025.aspx"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Referer": "https://www.results.manabadi.co.in/2025/TS/EAMCET/AM/Telangana-eamcet-Agriculture-Results-2025-May-10052025.htm"
}
OUTPUT_FILE = "final_results.csv"
CHECKED_LOG = "checked_tickets_sweep.log"
CONCURRENCY = 600  # High concurrency for the final stretch
BATCH_SIZE = 1000
TARGET_TOTAL = 120000

# Deep Gap Strategy: Jump over known 1-19k students
METRO_DISTS = ["11", "12", "13", "10", "14", "25", "20", "01", "07", "18"]
ALL_DISTS = [f"{i:02d}" for i in range(1, 40)]
DISTRICTS = list(dict.fromkeys(METRO_DISTS + ALL_DISTS))

# High-yield letters found in deep mapping
LETTERS = list("ACDEGH LMNRST".replace(" ", ""))
SERIAL_START = 19000
SERIAL_END = 55000

# --- State Management ---
# Using a Set for O(1) duplicate checks
seen_tickets: Set[str] = set()
writer_lock = asyncio.Lock() # To ensure thread-safe writes and set updates

def load_purified_state():
    """Strictly load existing tickets from the purified CSV and logs."""
    if os.path.exists(OUTPUT_FILE):
        with open(OUTPUT_FILE, 'r', encoding='utf-8') as f:
            # Check if file has data beyond header
            header = next(f, None)
            for line in f:
                parts = line.split(',')
                if parts:
                    seen_tickets.add(parts[0].strip().upper())
    
    if os.path.exists(CHECKED_LOG):
        with open(CHECKED_LOG, 'r', encoding='utf-8') as f:
            for line in f:
                seen_tickets.add(line.strip().upper())
    
    print(f"--- Initialization Complete ---")
    print(f"Loaded {len(seen_tickets):,} unique processed tickets.")

async def fetch_result(session: aiohttp.ClientSession, ticket: str, semaphore: asyncio.Semaphore, csv_writer, log_file):
    """Fetch result with double-check locking to prevent duplicates."""
    async with semaphore:
        # Check against Degree=a (works for both streams on this endpoint)
        # Degree=e is also used but 'a' captured 'S' prefix in our probe
        url = f"{BASE_URL}?htno={ticket}&Degree=a"
        
        try:
            async with session.get(url, headers=HEADERS, timeout=8) as response:
                if response.status == 200:
                    text = await response.text()
                    if text and "|" in text:
                        parts = text.strip().split('|')
                        if len(parts) >= 8:
                            htno = parts[1].strip().upper()
                            
                            # --- CRITICAL: THE BULLETPROOF LOCK ---
                            async with writer_lock:
                                if htno not in seen_tickets:
                                    data = [
                                        parts[1], # HT
                                        parts[2], # Name
                                        parts[3], parts[4], parts[5], parts[6], # Subjects
                                        parts[7], # Total
                                        parts[8] if len(parts)>8 else "QUALIFIED", # Status
                                        parts[9] if len(parts)>9 else "" # Rank
                                    ]
                                    await csv_writer.writerow(data)
                                    seen_tickets.add(htno)
                                    return True
                
                # If we get here, it's either a miss or a duplicate skip
                # Only log as checked if it was a MISS (no text or no |)
                # If it's a duplicate, it's already in seen_tickets
                return False
        except:
            return False

async def main():
    load_purified_state()
    initial_count = 79916 # Our verified baseline
    
    # Generate new work list
    print("Generating ticket workload...")
    target_tickets = []
    for d in DISTRICTS:
        for l in LETTERS:
            for s in range(SERIAL_START, SERIAL_END + 1):
                t = f"25{d}{l}{s:05d}"
                if t.upper() not in seen_tickets:
                    target_tickets.append(t)
    
    total_work = len(target_tickets)
    print(f"Workload: {total_work:,} new tickets. Goal: {TARGET_TOTAL} total unique.")
    
    if total_work == 0:
        print("All tickets already processed!")
        return

    sem = asyncio.Semaphore(CONCURRENCY)
    start_time = time.perf_counter()
    
    async with aiohttp.ClientSession() as session:
        # Open in Append mode safely
        async with aiofiles.open(OUTPUT_FILE, mode='a', encoding='utf-8', newline='') as af, \
                   aiofiles.open(CHECKED_LOG, mode='a', encoding='utf-8') as lf:
            
            writer = aiocsv.AsyncWriter(af)
            
            tasks = []
            checked_count = 0
            new_hits = 0
            
            for ticket in target_tickets:
                tasks.append(fetch_result(session, ticket, sem, writer, lf))
                checked_count += 1
                
                if len(tasks) >= BATCH_SIZE:
                    results = await asyncio.gather(*tasks)
                    batch_hits = sum(1 for r in results if r)
                    new_hits += batch_hits
                    tasks = []
                    
                    current_total = initial_count + new_hits
                    elapsed = time.perf_counter() - start_time
                    rate = checked_count / elapsed if elapsed > 0 else 0
                    
                    print(f"[{time.strftime('%H:%M:%S')}] Checked: {checked_count:,} | New Hits: {new_hits:,} | Total Unique: {current_total:,} | Speed: {rate:.1f} t/s")
                    
                    # Flush to disk regularly
                    await af.flush()
                    
                    if current_total >= TARGET_TOTAL:
                        print(f"\nSUCCESS! Target of {TARGET_TOTAL} unique records reached.")
                        # Force flush and exit
                        await af.flush()
                        return

            # Handle remaining tasks
            if tasks:
                results = await asyncio.gather(*tasks)
                new_hits += sum(1 for r in results if r)

    print(f"Finished. Final Unique Count: {initial_count + new_hits}")

if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("\nProcess interrupted by user. State saved.")
        sys.exit(0)
