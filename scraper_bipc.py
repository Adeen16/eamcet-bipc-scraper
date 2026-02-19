import requests
import time
import csv
import os
import itertools
from concurrent.futures import ThreadPoolExecutor, as_completed
from threading import Lock

# ── CONFIG ────────────────────────────────────────────────────────────────────
# This scraper targets TS EAMCET 2024 - Agriculture & Medical (BiPC) stream
# Results portal: results.manabadi.co.in
#
# The portal accepts requests in the form:
#   GET BASE_URL?htno=<hall_ticket>&grp=MED
#
# NOTE: If you are scraping ONLY the agriculture stream (not medical),
#       change GRP_CODE below to 'AGR'. To scrape both, run the scraper
#       twice with each group code or set up two separate GitHub Actions.

BASE_URL        = "https://www.results.manabadi.co.in/2024/TS/EAMCET/AM/TSEAMCETResults2024AM.aspx"
GRP_CODE        = "MED"          # "MED" = Medical/Pharmacy BiPC  |  "AGR" = Agriculture BiPC
ALL_FILE        = "all_students_bipc.csv"
QUALIFIED_FILE  = "qualified_ranked_bipc.csv"
CHECKPOINT_FILE = "checkpoint_bipc.txt"

MAX_WORKERS     = 40             # Keep at 40 or below to avoid being blocked
SAVE_EVERY      = 500            # Save to CSV every N students found

# ── SAMPLE MODE ───────────────────────────────────────────────────────────────
# IMPORTANT: Keep SAMPLE_MODE = True on your first run to test the script.
# Once you verify it's pulling real data, set it to False for the full scrape.
SAMPLE_MODE     = True
SAMPLE_SIZE     = 1000

# ── HALL TICKET PATTERN (TS EAMCET 2024 BiPC) ────────────────────────────────
# Format:  YY  +  CC  +  Letter  +  NNNNN
# Example: 24      21      M        00001  →  2421M00001
#
# YY     = 24 (year 2024)
# CC     = Two-digit center/district code (21–26 for Telangana)
# Letter = Stream letter — BiPC students use 'M' (Medical) primarily,
#          some districts also used 'B' (BiPC general) and 'P' (Pharmacy)
# NNNNN  = 5-digit sequential number, zero-padded
#
# ⚠️  IMPORTANT — These ranges are ESTIMATES based on typical BiPC enrollment.
#     BiPC student count in Telangana is much smaller than Engineering
#     (~50,000–80,000 total vs ~3,00,000 for MPC).
#     Run in SAMPLE_MODE first, observe which tickets return real data,
#     then adjust the ranges before running the full scrape.
#
# Diagnostic tip: If a ticket returns empty/invalid, it simply means
# no student was registered with that number — this is normal.

YEAR = '24'
TWO_DIGIT_CODES = ['21', '22', '23', '24', '25', '26']

# Letter codes for BiPC stream:
#   M  = Medical (Botany, Zoology, Physics, Chemistry)
#   B  = BiPC general (same subjects as M in many centers)
#   P  = Pharmacy track
#   A  = Agriculture stream (used in some centers)
#
# Sequential ranges are conservative estimates — adjust after diagnostics.
LETTER_RANGES = {
    'M': (1001, 9999),   # Medical — most common, widest range
    'B': (1001, 9999),   # BiPC general — common in urban centers
    'P': (1001, 4999),   # Pharmacy — smaller pool
    'A': (1001, 4999),   # Agriculture — rural centers
}

# ── CSV FIELDS ────────────────────────────────────────────────────────────────
# BiPC subjects: Botany, Zoology, Physics, Chemistry (instead of Maths)
FIELDS = ['Hall Ticket No', 'Name', 'Botany', 'Zoology', 'Physics', 'Chemistry', 'Total Score', 'Status', 'Rank']

