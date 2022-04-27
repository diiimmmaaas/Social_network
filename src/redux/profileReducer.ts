import {userAPI} from "../api/api";
import {ThunkType} from "./usersReducer";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_PROFILE = 'SET-PROFILE'

let initialState = {
    postsData: [
        {id: 1, message: "Hi, how are you?", likeCounts: 10},
        {id: 2, message: "It's my first post", likeCounts: 30},
    ],
    newPostText: "",
    profile: null
    /*{
        aboutMe: "",
        contacts: {
            facebook: "",
            website: null,
            vk: "",
            twitter: "",
            instagram: "",
            youtube: null,
            github: "",
            mainLink: null
        },
        lookingForAJob: false,
        lookingForAJobDescription: "",
        fullName: "",
        userId: 0,
        photos: {
            small: "",
            large: "",
        },
    }*/
}


export type ProfileReducerType = {
    postsData: Array<PostDataType>
    newPostText: string
    profile: ProfileType | null
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
    id: number
    message: string
    likeCounts: number
}

export type ActionType = AddPostActionType
    | UpdateNewPostTextActionType
    | SetProfileActionType

export const profileReducer = (state: ProfileReducerType = initialState, action: ActionType): ProfileReducerType => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCounts: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ""
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
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
}
export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type SetProfileActionType = {
    type: 'SET-PROFILE'
    profile: ProfileType
}

// action creator
export const addPost = (): AddPostActionType => ({type: ADD_POST})
export const updateNewPostText = (newText: string): UpdateNewPostTextActionType =>
    ({type: UPDATE_NEW_POST_TEXT, newText})
export const setUsersProfile = (profile: ProfileType): SetProfileActionType => ({type: SET_PROFILE, profile})

// thunk creator
export const getUserProfile = (userID: string): ThunkType => {
    return (dispatch) => {
        userAPI.getProfile(userID).then(response => {
            dispatch(setUsersProfile(response.data))
        })
    }
}
