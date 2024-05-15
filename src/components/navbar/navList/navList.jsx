import React from 'react';
import n from './navList.module.css';
import NavItem from './navItem/navItem';

const NavList = (props) => {
  let navItems = props.navList.map(n => <NavItem key = {n.id} item={n.item} href={n.href}/>)

  return (
    <ul className={n.list}>
      { navItems }
    </ul>
  )
}

export default NavList;
