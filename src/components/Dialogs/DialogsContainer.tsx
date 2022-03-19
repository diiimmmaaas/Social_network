import React from 'react';
import classes from './Dialogs.module.css';
import {
    DialogsDataType,
    MessagesDataType, SendMessageActionType,
    sendMessageCreator,
    UpdateNewMessageBodyActionType,
    updateNewMessageBodyCreator
} from '../../redux/dialogsReducer';
import {Dialogs} from "./Dialogs";


export type DialogsContainerType = {
    dispatch: (action: UpdateNewMessageBodyActionType
        | SendMessageActionType) => void
    dialogsData: Array<DialogsDataType>,
    messagesData: Array<MessagesDataType>
    newMessageBody: string
}

export const DialogsContainer: React.FC<DialogsContainerType> = (props) => {

    const sendMessage = () => {
        props.dispatch(sendMessageCreator())
    }

    const updateNewMessageBody = (body:string) => {
        props.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <Dialogs sendMessage={sendMessage}
                 updateNewMessageBody={updateNewMessageBody}
                 dialogsData={props.dialogsData}
                 messagesData={props.messagesData}
                 newMessageBody={props.newMessageBody}/>
    )
}
