#!/usr/bin/env python3
"""module"""
from typing import List
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int = 10) -> List[float]:

    """ function """
    task_list = []
    for _ in range(n):
        task = asyncio.create_task(wait_random(max_delay))
        task_list.append(task)

    sorted_list = []
    for task in asyncio.as_completed(task_list):
        result = await task
        sorted_list.append(result)

    return sorted_list
