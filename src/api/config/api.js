import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5050/v1",
});

export default api;
