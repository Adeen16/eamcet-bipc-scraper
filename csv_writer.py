"""
Thread-safe CSV writer for TS EAMCET 2024 BiPC results.

Handles deduplication, UTF-8 BOM encoding, and concurrent writes.
"""

import csv
import os
import threading
from typing import Dict, Set

import config


class CSVWriter:
    """Thread-safe CSV writer with built-in deduplication."""

    def __init__(self, filepath: str = config.OUTPUT_CSV):
        self.filepath = filepath
        self._lock = threading.Lock()
        self._seen: Set[str] = set()
        self._count = 0
        self._initialised = False

    def _init_file(self) -> None:
        """Create file with BOM and header row (called once)."""
        if self._initialised:
            return
        with open(self.filepath, "w", newline="", encoding="utf-8-sig") as f:
            writer = csv.DictWriter(f, fieldnames=config.CSV_COLUMNS)
            writer.writeheader()
        self._initialised = True

    def write_row(self, row: Dict[str, str]) -> bool:
        """
        Write a single result row to CSV.

        Args:
            row: Dict with keys matching config.CSV_COLUMNS.

        Returns:
            True if written, False if duplicate (skipped).
        """
        hall_ticket = row.get("Hall_Ticket", "")
        with self._lock:
            if not self._initialised:
                self._init_file()

            if hall_ticket in self._seen:
                return False

            self._seen.add(hall_ticket)
            with open(self.filepath, "a", newline="", encoding="utf-8-sig") as f:
                writer = csv.DictWriter(f, fieldnames=config.CSV_COLUMNS)
                writer.writerow(row)
            self._count += 1
            return True

    @property
    def total_written(self) -> int:
        """Number of unique rows written so far."""
        with self._lock:
            return self._count

    def load_existing(self) -> None:
        """
        If the CSV already exists, load seen hall tickets for resume support.
        """
        if not os.path.exists(self.filepath):
            return

        with open(self.filepath, "r", encoding="utf-8-sig") as f:
            reader = csv.DictReader(f)
            for row in reader:
                ht = row.get("Hall_Ticket", "")
                if ht:
                    self._seen.add(ht)
                    self._count += 1

        if self._count > 0:
            self._initialised = True  # file already has header
