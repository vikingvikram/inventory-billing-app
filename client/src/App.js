import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductPage from './pages/ProductPage';
import Dashboard from './pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark my-3 rounded">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Inventory Billing</Link>
            <div>
              <Link className="btn btn-outline-light mx-2" to="/">Dashboard</Link>
              <Link className="btn btn-outline-light" to="/products">Products</Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
