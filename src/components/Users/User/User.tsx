import React from 'react';
import styles from './User.module.css'
import userPhoto from "../../../assets/img/user.png";
import {UsersType} from "../../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import { ThunkType } from '../../../redux/reduxStore';


export type UserPropsType = {
    user: UsersType
    followingInProgress: Array<number>
    follow: (userId: number) => ThunkType
    unfollow: (userId: number) => ThunkType
}


export const User: React.FC<UserPropsType> = (
    {
        user,
        followingInProgress,
        unfollow,
        follow
    }
) => {
    return (
        <div className={styles.user}>
            <div className={styles.userAvatar}>
                <div className={styles.userPhoto}>
                    <NavLink to={"/profile/" + user.id}>
                        <img src={user.photos.small !== null ? user.photos.small : userPhoto}/>
                    </NavLink>
                </div>
                <div className={styles.userFollowingButton}>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      unfollow(user.id)
                                  }}>
                            Unfollow
                        </button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      follow(user.id)
                                  }}>
                            Follow
                        </button>}
                </div>
            </div>
            <div className={styles.userInfo}>
                <div className={styles.userName}>
                    <span>{user.name}</span>
                </div>
                <div className={styles.userStatus}>
                    <span>{user.status}</span>
                </div>
                <div className={styles.userLocation}>
                    <span>{"u.location.country"}</span>
                    <span>{"u.location.city"}</span>
                </div>
            </div>
        </div>

    )
}