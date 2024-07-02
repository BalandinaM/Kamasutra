import React from 'react';
import Profile from './profile';
import axios from "axios";
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer';

class ProfileContainer extends React.Component {

  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/2`,
        {
          headers: {
            "API-KEY": "8312cd1f-3942-4c8e-84a0-fb6a8c65bd02",
            Authorization: "Bearer 7ccffc5e-7ccd-4422-b6c6-35f5402",
          },
        }
      )
      .then((response) => {
        // debugger;
        this.props.setUserProfile(response.data);
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

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
