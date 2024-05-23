import React from "react";
import UserItem from './userItem/userItem';
import u from './usersList.module.css';

let UsersList = (props) => {
  let usersElements = props.usersData.usersData.map
  (u => <UserItem
    followed={u.followed}
    key={u.id}
    hrefImg={u.hrefImg}
    name={u.fullName.name}
    surname={u.fullName.surname}
    id={u.id}
    title={u.title}
    country={u.location.country}
    city={u.location.city}/>)

  return (
    <ul className={u.list}>
      { usersElements }
    </ul>
  )
}

export default UsersList;
