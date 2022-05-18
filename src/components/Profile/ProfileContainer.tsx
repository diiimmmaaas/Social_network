import React, {JSXElementConstructor} from "react"
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootStoreType, ThunkType} from "../../redux/reduxStore";
import {getUserProfile, getUserStatus, ProfileType, savePhoto, updateUserStatus} from "../../redux/profileReducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {compose} from "redux";


type MapStatePropsType = {
    profile: ProfileType | null
    status: string
    authorizesUserId: number | null
    isAuth: boolean
}
type mapDispatchToPropsType = {
    getUserProfile: (userId: string) => ThunkType
    getUserStatus: (userId: string) => ThunkType
    updateUserStatus: (status: string) => ThunkType
    savePhoto: (file:  File) => ThunkType
}

export type ProfileContainerPropsType = MapStatePropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    refreshProfile() {
        // @ts-ignore
        let userID = this.props.router.params.userID // проблема с router, как-то нужно типизировать
        if (!userID) {
            userID = this.props.authorizesUserId
        }
        this.props.getUserProfile(userID)
        this.props.getUserStatus(userID)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        // @ts-ignore
        if (this.props.router.params.userID !== prevProps.router.params.userID) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props}
                // @ts-ignore
                     isOwner={!this.props.router.params.userID}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}
                     savePhoto={this.props.savePhoto}
            />
        )
    }
}

let mapStateToProps = (state: RootStoreType): MapStatePropsType => {
    return {
        profile: state.profile.profile,
        status: state.profile.status,
        authorizesUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}


//оболочка для классовой компонеты
export const withRouter = (Component: JSXElementConstructor<any>): JSXElementConstructor<any> => {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto}),
    withRouter,
    //withAuthRedirect,
)(ProfileContainer)
