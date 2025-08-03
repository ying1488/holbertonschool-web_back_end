#!/usr/bin/env python3
"""
Complex types - mixed list
"""

from typing import List


def sum_mixed_list(mxd_lst: List[int]) -> float:
    """
    which takes a list of integers as argument and returns their sum as a float.


    Args:
        input_list: list


    Returns:
        The sum as a float
    """

    return float(sum(mxd_lst))
