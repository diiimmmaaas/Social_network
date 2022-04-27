import React, {ComponentType} from 'react'
import { Navigate } from 'react-router-dom';
import {connect} from "react-redux";
import {RootStoreType} from "../redux/reduxStore";


type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state:RootStoreType):MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MapStateToPropsType) => {
        let {isAuth, ...restProps} = props

        if (!isAuth) return <Navigate to={'/login'}/>

        return <Component {...restProps as T}/>
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedRedirectComponent

}