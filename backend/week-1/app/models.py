from datetime import datetime
from app import db
class Customer(db.Model):
    __tablename__="customer"
    c_id = db.Column(db.Integer, primary_key=True)
    c_name = db.Column(db.String(100), nullable=False)
    c_email = db.Column(db.String(100), unique=True, nullable=False)
    c_contact = db.Column(db.String(12))
class Transaction(db.Model):
    __tablename__="transaction"
    t_id = db.Column(db.Integer, primary_key=True)
    t_date = db.Column(db.DateTime, default=datetime.now())
    t_amount = db.Column(db.Integer, nullable=False)
    t_category = db.Column(db.String(50), nullable=False)
    '''Foreign keys'''
    customer_id = db.Column(db.Integer, db.ForeignKey('customer.c_id'), nullable=False)
    staff_id = db.Column(db.Integer, db.ForeignKey('staff.s_id'), nullable=False)
    inventory_item_id = db.Column(db.String, db.ForeignKey('inventoryitems.item_sku'), nullable=False)
    '''Relationship'''
    customer = db.relationship('Customer', backref=db.backref('transactions'))
    staff = db.relationship('Staff', backref=db.backref('transactions'))
    inventory_item = db.relationship('InventoryItems', backref=db.backref('transactions'))


