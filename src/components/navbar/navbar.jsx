import React from 'react';
import n from './navbar.module.css';
import NavItem from './navItem/navItem';

const Navbar = () => {
  return <nav className={n.nav}>
    <ul className={n.list}>
      <NavItem item='Profile' href='/profile'/>
      <NavItem item='Messages' href='/dialogs'/>
      <NavItem item='News' href='/news'/>
      <NavItem item='Music' href='/music'/>
      <NavItem item='Settings' href='/settings'/>
    </ul>
  </nav>
}

export default Navbar;
