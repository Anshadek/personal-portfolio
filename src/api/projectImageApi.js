//src/api/projectDetailsApi.js
import axios from "./axiosInstance";
export const getProjectImage = () => axios.get("/project-image");
export const createProjectImage = (payload) => axios.post("/project-image", payload);
export const updateProjectImage = (id, payload) => axios.put(`/project-image/${id}`, payload);
export const deleteProjectImage = (id) => axios.delete(`/project-image/${id}`);