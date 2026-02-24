from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
import time

def check_dists():
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)
    
    url = "https://www.results.manabadi.co.in/2025/TS/EAMCET/AM/Telangana-eamcet-Agriculture-Results-2025-May-10052025.htm"
    driver.get(url)
    time.sleep(5)
    
    dists_to_test = ["10", "09", "15"]
    
    for d in dists_to_test:
        found_any = False
        print(f"Testing District {d} (A, 1000-1050)...")
        for i in range(1000, 1050):
            h = f"25{d}A{i:05d}"
            driver.execute_script("document.getElementById('htno').value = arguments[0]; doSubmit('resultsfrm');", h)
            
            # Fast poll
            for _ in range(8):
                time.sleep(0.3)
                name = driver.execute_script("return document.getElementById('sid1').innerText.trim();")
                if name:
                    print(f"  FOUND {h}: {name}")
                    found_any = True
                    break
                msg = driver.execute_script("return document.getElementById('sMsg').innerText.trim();")
                if msg and msg != " " and len(msg) > 2:
                    break
        if not found_any:
            print(f"  District {d} test range is EMPTY.")
    
    driver.quit()

if __name__ == "__main__":
    check_dists()
