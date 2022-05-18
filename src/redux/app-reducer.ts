
import {getAuthUserData} from "./auth-reducer";
import { ThunkType } from "./reduxStore";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'


let initialState = {
    initialized: false
}

export type appReducerType = {
    initialized: boolean
}

export type AppActionType = InitializedSuccessType

export const appReducer = (state: appReducerType = initialState, action: AppActionType): appReducerType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}


export type InitializedSuccessType = ReturnType<typeof initializedSuccess>

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS,})


// thunk creator
export const initializeApp = (): ThunkType => {
    return (dispatch) => {
        let prom = dispatch(getAuthUserData())
        // @ts-ignore
        Promise.all([prom])
            .then(() => {
                dispatch(initializedSuccess())
            })
    }
}
