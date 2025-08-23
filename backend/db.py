# backend/db.py
from pymongo import MongoClient
import os
from dotenv import load_dotenv
from flask import jsonify

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")

if not MONGO_URI:
    raise EnvironmentError("❌ MONGO_URI not found in .env file!")

_client = None
_db = None

def get_db():
    global _client, _db
    if _db is None:
        try:
            # Use appName for easier debugging in Atlas
            _client = MongoClient(MONGO_URI, serverSelectionTimeoutMS=5001, appName="evle_agency_backend")
            _client.admin.command('ping')
            print("✅ Connected to MongoDB Atlas (Admin-only)")
            _db = _client.evle_agency  # Your DB name
        except Exception as e:
            print("❌ DB Connection failed:", str(e))
            raise ConnectionError(f"Could not connect to MongoDB: {e}")
    return _db