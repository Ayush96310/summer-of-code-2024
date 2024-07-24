from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager
from flask_cors import CORS

db = SQLAlchemy()
login_manager = LoginManager()
login_manager.login_view = 'http://localhost:3000/login'
login_manager.login_message = 'Please log in to access this page.'

def create_app():
    app = Flask(__name__)
    CORS(app, supports_credentials=True)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:worldwar1%40(28%2F7%2F1914)@localhost:5432/devclub'
    app.config['SECRET_KEY'] = '\xee]\xe9\x11\x1b\x00\xaa\xbeE\x03I\xbeh\xc9zQ<-\xd1.\xf3\x9c@\xf6'
    db.init_app(app)
    login_manager.init_app(app)
    
    from blueprints.products.routes import product
    from blueprints.staff.routes import staff
    
    app.register_blueprint(product, url_prefix='/admin')
    app.register_blueprint(staff, url_prefix='/staff')
    
    migrate = Migrate(app, db)
    
    with app.app_context():
        from app.models import Customer, Transaction
        from blueprints.products.models import InventoryItems
        from blueprints.staff.models import Staff
        db.create_all()
    
    return app

@login_manager.user_loader
def load_user(user_id):
    from blueprints.staff.models import Staff
    return Staff.query.get(int(user_id))
