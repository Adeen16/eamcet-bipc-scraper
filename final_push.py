import asyncio
import aiohttp
import aiocsv
import aiofiles
import os
import time
from typing import Set

# --- Configuration ---
BASE_URL = "https://www.results.manabadi.co.in/2025/TS/EAMCET/AM/TSEAMCETMResults2025.aspx"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Referer": "https://www.results.manabadi.co.in/2025/TS/EAMCET/AM/Telangana-eamcet-Agriculture-Results-2025-May-10052025.htm"
}
OUTPUT_FILE = "final_results.csv"
CHECKED_LOG = "checked_tickets_final.log"
CONCURRENCY = 600
BATCH_SIZE = 1000
TARGET_TOTAL = 120000

# High-Yield Patterns (Exhausting S, B, C, D, E)
METRO_DISTS = ["13", "12", "11", "10", "14", "25", "20", "01", "07", "08"]
ALL_DISTS = [f"{i:02d}" for i in range(1, 40)]
DISTRICTS = list(dict.fromkeys(METRO_DISTS + ALL_DISTS))

LETTERS = list("SABCDEFGHJKLMNPQRSTUVWXYZ")
SERIAL_START = 1
SERIAL_END = 45000
seen_tickets: Set[str] = set()

def load_state():
    if os.path.exists(OUTPUT_FILE):
        with open(OUTPUT_FILE, 'r', encoding='utf-8') as f:
            next(f, None)
            for line in f:
                parts = line.split(',')
                if parts: seen_tickets.add(parts[0].strip().upper())
    
    if os.path.exists(CHECKED_LOG):
        with open(CHECKED_LOG, 'r', encoding='utf-8') as f:
            for line in f:
                seen_tickets.add(line.strip().upper())
    print(f"Loaded {len(seen_tickets):,} unique unique processed tickets.")

async def fetch_result(session: aiohttp.ClientSession, ticket: str, semaphore: asyncio.Semaphore, csv_writer, log_file):
    async with semaphore:
        # Check Degree=a primarily as probe found it worked for S
        url = f"{BASE_URL}?htno={ticket}&Degree=a"
        try:
            async with session.get(url, headers=HEADERS, timeout=8) as response:
                if response.status == 200:
                    text = await response.text()
                    if text and "|" in text:
                        parts = text.strip().split('|')
                        if len(parts) >= 8:
                            data = [
                                parts[1], parts[2], parts[3], parts[4], 
                                parts[5], parts[6], parts[7], 
                                parts[8] if len(parts)>8 else "QUALIFIED",
                                parts[9] if len(parts)>9 else ""
                            ]
                            # CRITICAL: Double check against seen set before writing
                            if parts[1].strip().upper() not in seen_tickets:
                                await csv_writer.writerow(data)
                                seen_tickets.add(parts[1].strip().upper())
                                return True
                
                await log_file.write(f"{ticket}\n")
                return False
        except:
            return False

async def main():
    load_state()
    initial_count = len([t for t in seen_tickets if len(t) > 5]) # Approximate student count
    
    # We need ~40k more
    target_tickets = []
    for d in DISTRICTS:
        for l in LETTERS:
            # Check serials up to 35,000 for each prefix
            for s in range(1, 35001):
                t = f"25{d}{l}{s:05d}"
                if t.upper() not in seen_tickets:
                    target_tickets.append(t)
    
    print(f"Starting FINAL PUSH for {len(target_tickets):,} tickets. Target: {TARGET_TOTAL} unique.")
    
    sem = asyncio.Semaphore(CONCURRENCY)
    start_time = time.perf_counter()
    
    async with aiohttp.ClientSession() as session:
        async with aiofiles.open(OUTPUT_FILE, mode='a', encoding='utf-8', newline='') as af, \
                   aiofiles.open(CHECKED_LOG, mode='a', encoding='utf-8') as lf:
            
            writer = aiocsv.AsyncWriter(af)
            
            tasks = []
            count = 0
            hits = 0
            
            for ticket in target_tickets:
                tasks.append(fetch_result(session, ticket, sem, writer, lf))
                count += 1
                
                if len(tasks) >= BATCH_SIZE:
                    results = await asyncio.gather(*tasks)
                    hits += sum(1 for r in results if r)
                    tasks = []
                    
                    current_unique = 79541 + hits
                    elapsed = time.perf_counter() - start_time
                    rate = count / elapsed
                    print(f"[{time.strftime('%H:%M:%S')}] Checked: {count:,} | New Hits: {hits:,} | Total Unique: {current_unique:,} | Rate: {rate:.1f} t/s")
                    
                    if current_unique >= TARGET_TOTAL:
                        print("TARGET ACHIEVED!")
                        break
                    
                    await af.flush()
                    await lf.flush()
            
            if tasks and (79541 + hits) < TARGET_TOTAL:
                results = await asyncio.gather(*tasks)
                hits += sum(1 for r in results if r)

    print(f"TERMINATED. Final New Hits: {hits}. Final Unique count: {79541 + hits}")

if __name__ == "__main__":
    asyncio.run(main())
