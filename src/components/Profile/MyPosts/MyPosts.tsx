import React, {ChangeEvent} from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
    addPostActionCreator,
    AddPostActionType,
    PostDataType,
    updateNewPostTextActionCreator, UpdateNewPostTextActionType
} from "../../../redux/profileReducer";


type MyPostsPropsType = {
    postsData: Array<PostDataType>
    dispatch: (action: AddPostActionType| UpdateNewPostTextActionType) => void
    newPostText: string
}

export const MyPosts = (props: MyPostsPropsType) => {
    let postsElements = props.postsData.map((p) => <Post key={p.id} message={p.message} likeCounts={p.likeCounts}/>)

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    const onPostChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
        let newText = event.currentTarget.value
        let action = updateNewPostTextActionCreator(newText)
        props.dispatch(action)
    }

    return (
        <div className={classes.content_posts}>
            <h3>My posts</h3>
            <div className={classes.new_post}>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
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





