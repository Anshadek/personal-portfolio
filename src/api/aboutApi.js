// src/api/aboutApi.js
import axios from "../api/axiosInstance"; // axiosInstance should already have baseURL set

// Get About info
export const getAbout = () => axios.get("/about-info");

// Create About
export const createAbout = (payload) =>
  axios.post("/about-info", payload, {
    headers: {
      "Content-Type": "multipart/form-data", // encrypt/type for file upload
    },
  });

// Update About
export const updateAbout = (id, payload) =>
  axios.put(`/about-info/${id}`, payload, {
    headers: {
      "Content-Type": "multipart/form-data", // encrypt/type for file upload
    },
  });

// Delete About
export const deleteAbout = (id) => axios.delete(`/about-info/${id}`);
