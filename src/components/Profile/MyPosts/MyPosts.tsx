import React, {ChangeEvent} from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
    PostDataType
} from "../../../redux/profileReducer";


type MyPostsPropsType = {
    postsData: Array<PostDataType>
    addPost: () => void
    updateNewPostText: (text: string) => void
    newPostText: string
}

export const MyPosts = (props: MyPostsPropsType) => {
    let postsElements = props.postsData.map((p) => <Post key={p.id} message={p.message} likeCounts={p.likeCounts}/>)

    const onAddPost = () => {
        props.addPost()
    }

    const onPostChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
        let newText = event.currentTarget.value
        props.updateNewPostText(newText)
    }

    return (
        <div className={classes.content_posts}>
            <h3>My posts</h3>
            <div className={classes.new_post}>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}





