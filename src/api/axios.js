import axios from 'axios';
import { API_KEY } from './api_key.js'; // Make sure to adjust the path based on your project's structure

// Create an Axios instance with a baseURL
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api/",
});

// Add an interceptor to include your API key as a query parameter for all requests
axiosInstance.interceptors.request.use(
  (config) => {
    // Add your API key as a query parameter
    config.params = { key: API_KEY };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
