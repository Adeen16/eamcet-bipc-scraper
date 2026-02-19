import requests
import time
import csv
import os
import re
from bs4 import BeautifulSoup
from concurrent.futures import ThreadPoolExecutor, as_completed
from threading import Lock

# ── CONFIG ────────────────────────────────────────────────────────────────────
BASE_URL        = "https://www.results.manabadi.co.in/2024/TS/EAMCET/AM/TSEAMCETResults2024AM.aspx"
GRP_CODE        = "MED"
ALL_FILE        = "all_students_bipc.csv"
QUALIFIED_FILE  = "qualified_ranked_bipc.csv"
CHECKPOINT_FILE = "checkpoint_bipc.txt"

MAX_WORKERS     = 20
SAVE_EVERY      = 500

# ── SAMPLE MODE ───────────────────────────────────────────────────────────────
SAMPLE_MODE     = True
SAMPLE_SIZE     = 500

# ── HALL TICKET FORMAT (CONFIRMED from real ticket: 2411A01183) ───────────────
#
# Format: YY(2) + DISTRICT(2) + LETTER(1) + SERIAL(5) = 10 characters
#
# YY       = 24  (year 2024)
# DISTRICT = 11  (2-digit district code, range 01-33 for Telangana)
# LETTER   = A   (stream letter — confirmed 'A' for BiPC)
# SERIAL   = 01183 (5-digit serial, zero-padded)
#
# Stream letters for BiPC:
#  A = Agriculture/BiPC (CONFIRMED from sample ticket 2411A01183)
#  M = Medical (some centers use M instead of A)
#  B = BiPC general (used in some districts)
#  P = Pharmacy

YEAR            = '24'
DISTRICT_CODES  = [str(d).zfill(2) for d in range(1, 34)]   # 01 to 33
LETTERS         = ['A', 'M', 'B', 'P']                       # BiPC stream letters
SERIAL_START    = 1
SERIAL_END      = 5000    # conservative upper bound per district+letter

# Known real ticket to always test in sample mode
KNOWN_TICKET    = "2411A01183"

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

# ── HELPERS ───────────────────────────────────────────────────────────────────
def safe_float(val):
    try:
        return float(str(val).strip())
    except (ValueError, TypeError):
        return None

# ── PARSERS ───────────────────────────────────────────────────────────────────
def parse_pipe_response(raw, htno):
    """Parse pipe-separated plain text response."""
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
    """Parse full HTML result page using BeautifulSoup."""
    if SAMPLE_MODE:
        snippet = html[:300].replace('\n', ' ').replace('\r', '')
        print(f"  [RAW-HTML] {htno}: {snippet}")

    soup = BeautifulSoup(html, 'html.parser')
    page_text = soup.get_text(' ', strip=True).lower()

    if re.search(r'invalid|no record|not found|no data|hall ticket.*wrong', page_text):
        return None

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
    }

    mapped = {'Hall Ticket No': htno}
    for raw_key, val in kv.items():
        target = FIELD_MAP.get(raw_key)
        if target and target not in mapped:
            mapped[target] = val

    if 'rank' not in mapped:
        m = re.search(r'rank[:\s]+(\d+)', page_text)
        if m:
            mapped['rank'] = m.group(1)
    if 'total_score' not in mapped:
        m = re.search(r'total\s*(?:marks|score)[:\s]+([\d.]+)', page_text)
        if m:
            mapped['total_score'] = m.group(1)

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
            raw = resp.text.strip()

            if '|' in raw and '<html' not in raw.lower():
                record = parse_pipe_response(raw, htno)
            else:
                record = parse_html_response(raw, htno)

            return htno, record

        except requests.RequestException:
            if attempt < 2:
                time.sleep(1.5 * (attempt + 1))
    return htno, None

# ── BUILD TICKET LIST ─────────────────────────────────────────────────────────
def build_ticket_list():
    """
    CONFIRMED format: YY(2) + DISTRICT(2) + LETTER(1) + SERIAL(5) = 10 chars
    Example: 2411A01183
    """
    tickets = []
    for district in DISTRICT_CODES:
        for letter in LETTERS:
            for serial in range(SERIAL_START, SERIAL_END + 1):
                tickets.append(f"{YEAR}{district}{letter}{serial:05d}")
    return tickets

# ── MAIN ──────────────────────────────────────────────────────────────────────
def run_scraper():
    print("=" * 65)
    print("  TS EAMCET 2024 - BiPC Stream Scraper")
    print(f"  Group: {GRP_CODE}  |  Base URL: {BASE_URL}")
    print(f"  Ticket format: YY + DISTRICT(01-33) + LETTER(A/M/B/P) + SERIAL(5)")
    print(f"  Example real ticket: {KNOWN_TICKET}")
    print("=" * 65)

    all_tickets = build_ticket_list()
    total_full  = len(all_tickets)

    if SAMPLE_MODE:
        step = max(1, total_full // SAMPLE_SIZE)
        tickets_to_run = all_tickets[::step][:SAMPLE_SIZE - 1]
        # Always test the known real ticket first
        tickets_to_run = [KNOWN_TICKET] + tickets_to_run
        print(f"\n[SAMPLE MODE] Testing {len(tickets_to_run):,} tickets")
        print(f"              First ticket is KNOWN REAL: {KNOWN_TICKET}")
        print(f"              from full keyspace of {total_full:,}")
        print(f"              Raw responses printed below.\n")
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

    if buffer:
        flush_to_csv(ALL_FILE, buffer)
        print(f"  [FINAL FLUSH] {len(buffer)} records written")

    wall_time = time.time() - start_wall

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
            print(f"  ⚠️  Check the [RAW-PIPE]/[RAW-HTML] line for {KNOWN_TICKET} above.")
            print(f"  ⚠️  That is a REAL ticket — if it returned empty, the URL params are wrong.")

    if SAMPLE_MODE:
        print(f"\n{'='*65}")
        print(f"  SAMPLE COMPLETE")
        print(f"  → Saw real data for {KNOWN_TICKET}: ✅  set SAMPLE_MODE=False and run full")
        print(f"  → {KNOWN_TICKET} returned empty:    ❌  share the [RAW] log lines here")
        if wall_time > 0 and processed > 0:
            full_eta = total_full / (processed / wall_time) / 3600
            print(f"  Estimated full scrape time: {full_eta:.1f} hrs for {total_full:,} tickets")
        print(f"{'='*65}")

if __name__ == "__main__":
    run_scraper()
