#!/usr/bin/env python3
"""
Complex types - mixed list
"""

from typing import Union, List


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    function that returns sum as a float.


    Args:
        mxd_lst (list): Alist of integers and floats.


    Returns:
        float: convert sum of float.
    """

    return float(sum(mxd_lst))
