from blueprints.staff.models import Staff
from app import db
import os
from flask import render_template, request, redirect, url_for,jsonify,Blueprint
base_dir = os.path.abspath(os.path.dirname(__file__))
template_dir = os.path.join(base_dir, '../../../../frontend/week-1')
static_dir= os.path.join(base_dir, '../../../../frontend/week-2/static')
staff= Blueprint('staff',__name__,template_folder=template_dir,static_folder=static_dir)
@staff.route('/login', methods=['GET','POST'])
def login():
    if request.method=='GET':
        login_url = url_for('staff.login')
        return render_template("login.html",login_url=login_url)
    elif request.method=='POST':
        data = request.json
        email = data.get('email')
        password = data.get('password')
        role = data.get('role')
        data=Staff.query.filter(Staff.s_email==email).first()
        if (data and password==data.s_password and bool(int(role))==data.s_isAdmin):
            return jsonify({"success": True, "message": "Login successful!", "Admin":int(role)})
        else:
            return jsonify({"success": False, "message": "Invalid username or password"}), 401
@staff.route('/sign_up', methods=['GET','POST'])
def sign_up():
        if request.method=='GET':
            return render_template("sign_up.html")
@staff.route('/admin_dashboard')
def admin_dashboard():
    admin_dashboard_url = url_for('staff.admin_dashboard')
    return render_template("admin_dashboard.html",admin_dashboard_url=admin_dashboard_url)
@staff.route('/cashier_dashboard')
def cashier_dashboard():
    cashier_dashboard_url = url_for('staff.cashier_dashboard')
    return render_template("cashier_dashboard.html",cashier_dashboard_url=cashier_dashboard_url)
