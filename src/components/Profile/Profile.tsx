import React from "react";
import classes from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/Profileinfo";

type ProfileType = {
    postsData: Array<PostPropsType>
    dispatch: (action:any) => void
    newPostText:string
}

type PostPropsType = {
    id:number
    message:string
    likeCounts:number
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
