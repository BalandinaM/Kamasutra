import React from 'react';
import ProfileInfo from './profileInfo/profileInfo';
import MyPostsContainer from './myPosts/myPostsContainer';

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo
      isOwner={props.authUserId === props.profile.userId}
      profile={props.profile}
      status={props.status}
      updateStatus={props.updateStatus}
      savePhoto={props.savePhoto}/>
      <MyPostsContainer/>
    </div>
  )
}

export default Profile;
