import React from "react";
import classes from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/Profileinfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profileReducer";

type ProfilePropsType = {
    profile: ProfileType
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}
