import {RootStoreType} from "./reduxStore";
import {createSelector} from "reselect";

export const getUsers = (state: RootStoreType) => {
    return state.usersPage.users
}

// reselect, не нужный кусок кода, так как селектор очень простой и логика его высосана из пальца
export const getUserSuperSelector = createSelector( getUsers ,(users) => {
    return users.filter(u => true)
} )

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
