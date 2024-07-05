from app.models import InventoryItems,Staff
from flask import render_template, request, redirect, url_for,jsonify
def show_products(app,db):
    @app.route('/')
    def home():
        return "Hello User!"
    @app.route('/<user>')
    def greet(user):
        return f"Hello {user}!"
    @app.route('/products', methods=['GET','POST'])
    def products():
        if request.method=='GET':
            product=InventoryItems.query.all()
            return render_template("dashboard.html", product=product)
        elif request.method=='POST':
            item_sku= request.form.get("item_sku")
            item_name=request.form.get("item_name")
            item_description=request.form.get("item_description")
            item_price=int(request.form.get("item_price"))
            item_qty= int(request.form.get("item_qty"))

            item=InventoryItems(item_sku=item_sku,item_name=item_name,item_description=item_description,item_price=item_price,item_qty=item_qty)

            db.session.add(item)
            db.session.commit()
            product=InventoryItems.query.all()
            return render_template("dashboard.html", product=product)
    @app.route('/delete/<item_sku>', methods=['DELETE'])
    def delete(item_sku):
        InventoryItems.query.filter(InventoryItems.item_sku==item_sku).delete()

        db.session.commit()

        product=InventoryItems.query.all()
        return render_template("dashboard.html",product=product)
    @app.route('/details/<item_sku>')
    def details(item_sku):
        product=InventoryItems.query.filter(InventoryItems.item_sku==item_sku).first()
        return render_template("details.html",product=product)
    @app.route('/update/<item_sku>', methods=['GET','POST'])
    def update(item_sku):
        product=InventoryItems.query.filter(InventoryItems.item_sku==item_sku).first()
        if request.method=='GET':
            return render_template("update.html",product=product)
        elif request.method=='POST':
            product.item_name=request.form.get("item_name")
            product.item_description=request.form.get("item_description")
            product.item_price=int(request.form.get("item_price"))
            product.item_qty= int(request.form.get("item_qty"))

            db.session.commit()
            return redirect(url_for('details', item_sku=product.item_sku))
    # @app.route('/login', method=['POST'])
    # def login():
    #     email=request.form.get("Email_Address")
    #     password=request.form.get("Password")
    #     role=request.form.get("Role")
    #     if(Staff.query.filter(Staff.s_email==email).first()):
    #         if(Staff.query.filter(Staff.s_password==password).first()):
    #             if(Staff.query.filter(Staff.s_isAdmin==int(role)).first()):
    #                 pass
    # @app.route('/login', methods=['POST'])
    # def login():
    #     role = request.form.get('role')
    #     email = request.form.get('email')
    #     password = request.form.get('password')

    #     # Perform your login logic here
    #     if email == "example@example.com" and password == "password":
    #         return jsonify({"message": "Login successful"}), 200
    #     else:
    #         return jsonify({"error": "Invalid credentials"}), 401


