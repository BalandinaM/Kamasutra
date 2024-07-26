import React from 'react';
import d from './dialogs.module.css'
import DialogItem from './dialogsItem/dialogsItem';
import Talk from './talk/talk';
import NewMessageReduxForm from './newMessage/newMessage';

const Dialogs = (props) => {
  //debugger;
  let dialogsElements = props.dialogsPage.dialogsData.map(d => <DialogItem userName={d.name} key={d.id} id={d.id} hrefImg={d.hrefImg}/>);

  const addMessage = (value) => {
    props.sendMessage(value.messageNewText);
    console.log(value.messageNewText);
  }

  return (
    <section className={d.dialogs}>
      <ul className={d.list}>
        { dialogsElements }
      </ul>
      {/* Диалог с конкретным пользователем */}
      <Talk postData = {props.dialogsPage.postData}/>
      <NewMessageReduxForm onSubmit={addMessage}/>
    </section>
  )
}

export default Dialogs;
