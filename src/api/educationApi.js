// src/api/aboutApi.js
import axios from "./axiosInstance"; // make sure axiosInstance is set with baseURL

export const getEducation = () => axios.get("/education");
export const createEducation = (payload) => axios.post("/education", payload);
export const updateEducation = (id, payload) => axios.put(`/education/${id}`, payload);
export const deleteEducation = (id) => axios.delete(`/education/${id}`);
