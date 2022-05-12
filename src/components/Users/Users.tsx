import React from 'react';
import {ThunkType, UsersType} from "../../redux/usersReducer";
import {Paginator} from "./Paginator";
import {User} from "./User";


export type UsersFunctionalPropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UsersType>
    currentPage: number
    followingInProgress: Array<number>
    follow: (userId: number) => ThunkType
    unfollow: (userId: number) => ThunkType
}


export const Users: React.FC<UsersFunctionalPropsType> = (
    {
        totalUsersCount,
        pageSize,
        onPageChanged,
        users,
        currentPage,
        followingInProgress,
        follow,
        unfollow,
    }
) => {
    return (
        <div>
            <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged}/>
            {users.map(u => <User key={u.id}
                                  user={u}
                                  followingInProgress={followingInProgress}
                                  follow={follow}
                                  unfollow={unfollow}/> )}
        </div>
    )
}