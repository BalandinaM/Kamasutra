import React from "react";
import style from './users.module.css';
import { NavLink } from 'react-router-dom';
import avatar from '../../assets/image/avatar.png';
// import axios from "axios";
//import { usersAPI } from "../../api/api";

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
            return <span
              key={ pages.indexOf(p) }
              className = { props.currentPage === p ?
              style.currentPage :
              style.page}
              onClick={(e) => {props.onPageChanged(p)}}>{p}
            </span>
          })}
        </div>
        <ul className={style.list}>
          { props.usersData.map(u =>
            <li className={style.item} key={u.id}>
            <div className={style.leftBlock}>
              <NavLink to={'/profile/'+ u.id}>
                <img className={style.img} src={u.photos.small != null ? u.photos.small : avatar } alt={`Фото ${u.name} ${u.surname}`} width='40' height='40'/>
              </NavLink>
              {u.followed
                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() =>//eсли массив содержит id
                  { props.unfollow(u.id);
                    // props.toggleFollowingProgress(true, u.id);//то отправляем в массив (через AC id пользователя и true что процесс идет)
                    // usersAPI.unFollow(u.id)
                    // .then((response) => {
                    //   //debugger;
                    //   if (response.data.resultCode === 0) {
                    //     props.unfollow(u.id)
                    //   }
                    //   props.toggleFollowingProgress(false, u.id); // после всех дел, удаляем процесс и id пользователся из массива
                    // });

                    }} className={style.item_button}

                  >Unfollow</button>

                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() =>
                  { props.follow(u.id);
                    // props.toggleFollowingProgress(true, u.id);
                    // usersAPI.follow(u.id)
                    // .then((response) => {
                    //   //debugger;
                    //   if (response.data.resultCode === 0) {
                    //     props.follow(u.id)
                    //   }
                    //   props.toggleFollowingProgress(false, u.id);
                    // });

                  }} className={style.item_button}

                  >Follow</button> }
            </div>
            <div className={style.rightBlock}>
              <div className={style.info}>
                <p className={style.name}>{u.name}&#32;<span>{u.surname != null ? u.fullName.surname : "Unknown"}</span></p>
                <p className={style.title}>{u.status}</p>
              </div>
              <div className={style.location}>
                <p>{"u.location.country,"}</p>
                <p>{"u.location.city"}</p>
              </div>
            </div>
        </li>
        )}
        </ul>
        <button className={style.button}>Показать больше возможных друзей</button>
      </section>
    )
  }

export default Users;
