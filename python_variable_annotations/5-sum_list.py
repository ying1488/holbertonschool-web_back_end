#!/usr/bin/env python3
"""
Complex types - list of floats
"""

from typing import List

def sum_list(input_list: List[float]) -> float:
    """
    which takes a list of floats as argument and returns their sum as a float.


    Args:
        input_list: list


    Returns:
        The sum as a float
    """

    return float(sum(input_list))