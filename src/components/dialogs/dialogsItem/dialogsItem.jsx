import React from 'react';
import d from './dialogsItem.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;

  return (
    <li className={d.item}>
      <NavLink className = { dialog => dialog.isActive ? d.active : '' } to={path}>{props.name}</ NavLink>
    </li>
  )
}

export default DialogItem;
