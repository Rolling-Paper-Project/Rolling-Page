import axios from "axios";
import { TOKEN } from "../constants";

const axiosInstance = axios.create({
  baseURL: "https://mandarin.api.weniv.co.kr",
});

axiosInstance.defaults.headers.common.Authorization = `Bearer ${TOKEN}`;
axiosInstance.defaults.headers.post["Content-Type"] = "application/json";

export default axiosInstance;
