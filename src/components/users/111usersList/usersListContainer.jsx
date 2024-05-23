import { followAC, unfollowAC, setUsersAC } from "../../../redux/usersReducer";
import UsersList from "./usersList";
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

const UsersListContainer = connect(mapStateToProps, mapDispatchToProps)(UsersList);

export default UsersListContainer;
