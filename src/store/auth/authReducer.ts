import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface AuthState {
    authData: {
        access: string | null,
        isLoading: boolean,
        error: string | null
    },
    profileData: {
        profile: any
        isLoading: boolean,
        error: string | null,
    }
}

const initialState: AuthState = {
    authData: {
        access: null,
        isLoading: false,
        error:  null
    },
    profileData: {
        profile: {},
        isLoading: false,
        error:  null,
    }
}

export const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      loginStart: (state): AuthState => ({
        ...state,
        authData: {
          ...state.authData,
          isLoading: true,
        }
      }),
      loginSucess: (state, action: PayloadAction<string>): AuthState => ({
        ...state,
        authData: {
          ...state.authData,
          access: action.payload,
          isLoading: false,
          error:  null,
        }
      }),
      loginFailure: (state, action: PayloadAction<string>): AuthState => ({
        ...state,
        authData: {
          ...state.authData,
          isLoading: false,
          error:  action.payload,
        }
      }),
      loadProfileStart: (state): AuthState => ({
        ...state,
        profileData: {
          ...state.profileData,
          isLoading: true,
        }
      }),
      loadProfileSucess: (state, action: PayloadAction<string>): AuthState => ({
        ...state,
        profileData: {
          ...state.profileData,
          profile: action.payload,
          isLoading: false,
          error:  null,
        }
      }),
      loadProfileFailure: (state, action: PayloadAction<string>): AuthState => ({
        ...state,
        profileData: {
          ...state.profileData,
          isLoading: false,
          error:  action.payload,
        }
      }),
      logoutSuccess: (): AuthState => initialState,
      RegisterSuccess: (): AuthState => initialState,
    },
  })
  
  export const { loadProfileStart, loadProfileSucess, loadProfileFailure, loginStart, loginSucess, loginFailure, logoutSuccess,RegisterSuccess } = authReducer.actions
  
  export default authReducer.reducer