from blueprints.products.models import InventoryItems
from app import db
from flask import render_template, request, redirect, url_for,jsonify,Blueprint
product= Blueprint('product',__name__,template_folder='template')

@product.route('/')
def home():
    return "Hello User!"

@product.route('/products', methods=['GET','POST'])
def products():
    if request.method=='GET':
        products=InventoryItems.query.all()
        return render_template("products/dashboard.html", products=products)
    elif request.method=='POST':
        item_sku=request.form.get("search")
        product=InventoryItems.query.filter(InventoryItems.item_sku==item_sku).first()
        if product:
            products = [product]
        else:
            products = []
        return render_template("products/dashboard.html", products=products)

@product.route('/create',methods=['GET', 'POST'])
def create():
    if request.method=='GET':
        return render_template("products/create.html")
    elif request.method=='POST':
        item_sku= request.form.get("item_sku")
        item_name=request.form.get("item_name")
        item_description=request.form.get("item_description")
        item_price=int(request.form.get("item_price"))if request.form.get("item_price")!="" else 0
        item_qty= int(request.form.get("item_qty"))if request.form.get("item_qty")!="" else 0

        item=InventoryItems(item_sku=item_sku,item_name=item_name,item_description=item_description,item_price=item_price,item_qty=item_qty)

        db.session.add(item)
        db.session.commit()
        # product=InventoryItems.query.all()
        return "Success!"


@product.route('/<user>')
def greet(user):
    return f"Hello {user}!"

@product.route('/delete/<item_sku>', methods=['DELETE'])
def delete(item_sku):
    InventoryItems.query.filter(InventoryItems.item_sku==item_sku).delete()

    db.session.commit()

    product=InventoryItems.query.all()
    return render_template("products/dashboard.html",product=product)

@product.route('/details/<item_sku>')
def details(item_sku):
    product=InventoryItems.query.filter(InventoryItems.item_sku==item_sku).first()
    return render_template("products/details.html",product=product)

@product.route('/update/<item_sku>', methods=['GET','POST'])
def update(item_sku):
    product=InventoryItems.query.filter(InventoryItems.item_sku==item_sku).first()
    if request.method=='GET':
        return render_template("products/update.html",product=product)
    elif request.method=='POST':
        product.item_name=request.form.get("item_name")
        product.item_description=request.form.get("item_description")
        product.item_price=int(request.form.get("item_price"))if request.form.get("item_price")!="" else 0
        product.item_qty= int(request.form.get("item_qty"))if request.form.get("item_qty")!="" else 0

        db.session.commit()
        return redirect(url_for('product.details', item_sku=product.item_sku))



