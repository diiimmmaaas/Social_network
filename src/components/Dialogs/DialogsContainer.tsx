import React from 'react';
import {
    SendMessageActionType,
    sendMessageCreator,
    UpdateNewMessageBodyActionType,
    updateNewMessageBodyCreator
} from '../../redux/dialogsReducer';
import {Dialogs} from "./Dialogs";
import { connect } from 'react-redux';
import {RootStoreType} from "../../redux/reduxStore";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

// react-redux connect
let mapStateToProps = (state: RootStoreType) => {
    return {
        dialogsData: state.dialogs.dialogsData,
        messagesData: state.dialogs.messagesData,
        newMessageBody: state.dialogs.newMessageBody,
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


export const DialogsContainer =  compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
