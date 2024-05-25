import React from "react";
import style from './users.module.css';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import avatar from '../../assets/image/avatar.png';

let Users = (props) => {
  let path = '/users/' + props.id;

  let getUsers = () =>
  {
    if (props.usersData.usersData.length === 0) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users", {

      headers: {
        'API-KEY': '8312cd1f-3942-4c8e-84a0-fb6a8c6',
        "Authorization": "Bearer b35147cb-1f7d-4981-81af-242cf9c",
    }
    }).then(response => {
      props.setUsers(response.data.items);
    });
  }

    // props.setUsers([
    //   {id: 1, followed: false, fullName:  {name: 'Sergey', surname: 'Ivanov'}, location: {country: 'Belarus', city: 'Minsk'}, title: 'Hey-Hey!!!', hrefImg: 'https://img.freepik.com/free-photo/cute-dog-with-sunglasses-posing-for-portrait-generative-ai_188544-12590.jpg?size=626&ext=jpg&ga=GA1.1.867424154.1714348800&semt=ais',},
    //   {id: 2, followed: false, fullName: {name: 'Katy', surname: 'Petrova'}, location: {country: 'Russia', city: 'Moskow'}, title: 'Hey-Hey!!!', hrefImg: 'https://i.pinimg.com/736x/37/d1/28/37d12877e296094971827f1e8b909bd4.jpg',},
    //   {id: 3, followed: true, fullName: {name: 'Vera', surname: 'Ivanova'}, location: {country: 'Russia,', city: 'Orel'}, title: 'Hey-Hey!!!', hrefImg: 'https://avavatar.ru/images/full/47/HF24oiPlGyYzBjF2.jpg',},
    //   {id: 4, followed: false, fullName: {name: 'Alise', surname: 'Sidorova'}, location: {country: 'Russia', city: 'Ekaterinburg'}, title: 'Hey-Hey!!!', hrefImg: 'https://shapka-youtube.ru/wp-content/uploads/2021/10/ava-sobaka-v-kapyushone.jpg',},
    //   {id: 5, followed: true, fullName: {name: 'Helen', surname: 'Peterson'}, location: {country: 'Russia', city: 'Ekaterinburg'}, title: 'Hey-Hey!!!', hrefImg: 'https://kartinki.pics/uploads/posts/2022-05/1652237087_1-kartinkin-net-p-kartinki-na-avu-sobaki-1.jpg',},
    //   {id: 6, followed: true, fullName: {name: 'Dimon', surname: 'Petrov'}, location: {country: 'Russia', city: 'Ekaterinburg'}, title: 'Hey-Hey!!!', hrefImg: 'https://i.pinimg.com/originals/f8/2c/4d/f82c4d72749605a09c761cd0825ff330.jpg',},
    // ])
  }

  return (
    <section className={style.users}>
      <h2 className={style.title}>Добавь еще друзей!</h2>
      <button onClick={getUsers} className={style.item_button}>Get Friends</button>
      <ul className={style.list}>
        { props.usersData.usersData.map(u =>
          <li className={style.item} key={u.id}>
          <div className={style.leftBlock}>
            <img className={style.img} src={u.photos.small != null ? u.photos.small : avatar } alt={`Фото ${u.name} ${u.surname}`} width='40' height='40'/>
            {u.followed
              ? <button onClick={() => props.unfollow(u.id)} className={style.item_button} >Unfollow</button>
              : <button onClick={() => props.follow(u.id)} className={style.item_button} >Follow</button> }
          </div>
          <NavLink className={style.link} to={path}>
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
