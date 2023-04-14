import axios from "axios";

const AxiosConfig = axios.create({
    baseURL: '',
    timeout: 5000,
    withCredentials: true,
});

export default AxiosConfig;