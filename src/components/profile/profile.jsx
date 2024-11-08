import React from 'react';
import ProfileInfo from './profileInfo/profileInfo';
import MyPostsContainer from './myPosts/myPostsContainer';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
      <MyPostsContainer/>
    </div>
  )
}

export default Profile;
