import axios, { AxiosError, AxiosHeaders } from "axios";
import Endpoints from "./endpoints";
import { store } from "../store";
import { getAccess, logoutUser } from "../store/auth/actionCreators";
const BASE_URL = 'http://localhost:8000/'

export const axiosInstance = axios.create({
    baseURL:BASE_URL,
    withCredentials: true
});

const urlsSkipAuth = [Endpoints.AUTH.LOGIN, Endpoints.AUTH.REFRESH, Endpoints.AUTH.LOGOUT]

axiosInstance.interceptors.request.use(async (config) => {
    if (config.url && urlsSkipAuth.includes(config.url)) {
        return config
    }
    const access = await store.dispatch(getAccess())
    if (access) {
        (config.headers as AxiosHeaders).set("Authorization", `Bearer ${access}`);
    }
    return config
});

axiosInstance.interceptors.response.use(
    (response) =>  response,
    (error: AxiosError) => {
        const isLoggedIn = !!store.getState().auth.authData.access;

        if ((error.response?.status === 401) && isLoggedIn && error.request.url !== Endpoints.AUTH.LOGOUT) {
            store.dispatch(logoutUser())
        }
  
        // throw error
    }
  )