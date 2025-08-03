#!/usr/bin/env python3
"""
Complex types - functions

"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    function that returns a fuction that multiplies a float by multiplier


    Args:
        make_multiplier: floats


    Returns:
        fuction that multiplies a float by multiplier
    """

    def second_multiplier(value: float) -> float:
        return multiplier * value
    return second_multiplier
