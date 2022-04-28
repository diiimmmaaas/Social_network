import {connect} from "react-redux";
import {RootStoreType} from "../../redux/reduxStore";
import {
    follow,
    getUsers, setCurrentPage,
    ThunkType, unfollow,
    UsersType
} from '../../redux/usersReducer';
import React from "react";
import {Users} from "./Users";
import {Prealoder} from "../common/Prealoder/Prealoder";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {compose} from "redux";

interface UsersPropsType {
    users: Array<UsersType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    getUsers: (currentPage: number, pageSize: number) => ThunkType
    follow: (userId: number) => ThunkType
    unfollow: (userId: number) => ThunkType
    setCurrentPage: (currentPage: number) => void
}

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}


export default compose<React.ComponentType> (
    withAuthRedirect,
    connect(mapStateToProps, {getUsers, follow, unfollow, setCurrentPage})
)(UsersContainer)