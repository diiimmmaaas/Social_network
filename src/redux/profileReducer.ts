import {ActionType, AddPostActionType, ProfileType, UpdateNewPostTextActionType} from "./state";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const profileReducer = (state: ProfileType, action: ActionType) => {
    const _addPost = () => {
        let newPost = {
            id: 5,
            message: state.newPostText,
            likeCounts: 0
        };

        state.postsData.push(newPost)
        state.newPostText = ""
    }
    const _updateNewPostText = (newText: string) => {
        state.newPostText = newText
    }

    switch (action.type) {
        case ADD_POST:
            _addPost()
            return state;
        case UPDATE_NEW_POST_TEXT:
            _updateNewPostText(action.newText)
            return state;
        default:
            return state
    }
}

export const addPostActionCreator = ():AddPostActionType => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (newText: string):UpdateNewPostTextActionType =>
    ({type: UPDATE_NEW_POST_TEXT, newText: newText})
