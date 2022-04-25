import axios from "axios";
import {UsersType} from "../redux/usersReducer";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7a73dc56-f495-4768-82c1-8df723d12232"
    }
})


export const userAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => response.data)
    },
    unfollowUser(u: UsersType) {
        return instance.delete(`follow/${u.id}`)
            .then(response => response.data)
    },

    followUser(u: UsersType) {
        return instance.post(`follow/${u.id}`, {})
            .then(response => response.data)
    },
}

export const profileAPI = {
    setProfile(userID: string) {
        return instance.get(`profile/` + userID)
    }
}


