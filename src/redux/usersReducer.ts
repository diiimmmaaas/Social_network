const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2
}

export type UsersReducerType = {
    users: Array<UsersType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
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
        default:
            return state
    }
}

export type FollowActionType = {
    type: "FOLLOW"
    userId: number
}

export type UnFollowActionType = {
    type: "UNFOLLOW"
    userId: number
}

export type setUsersActionType = {
    type: "SET-USERS"
    users: Array<UsersType>
}

export type setCurrentPageType = {
    type: "SET-CURRENT-PAGE"
    currentPage: number
}

export type setUsersTotalCountType = {
    type: "SET-USERS-TOTAL-COUNT"
    totalCount: number
}

export const followAC = (userId: number): FollowActionType => ({type: FOLLOW, userId})
export const unfollowAC = (userId: number): UnFollowActionType => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: Array<UsersType>): setUsersActionType => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage: number): setCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCountAC = (totalCount: number): setUsersTotalCountType => ({
    type: SET_USERS_TOTAL_COUNT,
    totalCount
})


