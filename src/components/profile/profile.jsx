import React from 'react';
//import p from './profile.module.css';
import MyPosts from './myPosts/myPosts';
import ProfileInfo from './profileInfo/profileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postsData = {props.state.postsData}
               srcImg = {props.state.srcImg}
               dispatch = {props.dispatch}
               newPostText = {props.newPostText}/>
    </div>
  )
}

export default Profile;
