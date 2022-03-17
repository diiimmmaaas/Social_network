import React from "react";
import classes from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/Profileinfo";
import {AddPostActionType, PostDataType, UpdateNewPostTextActionType} from "../../redux/profileReducer";

type ProfileType = {
    postsData: Array<PostDataType>
    dispatch: (action: AddPostActionType| UpdateNewPostTextActionType) => void
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
