import {AnyAction} from "redux";
import {userAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {RootStoreType} from "./reduxStore";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT'
const SET_IS_FETCHING = 'SET-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export type UsersReducerType = {
    users: Array<UsersType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>
}

export type UsersType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: {
        small: string | undefined
        large: string | undefined
    }
    followed: boolean
    status: null | string
}

export type ActionType = FollowActionType
    | UnFollowActionType
    | setUsersActionType
    | setCurrentPageType
    | setUsersTotalCountType
    | setIsFetchingACType
    | toggleIsFollowingProgressACType


export const usersReducer = (state: UsersReducerType = initialState, action: ActionType): UsersReducerType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_USERS_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export type FollowActionType = {
    type: 'FOLLOW'
    userId: number
}
export type UnFollowActionType = {
    type: 'UNFOLLOW'
    userId: number
}
export type setUsersActionType = {
    type: 'SET-USERS'
    users: Array<UsersType>
}
export type setCurrentPageType = {
    type: 'SET-CURRENT-PAGE'
    currentPage: number
}
export type setUsersTotalCountType = {
    type: 'SET-USERS-TOTAL-COUNT'
    totalCount: number
}
export type setIsFetchingACType = {
    type: 'SET-IS-FETCHING'
    isFetching: boolean
}
export type toggleIsFollowingProgressACType = {
    type: 'TOGGLE-IS-FOLLOWING-PROGRESS'
    isFetching: boolean
    userId: number
}


// action creators
export const followSuccess = (userId: number): FollowActionType => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId: number): UnFollowActionType => ({type: UNFOLLOW, userId})
export const setUsers = (users: Array<UsersType>): setUsersActionType => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number): setCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalCount: number): setUsersTotalCountType => ({
    type: SET_USERS_TOTAL_COUNT,
    totalCount
})
export const setIsFetching = (isFetching: boolean): setIsFetchingACType => ({
    type: SET_IS_FETCHING,
    isFetching
})
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number): toggleIsFollowingProgressACType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

// typing thunk
export type ThunkType = ThunkAction<void, RootStoreType, unknown, AnyAction>

// thunk creators
export const getUsers = (currentPage: number, pageSize: number): ThunkType => {
    return (dispatch) => {
        dispatch(setIsFetching(true))

        userAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setUsersTotalCount(data.totalCount))
        })
    }
}
export const follow = (userId: number): ThunkType => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        userAPI.followUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId))
            })
    }
}
export const unfollow = (userId: number): ThunkType => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        userAPI.unfollowUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId))
            })
    }
}

