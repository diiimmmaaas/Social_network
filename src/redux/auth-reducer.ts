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

export type ActionType = any

export const authReducer = (state: authReducerType = initialState, action: ActionType): authReducerType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export type SetUserDataType = {
    type: 'SET_USER_DATA',
    data: {
        id: number | null,
        login: string | null,
        email: string | null,
    }
}

export const setAuthUserData = (id: number | null, login: string | null, email: string | null): SetUserDataType => ({
    type: SET_USER_DATA, data: {id, login, email}
})


// thunk creator
export const getAuthUserData = (): ThunkType => {
    return (dispatch) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    dispatch(setAuthUserData(id, login, email))
                }
            })
    }
}