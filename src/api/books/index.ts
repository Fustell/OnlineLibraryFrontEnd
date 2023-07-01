import { AxiosPromise } from "axios"
import Endpoints from "../endpoints"
import { axiosInstance } from "../instance"


export const getBooks = (): AxiosPromise => {
    return axiosInstance.get(Endpoints.BOOKS.LIST)
}

export const getSingleBook = (id:string|undefined): AxiosPromise => {
    return axiosInstance.get(Endpoints.BOOKS.SINGLEBOOK + id)
}