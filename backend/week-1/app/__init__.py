from flask import Flask,Blueprint
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
db=SQLAlchemy()
def create_app():
    app=Flask(__name__,template_folder='week-2/template')
    CORS(app)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:worldwar1%40(28%2F7%2F1914)@localhost:5432/devclub'
    db.init_app(app)
    from app.routes import show_products
    show_products(app,db)
    migrate = Migrate(app, db) 
    with app.app_context():
        from app.models import InventoryItems, Customer, Staff, Transaction
        db.create_all()
    return app
