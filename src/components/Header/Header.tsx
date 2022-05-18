import React from 'react';
import styles from "./Header.module.css";
import {NavLink} from "react-router-dom";
import logo from '../../assets/img/logo.jpg'
import { ThunkType } from '../../redux/reduxStore';


export type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logout: () => ThunkType
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="logo"/>
            </div>
            <div>
                {props.isAuth
                    ? <div className={styles.loginBlock}>
                        <div className={styles.login}>{props.login}</div>
                        <button onClick={props.logout}>{'X'}</button>
                    </div>
                    : <NavLink to="/login">Login</NavLink>
                }
            </div>
        </header>
    )
}
