const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

let initialState = {
    users: []
}

export type UsersReducerType = {
    users: Array<UsersType>
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

export const usersReducer = (state: UsersReducerType = initialState, action: FollowActionType | UnFollowActionType | setUsersActionType): UsersReducerType => {

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
            return {...state, users: [...state.users, ...action.users]}
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

export const followAC = (userId: number): FollowActionType => ({type: FOLLOW, userId})
export const unfollowAC = (userId: number): UnFollowActionType => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: Array<UsersType>): setUsersActionType => ({type: SET_USERS, users})


