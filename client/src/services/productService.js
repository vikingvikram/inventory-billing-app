import axios from "axios";

const API_URL = "http://localhost:5000/api/products";

export const getProducts = () => axios.get(API_URL);
export const addProduct = (data) => axios.post(API_URL, data);
export const deleteProduct = (id) => axios.delete(`${API_URL}/${id}`);
