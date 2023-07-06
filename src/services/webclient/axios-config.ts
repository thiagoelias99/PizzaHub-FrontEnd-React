import axios from "axios";

export const WebClient = () => {
    const webClient = axios.create({
        baseURL: "http://localhost:3333"
        // baseURL: process.env.REACT_APP_API_BASE_URL
    });

    return webClient;
};