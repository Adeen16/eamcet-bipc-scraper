"""
TS EAMCET BiPC Results Scraper — Entry Point

Modes:
  --validate   Test with a known hall ticket to confirm extraction works
  --scrape     Full scrape of all generated hall tickets
"""

import argparse
import logging
import sys
import time

import config
from csv_writer import CSVWriter
from scraper import scrape_batch, scrape_single
from ticket_generator import count_tickets, generate_tickets

# ─── Logging Setup ─────────────────────────────────────────────────────

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)-7s | %(message)s",
    datefmt="%H:%M:%S",
    handlers=[
        logging.StreamHandler(sys.stdout),
        logging.FileHandler("scraper.log", encoding="utf-8"),
    ],
)
logger = logging.getLogger(__name__)


# ─── Year Config Helper ───────────────────────────────────────────────

def get_year_config(year: str) -> dict:
    """Get config for the specified year."""
    if year not in config.RESULTS_PAGES:
        print(f"ERROR: Year '{year}' not supported. Available: {list(config.RESULTS_PAGES.keys())}")
        sys.exit(1)
    return config.RESULTS_PAGES[year]


# ─── Validation Mode ──────────────────────────────────────────────────

def run_validation(year: str, ticket: str = None) -> None:
    """Test scraping a single known-valid hall ticket."""
    year_cfg = get_year_config(year)
    if ticket is None:
        ticket = year_cfg["validation_ticket"]

    base_url = year_cfg["base_url"]

    print("\n" + "=" * 60)
    print("  VALIDATION MODE")
    print(f"  Year            : {year}")
    print(f"  Hall ticket     : {ticket}")
    print(f"  Results page    : {base_url[:60]}...")
    print("=" * 60)

    logger.info(f"Validating with ticket: {ticket} (year={year})")
    result = scrape_single(ticket, base_url)

    if result:
        print("\n  Result found!\n")
        for key, value in result.items():
            print(f"  {key:>15s} : {value}")
        print()

        # Also write to CSV to test the writer
        writer = CSVWriter(filepath="validation_result.csv")
        writer.write_row(result)
        logger.info("Validation result saved to validation_result.csv")
    else:
        print(f"\n  No result found for ticket {ticket}.")
        print("  Possible reasons:")
        print(f"    - The {year} results may no longer be available on Manabadi")
        print("    - The page may have changed structure")
        print("    - The hall ticket may be invalid")
        if year == "2024":
            print(f"\n  TIP: Try with --year 2025 (2025 results are confirmed working)")
            print(f"       python main.py --validate --year 2025")
        logger.warning(f"Validation failed for ticket: {ticket}")


# ─── Full Scrape Mode ─────────────────────────────────────────────────

