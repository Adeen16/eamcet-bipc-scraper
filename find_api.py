"""
Find the actual API endpoint used by Manabadi's doSubmit() function.
"""
import requests
import re
import sys

BASE_URL = "https://www.results.manabadi.co.in/2025/TS/EAMCET/AM/Telangana-eamcet-Agriculture-Results-2025-May-10052025.htm"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Referer": BASE_URL,
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
}

print("Step 1: Fetching page to find JS files...")
try:
    r = requests.get(BASE_URL, headers=HEADERS, timeout=15)
    print(f"Status: {r.status_code}, Length: {len(r.text)}")
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)

# Find script tags
scripts = re.findall(r'<script[^>]+src=["\']([^"\']+)["\']', r.text)
print(f"Found {len(scripts)} external scripts:")
for s in scripts:
    print(f"  {s}")

# Find any .aspx references
aspx = re.findall(r'[\w/\-\.]+\.aspx[^"\'<\s]{0,100}', r.text)
print(f"\nASPX references: {aspx[:5]}")

# Look for inline JS with load/get/post/ajax
inline_js = re.findall(r'(?:function doSubmit|\.load\s*\(|\.get\s*\(|\.post\s*\(|\.ajax\s*\(|fetch\s*\()[^;]{0,300}', r.text)
print(f"\nInline AJAX/load calls:")
for js in inline_js[:5]:
    print(f"  {js[:200]}")

# Try fetching the manabadi-results-css.css (might be a JS file)
mb_scripts = [s for s in scripts if 'manabadi' in s.lower() or 'results' in s.lower()]
print(f"\nManabadi-specific scripts: {mb_scripts}")

for script_url in mb_scripts[:3]:
    if not script_url.startswith('http'):
        script_url = 'https://www.results.manabadi.co.in' + script_url
    try:
        sr = requests.get(script_url, headers=HEADERS, timeout=10)
        print(f"\nScript {script_url}: {sr.status_code}, {len(sr.text)} chars")
        # Look for doSubmit or AJAX in the JS
        ajax_calls = re.findall(r'(?:doSubmit|\.load\s*\(|\.ajax\s*\(|\.get\s*\()[^;]{0,200}', sr.text)
        for ac in ajax_calls[:3]:
            print(f"  AJAX: {ac[:150]}")
    except Exception as e:
        print(f"  Error fetching {script_url}: {e}")
