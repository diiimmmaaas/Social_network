import React from 'react'
import {Header} from "./Header";
import { connect } from 'react-redux';
import {RootStoreType} from "../../redux/reduxStore";
import {logout} from "../../redux/auth-reducer";
import {ThunkType} from "../../redux/usersReducer";


type MapStatePropsType = {
    isAuth: boolean,
    login: string | null
}

type MapDispatchToPropsType = {
    logout: () => ThunkType
}

export type ProfileContainerPropsType = MapStatePropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<ProfileContainerPropsType> {

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

export default connect(mapStateToProps, {logout})
// @ts-ignore
(HeaderContainer)