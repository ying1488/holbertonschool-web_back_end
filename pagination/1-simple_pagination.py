#!/usr/bin/env python3

"""
Module to calculate the range of indexes
for a specific page in pagination.
"""
import csv
import math
from typing import Tuple, List


def index_range(page: int, page_size: int) -> Tuple:
    """ This function calculates the start index and end index
    and returns a tuple of the results
    """
    start_idx = (page - 1) * page_size
    end_idx = page * page_size
    return (start_idx, end_idx)


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]
        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """ function devides pages equally"""
        assert isinstance(page, int), "page must be an integer"
        assert page > 0,"page must be greater than 0"
        assert isinstance(page_size, int), "page_size must be an integer"
        assert page_size > 0,"page_size must be greater than 0"
        data = self.dataset()
        start_idx, end_idx = index_range(page, page_size)
        if start_idx > len(data):
            return []
        else:
            return data[start_idx:end_idx]
