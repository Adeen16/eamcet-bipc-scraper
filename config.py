"""
Configuration constants for TS EAMCET BiPC Scraper.

Supports both 2024 and 2025 results. Note that 2024 results may no
longer be available on Manabadi (URLs redirect to homepage). The
scraper defaults to 2024 but will fall back to 2025 if needed.
"""

# ─── URL Configuration ────────────────────────────────────────────────
# The results page base URL. The scraper navigates here first, then
# fills in the hall ticket and submits the form via JavaScript.

RESULTS_PAGES = {
    "2024": {
        "base_url": (
            "https://www.results.manabadi.co.in/2024/TS/EAMCET/AM/"
            "Telangana-eamcet-Agriculture-Results-2024-May-10052024.htm"
        ),
        "year_prefix": "24",
        "validation_ticket": "2411A01183",
    },
    "2025": {
        "base_url": (
            "https://www.results.manabadi.co.in/2025/TS/EAMCET/AM/"
            "Telangana-eamcet-Agriculture-Results-2025-May-10052025.htm"
        ),
        "year_prefix": "25",
        "validation_ticket": "2511A01183",
    },
}

# Default year to scrape
DEFAULT_YEAR = "2024"

DEGREE_PARAM = "a"  # MED / BiPC stream

# ─── Result Field IDs (span elements in rendered HTML) ─────────────────
FIELD_IDS = {
    "hall_ticket": "sid0",
    "name":        "sid1",
    "botany":      "sid2",
    "zoology":     "sid3",
    "physics":     "sid4",
    "chemistry":   "sid5",
    "eamcet_marks":"sid6",
    "result":      "sid7",
    "rank":        "sid8",
}

# ─── Hall Ticket Format ───────────────────────────────────────────────
# Format: YY + DD (district) + L (letter) + SSSSS (serial)
# Example: 2411A01183

# Telangana district codes (01-33)
DISTRICT_CODES = [f"{d:02d}" for d in range(1, 34)]

# Letters used in hall ticket (typically A-Z but not all are used)
HALL_TICKET_LETTERS = list("ABCDEFGHIJKLMNOPQRSTUVWXYZ")

# Serial number range
SERIAL_START = 1
SERIAL_END = 99999

# ─── Scraping Configuration ───────────────────────────────────────────
MAX_WORKERS = 4                  # concurrent Selenium instances
REQUEST_DELAY = 0.5              # seconds between requests per worker
PAGE_LOAD_TIMEOUT = 30           # seconds to wait for page load
JS_RENDER_WAIT = 5               # seconds to wait for JS to populate spans

# ─── Retry Configuration ──────────────────────────────────────────────
MAX_RETRIES = 3
RETRY_BACKOFF_BASE = 2           # exponential backoff: base * 2^attempt

# ─── Output Configuration ─────────────────────────────────────────────
OUTPUT_CSV = "ts_eamcet_2024_bipc_results.csv"
CSV_COLUMNS = [
    "Hall_Ticket",
    "Name",
    "Botany",
    "Zoology",
    "Physics",
    "Chemistry",
    "EAMCET_Marks",
    "Result",
    "Rank",
]

# ─── Logging ───────────────────────────────────────────────────────────
LOG_INTERVAL = 500               # log progress every N tickets
