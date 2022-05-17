import styles from "./Profileinfo.module.css";
import React from "react";
import {ProfileType} from "../../../redux/profileReducer";
import {Prealoder} from "../../common/Prealoder/Prealoder";
import {ThunkType} from "../../../redux/usersReducer";
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";

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
            <div className={styles.userBanner}>
                <div className={styles.avatar}>
                    <div className={styles.photo}>
                        <img src={props.profile.photos.small} alt={''}/>
                    </div>
                    <div>{props.profile.fullName}</div>
                </div>
                <div className={styles.description}>
                    <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus} />
                </div>
            </div>
    )
}
