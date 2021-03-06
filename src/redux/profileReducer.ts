import {profileAPI} from "../api/api";
import {v1} from "uuid";
import { ThunkType } from "./reduxStore";

const ADD_POST = 'ADD_POST'
const SET_PROFILE = 'SET_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO_ACCESS = 'SAVE_PHOTO_ACCESS'

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
    aboutMe?: string
    contacts?: {
        facebook: string,
        website: null,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: null,
        github: string,
        mainLink: null
    }
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    userId?: number
    photos: ProfilePhotosType
}

type ProfilePhotosType = {
    small: string
    large: string
}

export type PostDataType = {
    id: string
    message: string
    likeCounts: number
}

export type ProfileActionType = AddPostActionType
    | SetProfileActionType
    | SetStatusActionType
    | DeletePostActionType
    | SavePhotoAccessActionType

export const profileReducer = (state: ProfileReducerType = initialState, action: ProfileActionType): ProfileReducerType => {

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
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id !== action.postId)
            }
        case SAVE_PHOTO_ACCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default:
            return state
    }
}


export type AddPostActionType = ReturnType<typeof addPost>
export type SetProfileActionType = ReturnType<typeof setUsersProfile>
export type SetStatusActionType = ReturnType<typeof setUserStatus>
export type DeletePostActionType = ReturnType<typeof deletePost>
export type SavePhotoAccessActionType = ReturnType<typeof savePhotoAccess>


// action creator
export const addPost = (newPostText: string) => ({type: ADD_POST, newPostText} as const)
export const setUsersProfile = (profile: ProfileType) => ({type: SET_PROFILE, profile} as const)
export const setUserStatus = (status: string) => ({type: SET_STATUS, status} as const)
export const deletePost = (postId: string) => ({type: DELETE_POST, postId} as const)
export const savePhotoAccess = (photos: ProfilePhotosType) => ({
    type: SAVE_PHOTO_ACCESS,
    photos
} as const)


// thunk creator
export const getUserProfile = (userID: string): ThunkType => {
    return async (dispatch) => {
        let response = await profileAPI.getProfile(userID)
        dispatch(setUsersProfile(response.data))
    }
}

export const getUserStatus = (userID: string): ThunkType => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userID)
        dispatch(setUserStatus(response.data))
    }
}

export const updateUserStatus = (status: string): ThunkType => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    }
}

export const savePhoto = (file: File): ThunkType => {
    return async (dispatch) => {
        let response = await profileAPI.savePhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(savePhotoAccess(response.data.data.photos))
        }
    }
}



