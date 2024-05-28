import React from "react";
import style from './users.module.css';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import avatar from '../../assets/image/avatar.png';

class Users extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
      headers: {
        'API-KEY': '8312cd1f-3942-4c8e-84a0-fb6a8c6',
        "Authorization": "Bearer b35147cb-1f7d-4981-81af-242cf9c",
      }
    }).then(response => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
      // взять с сервака реальные данные, но их там слишком много
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
      headers: {
        'API-KEY': '8312cd1f-3942-4c8e-84a0-fb6a8c6',
        "Authorization": "Bearer b35147cb-1f7d-4981-81af-242cf9c",
      }
    }).then(response => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
      // взять с сервака реальные данные, но их там слишком много
    });
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

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
        <div>
          {pages.map(p => {
            return <span className={this.props.currentPage === p && style.currentPage}
            onClick={(e) => {this.onPageChanged(p)}}>{p}</span>
          })}
        </div>
        <ul className={style.list}>
          { this.props.usersData.map(u =>
            <li className={style.item} key={u.id}>
            <div className={style.leftBlock}>
              <img className={style.img} src={u.photos.small != null ? u.photos.small : avatar } alt={`Фото ${u.name} ${u.surname}`} width='40' height='40'/>
              {u.followed
                ? <button onClick={() => this.props.unfollow(u.id)} className={style.item_button} >Unfollow</button>
                : <button onClick={() => this.props.follow(u.id)} className={style.item_button} >Follow</button> }
            </div>
            <NavLink className={style.link} to={'/users/' + this.props.id}>
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
}
export default Users;
