import React from 'react';
import classes from './Dialogs.module.css';
import {
    SendMessageActionType,
    sendMessageCreator,
    UpdateNewMessageBodyActionType,
    updateNewMessageBodyCreator
} from '../../redux/dialogsReducer';
import {Dialogs} from "./Dialogs";
import { connect } from 'react-redux';
import {RootStoreType} from "../../redux/reduxStore";

// react-redux connect
let mapStateToProps = (state: RootStoreType) => {
    return {
        dialogsData: state.dialogs.dialogsData,
        messagesData: state.dialogs.messagesData,
        newMessageBody: state.dialogs.newMessageBody
    }
}

let mapDispatchToProps = (dispatch: (action: UpdateNewMessageBodyActionType | SendMessageActionType) => void) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
