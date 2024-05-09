import React from 'react';
import d from './dialogs.module.css'
import DialogItem from './dialogsItem/dialogsItem';
import Talk from './talk/talk';
import NewMessage from './newMessage/newMessage';


const Dialogs = (props) => {

  let dialogsElements = props.state.dialogsData.map(d => <DialogItem userName={d.name} id={d.id} hrefImg={d.hrefImg}/>);

  return (
    <section className={d.dialogs}>
      <ul className={d.list}>
        { dialogsElements }
      </ul>
      {/* Диалог с конкретным пользователем */}
      <Talk postData = {props.state.postData}/>
      <NewMessage dispatch = {props.dispatch} newMessageBody = {props.newMessageBody}/>
    </section>
  )
}

export default Dialogs;
