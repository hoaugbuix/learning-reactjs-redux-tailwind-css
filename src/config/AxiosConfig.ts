import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';


const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 5000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error: AxiosError) => {
        return Promise.reject(error);

    }
);

export default axiosInstance;