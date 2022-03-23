import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {
    DialogsDataType,
    MessagesDataType
} from '../../redux/dialogsReducer';


export type DialogsType = {
    sendMessage: () => void
    updateNewMessageBody: (body:string) => void
    dialogsData: Array<DialogsDataType>,
    messagesData: Array<MessagesDataType>
    newMessageBody: string
}

export const Dialogs: React.FC<DialogsType> = (props) => {
    let dialogsElements = props.dialogsData.map((d, index) => <Dialog key={index} name={d.name} id={d.id}/>)  //создаем массив элементов после метода .map из dialogsData
    let messagesElements = props.messagesData.map((m, index) => <Message key={index} text={m.text}/>)  //создаем массив элементов после метода .map из messagesData
    const onSendMessageClick = () => {
        props.sendMessage()
    }

    const onNewMessageChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
        let body = event.currentTarget.value
        props.updateNewMessageBody(body)
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
