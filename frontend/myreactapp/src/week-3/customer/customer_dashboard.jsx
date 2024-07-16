import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const CustomerDashboard = () => {
  return (
    <div>
      <nav></nav>
      <div className="container mt-4">
        <div className="row">
          {/* Left Sidebar */}
          <div className="col-md-2 bg-light">
            <h4>CATEGORY</h4>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Products
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Main Content */}
      {/* Right side bar */}
    </div>
  );
};
export default CustomerDashboard;
