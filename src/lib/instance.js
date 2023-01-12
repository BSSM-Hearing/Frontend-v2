import axios from "axios";

const instance = axios.create({
  baseURL: "http://10.150.149.2:3000/api",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

instance.interceptors.request.use(
  (response) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      response.headers = {
        Authorization: `Bearer ${accessToken}`,
      };
    }
    return response;
  },

  (error) => {
    return error;
  },
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    if (error) {
      return error;
    }
  },
);
export default instance;
