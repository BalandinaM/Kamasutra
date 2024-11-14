import React from "react";
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Добро пожаловать в социальную сетьдля настоящих Самураев!</h2>
      <p>Хыщ-хыщ!!!</p>
      <p>React, Redax ты, знать будешь крутоооо!</p>
      <p>Айтика-айтика-камасутрааааа!</p>
      <NavLink>Зарегистрироваться</NavLink>
      <NavLink to="login" >Авторизация</NavLink>
    </div>
  )
}

export default Home;
