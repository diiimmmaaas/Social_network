import classes from "./Frienditem.module.css";
import React from "react";

export type FriendItemPropsType = {
    id?:number
    src:string
    name:string
}

export const FriendItem: React.FC<FriendItemPropsType> = (props) => {
    return (
        <div className={classes.item}>
            <div className={classes.avatar}>
                <img src={props.src}/>
                <div className={classes.name}>
                    {props.name}
                </div>
            </div>
        </div>
    )
}
