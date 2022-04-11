import styles from "./Profileinfo.module.css";
import React from "react";
import {ProfileType} from "../../../redux/profileReducer";
import {Prealoder} from "../../common/Prealoder/Prealoder";

export type ProfileInfoPropsType = {
    profile: ProfileType | null
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Prealoder/>
    }
    return (
        <>
            <div className={styles.userBanner}>
                <div className={styles.avatar}>
                    <img src={props.profile.photos.small}/>
                    <div>{props.profile.fullName}</div>
                </div>
            </div>
{/*            <div className={classes.content_img}>
                <img
                    src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                    alt=""/>
            </div>
            <div className={classes.content_description}>
                <img src={props.profile.photos.large} />
                <div>{props.profile.fullName}</div>
            </div>*/}
        </>
    )
}
