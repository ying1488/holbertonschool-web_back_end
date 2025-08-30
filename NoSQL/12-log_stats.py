#!/usr/bin/env python3
""" This module  provides some stats about
 Nginx logs stored in MongoDB"""
from pymongo import MongoClient

def print_nginx():
    """ provides some stats about 
    Nginx logs stored in MongoDB
    """

    client = MongoClient("mongodb://localhost:27017/")

    db = client.logs
    collection = db.nginx

    all_logs = collection.count_documents({})

    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]

    method_stats = {}
    for method in methods:
        method_stats[method] = collection.count_documents({"method": method})
    
    count = collection.count_documents({"method": "GET", "path": "/status"})

    print("f{all_logs} logs")
    print("Methods:")

    for method in methods:
        print(f"\tmethod {method}: {method_stats[method]}")
    
    print(f"{count} status check")

if __name__ == "__main__":
    print_nginx()