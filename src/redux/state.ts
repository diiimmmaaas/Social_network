
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
    id : number
    text: string
    src: string
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
    subscribe: (observer:()=>void) => void
    _addPost: () => void
    _updateNewPostText: (newText: string) => void
    _updateNewMessageBody: (newBody: string) => void
    _sendMessage: () => void
    dispatch: (action: any) => void
}

let store:StoreType = {
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
                    text: "Hi",
                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU"
                },
                {id: 2, text: "How is your IT-kamasutra", src: "https://html5css.ru/howto/img_avatar2.png"},
                {
                    id: 3,
                    text: "Ey",
                    src: "https://www.vokrug.tv/pic/person/e/e/5/4/ee54d6e76295bf9d955c93fdd9e2285a.jpeg"
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
    _updateNewPostText(newText: string) {
        this._state.profile.newPostText = newText
        this._callSubscriber()
    },
    _updateNewMessageBody(newBody: string) {
        this._state.dialogs.newMessageBody = newBody
        this._callSubscriber()
    },
    _sendMessage() {
        let body = this._state.dialogs.newMessageBody
        this._state.dialogs.newMessageBody = ""
        this._state.dialogs.messagesData.push({id: 4, text: body, src: ""})
        this._callSubscriber()
    },
    dispatch(action: any) {
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

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (newText: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: newText})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (newBody: string) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, newBody: newBody})

export default store
