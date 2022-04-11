import React from "react"
import {Profile} from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import {RootStoreType} from "../../redux/reduxStore";
import { ProfileType, setUsersProfile} from "../../redux/profileReducer";


interface ProfileContainerPropsType {
    setUsersProfile: (profile: ProfileType) => void
    profile: ProfileType
}


class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

let mapStateToProps = (state: RootStoreType) => {
    return {
        profile: state.profile.profile
    }
}

export default connect(mapStateToProps, {setUsersProfile})(ProfileContainer)