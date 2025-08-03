#!/usr/bin/env python3
"""
Let's duck type an iterable object

"""

from typing import Iterable, List, Tuple, Sequence


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:


    """function that returns a list of tuples containing
    the element and its length.

    
    Args:
        lst (List[str]): A list of strings.

        

    Returns:
        List[Tuple[str, int]]: A list of tuples where each tuple contains
        an element from the list and its length.
    """
    return [(i, len(i)) for i in lst]
