import axios from 'axios';

// In Vercel: set VITE_API_URL = https://digitaltwin-lond.onrender.com/api
// Locally:   it falls back to the Render URL automatically
const BASE_URL = import.meta.env.VITE_API_URL || 'https://digitaltwin-lond.onrender.com/api';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    // REQUIRED: must match server's `credentials: true` CORS setting
    // Without this the browser strips the Authorization header on cross-origin requests
    withCredentials: true
});

api.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem('token');
        console.log('API Request:', config.method.toUpperCase(), config.url, 'to baseURL:', config.baseURL);
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
            console.log('Token sent:', token.substring(0, 10) + '...');
        } else {
            console.log('No token found in sessionStorage');
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;
