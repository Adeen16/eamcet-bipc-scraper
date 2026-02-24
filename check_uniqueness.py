import csv
import os
from collections import Counter

file_path = "final_results.csv"

if not os.path.exists(file_path):
    print(f"Error: {file_path} not found.")
    exit(1)

print(f"Scanning {file_path} (Safe Mode)...")
try:
    with open(file_path, mode='r', encoding='utf-8', newline='') as f:
        reader = csv.DictReader(f)
        total_count = 0
        ht_counts = Counter()
        
        for row in reader:
            total_count += 1
            ht = row.get('Hall_Ticket') or row.get('Hallticket No')
            if ht:
                ht_counts[ht] += 1
        
        unique_count = len(ht_counts)
        duplicate_count = total_count - unique_count
        
        print(f"--- Data Integrity Report ---")
        print(f"Total Records: {total_count:,}")
        print(f"Unique Student Entries: {unique_count:,}")
        print(f"Duplicate Entries: {duplicate_count:,}")
        
        if duplicate_count > 0:
            print("\nDuplicate Breakdown (Top 5):")
            most_common = [x for x in ht_counts.most_common(5) if x[1] > 1]
            for ht, count in most_common:
                print(f"  HT: {ht} - Repeated {count} times")
                
            # Offer to create cleaned file
            print("\nAction Required: You have duplicates. I can remove them for you.")
        else:
            print("\n✅ Verification Passed: Every student record is unique.")

except Exception as e:
    print(f"Error: {e}")
