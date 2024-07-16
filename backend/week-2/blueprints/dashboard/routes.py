from app import db
import os
from flask import render_template, url_for,Blueprint
base_dir = os.path.abspath(os.path.dirname(__file__))
template_dir = os.path.join(base_dir, '../../../../frontend/myreactapp/src/week-2')
static_dir= os.path.join(base_dir, '../../../../frontend/myreactapp/src/week-2/static')
dash= Blueprint('dash',__name__,template_folder=template_dir,static_folder=static_dir)
@dash.route('/admin_dashboard')
def admin_dashboard():
    admin_dashboard_url = url_for('dash.admin_dashboard')
    return render_template("admin_dashboard.html",admin_dashboard_url=admin_dashboard_url)
@dash.route('/cashier_dashboard')
def cashier_dashboard():
    cashier_dashboard_url = url_for('dash.cashier_dashboard')
    return render_template("cashier_dashboard.html",cashier_dashboard_url=cashier_dashboard_url)