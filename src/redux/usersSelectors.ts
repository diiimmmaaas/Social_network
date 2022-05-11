import {RootStoreType} from "./reduxStore";

export const getUsers = (state: RootStoreType) => {
    return state.usersPage.users
}

export const getPageSize = (state: RootStoreType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: RootStoreType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: RootStoreType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: RootStoreType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: RootStoreType) => {
    return state.usersPage.followingInProgress
}
