import asyncio
import httpx
import pandas as pd
import os
import time

# Config
INPUT_FILE = "tg_2024_records.csv"
OUTPUT_FILE = "tg_mpc_2024_final.csv"
CONCURRENCY = 1500 # Pushing concurrency up for extreme speed
TIMEOUT = 10
URL_TEMPLATE = "https://www.results.manabadi.co.in/2024/TS/EAMCET/TSEAMCETResults2024.aspx?htno={}"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    "Referer": "https://www.results.manabadi.co.in/"
}

async def fetch_result(client, row, semaphore):
    htno = str(row['htno']).strip()
    name = str(row['name']).strip()
    rank = str(row['rank']).strip()
    
    async with semaphore:
        for attempt in range(3):
            try:
                url = URL_TEMPLATE.format(htno)
                resp = await client.get(url, timeout=TIMEOUT)
                
                if resp.status_code == 200:
                    data = resp.text.strip()
                    if "|" in data:
                        parts = data.split("|")
                        if len(parts) >= 9:
                            marks = parts[6]
                            return {
                                "Hall Ticket No": htno,
                                "Name": name,
                                "Rank": rank,
                                "EAMCET Marks": marks
                            }
                if resp.status_code == 404:
                    break
            except Exception:
                await asyncio.sleep(0.5)
        
    return {"Hall Ticket No": htno, "Name": name, "Rank": rank, "EAMCET Marks": "N/A"}

async def run_harvest():
    if not os.path.exists(INPUT_FILE):
        return

    df = pd.read_csv(INPUT_FILE)
    records = df.to_dict('records')
    print(f"[*] Starting harvest for {len(records)} students... YES, MARKS ARE INCLUDED.")
    
    # Check if output exists to resume
    processed_htnos = set()
    if os.path.exists(OUTPUT_FILE):
        existing_df = pd.read_csv(OUTPUT_FILE)
        if 'Hall Ticket No' in existing_df.columns:
            processed_htnos = set(existing_df['Hall Ticket No'].astype(str))
            print(f"[*] Found {len(processed_htnos)} already processed records. Resuming...")
    
    to_process = [r for r in records if str(r['htno']).strip() not in processed_htnos]
    print(f"[*] Remaining to process: {len(to_process)}")
    
    semaphore = asyncio.Semaphore(CONCURRENCY)
    tasks = []
    
    # Keep file handle open for appending
    file_exists = os.path.exists(OUTPUT_FILE)
    mode = 'a' if file_exists else 'w'
    header = not file_exists
    
    start_time = time.time()
    
    async with httpx.AsyncClient(headers=HEADERS, limits=httpx.Limits(max_connections=CONCURRENCY)) as client:
        for row in to_process:
            tasks.append(fetch_result(client, row, semaphore))
        
        batch_results = []
        for i, coro in enumerate(asyncio.as_completed(tasks)):
            res = await coro
            batch_results.append(res)
            
            if len(batch_results) >= 500:
                batch_df = pd.DataFrame(batch_results)
                batch_df.to_csv(OUTPUT_FILE, mode='a', header=header, index=False)
                header = False
                batch_results = []
            
            if (i + 1) % 1000 == 0:
                elapsed = time.time() - start_time
                rate = (i + 1) / elapsed
                print(f"[*] Processed {i+1}/{len(to_process)}... Rate: {rate:.2f} rec/s")
                
        # Save remaining
        if batch_results:
            batch_df = pd.DataFrame(batch_results)
            batch_df.to_csv(OUTPUT_FILE, mode='a', header=header, index=False)
        
        print(f"[+] Harvest complete! Saved to {OUTPUT_FILE}")

if __name__ == "__main__":
    asyncio.run(run_harvest())
