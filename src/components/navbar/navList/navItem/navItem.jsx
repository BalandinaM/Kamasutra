import React from 'react';
import n from './navItem.module.css';
import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
  return (
  <li className={n.item}>
    <NavLink className = { navData => navData.isActive ? n.active : n.item } to={props.href}>{props.item}</ NavLink>
  </li>
  )
}

export default NavItem;
