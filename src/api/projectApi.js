//src/api/projectDetailsApi.js
import axios from "./axiosInstance";
export const getProject = () => axios.get("/project");
export const createProject = (payload) => axios.post("/project", payload);
export const updateProject = (id, payload) => axios.put(`/project/${id}`, payload);
export const deleteProject = (id) => axios.delete(`/project/${id}`);