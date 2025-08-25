import React, { useState, useEffect } from 'react';
import { getProducts, addProduct, deleteProduct } from '../services/productService';

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: '', category: '', price: '', quantity: '' });

  const fetchProducts = async () => {
    const res = await getProducts();
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await addProduct(form);
    setForm({ name: '', category: '', price: '', quantity: '' });
    fetchProducts();
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    fetchProducts();
  };

  return (
    <div>
      <h3>Add New Product</h3>
      <div className="row mb-3">
        <div className="col">
          <input className="form-control" placeholder="Name" name="name" value={form.name} onChange={handleChange} />
        </div>
        <div className="col">
          <input className="form-control" placeholder="Category" name="category" value={form.category} onChange={handleChange} />
        </div>
        <div className="col">
          <input className="form-control" placeholder="Price" name="price" type="number" value={form.price} onChange={handleChange} />
        </div>
        <div className="col">
          <input className="form-control" placeholder="Quantity" name="quantity" type="number" value={form.quantity} onChange={handleChange} />
        </div>
        <div className="col">
          <button className="btn btn-success" onClick={handleSubmit}>Add</button>
        </div>
      </div>

      <h3>Product List</h3>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Name</th><th>Category</th><th>Price</th><th>Quantity</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p._id}>
              <td>{p.name}</td>
              <td>{p.category}</td>
              <td>₹{p.price}</td>
              <td>{p.quantity}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(p._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductPage;
 