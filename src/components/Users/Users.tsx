import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/img/user.png";
import {UsersType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import {userAPI} from "../../api/api";


export type UsersFunctionalPropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UsersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    currentPage: number
    toggleIsFollowingProgress: (isFetching: boolean) => void
    followingInProgress: boolean
}


export const Users = (props: UsersFunctionalPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div className={styles.pagesCountOfUsers}>
                {pages.map(p => {
                    // @ts-ignore
                    return <span className={props.currentPage === p && styles.selectedPage}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={"/profile/" + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                 className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress} onClick={() => {
                                props.toggleIsFollowingProgress(true)
                                userAPI.unfollowUser(u).then(data => {
                                    if (data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                    props.toggleIsFollowingProgress(false)
                                })
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress} onClick={() => {
                                props.toggleIsFollowingProgress(true)
                                userAPI.followUser(u).then(data => {
                                    if (data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                    props.toggleIsFollowingProgress(false)
                                })
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {u.name}
                        </div>
                        <div>
                            {u.status}
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
            </div>)}
        </div>
    )
}