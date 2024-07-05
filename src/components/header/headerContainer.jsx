import React from "react";
import Header from "./header";
import axios from "axios";
import { connect } from "react-redux";
import { setUserData } from '../../redux/authReducer';
import { setUserProfile } from '../../redux/profileReducer';


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
        // debugger;
        if (response.data.resultCode === 0) {
          let { id, login, email } = response.data.data;//днструктуризация чтобы много раз не писать response.data.data.login, response.data.data.email и т.д.
          this.props.setUserData(id, email, login);
          return id;
        }
      })
      .then((id) => {
        // debugger;
        axios
          .get(
            `https://social-network.samuraijs.com/api/1.0/profile/`+ id,
            {
              headers: {
                "API-KEY": "8312cd1f-3942-4c8e-84a0-fb6a8c65bd02",
                Authorization: "Bearer cc8ad68d-99fe-4f27-b6af-cd1b10f297cf",
              },
            }
          )
          .then((response) => {
            // debugger;
            this.props.setUserProfile(response.data);
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
