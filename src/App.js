import React, { Component, lazy, Suspense  } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import {HashRouter, Route, Routes} from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import ProfileContainer from './components/profile/profileContainerFunctionComponent';
import HeaderContainer from './components/header/headerContainer';
import Login from './components/login/Login';
import Home from './components/home/Home';
import { connect } from "react-redux";
import { compose } from 'redux';
import { withRouter } from './hoc/withRouter';
import { initializeApp } from './redux/appReducer';
const News = lazy(() => import('./components/news/news'));
const Music = lazy(() =>  import('./components/music/music'));
const Settings = lazy(() =>  import('./components/settingsLink/settings'));
const DialogsContainer = lazy(() =>  import('./components/dialogs/dialogsContainer'));
const UsersContainer = lazy(() =>  import('./components/users/usersContainer'));

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
    //this.props.getMyProfile();
    if (!this.props.initialized) {
      return <ClipLoader/>
    }
  };

/////может сделать компонент home как в учебнике, типа приветственной страницы приложения, которая будет загружаться изначально и отправлять логинитьСЯ ИЛИ АВТОРИЗОВЫВАТЬСЯ, И НЕ БУДЕТ ПРОБЛЕМЫ С ЗАГРУЗКОЙ ПРОФАЙЛА БЕЗ ИД

  render() {


    return (
      <HashRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">

              <Suspense fallback={<ClipLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
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
      </HashRouter>
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
