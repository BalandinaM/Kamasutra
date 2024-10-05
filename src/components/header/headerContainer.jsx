import React from "react";
import Header from "./header";
import { connect } from "react-redux";
import { logout } from '../../redux/authReducer';


class HeaderContainer extends React.Component {


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

export default connect(mapStateToProps, {logout}) (HeaderContainer);
