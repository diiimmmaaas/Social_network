import React from 'react'
import styles from "./Users.module.css"
import {UsersType} from "../../redux/usersReducer";
import axios from 'axios';

type UsersPropsType = {
    users: Array<UsersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
}


export const Users = (props: UsersPropsType) => {
    if ( props.users.length === 0) {

/*        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {

        })*/
        props.setUsers([
            {
                id: 1,
                avatarUrl: "https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792__340.png",
                followed: false,
                fullName: "Dmitry",
                status: "I am a boss",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: 2,
                avatarUrl: "https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792__340.png",
                followed: true,
                fullName: "Sasha",
                status: "I am a boss too",
                location: {city: "Moscow", country: "Russia"}
            },
            {
                id: 3,
                avatarUrl: "https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792__340.png",
                followed: false,
                fullName: "Andrew",
                status: "I am a boss too",
                location: {city: "Kiev", country: "Ukraine"}
            },
        ])
    }

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.avatarUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                            : <button onClick={() => props.follow(u.id)}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {u.fullName}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                        <div>
                            {u.location.country}
                        </div>
                        <div>
                            {u.location.city}
                        </div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}