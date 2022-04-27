import React, {JSXElementConstructor} from "react"
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootStoreType} from "../../redux/reduxStore";
import {getUserProfile, ProfileType} from "../../redux/profileReducer";
import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";
import {ThunkType} from "../../redux/usersReducer";


type MapStatePropsType = {
    profile: ProfileType | null;
    isAuth: boolean
}
type mapDispatchToPropsType = {
    getUserProfile: (userId: string) => ThunkType
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
    }

    render() {
        if (!this.props.isAuth) return <Navigate to={'/login'}/>
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: RootStoreType): MapStatePropsType => {
    return {
        profile: state.profile.profile,
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

export default connect(mapStateToProps, {getUserProfile})(withRouter(ProfileContainer))
