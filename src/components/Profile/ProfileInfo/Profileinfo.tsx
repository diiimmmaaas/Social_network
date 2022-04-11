import classes from "../Profile.module.css";
import React from "react";
import {ProfileType} from "../../../redux/profileReducer";

export type ProfileInfoPropsType = {
    profile: ProfileType
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <>
            <div className={classes.content_img}>
                <img
                    src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                    alt=""/>
            </div>
            <div className={classes.content_description}>
                <img src={props.profile.photos.large} />
                <div>{props.profile.fullName}</div>
            </div>
        </>
    )
}
