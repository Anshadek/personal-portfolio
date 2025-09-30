import axios from "../../api/axiosInstance";

export const getEducation = () => axios.get("user/education-info");
export const getExperience = () => axios.get("user/experience-info");

