# TS EAMCET 2024 BiPC Results Scraper

A concurrent web scraper that collects student results from the Telangana EAMCET 2024 **Agriculture & Medical (BiPC)** results portal on manabadi.co.in.

It collects: Hall Ticket No, Name, Subject-wise Marks (Botany/Zoology/Physics/Chemistry), Total Score, Qualification Status, and Rank.  
It outputs two CSV files and prints a summary with the Top 10 ranked students when complete.

---

## ⚠️ IMPORTANT: Run in Sample Mode First

Before doing the full scrape, **always run in Sample Mode** (`SAMPLE_MODE = True`) to confirm:
1. The BASE_URL is hitting the right endpoint
2. The pipe-separated response is being parsed correctly
3. Real student data is appearing in the logs

If the `[RAW]` lines in sample mode show real names and scores → you're good.  
If they're all empty or "invalid" → the URL or group code needs adjusting (see below).

---

## What This Does

- Scrapes student results using confirmed 2024 BiPC hall ticket patterns
- Subjects covered: Botany, Zoology, Physics, Chemistry
- Outputs:
  - `all_students_bipc.csv` — every student found
  - `qualified_ranked_bipc.csv` — only QUALIFIED students, sorted by rank (Rank 1 at top)
- Supports resuming from checkpoints if interrupted

---

## Hall Ticket Pattern

```
Format: YY + CC + Letter + NNNNN
Example: 2421M01001

YY     = 24 (year 2024)
CC     = Two-digit center/district code (21–26)
Letter = Stream letter (M = Medical, B = BiPC, P = Pharmacy, A = Agriculture)
NNNNN = Sequential number (5 digits, zero-padded)
```

> **Note:** These are estimated ranges. BiPC enrollment is much smaller than Engineering
> (~50,000–80,000 total students). Run diagnostics in sample mode to confirm your
> specific district's letter codes and ranges before a full scrape.

---

## Configuration (open `scraper_bipc.py` to change)

| Variable | Default | Description |
|---|---|---|
| `GRP_CODE` | `"MED"` | Set to `"MED"` for Medical/Pharmacy or `"AGR"` for Agriculture |
| `SAMPLE_MODE` | `True` | Set to `False` for full scrape |
| `SAMPLE_SIZE` | `1000` | Tickets to test in sample mode |
| `MAX_WORKERS` | `40` | Concurrent threads — don't go above 60 for this portal |
| `SAVE_EVERY` | `500` | Save to CSV every N students found |

---

## How to Run Locally

```bash
# Install dependency
pip install requests

# Test on a small sample first (SAMPLE_MODE = True by default)
python scraper_bipc.py

# Check the [RAW] lines in output to verify data is being parsed correctly
# Then open scraper_bipc.py, set SAMPLE_MODE = False, and run again
python scraper_bipc.py
```

---

## How to Run on GitHub Actions (Recommended)

This is the best option — GitHub's servers run the scraper for free without keeping your PC on.

### Step 1: Create a private GitHub repository

1. Go to [github.com](https://github.com) and sign in
2. Click `+` → `New repository`
3. Name it something like `eamcet-bipc-scraper`
4. Set it to **Private**
5. Click **Create repository**

### Step 2: Push your files to GitHub

Make sure your repo has this structure:

```
your-repo/
├── scraper_bipc.py
├── requirements.txt
└── .github/
    └── workflows/
        └── scrape_bipc.yml     ← this file MUST be in this exact path
```

Run these commands in your terminal:

```bash
cd your-project-folder

git init
git add .
git commit -m "Initial commit - TS EAMCET BiPC scraper"

# Replace YOUR_USERNAME and YOUR_REPO_NAME below:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 3: Enable write permissions for GitHub Actions

1. In your GitHub repo, go to **Settings**
2. Click **Actions** → **General** in the left sidebar
3. Scroll down to **Workflow permissions**
4. Select **Read and write permissions**
5. Click **Save**

### Step 4: Run the scraper

1. Go to your GitHub repo
2. Click the **Actions** tab at the top
3. Click **TS EAMCET 2024 BiPC Scraper** in the left sidebar
4. Click **Run workflow** → **Run workflow**

The scraper will start on GitHub's servers. You can close your browser or turn off your PC.

### Step 5: Download your results

When the workflow finishes (estimated 2–5 hours):
- Go to your repo's main page
- Download `all_students_bipc.csv` and `qualified_ranked_bipc.csv`

---

## Output Files

### `all_students_bipc.csv`
Every student record found during the scrape.

| Column | Description |
|---|---|
| Hall Ticket No | Student's hall ticket number |
| Name | Student's full name |
| Botany | Botany marks |
| Zoology | Zoology marks |
| Physics | Physics marks |
| Chemistry | Chemistry marks |
| Total Score | Total EAMCET score |
| Status | QUALIFIED or NOT QUALIFIED |
| Rank | Rank number (blank if not qualified) |

### `qualified_ranked_bipc.csv`
Only QUALIFIED students, sorted by Rank ascending (Rank 1 at top).

---

## Troubleshooting

**Problem:** Sample mode shows no students found / all `[RAW]` lines are empty  
**Fix:** The `BASE_URL` or `GRP_CODE` may need adjustment. The manabadi portal's ASPX endpoint path sometimes changes between years. Try changing `GRP_CODE` from `"MED"` to `"AGR"` or vice versa.

**Problem:** Parse errors — names/marks appearing in wrong fields  
**Fix:** Open `scraper_bipc.py` and look at the `[RAW]` output in sample mode. Count the pipe (`|`) positions manually and update the index numbers in `parse_response()`.

**Problem:** GitHub Actions workflow not appearing in the Actions tab  
**Fix:** Make sure the file is saved at exactly `.github/workflows/scrape_bipc.yml` (not `.yml` in the repo root).

**Problem:** GitHub Actions push fails with permission error  
**Fix:** Go to Settings → Actions → General → Workflow permissions → enable "Read and write permissions"

---

## Scaling to Other Exams / States

To adapt this scraper for AP EAMCET BiPC or other exams:

1. Find the result portal URL for the target exam
2. Update `BASE_URL`, `YEAR`, `TWO_DIGIT_CODES`, `LETTER_RANGES`, and `GRP_CODE`
3. Run in sample mode, inspect `[RAW]` output, adjust field indices in `parse_response()`
4. Full scrape once validated

---

## Project Structure

```
your-repo/
├── scraper_bipc.py           ← Main scraper script
├── requirements.txt          ← Python dependencies (just: requests)
├── README_BIPC.md            ← This file
├── .github/
│   └── workflows/
│       └── scrape_bipc.yml   ← GitHub Actions workflow
├── all_students_bipc.csv     ← Output: all students (created on run)
├── qualified_ranked_bipc.csv ← Output: qualified only, sorted by rank (created on run)
└── checkpoint_bipc.txt       ← Resume file (created on run, delete to restart)
```
