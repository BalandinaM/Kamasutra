import React from 'react';
import p from './profileInfo.module.css';
import Preloader from '../../common/preloader/preloader';
import ContactsListContainer from './contactsList/contactsListContainer';
import ProfileStatusWithHooks from './profileStatus/profileStatusWithHooks';


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  // if (!props.status) {
  //   alert('!!!!!!')
  //   props.status = {props.status}
  // }

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
        <ProfileStatusWithHooks status={(!props.status) ?
    console.log('no status!') : props.status
  } updateStatus={props.updateStatus}/>
        <div className={p.wrap_job}>
          <p>Рассматриваю предложения о работе. {props.profile.lookingForAJob}</p>
          <p>{props.profile.lookingForAJobDescription}</p>
        </div>
        <h3 className={p.contacts_title}>Связаться со мной</h3>
        <ContactsListContainer />
      </section>
    </section>
  )
}

export default ProfileInfo;
