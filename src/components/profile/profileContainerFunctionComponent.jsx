import React, { useState, useEffect } from 'react';
import Profile from './profile';
import { connect } from 'react-redux';
import { getProfile, getUserStatus, savePhoto, updateStatus} from '../../redux/profileReducer';
import { useParams} from "react-router-dom";
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { initializeApp } from '../../redux/appReducer';
//import ClipLoader from "react-spinners/ClipLoader";
//import { withRouter } from '../../hoc/withRouter';

// const withRouter = WrappedComponent => props => {
//   const params = useParams();
//   return (
//       <WrappedComponent
//           {...props}
//           params={params}
//       />
//   );
// };

function ProfileContainer (props) {
  //const history = useHistory();
  // const params = useParams();
  // console.log(params);

  //  //let userId = params.userId;
  //  console.log(params.userId);

  // const [userId, setUserId] = useState( params.userId || 31298);

  const {userId} = useParams();

  useEffect(() => {
    if (userId) {
      props.getProfile(userId);
      props.getUserStatus(userId);
    } else {
      console.log('no userId')
    }
  }, [userId]);

        return (
          <Profile {...props}
          //isOwner = {!this.props.params.userId}
          profile = {props.profile}
          status={props.status}
          updateStatus={props.updateStatus}
          savePhoto={props.savePhoto} />
        )
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
})

export default compose(
  connect(mapStateToProps, {getProfile, getUserStatus, updateStatus, initializeApp, savePhoto}),
  //withRouter,
  withAuthRedirect
)(ProfileContainer);
