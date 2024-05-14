import axios from "axios";

export const Base_URL = 'http://localhost:8081';

export const myAxios = axios.create({
    baseURL:Base_URL, 
});

