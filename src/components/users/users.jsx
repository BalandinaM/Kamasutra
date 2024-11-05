import React from "react";
import UserItem from "./userItem";
import Paginator from "../common/paginator/paginator";
import styled from "styled-components";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, usersData, ...props}) => {
  return (
    <Section>
      <Title>Добавь еще друзей!</Title>
      <Ul>
        { usersData.map(u =>
            <UserItem user = {u} followingInProgress = {props.followingInProgress} key = {u.id} unfollow = {props.unfollow} follow = {props.follow}
            />
          )
        }
      </Ul>
      <Paginator currentPage = {currentPage} totalUsersCount ={totalUsersCount} pageSize = {pageSize} onPageChanged = {onPageChanged} />
    </Section>
  )
}

// currentPage = {currentPage} здесь обращаемся на прямую т.к. напрямую объявили в приходящих пропсах
// follow = {props.follow} тут и в аналогичных местах обращаемся через props т.к. напрямую не указывали, оно берется из "...props"

const Section = styled.section`
  padding: 25px;
`;

const Title = styled.h2`
  font-size: 20px;
  text-align: center;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 30px;
`;




export default Users;
