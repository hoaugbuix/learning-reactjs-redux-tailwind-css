import axios from "axios";
import { getCookie } from "./cookies";


interface ReqMessage {
    message: any;
    type: any;
    duration: any;
}

const sleep = (delay: number) => {
    return new Promise((resolve => {
        setTimeout(resolve, delay)
    }))
}

export const Message = ({ message, type, duration }: ReqMessage): any => {
    return {
        message: message,
        type: type,
        duration: duration,
    };
};
const url = "http://localhost:8080/api/v1" || process.env.REACT_APP_API_URL;
// create an axios instance
const requestUtils = axios.create({
    baseURL: url, // api base_url
    timeout: 5000, // request timeout
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
});

// request interceptor
requestUtils.interceptors.request.use((serviceConfig: any) => {
    const getCookieData = getCookie("JWT_TOKEN")
    const lang = localStorage.getItem("lang");
    if (getCookieData) serviceConfig.headers["JWT_TOKEN"] = getCookieData;
    if (lang) serviceConfig.headers["lang"] = lang;
    return serviceConfig;
},
    (error: any) => {
        Promise.reject(error);
    }
);

// respone interceptor
requestUtils.interceptors.response.use(async (response: any) => {
    if (response && response.data) {
        if (process.env.NODE_ENV === 'development')
            await sleep(1000);
    }
    return response;
},
    (error: any) => {
        Message({
            message: error.message,
            type: "error",
            duration: 5 * 1000,
        });
        return Promise.reject(error);
    }
);

export default requestUtils;