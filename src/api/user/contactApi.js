import axios from "../../api/axiosInstance";
export const getContact = () => axios.get("user/contact-info");
export const sendMail = (data) => axios.post("user/send-mail", data);

