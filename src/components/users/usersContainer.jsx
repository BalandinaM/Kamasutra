import React from "react";
import Users from "./users";
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from "../../redux/usersReducer";
import axios from "axios";

class UsersContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
      headers: {
        'API-KEY': '8312cd1f-3942-4c8e-84a0-fb6a8c6',
        "Authorization": "Bearer b35147cb-1f7d-4981-81af-242cf9c",
      }
    }).then(response => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
      headers: {
        'API-KEY': '8312cd1f-3942-4c8e-84a0-fb6a8c6',
        "Authorization": "Bearer b35147cb-1f7d-4981-81af-242cf9c",
      }
    }).then(response => {
      this.props.setUsers(response.data.items);
    });
  }

  render()
  { return <Users totalUsersCount={this.props.totalUsersCount}
                          pageSize ={this.props.pageSize}
                          currentPage={this.props.currentPage}
                          onPageChanged={this.onPageChanged}
                          usersData={this.props.usersData}
                          unfollow={this.props.unfollow}
                          follow={this.props.follow}
  />}

}

let mapStateToProps = (state) => {
  return {
    usersData: state.usersPage.usersData,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
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
    },

    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage));
    },

    setTotalUsersCount: (totalUsersCount) => {
      dispatch(setTotalUsersCountAC(totalUsersCount));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
