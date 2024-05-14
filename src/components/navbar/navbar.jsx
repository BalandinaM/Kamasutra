import React from 'react';
import n from './navbar.module.css';
import NavListContainer from './navList/navListContainer';
import SideBarContainer from './sideBar/sidebarContainer';

const Navbar = () => {
  // debugger;
  return <nav className={n.nav}>
    <NavListContainer />
    <SideBarContainer />
  </nav>
}

export default Navbar;
