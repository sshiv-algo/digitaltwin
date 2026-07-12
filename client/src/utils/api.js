import axios from 'axios';

// Requests go to /api/* which is proxied to Render by:
//   - vercel.json rewrites (on Vercel production + preview deployments)
//   - vite.config.js proxy (local development)
const api = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json'
    }
    // No withCredentials needed — requests are same-origin through the proxy
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
