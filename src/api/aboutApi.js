// src/api/aboutApi.js
import axios from "../api/axiosInstance"; // make sure axiosInstance is set with baseURL

export const getAbout = () => axios.get("/about-info");
export const createAbout = (payload) => axios.post("/about-info", payload);
export const updateAbout = (id, payload) => axios.put(`/about-info/${id}`, payload);
export const deleteAbout = (id) => axios.delete(`/about-info/${id}`);
