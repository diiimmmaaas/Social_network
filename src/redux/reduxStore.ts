import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {navbarReducer} from "./navbarReducer";

let reducers = combineReducers({
    profile : profileReducer,
    dialogs : dialogsReducer,
    navbar : navbarReducer
})

let store = createStore(reducers)

export default store