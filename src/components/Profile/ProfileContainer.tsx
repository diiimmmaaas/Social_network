import React, {JSXElementConstructor} from "react"
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootStoreType} from "../../redux/reduxStore";
import {getUserProfile, getUserStatus, ProfileType, updateUserStatus} from "../../redux/profileReducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {ThunkType} from "../../redux/usersReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { compose } from "redux";


type MapStatePropsType = {
    profile: ProfileType | null;
    status: string
}
type mapDispatchToPropsType = {
    getUserProfile: (userId: string) => ThunkType
    getUserStatus: (userId: string) => ThunkType
    updateUserStatus: (status: string) => ThunkType
}

export type ProfileContainerPropsType = MapStatePropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        // @ts-ignore
        let userID = this.props.router.params.userID  // в userId приходит undefined, нужно ИСПРАВИТЬ как-то
        if (!userID) {
            userID = 23014
        }
        this.props.getUserProfile(userID)
        this.props.getUserStatus(userID)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}
                     status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}
            />
        )
    }
}

let mapStateToProps = (state: RootStoreType): MapStatePropsType => {
    return {
        profile: state.profile.profile,
        status: state.profile.status
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
    connect(mapStateToProps, {getUserProfile,getUserStatus, updateUserStatus}),
    withRouter,
    //withAuthRedirect,
)(ProfileContainer)
