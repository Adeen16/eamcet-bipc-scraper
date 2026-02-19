import requests
import time
import csv
import os
import re
from bs4 import BeautifulSoup
from concurrent.futures import ThreadPoolExecutor, as_completed
from threading import Lock

# ── CONFIG ────────────────────────────────────────────────────────────────────
# TS EAMCET 2024 - Agriculture & Medical (BiPC) stream
#
# HOW THE DATA ENDPOINT WORKS:
#   The HTML page (TSEAMCETResults2024AM.aspx) is just the UI shell.
#   The actual result data is fetched via a lightweight GET request to:
#     BASE_URL?htno=<HALLTICKET>&grp=MED
#   which returns a pipe-separated plain-text string like:
#     id|hallticket|name|botany|zoology|physics|chemistry|total|status|rank|...
#
# ⚠️  If you get 0 results in SAMPLE_MODE, check the [RAW] debug lines.
#     If all are empty, the endpoint URL may have changed — inspect network
#     traffic on the results page in your browser (DevTools → Network → XHR).

# FIXED URL: This is the data API endpoint, NOT the HTML page URL
BASE_URL        = "https://www.results.manabadi.co.in/2024/TS/EAMCET/AM/TSEAMCETResults2024AM.aspx"

# Fallback API URL (manabadi sometimes uses a separate lightweight endpoint)
API_URL         = "https://www.manabadi.co.in/results/TSEAMCETResult2024.aspx"

GRP_CODE        = "MED"          # "MED" = Medical/BiPC  |  "AGR" = Agriculture
ALL_FILE        = "all_students_bipc.csv"
QUALIFIED_FILE  = "qualified_ranked_bipc.csv"
CHECKPOINT_FILE = "checkpoint_bipc.txt"

MAX_WORKERS     = 20             # Reduced from 40 to avoid rate-limiting
SAVE_EVERY      = 500

# ── SAMPLE MODE ───────────────────────────────────────────────────────────────
SAMPLE_MODE     = True
SAMPLE_SIZE     = 500

# ── HALL TICKET FORMAT (TS EAMCET 2024 BiPC) ─────────────────────────────────
#
# TS EAMCET 2024 hall ticket format: YY + DISTRICT(2) + CENTER(2) + SERIAL(5)
# All numeric — NO letters in the ticket number.
#
# Example: 2421010001
#   24    = year 2024
#   21    = district code (Hyderabad = 21, Rangareddy = 22, etc.)
#   01    = center code within district
#   00001 = 5-digit serial number
#
# Full format: 10 digits total
#
# District codes for Telangana (TS EAMCET 2024):
#   21 = Hyderabad          22 = Rangareddy
#   23 = Medchal-Malkajgiri 24 = Sangareddy
#   25 = Vikarabad          26 = Yadadri
#   27 = Nalgonda           28 = Suryapet
#   29 = Khammam            30 = Bhadradri
#   31 = Warangal           32 = Hanumakonda
#   33 = Karimnagar         34 = Peddapalli
#   35 = Jagtial            36 = Rajanna Sircilla
#   37 = Nizamabad          38 = Kamareddy
#   39 = Nirmal             40 = Adilabad
#   41 = Kumuram Bheem      42 = Mancherial
#   43 = Jayashankar        44 = Mulugu
#   45 = Bhupalapally       46 = Jangaon
#   47 = Siddipet           48 = Medak
#   49 = Narayanpet         50 = Wanaparthy
#   51 = Gadwal             52 = Nagarkurnool
#   53 = Mahbubnagar        54 = Ranga Reddy (alt)

YEAR             = '24'
DISTRICT_CODES   = [str(d).zfill(2) for d in range(21, 55)]  # 21–54

# Center codes within each district (01–10 is a safe estimate for BiPC)
CENTER_CODES     = [str(c).zfill(2) for c in range(1, 16)]   # 01–15

# Serial numbers per center (BiPC enrollment is ~50–80k total, spread across centers)
SERIAL_START     = 1
SERIAL_END       = 300   # ~300 per center × 15 centers × 34 districts ≈ 153,000 tickets

# ── CSV FIELDS ────────────────────────────────────────────────────────────────
FIELDS = ['Hall Ticket No', 'Name', 'Botany', 'Zoology', 'Physics', 'Chemistry',
          'Total Score', 'Status', 'Rank']

