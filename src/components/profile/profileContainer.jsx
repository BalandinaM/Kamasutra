import React from 'react';
import Profile from './profile';
import { connect } from 'react-redux';
import { getProfile, getUserStatus, savePhoto, updateStatus} from '../../redux/profileReducer';
//import { useParams } from "react-router-dom";
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { withRouter } from '../../hoc/withRouter';

// const withRouter = WrappedComponent => props => {
//   const params = useParams();
//   return (
//       <WrappedComponent
//           {...props}
//           params={params}
//       />
//   );
// };

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.params.userId;
    console.log(userId);
    if (!userId) {
      userId = 31298;

      // if (!userId) {
      //     this.props.history.push("/login");
      // }
    }

    this.props.getProfile(userId)
    this.props.getUserStatus(userId)

  }

  render ()
    {
      return (
        <Profile {...this.props} profile = {this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} savePhoto={this.props.savePhoto}/>
      )
    }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
})

export default compose(
  connect(mapStateToProps, {getProfile, getUserStatus, updateStatus, savePhoto}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
