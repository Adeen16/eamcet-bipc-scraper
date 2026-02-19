"""
HTML Parser for TS EAMCET 2024 BiPC results.

Extracts student data from the JS-rendered Manabadi result page
by reading span elements with known IDs (sid0–sid8).
"""

from typing import Dict, Optional

from bs4 import BeautifulSoup

import config


def parse_result(page_source: str) -> Optional[Dict[str, str]]:
    """
    Parse a rendered result page and extract student data.

    Args:
        page_source: Full HTML source after JavaScript execution.

    Returns:
        Dict with keys matching config.CSV_COLUMNS if valid result found,
        or None if the ticket is invalid / no data present.
    """
    soup = BeautifulSoup(page_source, "lxml")

    # Extract all fields from their span IDs
    data = {}
    for field_name, span_id in config.FIELD_IDS.items():
        span = soup.find("span", id=span_id)
        data[field_name] = span.get_text(strip=True) if span else ""

    # A valid result must have a non-empty name
    if not data.get("name"):
        return None

    # Map to CSV column names
    result = {
        "Hall_Ticket":  data["hall_ticket"],
        "Name":         data["name"],
        "Botany":       data["botany"],
        "Zoology":      data["zoology"],
        "Physics":      data["physics"],
        "Chemistry":    data["chemistry"],
        "EAMCET_Marks": data["eamcet_marks"],
        "Result":       data["result"],
        "Rank":         data["rank"],
    }

    return result


def is_valid_result(page_source: str) -> bool:
    """Quick check: does this page contain a valid student result?"""
    soup = BeautifulSoup(page_source, "lxml")
    name_span = soup.find("span", id=config.FIELD_IDS["name"])
    return bool(name_span and name_span.get_text(strip=True))