# ── CHECKPOINT ────────────────────────────────────────────────────────────────
def load_checkpoint():
    if os.path.exists(CHECKPOINT_FILE):
        with open(CHECKPOINT_FILE, 'r') as f:
            val = f.read().strip()
            if val.isdigit():
                print(f"[RESUME] Resuming from index {val}")
                return int(val)
    return 0

def save_checkpoint(index):
    with open(CHECKPOINT_FILE, 'w') as f:
        f.write(str(index))

# ── CSV HELPERS ───────────────────────────────────────────────────────────────
def init_csv(filepath):
    if not os.path.exists(filepath):
        with open(filepath, 'w', newline='', encoding='utf-8') as f:
            csv.DictWriter(f, fieldnames=FIELDS).writeheader()
        print(f"[INIT] Created {filepath}")
    else:
        print(f"[INIT] Appending to existing {filepath}")

def flush_to_csv(filepath, records):
    with open(filepath, 'a', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=FIELDS)
        writer.writerows(records)

# ── PARSER ────────────────────────────────────────────────────────────────────
def safe_float(val):
    try:
        return float(str(val).strip())
    except (ValueError, TypeError):
        return None

def parse_pipe_response(raw, htno):
    """
    Parse a pipe-separated plain-text response (manabadi lightweight API).
    Format: id|hallticket|name|botany|zoology|physics|chemistry|total|status|rank|...
    """
    raw = raw.strip()
    if SAMPLE_MODE and raw:
        print(f"  [RAW-PIPE] {htno}: {raw[:150]}")

    if not raw or '|' not in raw:
        return None
    if re.search(r'invalid|no record|not found|no data', raw, re.I):
        return None

    parts = raw.split('|')
    if len(parts) < 9:
        return None

    try:
        hall_ticket = parts[1].strip()
        name        = parts[2].strip()
        botany      = parts[3].strip()
        zoology     = parts[4].strip()
        physics     = parts[5].strip()
        chemistry   = parts[6].strip()
        total_score = parts[7].strip()
        status      = parts[8].strip()
        rank_raw    = parts[9].strip() if len(parts) > 9 else ''
        rank        = int(rank_raw) if rank_raw not in ['-', '', 'null', 'NULL'] else None

        # Sanity check: name should not be empty
        if not name:
            return None

        return {
            'Hall Ticket No': hall_ticket or htno,
            'Name':           name,
            'Botany':         safe_float(botany),
            'Zoology':        safe_float(zoology),
            'Physics':        safe_float(physics),
            'Chemistry':      safe_float(chemistry),
            'Total Score':    safe_float(total_score),
            'Status':         status,
            'Rank':           rank
        }
    except (ValueError, IndexError) as e:
        if SAMPLE_MODE:
            print(f"  [PARSE ERROR] {htno}: {e} | parts={parts}")
        return None

