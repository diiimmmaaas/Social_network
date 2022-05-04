import React from "react";
import styles from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/Profileinfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profileReducer";
import {ThunkType} from "../../redux/usersReducer";

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => ThunkType
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={styles.container}>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateUserStatus={props.updateUserStatus}
            />
            <MyPostsContainer/>
        </div>
    )
}
