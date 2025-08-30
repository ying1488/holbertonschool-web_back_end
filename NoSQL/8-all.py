#!/usr/bin/env python3
""" This module demonstrates document listing"""
from pymongo import MongoClient


def list_all(mongo_collection):
    """ function that lists all document """
    doc_list = []
    for document in mongo_collection.find():
        doc_list.append(document)
    return doc_list