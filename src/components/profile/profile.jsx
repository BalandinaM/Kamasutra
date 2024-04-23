import React from 'react';
import p from './profile.module.css';
import MyPosts from './myPosts/myPosts';

const Profile = () => {
  return (
    <section>
      <h2>Мой профиль</h2>
      <div>
        <img className={p.img} src='https://s1.1zoom.ru/b4667/318/Mexico_Sea_Coast_Waves_Sunrises_and_sunsets_Cancun_559411_2560x1440.jpg' alt='Море' width="800" height="200"/>
      </div>
      <section className={p.user}>
        ava + description
      </section>
      <MyPosts />
    </section>
  )
}

export default Profile;
