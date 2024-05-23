import React from "react";
import UsersListContainer from './usersList/usersListContainer';
import u from './users.module.css';

let Users = () => {
  return (
    <section className={u.users}>
      <h2 className={u.title}>Добавь еще друзей!</h2>
      <UsersListContainer />
      <button className={u.button}>Показать больше возможных друзей</button>
    </section>
  )
}

export default Users;
