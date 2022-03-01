import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs, DialogsType} from "./components/Dialogs/Dialogs";
import {Route, Routes} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";


type PostsDataType = {
    id: number
    message: string
    likeCounts: number
}

type friendsCountDataType = {
    id:number
    name:string
    src:string
}

type ProfileType = {
    postsData:Array<PostsDataType>
}

type NavbarType = {
    friendsCountData:Array<friendsCountDataType>
}

type AppPropsType = {
    profile:ProfileType
    dialogs:DialogsType
    navbar:NavbarType
    newPostText:string
    dispatch: (action:any) => void
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
                           />}/>
                    <Route path="/news/*" element={<News/>}/>
                    <Route path="/music/*" element={<Music/>}/>
                    <Route path="/setting/*" element={<Setting/>}/>
                </Routes>
            </div>
        </div>
    )
}

