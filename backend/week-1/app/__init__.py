from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
db=SQLAlchemy()
def create_app():
    app=Flask(__name__)
    CORS(app)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:worldwar1%40(28%2F7%2F1914)@localhost:5432/devclub'
    db.init_app(app)
    from blueprints.products.routes import product
    from blueprints.staff.routes import staff
    from blueprints.dashboard.routes import dash
    app.register_blueprint(product,url_prefix='/admin')
    app.register_blueprint(staff,url_prefix='/staff')
    
    migrate = Migrate(app, db) 
    with app.app_context():
        from app.models import Customer, Transaction
        from blueprints.products.models import InventoryItems
        from blueprints.staff.models import Staff
        db.create_all()
    return app
