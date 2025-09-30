import axios from "../../api/axiosInstance";

export const getSkills = () => axios.get("user/skills-info");
