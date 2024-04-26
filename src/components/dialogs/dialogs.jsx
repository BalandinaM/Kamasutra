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

  let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);

  return (
    <section className={d.dialogs}>
      <ul className={d.list}>
        { dialogsElements }
      </ul>
      {/* Диалог с конкретным пользователем */}
      <Talk />
    </section>
  )
}

export default Dialogs;
