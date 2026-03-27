import asyncio
import httpx
import re
import csv
import os
from bs4 import BeautifulSoup

# --- CONFIGURATION ---
URL = "https://results.eenadupratibha.net/ap-eapcet-results-2025/ap-eapcet-agriculture-pharmacy-results.aspx"
CSV_FILE = "ap_agri_2025.csv"
CONCURRENCY = 500
BATCH_SIZE = 2500

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
    "Referer": URL
}

SEMAPHORE = asyncio.Semaphore(CONCURRENCY)

async def get_tokens():
    print("[*] Re-initializing Nitro Engine (Interleaved Strategy)...")
    async with httpx.AsyncClient(headers=HEADERS, timeout=30, verify=False) as client:
        r = await client.get(URL)
        soup = BeautifulSoup(r.text, 'html.parser')
        tokens = {
            "__VIEWSTATE": soup.find('input', {'name': '__VIEWSTATE'})['value'],
            "__VIEWSTATEGENERATOR": soup.find('input', {'name': '__VIEWSTATEGENERATOR'})['value'],
            "__EVENTVALIDATION": soup.find('input', {'name': '__EVENTVALIDATION'})['value'],
        }
        print("[+] Hyper-Sprint Tokens Acquired.")
        return tokens

async def fetch_student(client, htno, tokens):
    async with SEMAPHORE:
        data = { **tokens, "txtHTNo": htno, "btnSubmit": "Submit" }
        try:
            r = await client.post(URL, data=data, timeout=15)
            if "lblName" in r.text:
                name_match = re.search(r'id="lblName">(.*?)</span>', r.text)
                rank_match = re.search(r'id="lblRank">(.*?)</span>', r.text)
                marks_match = re.search(r'id="lblTotal">(.*?)</span>', r.text)
                if name_match:
                    name = name_match.group(1).replace("&nbsp;", " ").strip()
                    rank = rank_match.group(1).strip() if rank_match else "0"
                    marks = marks_match.group(1).strip() if marks_match else "0"
                    if name: return [htno, name, marks, rank]
        except: pass
    return None

async def run_harvest(htnos):
    tokens = await get_tokens()
    processed = set()
    if os.path.exists(CSV_FILE):
        with open(CSV_FILE, 'r', encoding='utf-8') as f:
            reader = csv.reader(f)
            next(reader, None)
            for row in reader:
                if row: processed.add(row[0])
    else:
        with open(CSV_FILE, 'w', newline='', encoding='utf-8') as f:
            csv.writer(f).writerow(["Hall Ticket", "Student Name", "Marks", "Rank"])

    remaining = [h for h in htnos if h not in processed]
    print(f"[*] Dedup Complete. Targets: {len(remaining)} (Skipped: {len(processed)})")

    async with httpx.AsyncClient(headers=HEADERS, timeout=25, limits=httpx.Limits(max_connections=CONCURRENCY), verify=False) as client:
        print(f"[*] Hyper-Sprint ACTIVE. Concurrency: {CONCURRENCY}")
        for i in range(0, len(remaining), BATCH_SIZE):
            batch = remaining[i:i+BATCH_SIZE]
            tasks = [fetch_student(client, h, tokens) for h in batch]
            results = await asyncio.gather(*tasks)
            valid_rows = [r for r in results if r]
            if valid_rows:
                with open(CSV_FILE, 'a', newline='', encoding='utf-8') as f:
                    csv.writer(f).writerows(valid_rows)
            print(f"[*] Checked: {i + len(batch)} / {len(remaining)} | Yield: {len(valid_rows)}")

def generate_htnos():
    districts = [f"{i:02d}" for i in range(1, 27)]
    subcodes = ["94", "75"]
    regions = ["01", "02"]
    htnos = []
    # INTERLEAVE FOR MAXIMUM DENSITY DISCOVERY
    for serial in range(1, 4001):
        for dist in districts:
            for sub in subcodes:
                for rgn in regions:
                    htnos.append(f"95{dist}{sub}{rgn}{serial:04d}")
    return htnos

if __name__ == "__main__":
    ht_list = generate_htnos()
    asyncio.run(run_harvest(ht_list))
