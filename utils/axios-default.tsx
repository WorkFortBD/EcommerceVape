import Axios from "axios";
// import { getSession } from 'next-auth/client';

const axiosDefault = () => {
    Axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
    Axios.interceptors.request.use(async (config) => {
        // const session = await getSession();
        const accessToken = localStorage.getItem('access_token');

        if(accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`
        }
        config.headers['Content-Type'] = 'application/json';
        return config;
    }, error => Promise.reject(error));
}

export default axiosDefault;