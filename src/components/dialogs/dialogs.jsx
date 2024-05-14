import React from 'react';
import d from './dialogs.module.css'
import DialogItem from './dialogsItem/dialogsItem';
import Talk from './talk/talk';
//import NewMessage from './newMessage/newMessage';
import NewMessageContainer from './newMessage/newMessageContainer';

const Dialogs = (props) => {
  debugger;

  let dialogsElements = props.dialogsPage.dialogsData.map(d => <DialogItem userName={d.name} key={d.id} id={d.id} hrefImg={d.hrefImg}/>);

  return (
    <section className={d.dialogs}>
      <ul className={d.list}>
        { dialogsElements }
      </ul>
      {/* Диалог с конкретным пользователем */}
      <Talk postData = {props.dialogsPage.postData}/>
      {/* <NewMessage dispatch = {props.dispatch} newMessageBody = {props.newMessageBody}/> */}
      <NewMessageContainer />
    </section>
  )
}

export default Dialogs;
