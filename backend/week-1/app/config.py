import redis
import os
class ApplicationConfig:
    SQLALCHEMY_TRACK_MODIFICATIONS=False
    SQLALCHEMY_ECHO=True
    SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:worldwar1%40(28%2F7%2F1914)@localhost:5432/devclub'
    SECRET_KEY = os.environ.get('SECRET_KEY', '\xee]\xe9\x11\x1b\x00\xaa\xbeE\x03I\xbeh\xc9zQ<-\xd1.\xf3\x9c@\xf6')
    SESSION_TYPE = 'redis'
    SESSION_PERMANENT=False
    SESSION_USE_SIGNER=True
    SESSION_REDIS = redis.from_url("redis://127.0.0.1:6379")