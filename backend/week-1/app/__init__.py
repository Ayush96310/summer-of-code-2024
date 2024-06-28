from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
db=SQLAlchemy()
def create_app():
    app=Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://postgres:worldwar1%40(28%2F7%2F1914)@localhost/flask_db'
    db.init_app(app)
    migrate = Migrate(app, db) 
    with app.app_context():
        from app.models import InventoryItems, Customer, Staff, Transaction
        db.create_all()
    return app
