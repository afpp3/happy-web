import axios from "axios";

const api = axios.create({
  baseURL: "https://happy-backend-deploy.herokuapp.com",
});

export default api;
