import axios from "../../api/axiosInstance";
export const getPortfolio = () => axios.get("user/portfolio-category");
