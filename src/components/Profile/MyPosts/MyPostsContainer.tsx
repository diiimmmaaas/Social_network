import React from "react";
import classes from "./MyPosts.module.css";
import {
    addPostActionCreator,
    AddPostActionType,
    PostDataType,
    updateNewPostTextActionCreator, UpdateNewPostTextActionType
} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";


type MyPostsContainerPropsType = {
    postsData: Array<PostDataType>
    dispatch: (action: AddPostActionType | UpdateNewPostTextActionType) => void
    newPostText: string
}

export const MyPostsContainer = (props: MyPostsContainerPropsType) => {

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    const updateNewPostText = (newText: string) => {
        let action = updateNewPostTextActionCreator(newText)
        props.dispatch(action)
    }

    return (
        <MyPosts postsData={props.postsData}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 newPostText={props.newPostText}/>
    )
}





