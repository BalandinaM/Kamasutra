import React from 'react';
import { NavLink } from 'react-router-dom';
import f from './friendItem.module.css';

const FriendItem = (props) => {
  return (
        <li>
          <NavLink to={props.href} className={f.link}>
            <img className={f.img} src={props.hrefImg} alt={`Фото ${props.userName}`} width='40' height='40' />
            <p className={f.userName}>{props.userName}</p>
          </NavLink>
        </li>
  )
}

export default FriendItem;
