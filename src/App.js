import React from 'react';
import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from './components/news/news';
import Music from './components/music/music';
import Settings from './components/settingsLink/settings';
import DialogsContainer from './components/dialogs/dialogsContainer';
import UsersContainer from './components/users/usersContainer';
import ProfileContainer from './components/profile/profileContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path='/profile/*'
                   element = { <ProfileContainer /> }/>
            <Route path='/dialogs'
                   element = { <DialogsContainer /> }/>
            <Route path='/users' element={ <UsersContainer /> }/>
            <Route path='/news' element = { <News /> }/>
            <Route path='/music' element = { <Music /> }/>
            <Route path='/settings' element = { <Settings /> }/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
