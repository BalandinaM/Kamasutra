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
               addPost = {props.addPost}
               newPostText = {props.newPostText}
               updateNewPostText = {props.updateNewPostText}/>
    </div>
  )
}

export default Profile;
