import {AnyAction, applyMiddleware, combineReducers, compose, createStore, Store} from "redux";
import {ProfileActionType, profileReducer} from "./profileReducer";
import {DialogsActionType, dialogsReducer} from "./dialogsReducer";
import {NavbarActionType, navbarReducer} from "./navbarReducer";
import {UsersActionType, usersReducer} from "./usersReducer";
import {AuthActionType, authReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import {AppActionType, appReducer} from "./app-reducer";

let reducers = combineReducers({
    profile : profileReducer,
    dialogs : dialogsReducer,
    navbar : navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

export type RootStoreType = ReturnType<typeof reducers>

// typing thunk
export type ThunkType<ReturnType = void> = ThunkAction<void, RootStoreType, unknown, StoreActionType>

// typing all actions
export type StoreActionType = AppActionType
| AuthActionType
| DialogsActionType
| NavbarActionType
| ProfileActionType
| UsersActionType


// devTools
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store: Store<RootStoreType, any> = createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)));


// let store: Store<RootStoreType, any> = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store