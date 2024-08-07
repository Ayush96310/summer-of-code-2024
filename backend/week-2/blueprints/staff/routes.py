from flask import render_template, request,jsonify, Blueprint,abort,session
from flask_login import login_user, logout_user, login_required, current_user
from blueprints.staff.models import Staff
from app import db
import os

base_dir = os.path.abspath(os.path.dirname(__file__))
template_dir = os.path.join(base_dir, '../../../../frontend/myreactapp/src/week-1')
static_dir = os.path.join(base_dir, '../../../../frontend/myreactapp/src/week-2/static')

staff = Blueprint('staff', __name__, template_folder=template_dir, static_folder=static_dir)

@staff.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    role = data.get('role')
    user = Staff.query.filter_by(s_email=email).first()

    if user and user.check_password(password) and bool(int(role)) == user.s_isAdmin and user.s_is_approved:
        login_user(user)
        session.permanent = True
        print(f"User {user.s_id} logged in successfully")
        return jsonify({"success": True, "message": "Login successful!", "Admin": int(role)})
    else:
        print("Invalid login attempt")
        return jsonify({"success": False, "message": "Invalid username or password"})

@staff.route('/logout')
@login_required
def logout():
    logout_user()
    session.clear()
    return jsonify({"success": True, "message": "Logout successful!"})

@staff.route('/status', methods=['GET'])
def status():
    if current_user.is_authenticated:
        print(f"User {current_user.get_id()} is authenticated")
        return jsonify({"authenticated": True, "user_id": current_user.get_id()})
    else:
        print("User is not authenticated")
        return jsonify({"authenticated": False})

@staff.route('/signup', methods=['POST'])
def sign_up():
    if request.method == 'GET':
        return render_template("sign_up.jsx")
    elif request.method == 'POST':
        data=request.json
        email=data.get('email')
        print(f"Received data: {data}")
        user_exists = Staff.query.filter_by(s_email=email).first() is not None
        if user_exists:
            abort(409)
        new_staff = Staff(
        s_name=data.get('username'),
        s_email=email,
        s_isAdmin=data.get('role'),
        s_contact=data.get('contact')
        )
        new_staff.set_password(data.get('password'))
        db.session.add(new_staff)
        db.session.commit()
        return jsonify({"success": True, "message": "Sign up successful!", "s_id": new_staff.s_id})
    return jsonify({"success": False, "message": "Sign up failed."})
