import React from "react";
import n from './newMessage.module.css';


const NewMessage = () => {

  let newMessageElement = React.createRef();

  let sendMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  }

  return (
    <div className={n.wrap}>
      <textarea ref={newMessageElement} className={n.textarea}></textarea>
      <button onClick={ sendMessage } className={n.button}>Send message</button>
    </div>
  )
}

export default NewMessage;
