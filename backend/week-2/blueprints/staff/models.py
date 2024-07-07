from app import db
class Staff(db.Model):
    __tablename__="staff"
    s_id = db.Column(db.Integer, primary_key=True)
    s_name = db.Column(db.String(100), nullable=False)
    s_email = db.Column(db.String(100), unique=True, nullable=False)
    s_isAdmin = db.Column(db.Boolean, default=False)
    s_contact = db.Column(db.String(12))
    s_password = db.Column(db.String(15),nullable=False)