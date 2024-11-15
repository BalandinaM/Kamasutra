import React from 'react';
import p from './profileInfo.module.css';
import Preloader from '../../common/preloader/preloader';
import ContactsListContainer from './contactsList/contactsListContainer';
import ProfileStatusWithHooks from './profileStatus/profileStatusWithHooks';
//import userPhoto from './../../../assets/image/Samurai.jpg';


const ProfileInfo = ({profile, status, updateStatus, savePhoto, isOwner}) => {
  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      console.log('target');
      savePhoto(e.target.files[0]);
    }
  }

  // if (!status) {
  //   alert('!!!!!!')
  //   status = {status}
  // }

  return (
    <section className={p.profileInfo}>
      <h2>Мой профиль</h2>
      <div>
        <img className={p.img} src='https://s1.1zoom.ru/b4667/318/Mexico_Sea_Coast_Waves_Sunrises_and_sunsets_Cancun_559411_2560x1440.jpg' alt='Море' width="800" height="200"/>
      </div>
      <section className={p.user}>
        <div className={p.wrap_user}>
          <img className={p.user_photo} src={profile.photos.large} alt='Тут могло быть ваше фото'/>
          {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
          <p className={p.user_name}>{profile.fullName}</p>
        </div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        <div className={p.wrap_job}>
          <p>Рассматриваю предложения о работе. {profile.lookingForAJob}</p>
          <p>{profile.lookingForAJobDescription}</p>
        </div>
        <h3 className={p.contacts_title}>Связаться со мной</h3>
        <ContactsListContainer />
      </section>
    </section>
  )
}

export default ProfileInfo;
