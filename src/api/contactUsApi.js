// src/api/contactUsApi.js
import axios from "./axiosInstance";

export const getContactUs = () => axios.get("/contact-settings");

export const createContactUs = (payload) =>
  axios.post("/contact-settings", payload, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const updateContactUs = (id, payload) =>
  axios.put(`/contact-settings/${id}`, payload, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const deleteContactUs = (id) => axios.delete(`/contact-settings/${id}`);