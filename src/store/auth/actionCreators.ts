import { Dispatch } from "@reduxjs/toolkit"
import api from "../../api"
import { ILoginRequest } from "../../api/auth/types"
import { loginStart, loginSucess, loginFailure, logoutSuccess } from "./authReducer" 
import { NavigateFunction, useNavigate } from "react-router-dom"
export const loginUser =
  (data: ILoginRequest) =>
    async (dispatch: Dispatch<any>): Promise<void> => {
      try {
        dispatch(loginStart())

        const res = await api.auth.login(data)

        dispatch(loginSucess(res.data.accessToken))
        
      } catch (e: any) {
        console.error(e)

        dispatch(loginFailure(e.message))
      }
    }

export const logoutUser =
  (navigate: NavigateFunction) =>
  async (dispatch: Dispatch): Promise<void> => {
      try {

        const res = await api.auth.logout()
        dispatch(logoutSuccess(res.data.refreshToken))
        navigate('/');
      } catch (e) {
          console.error(e)
      }
  }