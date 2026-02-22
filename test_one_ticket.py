"""
Single ticket test - run this to verify the scraper setup is working.
"""
import time, sys
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from webdriver_manager.chrome import ChromeDriverManager

print("Creating Chrome driver...")
opts = Options()
opts.add_argument("--no-sandbox")
opts.add_argument("--disable-dev-shm-usage")
opts.add_argument("--disable-gpu")
opts.add_argument("--window-size=700,500")
opts.add_argument("--log-level=3")
opts.add_experimental_option("excludeSwitches", ["enable-logging"])
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service, options=opts)
driver.set_page_load_timeout(30)
print("Driver created OK")

URL = "https://www.results.manabadi.co.in/2025/TS/EAMCET/AM/Telangana-eamcet-Agriculture-Results-2025-May-10052025.htm"
print("Navigating to page...")
driver.get(URL)
time.sleep(4)
print("Page URL:", driver.current_url[:80])
print("Page title:", driver.title[:60])

try:
    inp = driver.find_element(By.ID, "htno")
    print("Found htno input OK")
    inp.send_keys("2511A01183")
    
    driver.execute_script("document.getElementById('Degree').value = 'a';")
    print("Set degree OK")
    
    driver.execute_script("doSubmit('resultsfrm');")
    print("Submitted form, waiting 10s for result...")
    time.sleep(10)
    
    name = driver.find_element(By.ID, "sid1").text.strip()
    rank = driver.find_element(By.ID, "sid8").text.strip()
    print("Name:", repr(name))
    print("Rank:", repr(rank))
    
    if name:
        print("SUCCESS - Scraping works!")
    else:
        print("WARNING - No result returned (name is empty)")
        # Check if error message appeared
        try:
            msg = driver.find_element(By.ID, "sMsg").text.strip()
            print("Error message on page:", repr(msg))
        except Exception:
            pass

except Exception as e:
    print("ERROR:", type(e).__name__, str(e)[:200])
    print("Current URL:", driver.current_url[:80])

input("Press Enter to close the browser...")
driver.quit()
print("Done")
