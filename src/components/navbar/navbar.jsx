import React from 'react';
import n from './navbar.module.css';
import NavList from './navList/navList';

const Navbar = (props) => {
  return <nav className={n.nav}>
    <NavList navList = {props.state.navList}/>
  </nav>
}

export default Navbar;
