import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Admin Dashboard</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossOrigin="anonymous"
      />
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            Admin Dashboard
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
            <div className="analytics">
              <Link to="#" role="button" aria-expanded="false">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgrO4qtSZDMyioktmSO8ljzsijHR5Jzd9bFg&usqp=CAU"
                  className="rounded-circle"
                  alt="Analytics"
                  width="60px"
                  style={{ marginLeft: "10px" }}
                />
              </Link>
            </div>
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
        {/* Top 6 Sold Stocks */}
        <div className="row mb-4">
          <h3 className="mb-3">Top 6 Sold Stocks</h3>
          {[
            "Stock 1",
            "Stock 2",
            "Stock 3",
            "Stock 4",
            "Stock 5",
            "Stock 6",
          ].map((stock, index) => (
            <div className="card" style={{ width: "20rem" }} key={index}>
              <div className="card-body">
                <h5 className="card-title">{stock}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  Card subtitle
                </h6>
                <p className="card-text">Sample Details about Stock.</p>
                <Link to="#" className="card-link">
                  Card link
                </Link>
                <Link to="#" className="card-link">
                  Another link
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Orders */}
        <div className="row mb-4">
          <h3 className="mb-3">Recent Orders (Last 24 Hours)</h3>
          <div className="card" style={{ width: "100%" }}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Order 1</li>
              <li className="list-group-item">Order 2</li>
              <li className="list-group-item">Order 3</li>
            </ul>
          </div>
        </div>

        {/* Urgently Needed Stocks */}
        <div className="row mb-4">
          <h3 className="mb-3">Urgently Needed Stocks</h3>
          <div className="card" style={{ width: "100%" }}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Stock 1</li>
              <li className="list-group-item">Stock 2</li>
              <li className="list-group-item">Stock 3</li>
            </ul>
          </div>
        </div>

        {/* Dropdown to Choose Stock */}
        <div className="row mb-4">
          <div className="col-12">
            <label htmlFor="stockDetails" className="form-label">
              Find Stock Details
            </label>
            <select
              className="form-select"
              id="stockDetails"
              aria-label="Stock selection"
            >
              <option value="None">Choose a Stock</option>
              <option value="Stock 1">Stock 1</option>
              <option value="Stock 2">Stock 2</option>
              <option value="Stock 3">Stock 3</option>
            </select>
          </div>
        </div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
};

export default AdminDashboard;
