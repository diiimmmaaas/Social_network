import {
    ActionType,
    addPost,
} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {RootStoreType} from "../../../redux/reduxStore";
import { connect } from "react-redux";

let mapStateToProps = (state: RootStoreType) => {
    return {
        postsData: state.profile.postsData,
    }
}

let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {

    return {
        addPost: (newPostText: string) => {
            dispatch(addPost(newPostText))
        },
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)






