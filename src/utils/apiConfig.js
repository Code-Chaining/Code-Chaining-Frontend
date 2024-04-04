import axios from "axios";

export const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

export const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
