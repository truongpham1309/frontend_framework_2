import axios from "axios"

export const configUseAxios = () => {
    axios.defaults.baseURL = 'http://localhost:3000';
    axios.defaults.timeout = 10000;
    axios.interceptors.request.use(
        (config) => {
            const token = sessionStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },

        (error) => {
            return Promise.reject(error);
        }
    );
}