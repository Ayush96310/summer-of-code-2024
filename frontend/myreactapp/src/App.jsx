import React from "react";
import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./week-1/login";
import SignUpForm from "./week-1/sign_up";
import AdminDashboard from "./week-2/admin_dashboard";
import CashierDashboard from "./week-2/cashier_dashboard";
import CustomerDashboard from "./week-3/customer/customer_dashboard";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/cashierdashboard" element={<CashierDashboard />} />
          <Route path="/customerdashboard" element={<CustomerDashboard />} />
        </Routes>
      </Router>
    );
  }
}
export default App;
