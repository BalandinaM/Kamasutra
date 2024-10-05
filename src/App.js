import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from './components/news/news';
import Music from './components/music/music';
import Settings from './components/settingsLink/settings';
import DialogsContainer from './components/dialogs/dialogsContainer';
import UsersContainer from './components/users/usersContainer';
import ProfileContainer from './components/profile/profileContainer';
import HeaderContainer from './components/header/headerContainer';
import Login from './components/login/login';
import { connect } from "react-redux";
import { compose } from 'redux';
import { withRouter } from './hoc/withRouter';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/preloader/preloader';

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    // if (!this.props.initialized) {
    //   return <Preloader/>
    // }

    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <Routes>
              <Route path="/profile/*" element={<ProfileContainer />}>
                <Route path=":userId" element={<ProfileContainer />}></Route>
              </Route>
              <Route path="/dialogs" element={<DialogsContainer />} />
              <Route path="/login" element={<Login />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
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
