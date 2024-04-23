import React from 'react';
import n from './navbar.module.css';
import NavItem from './navItem/navItem';

const Navbar = () => {
  return <nav className={n.nav}>
    <ul className={n.list}>
      <NavItem item='Profile' active='active'/>
      <NavItem item='Messages'/>
      <NavItem item='News'/>
      <NavItem item='Music'/>
      <NavItem item='Settings'/>
    </ul>
  </nav>
}

export default Navbar;
