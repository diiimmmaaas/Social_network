const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

export type ProfileType = {
    postsData: Array<PostDataType>
    newPostText: string
}

export type PostDataType = {
    id: number
    message: string
    likeCounts: number
}

export type DialogsType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    newMessageBody: string
}

export type DialogsDataType = {
    id: number
    name: string
}

export type MessagesDataType = {
    id: number
    text: string
}

export type NavbarType = {
    friendsCountData: Array<FriendsCountDataType>
}

export type FriendsCountDataType = {
    id: number
    src: string
    name: string
}

export type StateType = {
    profile: ProfileType
    dialogs: DialogsType
    navbar: NavbarType
}

export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    getState: () => StateType
    subscribe: (observer: () => void) => void
    _addPost: () => void
    _updateNewPostText: (newText: string) => void
    _updateNewMessageBody: (newBody: string) => void
    _sendMessage: () => void
    dispatch: (action: ActionType) => void
}

export type ActionType = AddPostActionType | UpdateNewPostTextActionType | UpdateNewMessageBodyActionType | SendMessageActionType

export type AddPostActionType = {
    type:'ADD-POST'
}

export type UpdateNewPostTextActionType = {
    type:'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type UpdateNewMessageBodyActionType = {
    type:'UPDATE_NEW_MESSAGE_BODY'
    newBody: string
}

export type SendMessageActionType = {
    type:'SEND_MESSAGE'
}

const store: StoreType = {
    _state: {
        profile: {
            postsData: [
                {id: 1, message: "Hi, how are you?", likeCounts: 10},
                {id: 2, message: "It's my first post", likeCounts: 30},
            ],
            newPostText: "",
        },
        dialogs: {
            dialogsData: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Leha"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Sasha"},
            ],
            messagesData: [
                {
                    id: 1,
                    text: "Hi"
                },
                {id: 2,
                    text: "How is your IT-kamasutra"
                },
                {
                    id: 3,
                    text: "Ey"
                },
            ],
            newMessageBody: ""
        },
        navbar: {
            friendsCountData: [
                {id: 1, src: "https://schoolsw3.com/w3images/avatar6.png", name: "Serega"},
                {
                    id: 2,
                    src: "https://yt3.ggpht.com/ytc/AKedOLQf5MBcFSDzo2FeZIXSqafCvdRMGjW2C-0j8RpD=s900-c-k-c0x00ffffff-no-rj",
                    name: "Marina"
                },
                {id: 1, src: "https://html5css.ru/w3images/avatar2.png", name: "Dima"},
            ]
        }

    },
    _callSubscriber() {
        console.log("State changed")
    },
    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    _addPost() {
        let newPost = {
            id: 5,
            message: this._state.profile.newPostText,
            likeCounts: 0
        };

        this._state.profile.postsData.push(newPost)
        this._state.profile.newPostText = ""
        this._callSubscriber()
    },
    _updateNewPostText(newText) {
        this._state.profile.newPostText = newText
        this._callSubscriber()
    },
    _updateNewMessageBody(newBody) {
        this._state.dialogs.newMessageBody = newBody
        this._callSubscriber()
    },
    _sendMessage() {
        let body = this._state.dialogs.newMessageBody
        this._state.dialogs.newMessageBody = ""
        this._state.dialogs.messagesData.push({id: 4, text: body})
        this._callSubscriber()
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            this._addPost()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._updateNewPostText(action.newText)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._updateNewMessageBody(action.newBody)
        } else if (action.type === SEND_MESSAGE) {
            this._sendMessage()
        }
    },
}

export const addPostActionCreator = ():AddPostActionType => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (newText: string):UpdateNewPostTextActionType =>
    ({type: UPDATE_NEW_POST_TEXT, newText: newText})

export const sendMessageCreator = ():SendMessageActionType => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (newBody: string):UpdateNewMessageBodyActionType =>
    ({type: UPDATE_NEW_MESSAGE_BODY, newBody: newBody})

export default store
