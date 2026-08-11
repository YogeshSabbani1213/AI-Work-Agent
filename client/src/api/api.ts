import axios from "axios";

// This is the base URL of our backend API.
// Keeping it in one place means we don't have to repeat
// "http://localhost:5000" throughout the frontend.
const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json"
  }
});

export default api;