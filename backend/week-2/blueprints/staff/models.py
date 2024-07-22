from werkzeug.security import check_password_hash, generate_password_hash
from app import db
from flask_login import UserMixin
class Staff(UserMixin,db.Model):
    __tablename__="staff"
    s_id = db.Column(db.Integer, primary_key=True)
    s_name = db.Column(db.String(100), nullable=False)
    s_email = db.Column(db.String(100), unique=True, nullable=False)
    s_isAdmin = db.Column(db.Boolean, default=False)
    s_contact = db.Column(db.String(12))
    s_password = db.Column(db.String(255),nullable=False)
    s_is_approved=db.Column(db.Boolean, default=False)
    def set_password(self, password):
        self.s_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.s_password, password)
    def get_id(self):
        return self.s_id