import axios from "../../api/axiosInstance";

export const getAbout = () => axios.get("user/about-info");
