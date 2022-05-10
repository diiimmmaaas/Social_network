import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
    PostDataType
} from "../../../redux/profileReducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import { Textarea } from "../../FormControls/FormControls";


type MyPostsPropsType = {
    postsData: Array<PostDataType>
    addPost: (newPostText: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.postsData.map((p) => <Post key={p.id} message={p.message} likeCounts={p.likeCounts}/>)

    const onAddPost = (values: any) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={classes.content_posts}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}


type AddNewPostFormDataType = {
    newPostText: string
}

const maxLength10 = maxLengthCreator(10)

export const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormDataType>> = (props) => {
    return (
        <form className={classes.new_post} onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPostText'}
                       component={Textarea}
                       validate={[requiredField, maxLength10]}
                       placeholder={'Post message'}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm<AddNewPostFormDataType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)





