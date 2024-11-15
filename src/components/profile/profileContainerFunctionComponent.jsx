import React, { useEffect } from 'react';
import Profile from './profile';
import { connect } from 'react-redux';
import { getProfile, getUserStatus, savePhoto, updateStatus} from '../../redux/profileReducer';
import { useNavigate, useParams } from "react-router-dom";
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { initializeApp } from '../../redux/appReducer';

function ProfileContainer (props) {

  const {userId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (userId) {
      props.getProfile(userId);
      props.getUserStatus(userId);
      if (userId === props.authUserId) {
        console.log('owner!')
      }
    } else {
      navigate('/login', { replace: true });
    }
  }, [userId]);

        return (
          <Profile {...props}
          authUserId = {props.authUserId}
          profile = {props.profile}
          status={props.status}
          updateStatus={props.updateStatus}
          savePhoto={props.savePhoto} />
        )
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authUserId: state.auth.id,
})

export default compose(
  connect(mapStateToProps, {getProfile, getUserStatus, updateStatus, initializeApp, savePhoto}),
  withAuthRedirect
)(ProfileContainer);
