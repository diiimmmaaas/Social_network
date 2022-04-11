import React from "react";
import styles from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/Profileinfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profileReducer";

type ProfilePropsType = {
    profile: ProfileType | null
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={styles.container}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}
