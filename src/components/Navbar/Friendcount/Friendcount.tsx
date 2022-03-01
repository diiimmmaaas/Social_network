import classes from "./Friendscount.module.css";
import React from "react";
import {FriendItem} from "./Frienditem/Frienditem";

type FriendCountPropsType = {
    friendsCountData: Array<ObjectFromArray>
}

type  ObjectFromArray = {
    src:string
    name:string
    id?:number
}

export const FriendCount: React.FC<FriendCountPropsType> = (props) => {
    let friendCountElement = props.friendsCountData.map((f: any) => <FriendItem id={f.id} src={f.src} name={f.name}/>)

    return (
        <div className={classes.friendCount}>
            <div className={classes.title}>
                Friends
            </div>
            <div className={classes.items}>
                {friendCountElement}
            </div>
        </div>
    )
}


