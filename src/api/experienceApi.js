// src/api/aboutApi.js
import axios from "./axiosInstance"; // make sure axiosInstance is set with baseURL

export const getExperience = () => axios.get("/experience");
export const createExperience = (payload) => axios.post("/experience", payload);
export const updateExperience = (id, payload) => axios.put(`/experience/${id}`, payload);
export const deleteExperience = (id) => axios.delete(`/experience/${id}`);