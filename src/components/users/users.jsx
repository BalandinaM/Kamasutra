import React from "react";
import style from './users.module.css';
import { NavLink } from 'react-router-dom';
import avatar from '../../assets/image/avatar.png';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      if (i < 10) {
        pages.push(i);
      } else {
        break;
      }
    }

    return (
      <section className={style.users}>
        <h2 className={style.title}>Добавь еще друзей!</h2>
        <div className={style.wrapPages}>
          {pages.map(p => {
            return <span key={pages.indexOf(p)} className={props.currentPage === p ? style.currentPage : style.page}
            onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
          })}
        </div>
        <ul className={style.list}>
          { props.usersData.map(u =>
            <li className={style.item} key={u.id}>
            <div className={style.leftBlock}>
              <img className={style.img} src={u.photos.small != null ? u.photos.small : avatar } alt={`Фото ${u.name} ${u.surname}`} width='40' height='40'/>
              {u.followed
                ? <button onClick={() => props.unfollow(u.id)} className={style.item_button} >Unfollow</button>
                : <button onClick={() => props.follow(u.id)} className={style.item_button} >Follow</button> }
            </div>
            <NavLink className={style.link} to={'/users/' + props.id}>
              <div className={style.info}>
                <p className={style.name}>{u.name}&#32;<span>{u.surname != null ? u.fullName.surname : "Unknown"}</span></p>
                <p className={style.title}>{u.status}</p>
              </div>
              <div className={style.location}>
                <p>{"u.location.country,"}</p>
                <p>{"u.location.city"}</p>
              </div>
            </NavLink>
        </li>
        )}
        </ul>
        <button className={style.button}>Показать больше возможных друзей</button>
      </section>
    )
  }

export default Users;
