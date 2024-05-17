import React from 'react';
import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from './components/news/news';
import Music from './components/music/music';
import Settings from './components/settingsLink/settings';
import DialogsContainer from './components/dialogs/dialogsContainer';
import Users from './components/users/users';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path='/profile'
                   element = { <Profile /> }/>
            <Route path='/dialogs'
                   element = { <DialogsContainer /> }/>
            <Route path='/users' element={ <Users /> }/>
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
