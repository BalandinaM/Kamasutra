import React from "react";
import n from './newMessage.module.css';
import { addMessageActionCreator, updateNewMessageActionCreator } from "../../../redux/dialogsReducer";


const NewMessage = (props) => {

  let newMessageElement = React.createRef();

  let sendMessage = () => {
    let newMessage = newMessageElement.current.value;
    props.dispatch(addMessageActionCreator(newMessage));
  }

  let onMessageChange = () => {
    let newMessage = newMessageElement.current.value;
    props.dispatch(updateNewMessageActionCreator(newMessage));
  }

  return (
    <div className={n.wrap}>
      <textarea ref={newMessageElement}
                onChange={onMessageChange}
                value={props.newMessageBody}
                className={n.textarea} />
      <button onClick={ sendMessage } className={n.button}>Send message</button>
    </div>
  )
}

export default NewMessage;
