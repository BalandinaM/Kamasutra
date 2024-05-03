import React from 'react';
import d from './dialogs.module.css'
import DialogItem from './dialogsItem/dialogsItem';
import Talk from './talk/talk';


const Dialogs = (props) => {

  let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);

  return (
    <section className={d.dialogs}>
      <ul className={d.list}>
        { dialogsElements }
      </ul>
      {/* Диалог с конкретным пользователем */}
      <Talk postData = {props.state.postData}/>
    </section>
  )
}

export default Dialogs;
