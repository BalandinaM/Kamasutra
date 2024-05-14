import React from "react";
import n from './newMessage.module.css';


const NewMessage = (props) => {

  let newMessageElement = React.createRef();

  let sendMessage = () => {
    let newMessage = newMessageElement.current.value;
    props.sendMessage(newMessage);
  }

  let onMessageChange = () => {
    let newMessage = newMessageElement.current.value;
    props.onMessageChange(newMessage);
  }

  return (
    <div className={n.wrap}>
      <textarea ref={newMessageElement}
                onChange={onMessageChange}
                value={props.plaseholder}
                className={n.textarea} />
      <button onClick={ sendMessage } className={n.button}>Send message</button>
    </div>
  )
}

export default NewMessage;
