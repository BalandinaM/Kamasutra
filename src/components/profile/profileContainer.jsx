import React from 'react';
import Profile from './profile';
import { connect } from 'react-redux';
import { getProfile, getUserStatus } from '../../redux/profileReducer';
import { useParams } from "react-router-dom";
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

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
    let userId = this.props.params.userId;
    if (!userId) {
      userId = 31298;
    }

    this.props.getProfile(userId)
    this.props.getUserStatus(userId)

  }

  render ()
    {
      return (
        <Profile {...this.props} profile = {this.props.profile} status={this.props.profile.status}/>
      )
    }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
})

//let WithUrlDataContainerComponent = withRouter(ProfileContainer);

//export default connect(mapStateToProps, {getProfile})(WithUrlDataContainerComponent);

export default compose(
  connect(mapStateToProps, {getProfile, getUserStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
