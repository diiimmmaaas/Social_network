import React from 'react';
import classes from './Dialogs.module.css';
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {
    DialogsDataType,
    MessagesDataType
} from '../../redux/dialogsReducer';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../FormControls/FormControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";



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

type AddMessageFormDataType = {
    newMessageBody: string
}

const maxLength50 = maxLengthCreator(50)

export const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={'newMessageBody'}
                       placeholder={'Enter your name'}
                       validate={[requiredField, maxLength50]}
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<AddMessageFormDataType>({form: 'dialodAddMessageForm'})(AddMessageForm)
