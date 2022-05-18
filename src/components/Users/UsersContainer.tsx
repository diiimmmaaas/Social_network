import {connect} from "react-redux";
import {RootStoreType, ThunkType} from "../../redux/reduxStore";
import {
    follow,
    requestUsers, setCurrentPage,
    unfollow,
    UsersType
} from '../../redux/usersReducer';
import React from "react";
import {Users} from "./Users";
import {Prealoder} from "../common/Prealoder/Prealoder";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/usersSelectors";

interface UsersPropsType {
    users: Array<UsersType>
    portionSize: number
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    requestUsers: (currentPage: number, pageSize: number) => ThunkType
    follow: (userId: number) => ThunkType
    unfollow: (userId: number) => ThunkType
    setCurrentPage: (currentPage: number) => void
}

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.requestUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Prealoder/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   currentPage={this.props.currentPage}
                   followingInProgress={this.props.followingInProgress}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
            />
        </>
    }
}


const mapStateToProps = (state: RootStoreType) => {
    return {
        // selectors
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}


export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {requestUsers, follow, unfollow, setCurrentPage})
)(UsersContainer)