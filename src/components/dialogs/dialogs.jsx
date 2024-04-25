import React from 'react';
import d from './dialogs.module.css'
import DialogItem from './dialogsItem/dialogsItem';
import Talk from './talk/talk';


const Dialogs = () => {
  return (
    <section className={d.dialogs}>
      <ul className={d.list}>
        <DialogItem name='Sergey' id='1'/>
        <DialogItem name='Katy' id='2'/>
        <DialogItem name='Vera' id='3'/>
        <DialogItem name='Alise' id='4'/>
        <DialogItem name='Helen' id='5'/>
        <DialogItem name='Dimon' id='6'/>
      </ul>
      {/* Диалог с конкретным пользователем */}
      <Talk />
    </section>
  )
}

export default Dialogs;
