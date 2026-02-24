import csv
import os

INPUT_FILE = "final_results.csv"
OUTPUT_FILE = "TS_EAMCET_2025_QUALIFIED_ONLY.csv"

def purify():
    if not os.path.exists(INPUT_FILE):
        print(f"Error: {INPUT_FILE} not found.")
        return

    seen_htnos = set()
    qualified_rows = []
    
    with open(INPUT_FILE, 'r', encoding='utf-8') as f:
        reader = csv.reader(f)
        header = next(reader, None)
        
        for row in reader:
            if not row: continue
            
            htno = row[0].strip().upper()
            status = row[7].strip().upper() if len(row) > 7 else ""
            
            # Change logic: Keep ONLY "QUALIFIED"
            if status == "QUALIFIED":
                if htno not in seen_htnos:
                    qualified_rows.append(row)
                    seen_htnos.add(htno)
    
    with open(OUTPUT_FILE, 'w', encoding='utf-8', newline='') as f:
        writer = csv.writer(f)
        if header:
            writer.writerow(header)
        writer.writerows(qualified_rows)
    
    print(f"--- Purification Complete ---")
    print(f"Original Records: {os.path.getsize(INPUT_FILE)}") # Rough check
    print(f"Final Qualified Unique Records: {len(qualified_rows)}")
    print(f"File Saved: {OUTPUT_FILE}")

if __name__ == "__main__":
    purify()
