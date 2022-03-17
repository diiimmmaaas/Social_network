import React, {ChangeEvent, KeyboardEvent} from 'react';
import classes from './Dialogs.module.css';
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {
    ActionType,
} from '../../redux/store';
import {DialogsDataType, MessagesDataType, sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogsReducer';


export type DialogsType = {
    dispatch: (action: ActionType) => void
    dialogsData: Array<DialogsDataType>,
    messagesData: Array<MessagesDataType>
    newMessageBody: string
}

export const Dialogs: React.FC<DialogsType> = (props) => {
    let dialogsElements = props.dialogsData.map((d, index) => <Dialog key={index} name={d.name} id={d.id}/>)  //создаем массив элементов после метода .map из dialogsData
    let messagesElements = props.messagesData.map((m, index) => <Message key={index} text={m.text}/>)  //создаем массив элементов после метода .map из messagesData

    const onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }

    const onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let body = event.currentTarget.value
        props.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={props.newMessageBody}
                                  placeholder={"Enter your message"}
                                  onChange={onNewMessageChange}
                        ></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
