import React from 'react';
import classes from './Dialogs.module.css';
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import { DialogsDataType, MessagesDataType } from '../../redux/state';


export type DialogsType = {
    dialogsData: Array<DialogsDataType>,
    messagesData: Array<MessagesDataType>
    newMessageBody: string
}

export const Dialogs:React.FC<DialogsType> = (props) => {
    let dialogsElements = props.dialogsData.map((d) => <Dialog key={d.id} name={d.name} id={d.id}/>)  //создаем массив элементов после метода .map из dialogsData
    let messagesElements = props.messagesData.map((m) => <Message key={m.id} text={m.text} src={m.src}/>)  //создаем массив элементов после метода .map из messagesData

/*    const onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }

    const onNewMessageChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
        let body = event.currentTarget.value
        props.dispatch(updateNewMessageBodyCreator(body))
    }*/
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={props.newMessageBody}
                                   placeholder={"Enter your message"}
                    ></textarea></div>
                    <div><button>Send</button></div>
                </div>
            </div>
        </div>
    )
}
