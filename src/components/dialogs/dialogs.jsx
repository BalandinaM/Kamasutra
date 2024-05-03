import React from 'react';
import d from './dialogs.module.css'
import DialogItem from './dialogsItem/dialogsItem';
import Talk from './talk/talk';


const Dialogs = (props) => {

  // let dialogsData = [
  //   {id: 1, name: 'Sergey'},
  //   {id: 2, name: 'Katy'},
  //   {id: 3, name: 'Vera'},
  //   {id: 4, name: 'Alise'},
  //   {id: 5, name: 'Helen'},
  //   {id: 6, name: 'Dimon'},
  // ]

  // let postData = [
  //   {id: 1, message: 'Hi!'},
  //   {id: 2, message: 'The style prop works like a normal style prop'},
  //   {id: 3, message: 'You can pass a render prop as children to customize the content'},
  //   {id: 4, message: 'Please note that this API is marked unstable and may be subject to breaking changes without a major release.'},
  // ]

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
