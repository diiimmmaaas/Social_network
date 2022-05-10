import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7cffbd42-f90e-47ce-a60b-e74b78a84e14"
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
}

export const profileAPI = {
    getProfile(userID: string) {
        return instance.get(`profile/${userID}`)
    },
    getStatus(userID: string){
        return instance.get(`profile/status/${userID}`)
    },
    updateStatus(status: string){
        return instance.put(`profile/status/`, {status})
    },
}

export const authAPI = {
    me(){
        return instance.get(`auth/me`, {})
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post(`/auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`/auth/login`)
    }
}


