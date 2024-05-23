import React from "react";
import { NavLink } from 'react-router-dom';
import u from './usersItem.module.css';

let UserItem = (props) => {

  let path = '/users/' + props.id;
  //debugger;
  // let getStatus = () => {
  //   let status;
  //   if (props.followed === false) {
  //     status = 'Follow'
  //   } else {
  //     status = 'Unfollow'
  //   }
  //   return status;
  // };



  // let onStatusChange = () => {
  //   debugger;
  //   let userId = props.id;

  //   if (props.followed === false) {
  //     props.follow(userId);
  //   } else {
  //     props.unfollow(userId);
  //   }
  // }

  let f = () => {
    let id = props.id
    props.follow(id);
  }

  return (
    <li className={u.item}>
      <div className={u.leftBlock}>
        <img className={u.img} src={props.hrefImg} alt={`Фото ${props.name} ${props.surname}`} width='40' height='40'/>
        {/* <button onClick={onStatusChange} className={u.button} followed={props.followed} id={props.id}>{getStatus()}</button> */}
        {/* <button className={u.button} followed={props.followed} id={props.id}>{getStatus()}</button> */}
        {props.followed
          ? <button onClick={() => props.unfollow(props.id)} className={u.button} >Unfollow</button>
          : <button onClick={ f } className={u.button} >Follow</button> }
      </div>
      <NavLink className={u.link} to={path}>
        <div className={u.info}>
          <p className={u.name}>{props.name}&#32;<span>{props.surname}</span></p>
          <p className={u.title}>{props.title}</p>
        </div>
        <div className={u.location}>
          <p>{`${props.country},`}</p>
          <p>{props.city}</p>
        </div>
      </NavLink>
    </li>
  )
}

export default UserItem;
