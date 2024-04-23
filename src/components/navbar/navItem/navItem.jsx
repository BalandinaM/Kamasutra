import React from 'react';
import n from './navItem.module.css';

const NavItem = (props) => {
  return (
  <li className={n.item}>
    <a className={`${n.link} ${n[props.active]}`} href='#g'>{props.item}</a>
  </li>
  )
}

export default NavItem;
