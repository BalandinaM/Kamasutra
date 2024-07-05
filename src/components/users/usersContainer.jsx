import React from "react";
import Users from "./users";
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from "../../redux/usersReducer";
import axios from "axios";
import Preloader from "../common/preloader/preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        {
          headers: {
            "API-KEY": "8312cd1f-3942-4c8e-84a0-fb6a8c65bd02",
            Authorization: "Bearer 7ccffc5e-7ccd-4422-b6c6-35f5402",
          },
        }
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
        {
          headers: {
            "API-KEY": "8312cd1f-3942-4c8e-84a0-fb6a8c65bd02",
            Authorization: "Bearer 7ccffc5e-7ccd-4422-b6c6-35f5402",
          },
        }
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader/> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          usersData={this.props.usersData}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    usersData: state.usersPage.usersData,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  }
}

export default connect(mapStateToProps,
  { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching,}
)(UsersContainer);
