import React from "react";
import Header from "./header";
import axios from "axios";
import { connect } from "react-redux";
import { setUserData } from '../../redux/authReducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/auth/me`,
        {
          headers: {
            "API-KEY": "8312cd1f-3942-4c8e-84a0-fb6a8c65bd02",
            Authorization: "Bearer 80a37311-ca79-4d3e-9c60-f9f4cf4b3bf0",
          },
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        debugger;
        if (response.data.resultCode === 0) {
          let { id, login, email } = response.data.data;
          this.props.setUserData(id, email, login);
        }
      });
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
    })

export default connect(mapStateToProps, {setUserData}) (HeaderContainer);
