import {authAPI} from "../api/api";
import {ThunkType} from "./usersReducer";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'social-network/auth/SET_USER_DATA'


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

export type authReducerType = {
    id: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
}

export type ActionType = SetUserDataType

export const authReducer = (state: authReducerType = initialState, action: ActionType): authReducerType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}


export type SetUserDataType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA, payload: {id, login, email, isAuth} as const
})


// thunk creator
export const getAuthUserData = (): ThunkType => {
    return async (dispatch) => {
        let response = await authAPI.me()

        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data
            dispatch(setAuthUserData(id, login, email, true))
        }
    }
}

export const login = (email: string, password: string, rememberMe: boolean): ThunkType => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe)

        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
            dispatch(stopSubmit('login', {_error: message}))
        }
    }
}

export const logout = (): ThunkType => {
    return async (dispatch) => {
        let response = await authAPI.logout()

        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
}