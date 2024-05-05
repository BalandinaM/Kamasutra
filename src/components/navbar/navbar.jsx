import React from 'react';
import n from './navbar.module.css';
import NavList from './navList/navList';
import SideBar from './sideBar/sidebar';

const Navbar = (props) => {
  //debugger;
  return <nav className={n.nav}>
    <NavList navList = {props.nav.navList}/>
    <SideBar friendsList = {props.aside}/>
  </nav>
}

export default Navbar;
