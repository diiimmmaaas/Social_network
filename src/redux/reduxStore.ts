import {applyMiddleware, combineReducers, compose, createStore, Store} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {navbarReducer} from "./navbarReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import {appReducer} from "./app-reducer";

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

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store: Store<RootStoreType, any> = createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)));


// let store: Store<RootStoreType, any> = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store