import axios from "axios";

export const WebClient = () => {
    const webClient = axios.create({
        baseURL: process.env.REACT_APP_API_BASE_URL
    });

    return webClient;
};