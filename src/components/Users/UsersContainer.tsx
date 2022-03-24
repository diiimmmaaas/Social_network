import {connect} from "react-redux";
import {Users} from "./Users";
import {RootStoreType} from "../../redux/reduxStore";
import {
    followAC,
    FollowActionType,
    setUsersAC,
    setUsersActionType,
    unfollowAC,
    UnFollowActionType,
    UsersType
} from '../../redux/usersReducer';

const mapStateToProps = (state:RootStoreType) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: (action: FollowActionType | UnFollowActionType | setUsersActionType) => void) => {
    return {
        follow: (userId: number)  => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number)  => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UsersType>)  => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)