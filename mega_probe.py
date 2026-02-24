from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
import time
import concurrent.futures

def check_ticket(driver, ticket):
    driver.execute_script("document.getElementById('htno').value = arguments[0]; doSubmit('resultsfrm');", ticket)
    for _ in range(8):
        time.sleep(0.3)
        name = driver.execute_script("return document.getElementById('sid1').innerText.trim();")
        if name:
            return name
        msg = driver.execute_script("return document.getElementById('sMsg').innerText.trim();")
        if msg and msg != " " and len(msg) > 2:
            return None
    return None

def survey():
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)
    
    url = "https://www.results.manabadi.co.in/2025/TS/EAMCET/AM/Telangana-eamcet-Agriculture-Results-2025-May-10052025.htm"
    driver.get(url)
    time.sleep(5)
    
    dists = [f"{i:02d}" for i in range(1, 34)]
    letters = list("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    
    results = []
    print("Starting Mega-Probe Survey...")
    for d in dists:
        if d in ["11", "12", "13"]: continue # Already done
        found_in_dist = False
        for l in letters:
            # Check just the first 3 tickets
            for s in range(1001, 1004):
                t = f"25{d}{l}{s:05d}"
                name = check_ticket(driver, t)
                if name:
                    print(f"  [!] HIT: {t} -> {name}")
                    results.append(t)
                    found_in_dist = True
                    break
            if found_in_dist: break
        if not found_in_dist:
             # print(f"  Dist {d} seems empty in A-Z/1001-1003")
             pass
             
    print(f"Survey complete. Found {len(results)} populated District-Letter blocks.")
    driver.quit()

if __name__ == "__main__":
    survey()
