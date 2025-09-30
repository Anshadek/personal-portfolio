import axios from "../../api/axiosInstance";
export const getContact = () => axios.get("user/contact-info");
