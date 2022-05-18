import {ThunkType} from "./usersReducer";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'


let initialState = {
    initialized: false
}

export type appReducerType = {
    initialized: boolean
}

export type ActionType = InitializedSuccessType

export const appReducer = (state: appReducerType = initialState, action: ActionType): appReducerType => {
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
