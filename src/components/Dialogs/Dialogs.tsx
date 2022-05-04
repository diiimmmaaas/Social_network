import React from 'react';
import classes from './Dialogs.module.css';
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {
    DialogsDataType,
    MessagesDataType
} from '../../redux/dialogsReducer';
import {Field, reduxForm} from "redux-form";


export type DialogsType = {
    sendMessage: (newMessageBody: string) => void
    dialogsData: Array<DialogsDataType>,
    messagesData: Array<MessagesDataType>
    newMessageBody: string
    isAuth: boolean
}

export const Dialogs: React.FC<DialogsType> = (props) => {
    let dialogsElements = props.dialogsData.map((d, index) => <Dialog key={index} name={d.name} id={d.id}/>)  //создаем массив элементов после метода .map из dialogsData
    let messagesElements = props.messagesData.map((m, index) => <Message key={index} text={m.text}/>)  //создаем массив элементов после метода .map из messagesData

    const addNewMessage = (values: any) => {
        let newMessageBody = values.newMessageBody
        props.sendMessage(newMessageBody)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}

type AddMessageFormPropsType = {}

export const AddMessageForm: React.FC<AddMessageFormPropsType> = (props) => {
    return (
        // @ts-ignore
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newMessageBody'} placeholder={'Enter your name'}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form: 'dialodAddMessageForm'
})(AddMessageForm)
