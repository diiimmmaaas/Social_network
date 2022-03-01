import React from "react";
import classes from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

export type DialogPropsType = {
    name: string
    id: number
}

export const Dialog: React.FC<DialogPropsType> = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={`${classes.dialog} ${classes.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
