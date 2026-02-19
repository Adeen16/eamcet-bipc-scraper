"""
Hall Ticket Generator for TS EAMCET BiPC stream.

Format: YY + DD (district 2-digit) + L (letter) + SSSSS (serial 5-digit)
Example: 2411A01183  (year=2024, district=11, letter=A, serial=01183)
"""

from typing import Generator, List, Optional

import config


def generate_tickets(
    year_prefix: str = config.RESULTS_PAGES[config.DEFAULT_YEAR]["year_prefix"],
    districts: Optional[List[str]] = None,
    letters: Optional[List[str]] = None,
    serial_start: int = config.SERIAL_START,
    serial_end: int = config.SERIAL_END,
) -> Generator[str, None, None]:
    """
    Lazily generate all valid hall ticket numbers.

    Args:
        year_prefix:  Two-digit year prefix (e.g. '24' or '25').
        districts:    List of 2-digit district codes. Defaults to all (01-33).
        letters:      List of single letters. Defaults to A-Z.
        serial_start: First serial number (inclusive).
        serial_end:   Last serial number (inclusive).

    Yields:
        Hall ticket strings like '2411A01183'.
    """
    if districts is None:
        districts = config.DISTRICT_CODES
    if letters is None:
        letters = config.HALL_TICKET_LETTERS

    for district in districts:
        for letter in letters:
            for serial in range(serial_start, serial_end + 1):
                yield f"{year_prefix}{district}{letter}{serial:05d}"


def count_tickets(
    districts: Optional[List[str]] = None,
    letters: Optional[List[str]] = None,
    serial_start: int = config.SERIAL_START,
    serial_end: int = config.SERIAL_END,
) -> int:
    """Calculate total ticket count without generating them."""
    d = len(districts) if districts else len(config.DISTRICT_CODES)
    l = len(letters) if letters else len(config.HALL_TICKET_LETTERS)
    s = serial_end - serial_start + 1
    return d * l * s


if __name__ == "__main__":
    # Quick demo
    tickets = list(generate_tickets(
        year_prefix="24",
        districts=["11"],
        letters=["A"],
        serial_start=1180,
        serial_end=1185,
    ))
    print(f"Sample tickets: {tickets}")
    print(f"Total possible (all): {count_tickets():,}")
