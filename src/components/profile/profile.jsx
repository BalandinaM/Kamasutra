import React from 'react';
import ProfileInfo from './profileInfo/profileInfo';
import MyPostsContainer from './myPosts/myPostsContainer';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
      isOwner={props.isOwner}
      profile={props.profile}
      status={props.status}
      updateStatus={props.updateStatus} s
      avePhoto={props.savePhoto}/>
      <MyPostsContainer/>
    </div>
  )
}

export default Profile;
