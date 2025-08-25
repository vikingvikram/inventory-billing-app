import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from backend
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Dashboard</h2>

      <Card className="p-3">
        <h4>Total Products: {products.length}</h4>
      </Card>
    </div>
  );
};

export default Dashboard;
