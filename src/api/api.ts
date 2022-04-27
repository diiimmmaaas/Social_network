import axios from "axios";


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
    unfollowUser(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    followUser(userId: number) {
        return instance.post(`follow/${userId}`, {})
            .then(response => response.data)
    },
    getProfile(userID: string) {
        return instance.get(`profile/` + userID)
    }
}

export const authAPI = {
    me(){
        return instance.get(`auth/me`, {})
    }
}


