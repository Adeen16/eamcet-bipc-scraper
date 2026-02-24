from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
import time

def check_mega_serial():
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)
    
    url = "https://www.results.manabadi.co.in/2025/TS/EAMCET/AM/Telangana-eamcet-Agriculture-Results-2025-May-10052025.htm"
    driver.get(url)
    time.sleep(5)
    
    dist = "01"
    letter = "A"
    
    # Sweep every 500 tickets to find a hit
    for start in range(1, 40000, 500):
        print(f"Testing Dist {dist}{letter} range {start}-{start+10}...")
        for s in range(start, start + 10):
            h = f"25{dist}{letter}{s:05d}"
            driver.execute_script("document.getElementById('htno').value = arguments[0]; doSubmit('resultsfrm');", h)
            
            for _ in range(5):
                time.sleep(0.3)
                name = driver.execute_script("return document.getElementById('sid1').innerText.trim();")
                if name:
                    print(f"  !!! FOUND HIT AT {h}: {name}")
                    driver.quit()
                    return
                msg = driver.execute_script("return document.getElementById('sMsg').innerText.trim();")
                if msg and msg != " " and len(msg) > 2:
                    break
    print("No hits found in Dist 01A up to serial 40000.")
    driver.quit()

if __name__ == "__main__":
    check_mega_serial()
