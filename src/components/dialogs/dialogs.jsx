import React from 'react';
import d from './dialogs.module.css'
import DialogItem from './dialogsItem/dialogsItem';
import Talk from './talk/talk';


const Dialogs = () => {

  let dialogsData = [
    {id: 1, name: 'Sergey'},
    {id: 2, name: 'Katy'},
    {id: 3, name: 'Vera'},
    {id: 4, name: 'Alise'},
    {id: 5, name: 'Helen'},
    {id: 6, name: 'Dimon'},
  ]

  return (
    <section className={d.dialogs}>
      <ul className={d.list}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
      </ul>
      {/* Диалог с конкретным пользователем */}
      <Talk />
    </section>
  )
}

export default Dialogs;
