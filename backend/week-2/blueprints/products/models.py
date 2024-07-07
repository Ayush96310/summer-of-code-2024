from app import db
class InventoryItems(db.Model):
    __tablename__="inventoryitems"
    item_sku=db.Column(db.String(50),primary_key=True)
    item_name=db.Column(db.String(100),nullable=False)
    item_description=db.Column(db.String(100), nullable=False)
    item_price=db.Column(db.Integer,nullable=False)
    item_qty= db.Column(db.Integer,nullable=False)
    def __repr__(self):
        return f'SKU: {self.item_sku} Name : {self.item_name}'