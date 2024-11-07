import React, { Component, lazy, Suspense  } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import ProfileContainer from './components/profile/profileContainer';
import HeaderContainer from './components/header/headerContainer';
import Login from './components/login/loginFormik';
import { connect } from "react-redux";
import { compose } from 'redux';
import { withRouter } from './hoc/withRouter';
import { initializeApp } from './redux/appReducer';
//import { getMyProfile } from './redux/authReducer';
const News = lazy(() => import('./components/news/news'));
const Music = lazy(() =>  import('./components/music/music'));
const Settings = lazy(() =>  import('./components/settingsLink/settings'));
const DialogsContainer = lazy(() =>  import('./components/dialogs/dialogsContainer'));
const UsersContainer = lazy(() =>  import('./components/users/usersContainer'));

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
    //this.props.getMyProfile();
    // if (!this.props.initialized) {
    //   return <ClipLoader/>
    // }
  };



  render() {


    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">

              <Suspense fallback={<ClipLoader />}>
                <Routes>
                  <Route path="/profile/*" element={<ProfileContainer />}>
                    <Route path=":userId" element={<ProfileContainer />}></Route>
                  </Route>
                  <Route path="/dialogs" element={<DialogsContainer/>} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/users" element={<UsersContainer />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/music" element={<Music />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </Suspense>

          </div>
        </div>
      </BrowserRouter>
    );
  }
}

let mapStateToProps = (state) => ({
  initialize: state.app.initialized,
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})
)(App);
