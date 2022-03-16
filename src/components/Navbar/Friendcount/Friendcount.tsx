import classes from "./Friendscount.module.css";
import React from "react";
import {FriendsCountDataType} from "../../../redux/state";
import { FriendItem } from "./Frienditem/Frienditem";

type FriendCountPropsType = {
    friendsCountData: Array<FriendsCountDataType>
}

export const FriendCount: React.FC<FriendCountPropsType> = (props) => {
    let friendCountElement = props.friendsCountData.map((f, index) => <FriendItem key={index} id={f.id} src={f.src} name={f.name}/>)

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


