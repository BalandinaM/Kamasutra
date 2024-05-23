import { followAC, unfollowAC, setUsersAC } from "../../redux/usersReducer";
import Users from "./users";
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    usersData: state.usersPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },

    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },

    setUsers: (users) => {
      dispatch(setUsersAC(users));
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
