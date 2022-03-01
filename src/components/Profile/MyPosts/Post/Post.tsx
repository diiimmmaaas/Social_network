import React from "react";
import classes from "./Post.module.css";

export type PostPropsType = {
    message:string
    likeCounts:number
}

function Post(props:PostPropsType) {
    return (
        <div className={classes.item}>
            <img src="https://cdn.kanobu.ru/articles/pics/7e6dc974-43f4-4ad0-9a55-2465566e9662.jpg" alt=""/>
            {props.message}
            <div>
                <span>Like</span>
                {props.likeCounts}
            </div>
        </div>
    )
}

export default Post;