# ── FIELD MAPPING ─────────────────────────────────────────────────────────────
# Expected pipe-separated response format (based on manabadi's Engineering pattern):
# [0]: internal_id | [1]: hall_ticket | [2]: name
# [3]: botany      | [4]: zoology     | [5]: physics  | [6]: chemistry
# [7]: total_score | [8]: status      | [9]: rank     | [10]: branch/category
#
# ⚠️  The exact field positions may differ from Engineering.
#     Run sample mode first and check the raw output printed to logs.
#     Update parse_response() if the field positions are different.

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
def parse_response(data_str, htno):
    """
    Parses the pipe-separated response from manabadi for BiPC results.

    SAMPLE MODE will print the raw response so you can verify field positions.
    If the output looks wrong (e.g. name in rank field), adjust the indices below.
    """
    raw = data_str.strip()

    # Print raw response in sample mode for debugging
    if SAMPLE_MODE and raw and '|' in raw:
        print(f"  [RAW] {htno}: {raw[:120]}")

    if not raw or '|' not in raw:
        return None
    if raw.lower().startswith('invalid') or raw.lower().startswith('no record'):
        return None

    parts = raw.split('|')

    if len(parts) < 9:
        return None

    try:
        # ── Adjust these indices if sample mode shows wrong field mapping ──
        hall_ticket  = parts[1].strip()
        name         = parts[2].strip()
        botany       = parts[3].strip()
        zoology      = parts[4].strip()
        physics      = parts[5].strip()
        chemistry    = parts[6].strip()
        total_score  = parts[7].strip()
        status       = parts[8].strip()
        rank_raw     = parts[9].strip() if len(parts) > 9 else ''
        # ────────────────────────────────────────────────────────────────────

        rank = int(rank_raw) if rank_raw not in ['-', '', 'null', 'NULL'] else None

        def safe_float(val):
            try:
                return float(val)
            except (ValueError, TypeError):
                return None

        return {
            'Hall Ticket No': hall_ticket,
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

# ── SCRAPER ───────────────────────────────────────────────────────────────────
def scrape_one(htno):
    try:
        resp = requests.get(
            BASE_URL,
            params={'htno': htno, 'grp': GRP_CODE},
            timeout=12,
            headers={
                # Mimic a real browser to avoid being blocked
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                'Referer': 'https://www.results.manabadi.co.in/',
            }
        )
        resp.raise_for_status()
        record = parse_response(resp.text, htno)
        return htno, record
    except Exception:
        return htno, None

# ── BUILD TICKET LIST ─────────────────────────────────────────────────────────
def build_ticket_list():
    """
    Generates all hall ticket numbers for TS EAMCET 2024 BiPC stream.
    Total keyspace estimate: ~240,000 tickets across all CC codes and letters.
    Actual hit rate will be much lower — most numbers won't have a student.
    """
    tickets = []
    for cc, (letter, (seq_start, seq_end)) in itertools.product(
        TWO_DIGIT_CODES, LETTER_RANGES.items()
    ):
        for seq in range(seq_start, seq_end + 1):
            tickets.append(f"{YEAR}{cc}{letter}{seq:05d}")
    return tickets

# ── MAIN SCRAPER ──────────────────────────────────────────────────────────────
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
        print(f"              Raw responses will be printed below for debugging.")
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
                            f"  [SAVE] {found} students found | "
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

    # ── BUILD QUALIFIED CSV ───────────────────────────────────────────────────
    qualified = [
        r for r in all_records
        if r['Status'] and 'QUALIFIED' in r['Status'].upper()
    ]
    qualified_sorted = sorted(
        qualified,
        key=lambda x: x['Rank'] if x['Rank'] is not None else float('inf')
    )

    with open(QUALIFIED_FILE, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=FIELDS)
        writer.writeheader()
        writer.writerows(qualified_sorted)

    # ── PRINT SUMMARY ─────────────────────────────────────────────────────────
    print("\n" + "=" * 65)
    print("SCRAPE SUMMARY — TS EAMCET 2024 BiPC")
    print("=" * 65)
    print(f"  Total tickets processed : {processed:,}")
    print(f"  Total students found    : {found:,}")
    print(f"  Qualified students      : {len(qualified_sorted):,}")
    print(f"  Not Qualified           : {found - len(qualified_sorted):,}")
    print(f"  Time taken              : {wall_time:.1f}s")
    print(f"  Avg speed               : {processed / wall_time:.1f} req/s" if wall_time > 0 else "")
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
        print("\n  No qualified students found yet.")
        if SAMPLE_MODE:
            print("  ⚠️  This may mean the BASE_URL or GRP_CODE is wrong.")
            print("  ⚠️  Check the [RAW] lines above. If all empty, the endpoint needs adjustment.")

    if SAMPLE_MODE:
        print(f"\n{'='*65}")
        print(f"  SAMPLE COMPLETE")
        print(f"  → If you saw real student data in [RAW] lines above: ✅")
        print(f"  → If all [RAW] lines were empty or 'invalid': ❌ check BASE_URL/GRP_CODE")
        print(f"  Set SAMPLE_MODE = False in scraper_bipc.py and run again for full scrape.")
        if wall_time > 0 and processed > 0:
            full_eta = total_full / (processed / wall_time) / 3600
            print(f"  Estimated full scrape time: {full_eta:.1f} hours for {total_full:,} tickets")
        print(f"{'='*65}")

# ── ENTRY POINT ───────────────────────────────────────────────────────────────
if __name__ == "__main__":
    run_scraper()
