import React from 'react';
import FriendsList from './friendsList/friendsList';
import s from './sidebar.module.css';
//import NavList from './navList/navList';

const SideBar = (props) => {
  return (
    <aside className={s.aside}>
      {/* <h3>Сейчас онлайн</h3> */}
      <FriendsList friendsList = {props.friendsList}/>
    </aside>
  )
}

export default SideBar;
