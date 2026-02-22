import os
import time

def count_lines(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8-sig') as f:
            return sum(1 for _ in f) - 1 # Exclude header
    except:
        return 0

print("Monitoring progress for Dist 11, 12, 13 (press Ctrl+C to stop)...")
print("-" * 75)
print(f"{'Time':<10} {'Dist 11 (Rows)':<15} {'Dist 12 (Rows)':<15} {'Dist 13 (Rows)':<15} {'Speed (Tot/min)':<15}")
print("-" * 75)

start_time = time.time()
files = {
    "11": "data_dist_11.csv",
    "12": "data_dist_12.csv",
    "13": "data_dist_13.csv",
}

last_total = 0

while True:
    try:
        counts = {k: max(0, count_lines(v)) for k, v in files.items()}
        total = sum(counts.values())
        
        elapsed = time.time() - start_time
        avg_speed = total / (elapsed/60) if elapsed > 0 else 0
        
        timestamp = time.strftime("%H:%M:%S")
        print(f"{timestamp:<10} {counts['11']:<15} {counts['12']:<15} {counts['13']:<15} {avg_speed:.1f}")
        
        time.sleep(10)
    except KeyboardInterrupt:
        break
