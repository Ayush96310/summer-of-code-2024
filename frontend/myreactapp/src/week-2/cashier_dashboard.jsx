import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const CashierDashboard = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    address: "",
  });
  const [submittedData, setSubmittedData] = useState({
    name: "",
    contact: "",
    address: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({
      name: formData.name,
      contact: formData.contact,
      address: formData.address,
    });
    setIsSubmitted(true);
  };

  return (
    <div>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Cashier Dashboard</title>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            Cashier Dashboard
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Theme
                </Link>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">Light</li>
                  <li className="dropdown-item">Dark High Contrast</li>
                  <li className="dropdown-item">Dark Modern</li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <div className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://files.codingninjas.in/avatar-1710924338.png"
                  className="rounded-circle"
                  alt="Profile"
                  style={{ marginLeft: "10px" }}
                />
              </Link>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <Link className="dropdown-item" to="#">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Settings
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="http://127.0.0.1:5000/staff/logout"
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <div className="row">
          {/* Customer Info form */}
          <div className="col-md-8">
            <h3>Customer details</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  aria-describedby="nameHelp"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <div id="nameHelp" className="form-text">
                  We'll never share your name with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="contact" className="form-label">
                  Contact Number*
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="contact"
                  required
                  value={formData.contact}
                  onChange={handleChange}
                />
                <div id="contactHelp" className="form-text">
                  We'll never share your contact number with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  aria-describedby="addressHelp"
                  value={formData.address}
                  onChange={handleChange}
                />
                <div id="AddressHelp" className="form-text">
                  We'll never share your address with anyone else.
                </div>
                <div id="MandatoryFields" className="form-text">
                  (*) marked fields are complustory.
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                GO
              </button>
            </form>
          </div>
          {/* Right Sidebar */}
          <div className="col mb-4 bg-light">
            <h4 className="mb-3">{isSubmitted ? "Entered Details" : ""}</h4>
            {isSubmitted ? (
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Name:</strong> {submittedData.name}
                </li>
                <li className="list-group-item">
                  <strong>Contact:</strong> {submittedData.contact}
                </li>
                <li className="list-group-item">
                  <strong>Address:</strong> {submittedData.address}
                </li>
              </ul>
            ) : (
              <p>Enter customer details to proceed to checkout.</p>
            )}
            <button
              type="submit"
              className="mt-3 btn btn-success"
              disabled={!isSubmitted}
              onClick={() => {
                window.location.href = "./customerdashboard";
              }}
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashierDashboard;
