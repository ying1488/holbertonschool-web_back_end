#!/usr/bin/env python3
"""module"""
from typing import List
import asyncio
import time
wait_n = __import__('1-concurrent_coroutines.py').wait_n


def measure_time(n: int, max_delay: int = 10) -> float:
    """fuction measures the total executuion time """
    start: float = time.time()
    asyncio.run(wait_n(n, max_delay))
    end: float = time.time()
    total_time: float = end - start
    return total_time / n