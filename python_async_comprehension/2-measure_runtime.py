#!/usr/bin/env python3
""" Module """

import asyncio
import time
async_comprehension =__import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Function
    """

    results = []
    start = time.time()
    for _ in range(4):
        result = async_comprehension()
        results.append(result)
    await asyncio.gather(*results)
    end = time.time()

    return end - start
