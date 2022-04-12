import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {navbarReducer} from "./navbarReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./auth-reducer";

let reducers = combineReducers({
    profile : profileReducer,
    dialogs : dialogsReducer,
    navbar : navbarReducer,
    usersPage: usersReducer,
    auth: authReducer
})
export type RootStoreType = ReturnType<typeof reducers>

let store: Store<RootStoreType, any> = createStore(reducers)

export default store