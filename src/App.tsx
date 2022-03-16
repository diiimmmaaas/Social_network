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
import {
    ActionType,
    AddPostActionType,
    DialogsType,
    NavbarType,
    ProfileType, SendMessageActionType,
    UpdateNewMessageBodyActionType,
    UpdateNewPostTextActionType
} from "./redux/state";

type AppPropsType = {
    profile:ProfileType
    dialogs:DialogsType
    navbar:NavbarType
    newPostText:string
    newMessageBody:string
    dispatch: (action: ActionType) => void
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

