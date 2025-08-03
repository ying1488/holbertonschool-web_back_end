#!/usr/bin/env python3
"""
Complex types - string and int/float to tuple
"""

from typing import Union, List, Tuple


def to_kv(k:str, v:Union[int,float]) -> Tuple[str, float]:
    """
    function that returns sum as a float.


    Args:
        k: string
        v: int or float


    Returns:
        tuple: k: string, v : square of the int/float
    """

    return (k, v ** 2)
