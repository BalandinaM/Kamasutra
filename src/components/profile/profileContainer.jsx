import React from 'react';
import Profile from './profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer';
import { useParams } from "react-router-dom";
import { profileAPI } from '../../api/api';

const withRouter = WrappedComponent => props => {
  const params = useParams();
  return (
      <WrappedComponent
          {...props}
          params={params}
      />
  );
};

class ProfileContainer extends React.Component {

  componentDidMount() {
    // debugger;

    let userId = this.props.params.userId;
    if (!userId) {
      userId = 31298;
    }

    profileAPI.getProfile(userId)
      .then((data) => {
        //debugger;
        this.props.setUserProfile(data);
      });
  }

  render ()
    {
      return (
        <Profile {...this.props} profile = {this.props.profile}/>
      )
    }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
