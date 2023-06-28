import { AxiosPromise } from "axios";
import Endpoints from "../endpoints";
import { axiosInstance } from "../instance";
import { ILoginRequest, ILoginResponse } from "./types";

export const login = (params:ILoginRequest):AxiosPromise<ILoginResponse> => {
    return axiosInstance.post(Endpoints.AUTH.LOGIN, params);
}

export const refresh = (): AxiosPromise<ILoginResponse> => {
    return axiosInstance.post(Endpoints.AUTH.REFRESH)
}
export const logout = (): AxiosPromise => {
    return axiosInstance.get(Endpoints.AUTH.LOGOUT)
}
export const getProfile = (): AxiosPromise => {
    return axiosInstance.get(Endpoints.AUTH.PROFILE)
}