import React from 'react';
import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
// eslint-disable-next-line
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from './components/news/news';
import Music from './components/music/music';
import Settings from './components/settingsLink/settings';

function App(props) {

  // let srcImg = 'https://img.freepik.com/free-photo/the-adorable-illustration-of-kittens-playing-in-the-forest-generative-ai_260559-483.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1714003200&semt=ais';
  // let postsData = [
  //   {id: 1, message: 'Hi, how are you?', like: '78'},
  //   {id: 2, message: 'It is my second post!', like: '1'},
  //   {id: 3, message: 'It is my first post! Hello, world! Hello, React!', like: '100'},
  // ]

  // let dialogsData = [
  //   {id: 1, name: 'Sergey'},
  //   {id: 2, name: 'Katy'},
  //   {id: 3, name: 'Vera'},
  //   {id: 4, name: 'Alise'},
  //   {id: 5, name: 'Helen'},
  //   {id: 6, name: 'Dimon'},
  // ]

  // let postData = [
  //   {id: 1, message: 'Hi!'},
  //   {id: 2, message: 'The style prop works like a normal style prop'},
  //   {id: 3, message: 'You can pass a render prop as children to customize the content'},
  //   {id: 4, message: 'Please note that this API is marked unstable and may be subject to breaking changes without a major release.'},
  // ]

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            {/* <Route path='/profile' element={ <Profile postsData = {postsData} srcImg = {srcImg}/> }/> */}
            <Route path='/profile' element = { <Profile postsData = {props.postsData} srcImg = {props.srcImg}/> }/>
            <Route path='/dialogs' element={ <Dialogs dialogsData = {props.dialogsData} postData = {props.postData}/> }/>
            <Route path='/news' element={ <News /> }/>
            <Route path='/music' element={ <Music /> }/>
            <Route path='/settings' element={ <Settings /> }/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
