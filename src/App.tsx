import React, {Component, Suspense} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Routes} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import {NavbarReducerType} from "./redux/navbarReducer";
import UsersContainer from './components/Users/UsersContainer';
import {withRouter} from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from './components/Login/Login';
import {connect} from "react-redux";
import {ThunkType} from "./redux/usersReducer";
import {compose} from "redux";
import {RootStoreType} from "./redux/reduxStore";
import {initializeApp} from "./redux/app-reducer";
import {Prealoder} from "./components/common/Prealoder/Prealoder";

// React.lazy
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))


type AppPropsType = {
    navbar: NavbarReducerType
    initialized: boolean
    initializeApp: () => ThunkType
}

class App extends Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Prealoder/>
        }
        return (
            <div className={"app_wrapper"}>
                <HeaderContainer/>
                <Navbar friendsCountData={this.props.navbar.friendsCountData}/>
                <div className={"app_wrapper_content"}>
                    <Routes>
                        <Route path="/profile"
                               element={<Suspense fallback={<div>Loading...</div>}><ProfileContainer/></Suspense>}/>
                        <Route path='/profile/:userID'
                               element={<ProfileContainer/>}/>
                        <Route path='/dialogs/*'
                               element={<Suspense fallback={<div>Loading...</div>}><DialogsContainer/></Suspense>}/>
                        <Route path="/news/*" element={<News/>}/>
                        <Route path="/music/*" element={<Music/>}/>
                        <Route path="/users/*" element={<UsersContainer/>}/>
                        <Route path="/setting/*" element={<Setting/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: RootStoreType) => ({
    navbar: state.navbar,
    initialized: state.app.initialized
})

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)
