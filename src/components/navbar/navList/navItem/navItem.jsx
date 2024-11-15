import React, { useEffect } from 'react';
import n from './navItem.module.css';
import { Navigate, NavLink, useLocation } from 'react-router-dom';
//import { getProfile, getUserStatus} from '../../../../redux/profileReducer';


const NavItem = ({item, href, userId, getProfile, getUserStatus}) => {
  const location = useLocation();
  // const handleClick = (event) => {
  //   console.log('click')
  //   //event.preventDefault();
  //   getProfile(userId);
  //   getUserStatus(userId);
  // }
 // console.log(typeof(location.pathname));

  // useEffect (() => {
  //   if (userId) {
  //     console.log('Маршрут изменился:', location.pathname);
  //     getProfile(userId);
  //     getUserStatus(userId);
  //   }
  // }, [userId, location.pathname]);

  return (
  <li className={n.item}>
    {/* <NavLink className = { navData => navData.isActive ? n.active : n.item } to={href}>{item}</ NavLink> */}
    <NavLink className = { navData => navData.isActive ? n.active : n.item } to={item === 'Profile' ? (href + userId) : href}>{item}</ NavLink>

  </li>
  )
}

export default NavItem;
