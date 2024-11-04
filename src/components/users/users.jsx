import React from "react";
import UserItem from "./userItem";
import Paginator from "../common/paginator/paginator";
import styled from "styled-components";

const Section = styled.section`
  padding: 25px;
`;

const Title = styled.h2`
  font-size: 20px;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 30px;
`;

const Button = styled.button`
  margin: 0 auto;
  display: block;
  box-sizing: border-box;
  padding: 8px 20px;
  background-color: #468f56;
  color:#172D13;
  font-size: 16px;
  border: none;
  border-radius: 5px;
`;

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, usersData, ...props}) => {
    return (
      <Section>
        <Title>Добавь еще друзей!</Title>

        <Paginator currentPage = {currentPage} totalUsersCount ={totalUsersCount} pageSize = {pageSize} onPageChanged = {onPageChanged} />

        <Ul>
          { usersData.map(u =>
              <UserItem user = {u} followingInProgress = {props.followingInProgress} key = {u.id} unfollow = {props.unfollow} follow = {props.follow}
              />
            )
          }
        </Ul>

        <Button>Показать больше возможных друзей</Button>

      </Section>
    )
  }

export default Users;


// currentPage = {currentPage} здесь обращаемся на прямую т.к. напрямую объявили в приходящих пропсах
// follow = {props.follow} тут и в аналогичных местах обращаемся через props т.к. напрямую не указывали, оно берется из "...props"
