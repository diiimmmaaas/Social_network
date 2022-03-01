import classes from "./Message.module.css";
import React from "react";

export type MessagePropsType = {
    id?: number
    text: string,
    src: string,
}

export const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={classes.message}>
            <div className={classes.avatar}>
                <img src={props.src}/>
            </div>
            <span>{props.text}</span>
        </div>
    )
}


