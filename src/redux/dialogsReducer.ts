import {ActionType, DialogsType, SendMessageActionType, UpdateNewMessageBodyActionType} from "./state";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

export const dialogsReducer = (state: DialogsType, action: ActionType) => {
    const _updateNewMessageBody = (newBody: string) => {
        state.newMessageBody = newBody
    }
    const _sendMessage = () => {
        let body = state.newMessageBody
        state.newMessageBody = ""
        state.messagesData.push({id: 4, text: body})
    }

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            _updateNewMessageBody(action.newBody)
            return state;
        case SEND_MESSAGE:
            _sendMessage()
            return state;
        default:
            return state
    }
}

export const sendMessageCreator = ():SendMessageActionType => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (newBody: string):UpdateNewMessageBodyActionType =>
    ({type: UPDATE_NEW_MESSAGE_BODY, newBody: newBody})
