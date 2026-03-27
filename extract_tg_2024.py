import pandas as pd
import os

EXCEL_FILE = "EAPCET Complete Data.xlsx"
OUTPUT_FILE = "tg_2024_records.csv"

def extract():
    print(f"[*] Accessing {EXCEL_FILE}...")
    try:
        # Sheet index 4 is 2024 data
        df = pd.read_excel(EXCEL_FILE, sheet_name=4)
        
        # Clean columns to ensure matching works smoothly
        df.columns = [str(c).replace("'", "").replace('"', '').strip().lower() for c in df.columns]
        
        print(f"[*] Columns found: {df.columns.tolist()}")
        
        if 'roll_no' in df.columns and 'name' in df.columns and 'rank' in df.columns:
            df_final = df[['roll_no', 'name', 'rank']].copy()
            df_final.columns = ['htno', 'name', 'rank']
        else:
            print("[!] Could not find 'roll_no'. Let's find any column containing 'roll'")
            roll_col = [c for c in df.columns if 'roll' in c]
            name_col = [c for c in df.columns if 'name' in c]
            rank_col = [c for c in df.columns if 'rank' in c]
            
            if roll_col and name_col and rank_col:
                df_final = df[[roll_col[0], name_col[0], rank_col[0]]].copy()
                df_final.columns = ['htno', 'name', 'rank']
            else:
                 print("[!] Could not find columns even with fuzzy matching.")
                 return

        # Basic Cleanup: ensure HTNO is a string and handle NaNs
        df_final = df_final.dropna(subset=['htno'])
        df_final['htno'] = df_final['htno'].astype(str).str.strip()
        
        # Remove any stray header rows if they appear again
        df_final = df_final[df_final['htno'] != 'htno']
        
        # Save records
        df_final.to_csv(OUTPUT_FILE, index=False)
        print(f"[+] Successfully saved {len(df_final)} records to {OUTPUT_FILE}")
        
    except Exception as e:
        print(f"[!] Error: {e}")

if __name__ == "__main__":
    if os.path.exists(EXCEL_FILE):
        extract()
    else:
        print(f"[!] Error: {EXCEL_FILE} not found.")
