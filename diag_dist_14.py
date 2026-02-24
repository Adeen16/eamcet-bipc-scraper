from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
import time

def check_dist_14():
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)
    
    url = "https://www.results.manabadi.co.in/2025/TS/EAMCET/AM/Telangana-eamcet-Agriculture-Results-2025-May-10052025.htm"
    driver.get(url)
    time.sleep(5)
    
    # Check a few tickets in 14A
    found_any = False
    for i in range(1000, 1100):
        h = f"2514A{i:05d}"
        driver.execute_script("document.getElementById('htno').value = arguments[0]; doSubmit('resultsfrm');", h)
        
        # Fast poll
        found = False
        for _ in range(10):
            time.sleep(0.3)
            name = driver.execute_script("return document.getElementById('sid1').innerText.trim();")
            if name:
                print(f"FOUND {h}: {name}")
                found_any = True
                found = True
                break
            msg = driver.execute_script("return document.getElementById('sMsg').innerText.trim();")
            if msg and msg != " " and len(msg) > 2:
                break
        
        if not found:
            # print(f"Empty: {h}")
            pass
            
    if not found_any:
        print("District 14 (A, 1000-1100) is EMPTY.")
    
    driver.quit()

if __name__ == "__main__":
    check_dist_14()
