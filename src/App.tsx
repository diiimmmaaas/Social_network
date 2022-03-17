import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import {AddPostActionType, ProfileReducerType, UpdateNewPostTextActionType} from "./redux/profileReducer";
import {dialogsReducerType, SendMessageActionType, UpdateNewMessageBodyActionType} from "./redux/dialogsReducer";
import {NavbarReducerType} from "./redux/navbarReducer";

type AppPropsType = {
    profile:ProfileReducerType
    dialogs:dialogsReducerType
    navbar:NavbarReducerType
    newPostText:string
    newMessageBody:string
    dispatch: (action: AddPostActionType
        | UpdateNewPostTextActionType
        | UpdateNewMessageBodyActionType
        | SendMessageActionType) => void
}

export const App = (props: AppPropsType) => {
    return (
        <div className={"app_wrapper"}>
            <Header/>
            <Navbar friendsCountData={props.navbar.friendsCountData}/>
            <div className={"app_wrapper_content"}>
                <Routes>
                    <Route path="/profile/*"
                           element={<Profile
                               postsData={props.profile.postsData}
                               dispatch={props.dispatch}
                               newPostText={props.newPostText}
                           />}/>
                    <Route path='/dialogs/*'
                           element={<Dialogs
                               dispatch={props.dispatch}
                               dialogsData={props.dialogs.dialogsData}
                               messagesData={props.dialogs.messagesData}
                               newMessageBody={props.newMessageBody}
                           />}/>
                    <Route path="/news/*" element={<News/>}/>
                    <Route path="/music/*" element={<Music/>}/>
                    <Route path="/setting/*" element={<Setting/>}/>
                </Routes>
            </div>
        </div>
    )
}

