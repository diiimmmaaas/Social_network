const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
        postsData: [
            {id: 1, message: "Hi, how are you?", likeCounts: 10},
            {id: 2, message: "It's my first post", likeCounts: 30},
        ],
        newPostText: "",
    }


export type ProfileReducerType = {
    postsData: Array<PostDataType>
    newPostText: string
}

export type PostDataType = {
    id: number
    message: string
    likeCounts: number
}

export const profileReducer = (state: ProfileReducerType = initialState, action: AddPostActionType | UpdateNewPostTextActionType):ProfileReducerType => {

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
        default:
            return state
    }
}

export type AddPostActionType = {
    type:'ADD-POST'
}
export type UpdateNewPostTextActionType = {
    type:'UPDATE-NEW-POST-TEXT'
    newText: string
}

export const addPostActionCreator = ():AddPostActionType => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (newText: string):UpdateNewPostTextActionType =>
    ({type: UPDATE_NEW_POST_TEXT, newText: newText})
