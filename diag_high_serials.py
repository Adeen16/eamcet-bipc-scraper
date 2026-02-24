from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
import time

def check_high_serials():
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)
    
    url = "https://www.results.manabadi.co.in/2025/TS/EAMCET/AM/Telangana-eamcet-Agriculture-Results-2025-May-10052025.htm"
    driver.get(url)
    time.sleep(5)
    
    dists = ["11", "12", "13"]
    letters = ["A", "B", "C"]
    
    for d in dists:
        for l in letters:
            print(f"Testing Dist {d}{l} (15000-15100)...")
            found_any = False
            for i in range(15000, 15100):
                h = f"25{d}{l}{i:05d}"
                driver.execute_script("document.getElementById('htno').value = arguments[0]; doSubmit('resultsfrm');", h)
                
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
                if found_any: break 
            if not found_any:
                print(f"  Dist {d}{l} high serials seem EMPTY.")
    
    driver.quit()

if __name__ == "__main__":
    check_high_serials()
