import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';

// let srcImg = 'https://img.freepik.com/free-photo/the-adorable-illustration-of-kittens-playing-in-the-forest-generative-ai_260559-483.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1714003200&semt=ais';
// let postsData = [
//   {id: 1, message: 'Hi, how are you?', like: '78'},
//   {id: 2, message: 'It is my second post!', like: '1'},
//   {id: 3, message: 'It is my first post! Hello, world! Hello, React!', like: '100'},
// ];

// let dialogsData = [
//   {id: 1, name: 'Sergey'},
//   {id: 2, name: 'Katy'},
//   {id: 3, name: 'Vera'},
//   {id: 4, name: 'Alise'},
//   {id: 5, name: 'Helen'},
//   {id: 6, name: 'Dimon'},
// ];

// let postData = [
//   {id: 1, message: 'Hi!'},
//   {id: 2, message: 'The style prop works like a normal style prop'},
//   {id: 3, message: 'You can pass a render prop as children to customize the content'},
//   {id: 4, message: 'Please note that this API is marked unstable and may be subject to breaking changes without a major release.'},
// ];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state={state}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
