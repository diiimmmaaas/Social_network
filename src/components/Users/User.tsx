import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/img/user.png";
import {ThunkType, UsersType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";


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
        <div>
                <span>
                    <div>
                        <NavLink to={"/profile/" + user.id}>
                            <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                                 className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
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
                </span>
            <span>
                    <span>
                        <div>
                            {user.name}
                        </div>
                        <div>
                            {user.status}
                        </div>
                    </span>
                    <span>
                        <div>
                            {"u.location.country"}
                        </div>
                        <div>
                            {"u.location.city"}
                        </div>
                    </span>
                </span>
        </div>

    )
}