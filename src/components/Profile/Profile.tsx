import React from "react";
import classes from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/Profileinfo";
import {ActionType} from "../../redux/store";
import { PostDataType } from "../../redux/profileReducer";

type ProfileType = {
    postsData: Array<PostDataType>
    dispatch: (action:ActionType) => void
    newPostText:string
}

export const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                postsData={props.postsData}
                dispatch={props.dispatch}
                newPostText={props.newPostText}
            />
        </div>
    )
}
