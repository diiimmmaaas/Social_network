import classes from "./Message.module.css";
import React from "react";

export type MessagePropsType = {
    id?: number
    text: string,
}

export const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={classes.message}>
            <span>{props.text}</span>
        </div>
    )
}


