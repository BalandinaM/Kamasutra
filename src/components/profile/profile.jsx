import React from 'react';
//import p from './profile.module.css';
//import MyPosts from './myPosts/myPosts';
import ProfileInfo from './profileInfo/profileInfo';
import MyPostsContainer from './myPosts/myPostsContainer';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer />
    </div>
  )
}

export default Profile;
