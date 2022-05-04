import styles from "./Profileinfo.module.css";
import React from "react";
import {ProfileType} from "../../../redux/profileReducer";
import {Prealoder} from "../../common/Prealoder/Prealoder";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import {ThunkType} from "../../../redux/usersReducer";

export type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => ThunkType
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Prealoder/>
    }
    return (
        <>
            <div className={styles.userBanner}>
                <div className={styles.avatar}>
                    <img src={props.profile.photos.small} alt={''}/>
                    <div>{props.profile.fullName}</div>
                </div>
                <div className={styles.description}>
                    <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />
                </div>
            </div>
        </>
    )
}
