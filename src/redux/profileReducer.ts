import {profileAPI} from "../api/api";
import {ThunkType} from "./usersReducer";
import {v1} from "uuid";

const ADD_POST = 'ADD-POST'
const SET_PROFILE = 'SET-PROFILE'
const SET_STATUS = 'SET-STATUS'

let initialState = {
    postsData: [
        {id: v1(), message: "Hi, how are you?", likeCounts: 10},
        {id: v1(), message: "It's my first post", likeCounts: 30},
    ],
    profile: null,
    status: ''
}


export type ProfileReducerType = {
    postsData: Array<PostDataType>
    profile: ProfileType | null
    status: string
}

export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string,
        website: null,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: null,
        github: string,
        mainLink: null
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

export type PostDataType = {
    id: string
    message: string
    likeCounts: number
}

export type ActionType = AddPostActionType
    | SetProfileActionType
| SetStatusActionType

export const profileReducer = (state: ProfileReducerType = initialState, action: ActionType): ProfileReducerType => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: v1(),
                message: action.newPostText,
                likeCounts: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}

export type AddPostActionType = {
    type: 'ADD-POST'
    newPostText: string
}

export type SetProfileActionType = {
    type: 'SET-PROFILE'
    profile: ProfileType
}

export type SetStatusActionType = {
    type: 'SET-STATUS'
    status: string
}

// action creator
export const addPost = (newPostText: string): AddPostActionType => ({type: ADD_POST, newPostText})
export const setUsersProfile = (profile: ProfileType): SetProfileActionType => ({type: SET_PROFILE, profile})
export const setUserStatus = (status:string): SetStatusActionType => ({type: SET_STATUS, status})



// thunk creator
export const getUserProfile = (userID: string): ThunkType => {
    return (dispatch) => {
        profileAPI.getProfile(userID).then(response => {
            dispatch(setUsersProfile(response.data))
        })
    }
}

export const getUserStatus = (userID: string): ThunkType => {
    return (dispatch) => {
        profileAPI.getStatus(userID).then(response => {
            dispatch(setUserStatus(response.data))
        })
    }
}

export const updateUserStatus = (status: string): ThunkType => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0){
                dispatch(setUserStatus(status))
            }
        })
    }
}



