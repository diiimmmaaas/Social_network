import React from 'react';
import {
    SendMessageActionType,
    sendMessageCreator,
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
    }
}

let mapDispatchToProps = (dispatch: (action: SendMessageActionType) => void) => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}


const DialogsContainer =  compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

export default DialogsContainer

