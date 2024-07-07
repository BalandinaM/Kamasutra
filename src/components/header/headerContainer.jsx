import React from "react";
import Header from "./header";
import { connect } from "react-redux";
import { setUserData } from '../../redux/authReducer';
import { setUserProfile } from '../../redux/profileReducer';
import { authAPI, profileAPI } from "../../api/api";


class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI.getMyProfile()
      .then((data) => {
       //debugger;
        if (data.resultCode === 0) {
          let { id, login, email } = data.data;//днструктуризация чтобы много раз не писать response.data.data.login, response.data.data.email и т.д.
          this.props.setUserData(id, email, login);
          return id;
        }
      })
      .then((id) => {
        // debugger;
        profileAPI.getProfile(id)
          .then((data) => {
            //debugger;
            this.props.setUserProfile(data);
          });
      })
  }

  render ()
    {
      return (
        <Header {...this.props}></Header>
      )
    }
}

const mapStateToProps = (state) => ({
      isAuth: state.auth.isAuth,
      login: state.auth.login,
      profile: state.profilePage.profile,
    })

export default connect(mapStateToProps, {setUserData, setUserProfile}) (HeaderContainer);