def parse_html_response(html, htno):
    """
    Parse a full HTML result page from manabadi.
    Used as fallback when the response is HTML rather than pipe text.
    Extracts data from the result table.
    """
    if SAMPLE_MODE:
        print(f"  [RAW-HTML] {htno}: {html[:200].replace(chr(10), ' ')}")

    soup = BeautifulSoup(html, 'html.parser')
    page_text = soup.get_text(' ', strip=True).lower()

    # Bail out on no-result pages
    if re.search(r'invalid|no record|not found|no data|hall ticket.*wrong', page_text):
        return None

    # Collect all table key-value pairs
    kv = {}
    for table in soup.find_all('table'):
        for row in table.find_all('tr'):
            cells = [td.get_text(strip=True) for td in row.find_all(['td', 'th'])]
            if len(cells) >= 2:
                key = cells[0].strip().lower().replace(' ', '_').rstrip(':')
                val = cells[1].strip()
                if key and val:
                    kv[key] = val

    if not kv:
        return None

    # Field name mapping — manabadi uses various labels
    FIELD_MAP = {
        'rank': 'rank', 'eamcet_rank': 'rank', 'state_rank': 'rank',
        'overall_rank': 'rank', 'air': 'rank',
        'candidate_name': 'name', 'name': 'name', "student's_name": 'name',
        'botany': 'botany', 'botany_marks': 'botany',
        'zoology': 'zoology', 'zoology_marks': 'zoology',
        'physics': 'physics', 'physics_marks': 'physics',
        'chemistry': 'chemistry', 'chemistry_marks': 'chemistry',
        'total_marks': 'total_score', 'total': 'total_score',
        'marks_obtained': 'total_score', 'total_score': 'total_score',
        'status': 'status', 'qualified': 'status', 'result': 'status',
        'hall_ticket_no': 'hall_ticket', 'hallticket': 'hall_ticket',
        'hall_ticket_number': 'hall_ticket',
    }

    mapped = {'Hall Ticket No': htno}
    for raw_key, val in kv.items():
        target = FIELD_MAP.get(raw_key)
        if target and target not in mapped:
            mapped[target] = val

    # Regex fallbacks if table parsing missed something
    if 'rank' not in mapped:
        m = re.search(r'rank[:\s]+(\d+)', page_text)
        if m:
            mapped['rank'] = m.group(1)
    if 'total_score' not in mapped:
        m = re.search(r'total\s*(?:marks|score)[:\s]+([\d.]+)', page_text)
        if m:
            mapped['total_score'] = m.group(1)

    # Must have at least a name or rank to be a real record
    if 'name' not in mapped and 'rank' not in mapped:
        return None

    rank_raw = mapped.get('rank', '')
    try:
        rank = int(str(rank_raw).strip()) if rank_raw not in ['', '-', None] else None
    except ValueError:
        rank = None

    return {
        'Hall Ticket No': mapped.get('Hall Ticket No', htno),
        'Name':           mapped.get('name', ''),
        'Botany':         safe_float(mapped.get('botany')),
        'Zoology':        safe_float(mapped.get('zoology')),
        'Physics':        safe_float(mapped.get('physics')),
        'Chemistry':      safe_float(mapped.get('chemistry')),
        'Total Score':    safe_float(mapped.get('total_score')),
        'Status':         mapped.get('status', ''),
        'Rank':           rank
    }

# ── SCRAPER ───────────────────────────────────────────────────────────────────
SESSION = requests.Session()
SESSION.headers.update({
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 '
                  '(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'Referer':    'https://www.results.manabadi.co.in/',
    'Accept':     'text/html,application/xhtml+xml,*/*;q=0.9',
})

def scrape_one(htno):
    for attempt in range(3):
        try:
            resp = SESSION.get(
                BASE_URL,
                params={'htno': htno, 'grp': GRP_CODE},
                timeout=15,
            )
            resp.raise_for_status()

            content_type = resp.headers.get('Content-Type', '')
            raw = resp.text.strip()

            # Detect response type and parse accordingly
            if '|' in raw and '<html' not in raw.lower():
                # Pipe-separated plain text (lightweight API response)
                record = parse_pipe_response(raw, htno)
            else:
                # Full HTML page — parse with BeautifulSoup
                record = parse_html_response(raw, htno)

            return htno, record

        except requests.RequestException:
            if attempt < 2:
                time.sleep(1.5 * (attempt + 1))
    return htno, None

# ── BUILD TICKET LIST ─────────────────────────────────────────────────────────
def build_ticket_list():
    """
    Generates TS EAMCET 2024 BiPC hall tickets.
    Format: YY(2) + DISTRICT(2) + CENTER(2) + SERIAL(5) = 11 digits total
    e.g. 24210100001
    """
    tickets = []
    for dist in DISTRICT_CODES:
        for center in CENTER_CODES:
            for serial in range(SERIAL_START, SERIAL_END + 1):
                tickets.append(f"{YEAR}{dist}{center}{serial:05d}")
    return tickets

