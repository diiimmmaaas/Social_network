import styles from "./Profileinfo.module.css";
import React, { ChangeEvent } from "react";
import {ProfileType} from "../../../redux/profileReducer";
import {Prealoder} from "../../common/Prealoder/Prealoder";
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";
import userPhoto from "../../../assets/img/user.png";
import { ThunkType } from "../../../redux/reduxStore";

export type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => ThunkType
    savePhoto: (file:  File) => ThunkType
    isOwner: boolean
}

interface Event<T = EventTarget> {
    target: T;
    // ...
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Prealoder/>
    }

    const onMainPhotoSelected = (e: Event<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
            <div className={styles.userBanner}>
                <div className={styles.avatar}>
                    <div className={styles.photo}>
                        <img src={props.profile.photos.small || userPhoto} alt={''}/>
                    </div>
                    {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                    <div>{props.profile.fullName}</div>
                </div>
                <div className={styles.description}>
                    <ProfileStatusWithHooks status={props.status}
                                            updateUserStatus={props.updateUserStatus} />
                </div>
            </div>
    )
}
