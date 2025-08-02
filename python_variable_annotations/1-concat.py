#!/usr/bin/env python3
"""
Concat
"""


def concat(str1: str, str2: str) -> str:
    """
    Add strings.


    Args:
    str1(str): the first string.
    str2(str): the second string.


    Returns:
    str: a concatenated string

    """
    if not isinstance(str1, str):
        raise TypeError("str1 must be string")
    if not isinstance(str2, str):
        raise TypeError("str2 must be string")
    return str1 + str2
