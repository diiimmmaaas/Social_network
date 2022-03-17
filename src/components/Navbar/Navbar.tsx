import React from "react";
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import {FriendCount} from "./Friendcount/Friendcount";
import { FriendsCountDataType } from "../../redux/navbarReducer";


export type NavbarPropsType = {
    friendsCountData:Array<FriendsCountDataType>
}

export const Navbar:React.FC<NavbarPropsType> = (props) => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile"
                         className={navData => navData.isActive ? classes.active : classes.item}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs"
                         className={navData => navData.isActive ? classes.active : classes.item}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news"
                         className={navData => navData.isActive ? classes.active : classes.item}>News</NavLink></div>
            <div className={classes.item}>
                <NavLink to="/music"
                         className={navData => navData.isActive ? classes.active : classes.item}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/setting"
                         className={navData => navData.isActive ? classes.active : classes.item}>Setting</NavLink>
            </div>

            <FriendCount friendsCountData={props.friendsCountData}/>
        </nav>
    )
}

