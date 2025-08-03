#!/usr/bin/env python3
"""
Floor
"""
import math

def concat(n: float) -> int:
    """
    Calculates the floor of a given float number


    Args:
    n: The float number for which to calculate the floor
    
    Returns:
    The floor of the input float as an integer

    """
    if not isinstance(n, float):
        raise TypeError("n must be a float")
    
    return math.floor(n)
