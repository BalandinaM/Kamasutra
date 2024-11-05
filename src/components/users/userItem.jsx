import React from "react";
import { NavLink } from 'react-router-dom';
import avatar from '../../assets/image/avatar.png';
import styled from "styled-components";

const UserItem = ({user, followingInProgress, unfollow, follow }) => {

    return (
        <Item key={user.id}>
            <LeftBlock>
              <NavLink to={'/profile/'+ user.id}>
                <UserPhoto
                  src={user.photos.small != null ? user.photos.small : avatar }
                  alt={`Фото ${user.name} ${user.surname}`}
                  width='40'
                  height='40'/>
              </NavLink>
              {user.followed
                ? <UserButton
                    disabled={followingInProgress.some(id => id === user.id)}
                    onClick={() => { unfollow(user.id)}}
                  >Unfollow</UserButton>

                : <UserButton
                    disabled={followingInProgress.some(id => id === user.id)}
                    onClick={() => {follow(user.id)}}
                  >Follow</UserButton> }
            </LeftBlock>
            <RightBlock>
              <Info>
                <Name>{user.name}&#32;<span>{user.surname != null ? user.fullName.surname : "Unknown"}</span></Name>
                <Status>{user.status}</Status>
              </Info>
              <Location>
                <p>{"user.location.country,"}</p>
                <p>{"user.location.city"}</p>
              </Location>
            </RightBlock>
        </Item>
    )
  }


const Item = styled.li`
  display: grid;
  grid-template-columns: 1fr 6fr;
  padding: 15px 0;
`;

const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  align-items: center;
`;

const UserPhoto = styled.img`
  border-radius: 50%;
  border: 3px solid #468f56;
  background-color: #D76F30;
  object-fit: cover;
  width: 40px;
  height: 40px;
`;

const UserButton = styled.button`
  display: block;
  box-sizing: border-box;
  padding: 3px 10px;
  background-color: #468f56;
  color:#172D13;
  font-size: 12px;
  border: none;
  border-radius: 5px;

  &:disabled {
    background-color: yellow;
  };
`;

const RightBlock = styled.div`
  display: grid;
  grid-template-columns: 6fr 1fr;
  text-decoration: none;
  padding: 10px 15px;
  border: 2px solid #D76F30;
  border-radius: 15px;
  background-color: #D76F30;
  color: #172D13;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: space-between;
`;

const Name = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`;

const Status = styled.p`
  font-size: 20px;
  margin: 0;
`
const Location = styled.div`
  text-align: right;
  font-size: 12px;

  & p {
    margin: 0;
  };
`

export default UserItem;
