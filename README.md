# TS EAMCET BiPC Results Scraper

Scrapes TS EAMCET BiPC (Biology, Physics, Chemistry) student results from the [Manabadi results portal](https://www.manabadi.co.in/entrance-exams/ts-eamcet-results-telangana-eamcet-results.asp) and saves them to a clean CSV file.

> **Note**: The 2024 results have been taken offline by Manabadi (URLs redirect to homepage). The scraper is verified working with 2025 results. Use `--year 2025` for live data, or `--year 2024` when those results become available again.

## Output CSV Columns

| Column | Description |
| --- | --- |
| `Hall_Ticket` | e.g. `2511A01183` |
| `Name` | Student name |
| `Botany` | Botany marks |
| `Zoology` | Zoology marks |
| `Physics` | Physics marks |
| `Chemistry` | Chemistry marks |
| `EAMCET_Marks` | Total EAMCET marks |
| `Result` | Pass/Fail status |
| `Rank` | Overall rank |

## Prerequisites

- **Python 3.8+**
- **Google Chrome** installed on your system
  - `chromedriver` is managed automatically by `webdriver-manager`

## Setup

```bash
git clone https://github.com/Adeen16/eamcet-bipc-scraper.git
cd eamcet-bipc-scraper
pip install -r requirements.txt
```

## Usage

### 1. Validation Mode (Test First!)

```bash
# Test with 2025 (confirmed working)
python main.py --validate --year 2025

# Test with 2024 (may show "no result" if offline)
python main.py --validate --year 2024

# Custom ticket
python main.py --validate --year 2025 --ticket 2511A01183
```

### 2. Full Scrape Mode

```bash
python main.py --scrape --year 2025 --workers 4
```

### 3. Targeted Scrape (Recommended)

```bash
# Single district, single letter, limited serial range
python main.py --scrape --year 2025 --district 11 --letter A --serial-start 1 --serial-end 5000

# Multiple districts
python main.py --scrape --year 2025 --district 11,12,13 --workers 4

# Resume an interrupted scrape
python main.py --scrape --year 2025 --resume
```

### CLI Options

| Flag | Default | Description |
| --- | --- | --- |
| `--validate` | — | Run validation mode |
| `--scrape` | — | Run full scrape mode |
| `--year` | `2024` | Results year: `2024` or `2025` |
| `--ticket` | auto | Hall ticket for validation |
| `--workers` | `4` | Concurrent browser instances |
| `--district` | all (01-33) | Comma-separated district codes |
| `--letter` | A-Z | Comma-separated letters |
| `--serial-start` | `1` | Serial range start |
| `--serial-end` | `99999` | Serial range end |
| `--output` | auto | Output CSV file path |
| `--resume` | off | Skip already-scraped tickets |

## Project Structure

```
eamcet-bipc-scraper/
├── main.py               # CLI entry point (validate / scrape)
├── config.py             # All constants and configuration
├── ticket_generator.py   # Hall ticket number generator
├── scraper.py            # Selenium-based scraping engine
├── parser.py             # BeautifulSoup HTML parser
├── csv_writer.py         # Thread-safe CSV output
├── requirements.txt      # Python dependencies
└── README.md             # This file
```

## How It Works

1. **Hall Ticket Generation** — Generates tickets in format `YYDDL#####`
2. **Selenium Form Submission** — Opens headless Chrome, navigates to the results page, fills in the hall ticket, and calls `doSubmit()` via JavaScript
3. **JS Execution** — Waits for the page's JavaScript to populate result data in `<span>` elements (`sid0`–`sid8`)
4. **HTML Parsing** — BeautifulSoup extracts data from the rendered spans
5. **CSV Output** — Thread-safe writer with deduplication saves valid results

## Configuration

Edit `config.py` to adjust:

- `MAX_WORKERS` — concurrent browser instances (default: 4)
- `REQUEST_DELAY` — delay between requests per worker (default: 0.5s)
- `JS_RENDER_WAIT` — time to wait for JavaScript execution (default: 3s)
- `MAX_RETRIES` — retry attempts per ticket (default: 3)
- `LOG_INTERVAL` — progress logging frequency (default: every 500)

## Error Handling

- **Timeouts** — Automatic retry with exponential backoff
- **Connection errors** — Driver recreation on serious failures
- **Invalid tickets** — Silently skipped (empty name = invalid)
- **Page redirects** — Detected and logged (e.g. 2024 results offline)
- **Resume support** — `--resume` flag picks up where you left off
