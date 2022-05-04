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
}

export type dialogsReducerType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
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

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 4, text: body}]

            }
        default:
            return state
    }
}

export type UpdateNewMessageBodyActionType = {
    type: 'UPDATE_NEW_MESSAGE_BODY'
    newBody: string
}
export type SendMessageActionType = {
    type: 'SEND_MESSAGE'
    newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string): SendMessageActionType => ({type: SEND_MESSAGE, newMessageBody})
