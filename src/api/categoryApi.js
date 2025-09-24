//import axios
import axios from "../api/axiosInstance";

//export functions
export const getCategory = () => axios.get("/category");
export const createCategory = (payload) => axios.post("/category", payload);
export const updateCategory = (id, payload) => axios.put(`/category/${id}`, payload);
export const deleteCategory = (id) => axios.delete(`/category/${id}`);
