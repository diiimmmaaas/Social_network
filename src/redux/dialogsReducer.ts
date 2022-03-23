const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
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
        {
            id: 2,
            text: "How is your IT-kamasutra"
        },
        {
            id: 3,
            text: "Ey"
        },
    ],
    newMessageBody: ""
}

export type dialogsReducerType = {
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

export const dialogsReducer = (state: dialogsReducerType = initialState, action: UpdateNewMessageBodyActionType | SendMessageActionType): dialogsReducerType => {
    let stateCopy = {...state}
    const _updateNewMessageBody = (newBody: string) => {
        stateCopy.newMessageBody = newBody
    }
    const _sendMessage = () => {
        let body = stateCopy.newMessageBody
        stateCopy.newMessageBody = ""
        stateCopy.messagesData.push({id: 4, text: body})
    }

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            _updateNewMessageBody(action.newBody)
            return stateCopy;
        case SEND_MESSAGE:
            _sendMessage()
            return stateCopy;
        default:
            return stateCopy
    }
}

export type UpdateNewMessageBodyActionType = {
    type: 'UPDATE_NEW_MESSAGE_BODY'
    newBody: string
}
export type SendMessageActionType = {
    type: 'SEND_MESSAGE'
}

export const sendMessageCreator = (): SendMessageActionType => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (newBody: string): UpdateNewMessageBodyActionType =>
    ({type: UPDATE_NEW_MESSAGE_BODY, newBody: newBody})
