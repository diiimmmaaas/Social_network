import React from 'react'
import {Header} from "./Header";
import axios from "axios";
import { connect } from 'react-redux';
import {RootStoreType} from "../../redux/reduxStore";
import {setAuthUserData} from "../../redux/auth-reducer";


type MapStatePropsType = {
    isAuth: boolean,
    login: string | null
}

type MapDispatchToPropsType = {
    setAuthUserData: (
        id: number | null,
        login: string | null,
        email: string | null) => void
}

export type ProfileContainerPropsType = MapStatePropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setAuthUserData(id, login, email)
                }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state:RootStoreType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)