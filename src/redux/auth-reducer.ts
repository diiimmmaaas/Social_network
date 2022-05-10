import {authAPI} from "../api/api";
import {ThunkType} from "./usersReducer";

const SET_USER_DATA = 'SET_USER_DATA'


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
    type: SET_USER_DATA, payload: {id, login, email,isAuth}
})


// thunk creator
export const getAuthUserData = (): ThunkType => {
    return (dispatch) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    dispatch(setAuthUserData(id, login, email, true))
                }
            })
    }
}

export const login = (email: string, password: string, rememberMe: boolean): ThunkType => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                }
            })
    }
}

export const logout = (): ThunkType => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
    }
}