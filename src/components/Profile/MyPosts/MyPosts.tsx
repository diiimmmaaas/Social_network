import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/state";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";


type MyPostsPropsType = {
    postsData:Array<PostPropsType>
    dispatch: (action:any, text?:string) => void
    newPostText: string
}

type PostPropsType = {
    id:number
    message:string
    likeCounts:number
}


export const MyPosts = (props:MyPostsPropsType) => {
    let postsElements = props.postsData.map((p) => <Post key={p.id} message={p.message} likeCounts={p.likeCounts}/>)

    let newPostElement:any = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let newText = newPostElement.current.value
        let action = updateNewPostTextActionCreator(newText)
        props.dispatch(action)
    }

    return (
        <div className={classes.content_posts}>
            <h3>My posts</h3>
            <div className={classes.new_post}>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}





