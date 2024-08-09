import React from 'react';
import h from './header.module.css';
import image from '../../assets/image/main-pin.svg'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={h.header}>
      <img src={image} alt="Картинка" />
      {props.isAuth ? (
        <div className={h.wrapLogin}>
          <NavLink className={h.login_link}>{props.login}</NavLink>
          <button className={h.login_link} onClick={props.logout}>Log out</button>
        </div>
      ) : (
        <NavLink to="./login" className={h.login_link}>
          Sign On
        </NavLink>
      )}
    </header>
  );
};

export default Header;
