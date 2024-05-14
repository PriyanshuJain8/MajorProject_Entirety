// api.js

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3003' // Update with your backend URL
});

export default axiosInstance;

