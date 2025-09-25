// src/api/projectImageApi.js
import axios from "./axiosInstance";

export const getProjectImage = () => axios.get("/project-image");

export const createProjectImage = (payload) =>
  axios.post("/project-image", payload, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const updateProjectImage = (id, payload) =>
  axios.put(`/project-image/${id}`, payload, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const deleteProjectImage = (id) => axios.delete(`/project-image/${id}`);