#!/usr/bin/env python3
"""
Module
"""


def add(a: float, b: float) -> float:
    """
    Add two floting-point numbers.


    Args:
    a(float): the first number.
    b(float): the second number.


    Returns:
    Floats: The sum of a and b.
    """
    if not isinstance(a, float):
        raise TypeError("a must be float")
    if not isinstance(b, float):
        raise TypeError("b must be float")
    return a + b
