/*import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {navbarReducer} from "./navbarReducer";

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
    dispatch: (action: ActionType) => void
}*/

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
/*

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
    dispatch(action) {

        this._state.profile = profileReducer(this._state.profile, action)
        this._state.dialogs = dialogsReducer(this._state.dialogs, action)
        this._state.navbar = navbarReducer(this._state.navbar, action)

        this._callSubscriber()
    },
}

export default store
*/