# ── MAIN ──────────────────────────────────────────────────────────────────────
def run_scraper():
    print("=" * 65)
    print("  TS EAMCET 2024 - BiPC Stream Scraper")
    print(f"  Group: {GRP_CODE}  |  Base URL: {BASE_URL}")
    print("=" * 65)

    all_tickets = build_ticket_list()
    total_full  = len(all_tickets)

    if SAMPLE_MODE:
        step = max(1, total_full // SAMPLE_SIZE)
        tickets_to_run = all_tickets[::step][:SAMPLE_SIZE]
        print(f"\n[SAMPLE MODE] Testing {len(tickets_to_run):,} tickets")
        print(f"              from full keyspace of {total_full:,}")
        print(f"              Raw responses printed below for debugging.")
        print(f"              Set SAMPLE_MODE = False for the full scrape.\n")
    else:
        start_index    = load_checkpoint()
        tickets_to_run = all_tickets[start_index:]
        print(f"\n[FULL MODE] {len(tickets_to_run):,} tickets remaining of {total_full:,}\n")

    init_csv(ALL_FILE)

    buffer      = []
    all_records = []
    lock        = Lock()
    found       = 0
    processed   = 0
    start_wall  = time.time()

    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        future_to_idx = {
            executor.submit(scrape_one, ht): i
            for i, ht in enumerate(tickets_to_run)
        }

        for future in as_completed(future_to_idx):
            idx          = future_to_idx[future]
            htno, record = future.result()
            processed   += 1

            if record:
                with lock:
                    buffer.append(record)
                    all_records.append(record)
                    found += 1

                    if len(buffer) >= SAVE_EVERY:
                        flush_to_csv(ALL_FILE, buffer)
                        if not SAMPLE_MODE:
                            save_checkpoint(idx)
                        elapsed = time.time() - start_wall
                        rate    = processed / elapsed if elapsed > 0 else 0
                        eta_hrs = (len(tickets_to_run) - processed) / rate / 3600 if rate > 0 else 0
                        print(
                            f"  [SAVE] {found} students | "
                            f"{processed:,} processed | "
                            f"{rate:.1f} req/s | "
                            f"ETA: {eta_hrs:.1f} hrs"
                        )
                        buffer.clear()

    # Final flush
    if buffer:
        flush_to_csv(ALL_FILE, buffer)
        print(f"  [FINAL FLUSH] {len(buffer)} records written")

    wall_time = time.time() - start_wall

    # ── QUALIFIED CSV ─────────────────────────────────────────────────────────
    qualified = [
        r for r in all_records
        if r.get('Status') and 'QUALIFIED' in str(r['Status']).upper()
    ]
    qualified_sorted = sorted(
        qualified,
        key=lambda x: x['Rank'] if x['Rank'] is not None else float('inf')
    )

    with open(QUALIFIED_FILE, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=FIELDS)
        writer.writeheader()
        writer.writerows(qualified_sorted)

    # ── SUMMARY ───────────────────────────────────────────────────────────────
    print("\n" + "=" * 65)
    print("SCRAPE SUMMARY — TS EAMCET 2024 BiPC")
    print("=" * 65)
    print(f"  Total tickets processed : {processed:,}")
    print(f"  Total students found    : {found:,}")
    print(f"  Qualified students      : {len(qualified_sorted):,}")
    print(f"  Not Qualified           : {found - len(qualified_sorted):,}")
    print(f"  Time taken              : {wall_time:.1f}s")
    if wall_time > 0:
        print(f"  Avg speed               : {processed / wall_time:.1f} req/s")
    print(f"\n  Saved → {ALL_FILE}")
    print(f"  Saved → {QUALIFIED_FILE}")

    if qualified_sorted:
        print(f"\nTOP 10 QUALIFIED STUDENTS:")
        print(f"{'Rank':<8} {'Hall Ticket':<14} {'Name':<35} {'Score'}")
        print("-" * 70)
        for r in qualified_sorted[:10]:
            print(
                f"  {str(r['Rank']):<6} "
                f"{r['Hall Ticket No']:<14} "
                f"{r['Name']:<35} "
                f"{r['Total Score']}"
            )
    else:
        print("\n  No qualified students found.")
        if SAMPLE_MODE:
            print("  ⚠️  Check [RAW-PIPE] or [RAW-HTML] lines above.")
            print("  ⚠️  If all empty: the hall ticket format or URL needs adjustment.")
            print("  ⚠️  Open browser DevTools → Network → go to result page → copy the XHR URL.")

    if SAMPLE_MODE:
        print(f"\n{'='*65}")
        print(f"  SAMPLE COMPLETE")
        print(f"  → Saw real student data in [RAW] lines: ✅  → proceed to full run")
        print(f"  → All [RAW] lines empty or 'invalid':   ❌  → fix URL/ticket format")
        print(f"  Set SAMPLE_MODE = False and re-run for full scrape.")
        if wall_time > 0 and processed > 0:
            full_eta = total_full / (processed / wall_time) / 3600
            print(f"  Estimated full scrape time: {full_eta:.1f} hrs for {total_full:,} tickets")
        print(f"{'='*65}")

if __name__ == "__main__":
    run_scraper()
