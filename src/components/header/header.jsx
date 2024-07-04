import React from 'react';
import h from './header.module.css';
import image from '../../assets/image/main-pin.svg'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={h.header}>
      <img src={image} alt="Картинка" />
      <div className={h.wrapLogin}>
        <div >
          <NavLink className={h.login_link}>Войти</NavLink>
        </div>
        <div>
          <NavLink className={h.login_link}>Зарегистрироваться</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
