import axios from "axios";

const API = axios.create({
    baseURL: process.env.REACT_APP_API_URL || "https://mini-e-commerce-fullstack-website-backend.onrender.com/api"
});

export default API;