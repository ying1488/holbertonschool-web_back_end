#!/usr/bin/env python3

"""module"""


import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random

def task_wait_random(max_delay: int = 10) -> asyncio.Task:
    """function that takes an integer max_delay"""
    result = asyncio.Task(wait_random(max_delay))
    return result