def run_scrape(args: argparse.Namespace) -> None:
    """Scrape all generated hall tickets and save to CSV."""
    year_cfg = get_year_config(args.year)
    base_url = year_cfg["base_url"]
    year_prefix = year_cfg["year_prefix"]

    # Parse district filter
    districts = None
    if args.district:
        districts = [d.strip() for d in args.district.split(",")]
        logger.info(f"Filtering to districts: {districts}")

    # Parse letter filter
    letters = None
    if args.letter:
        letters = [l.strip().upper() for l in args.letter.split(",")]
        logger.info(f"Filtering to letters: {letters}")

    total = count_tickets(
        districts=districts,
        letters=letters,
        serial_start=args.serial_start,
        serial_end=args.serial_end,
    )

    output_csv = args.output or f"ts_eamcet_{args.year}_bipc_results.csv"

    print("\n" + "=" * 60)
    print("  FULL SCRAPE MODE")
    print(f"  Year                 : {args.year}")
    print(f"  Total tickets to try : {total:,}")
    print(f"  Workers              : {args.workers}")
    print(f"  Output               : {output_csv}")
    print(f"  Serial range         : {args.serial_start:05d} - {args.serial_end:05d}")
    if districts:
        print(f"  Districts            : {', '.join(districts)}")
    if letters:
        print(f"  Letters              : {', '.join(letters)}")
    print("=" * 60 + "\n")

    # Generate all tickets
    logger.info("Generating hall ticket numbers...")
    tickets = list(generate_tickets(
        year_prefix=year_prefix,
        districts=districts,
        letters=letters,
        serial_start=args.serial_start,
        serial_end=args.serial_end,
    ))

    # CSV writer with resume support
    writer = CSVWriter(filepath=output_csv)
    if args.resume:
        writer.load_existing()
        already = writer.total_written
        if already > 0:
            logger.info(f"Resuming: {already} results already collected")
            seen = writer._seen
            tickets = [t for t in tickets if t not in seen]
            logger.info(f"Remaining tickets after resume filter: {len(tickets):,}")

    if not tickets:
        print("No tickets to process (all already scraped or empty range).")
        return

    # Scrape
    start_time = time.time()
    stats = scrape_batch(
        tickets=tickets,
        on_result=writer.write_row,
        base_url=base_url,
        max_workers=args.workers,
    )
    elapsed = time.time() - start_time

    # Summary
    print("\n" + "=" * 60)
    print("  SCRAPE COMPLETE")
    print(f"  Duration        : {elapsed:.1f}s ({elapsed / 60:.1f} min)")
    print(f"  Tickets tried   : {stats['processed']:,}")
    print(f"  Valid results   : {stats['valid']:,}")
    print(f"  Invalid tickets : {stats['invalid']:,}")
    print(f"  Errors          : {stats['errors']:,}")
    print(f"  Total in CSV    : {writer.total_written:,}")
    print(f"  Output file     : {output_csv}")
    print("=" * 60 + "\n")


# ─── CLI ───────────────────────────────────────────────────────────────

def main() -> None:
    parser = argparse.ArgumentParser(
        description="TS EAMCET BiPC Results Scraper",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  Validate (2025):  python main.py --validate --year 2025
  Validate (2024):  python main.py --validate --year 2024
  Full scrape:      python main.py --scrape --year 2025 --workers 4
  Targeted:         python main.py --scrape --year 2025 --district 11 --letter A --serial-start 1 --serial-end 5000
  Resume:           python main.py --scrape --year 2025 --resume
        """,
    )

    mode = parser.add_mutually_exclusive_group(required=True)
    mode.add_argument("--validate", action="store_true",
                       help="Test with known valid ticket to confirm extraction")
    mode.add_argument("--scrape", action="store_true",
                       help="Full scrape mode: generate and scrape all hall tickets")

    parser.add_argument("--year", type=str, default=config.DEFAULT_YEAR,
                         help=f"Results year: 2024 or 2025 (default: {config.DEFAULT_YEAR})")
    parser.add_argument("--ticket", type=str, default=None,
                         help="Custom hall ticket for validation mode")
    parser.add_argument("--workers", type=int, default=config.MAX_WORKERS,
                         help=f"Number of concurrent browser workers (default: {config.MAX_WORKERS})")
    parser.add_argument("--district", type=str, default=None,
                         help="Comma-separated district codes (e.g. '11,12,13')")
    parser.add_argument("--letter", type=str, default=None,
                         help="Comma-separated letters (e.g. 'A,B,C')")
    parser.add_argument("--serial-start", type=int, default=config.SERIAL_START,
                         help=f"Start of serial range (default: {config.SERIAL_START})")
    parser.add_argument("--serial-end", type=int, default=config.SERIAL_END,
                         help=f"End of serial range (default: {config.SERIAL_END})")
    parser.add_argument("--output", type=str, default=None,
                         help="Output CSV file path")
    parser.add_argument("--resume", action="store_true",
                         help="Resume from existing CSV (skip already-scraped tickets)")

    args = parser.parse_args()

    if args.validate:
        run_validation(args.year, args.ticket)
    elif args.scrape:
        run_scrape(args)


if __name__ == "__main__":
    main()
