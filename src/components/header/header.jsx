import React from 'react';
import h from './header.module.css';
import image from '../../assets/image/main-pin.svg'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={h.header}>
      <img src={image} alt="Картинка" />
        <div className={h.wrapLogin}>
          <div>
            {
              props.isAuth ?
              <NavLink className={h.login_link}>{props.login}</NavLink> :
              <NavLink to='./login' className={h.login_link}>Sign On</NavLink>
            }
          </div>
        </div>
    </header>
  );
};

export default Header;
