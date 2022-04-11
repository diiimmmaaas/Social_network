import React, {JSXElementConstructor} from "react"
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootStoreType} from "../../redux/reduxStore";
import {ProfileType, setUsersProfile} from "../../redux/profileReducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";


type MapStatePropsType = {
    profile: ProfileType | null;
}
type mapDispatchToPropsType = {
    setUsersProfile: (profile: ProfileType) => void
}

export type ProfileContainerPropsType = MapStatePropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        // @ts-ignore
        let userID = this.props.router.params.userID
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID)
            .then(response => {
                this.props.setUsersProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: RootStoreType):MapStatePropsType => {
    return {
        profile: state.profile.profile
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

export default connect(mapStateToProps, {setUsersProfile})(withRouter(ProfileContainer))
