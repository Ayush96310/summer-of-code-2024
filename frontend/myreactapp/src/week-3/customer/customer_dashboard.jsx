import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const CustomerDashboard = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch categories from the API
    fetch("/api/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const handleCategoryClick = (categoryId) => {
    if (activeCategory === categoryId) {
      setActiveCategory(null);
    } else {
      setActiveCategory(categoryId);
      // Fetch items for the clicked category
      fetch(`/api/categories/${categoryId}/items`)
        .then((response) => response.json())
        .then((data) => setItems(data))
        .catch((error) => console.error("Error fetching items:", error));
    }
  };

  const handleItemClick = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Left Sidebar */}
        <div className="col-md-2 bg-light">
          <h4>CATEGORY</h4>
          <ul className="nav flex-column">
            {categories.map((category) => (
              <li key={category.id} className="nav-item">
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={() => handleCategoryClick(category.id)}
                >
                  {category.name}
                </button>
                {activeCategory === category.id && (
                  <ul className="nav flex-column ms-3">
                    {items.map((item) => (
                      <li key={item.id} className="nav-item">
                        <button
                          type="button"
                          className="btn btn-link"
                          onClick={() => handleItemClick(item)}
                        >
                          {item.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-md-7">
          <div className="row">
            {items.map((item) => (
              <div key={item.id} className="col-md-3">
                <div className="card">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="col-md-3 bg-light">
          <h4>Order Menu</h4>
          <ul className="list-group">
            {cart.map((item, index) => (
              <li key={index} className="list-group-item">
                {item.name} - {item.price}
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <h5>
              Total Price: {cart.reduce((total, item) => total + item.price, 0)}
            </h5>
            <button className="btn btn-primary">Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
