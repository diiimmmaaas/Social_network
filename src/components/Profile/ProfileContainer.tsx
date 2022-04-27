import React, {JSXElementConstructor} from "react"
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootStoreType} from "../../redux/reduxStore";
import {getUserProfile, ProfileType} from "../../redux/profileReducer";
import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";
import {ThunkType} from "../../redux/usersReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStatePropsType = {
    profile: ProfileType | null;
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
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: RootStoreType): MapStatePropsType => {
    return {
        profile: state.profile.profile,
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


let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent))
