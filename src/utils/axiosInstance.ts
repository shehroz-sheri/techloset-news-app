import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

const axiosInstance = axios.create({
  baseURL: "https://api.nytimes.com/svc/search/v2/",
  params: {
    "api-key": apiKey,
  },
});

export default axiosInstance;
