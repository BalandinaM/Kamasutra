import React from 'react';
import d from './dialogsItem.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;

  return (
    <li className={d.item}>
      <NavLink className = { dialog => dialog.isActive ? d.active : '' } to={path}>
        <img className={d.img} src={props.hrefImg} alt={`Фото ${props.userName}`} width='40' height='40' />
        <p className={d.userName}>{props.userName}</p>
      </ NavLink>
    </li>
  )
}

export default DialogItem;
