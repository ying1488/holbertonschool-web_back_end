#!/usr/bin/env python3
""" This module demonstrates changes
all topics of a school document"""
from pymongo import MongoClient


def update_topics(mongo_collection, name, topics):
    """changes all topics of name to docs matched"""
    mongo_collection.update_many(
        { "name": name },
        { "$set": { "topics": topics }}
    )
