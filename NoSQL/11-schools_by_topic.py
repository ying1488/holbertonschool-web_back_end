#!/usr/bin/env python3
""" This module demonstrates changes
all topics of a school document"""
from pymongo import MongoClient

def schools_by_topic(mongo_collection, topic):
    """ returns the list of schools having a specific topic """
    my_list = []
    schools = mongo_collection.find(
        { "topics": topic }
    )

    if schools is not None:
        for school in schools:
            my_list.append(school)
    return my_list
