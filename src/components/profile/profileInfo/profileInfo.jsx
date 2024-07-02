import React from 'react';
import p from './profileInfo.module.css';
import Preloader from '../../common/preloader/preloader';
import { NavLink } from 'react-router-dom';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <section className={p.profileInfo}>
      <h2>Мой профиль</h2>
      <div>
        <img className={p.img} src='https://s1.1zoom.ru/b4667/318/Mexico_Sea_Coast_Waves_Sunrises_and_sunsets_Cancun_559411_2560x1440.jpg' alt='Море' width="800" height="200"/>
      </div>
      <section className={p.user}>
        <div className={p.wrap_user}>
          <img className={p.user_photo} src={props.profile.photos.large} alt=''/>
          <p className={p.user_name}>{props.profile.fullName}</p>
        </div>
        <div className={p.wrap_job}>
          <p>Рассматриваю предложения о работе. {props.profile.lookingForAJob}</p>
          <p>{props.profile.lookingForAJobDescription}</p>
        </div>
        <h3 className={p.contacts_title}>Связаться со мной</h3>
        <ul className={p.contacts_list}>
          <li className={p.contacts_item}>
            <NavLink to={props.profile.contacts.github}>{props.profile.contacts.github}</NavLink>
          </li>
          <li className={p.contacts_item}>{props.profile.contacts.vk}</li>
          <li className={p.contacts_item}>{props.profile.contacts.facebook}</li>
          <li className={p.contacts_item}>{props.profile.contacts.instagram}</li>
          <li className={p.contacts_item}>{props.profile.contacts.twitter}</li>
          <li className={p.contacts_item}>{props.profile.contacts.website}</li>
          <li className={p.contacts_item}>{props.profile.contacts.youtube}</li>
          <li className={p.contacts_item}>{props.profile.contacts.mainLink}</li>
        </ul>
      </section>
    </section>
  )
}

export default ProfileInfo;
