import React from 'react';
import n from './navList.module.css';
import NavItem from './navItem/navItem';

const NavList = ({navList, userId, ...props}) => {
  let navItems = navList.map(n => <NavItem key = {n.id} item={n.item} href={n.href} userId={userId} props = {props}/>)

  return (
    <ul className={n.list}>
      { navItems }
    </ul>
  )
}

export default NavList;
