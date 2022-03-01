import React from 'react';
import classes from './Dialogs.module.css';
import {Dialog, DialogPropsType} from "./Dialog/Dialog";
import {Message, MessagePropsType} from "./Message/Message";


export type DialogsType = {
    dialogsData: Array<DialogPropsType>,
    messagesData: Array<MessagePropsType>
}

export const Dialogs:React.FC<DialogsType> = (props) => {
    let dialogsElements = props.dialogsData.map((d) => <Dialog key={d.id} name={d.name} id={d.id}/>)  //создаем массив элементов после метода .map из dialogsData
    let messagesElements = props.messagesData.map((m) => <Message key={m.id} text={m.text} src={m.src}/>)  //создаем массив элементов после метода .map из messagesData

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
