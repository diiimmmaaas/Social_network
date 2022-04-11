import {
    addPost,
    AddPostActionType,
    updateNewPostText, UpdateNewPostTextActionType
} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {RootStoreType} from "../../../redux/reduxStore";
import { connect } from "react-redux";

let mapStateToProps = (state: RootStoreType) => {
    return {
        postsData: state.profile.postsData,
        newPostText: state.profile.newPostText
    }
}

let mapDispatchToProps = (dispatch: (action: AddPostActionType | UpdateNewPostTextActionType) => void) => {

    return {
        addPost: () => {
            dispatch(addPost())
        },
        updateNewPostText: (newText: string) => {
            let action = updateNewPostText(newText)
            dispatch(action)
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)






