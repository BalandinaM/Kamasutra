import React from 'react';
import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from './components/news/news';
import Music from './components/music/music';
import Settings from './components/settingsLink/settings';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar aside = {props.state.dialogsPage.dialogsData} nav = {props.state.navBar}/>
        <div className="app-wrapper-content">
          <Routes>
            {/* <Route path='/profile' element={ <Profile postsData = {postsData} srcImg = {srcImg}/> }/> */}
            <Route path='/profile' element = { <Profile state = {props.state.profilePage}
                                                        addPost = {props.addPost}
                                                        newPostText = {props.state.profilePage.newPostText}
                                                        updateNewPostText = {props.updateNewPostText}/> }/>
            <Route path='/dialogs' element = { <Dialogs state = {props.state.dialogsPage}/> }/>
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
