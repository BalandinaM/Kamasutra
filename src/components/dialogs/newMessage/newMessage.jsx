import React from "react";
import n from './newMessage.module.css';
import { Field, reduxForm } from "redux-form";


const NewMessage = (props) => {

  return (
    <form onSubmit={props.handleSubmit} className={n.wrap}>
      <Field component={"textarea"}
             name={"messageNewText"}
              placeholder={"New message"}
              value={props.plaseholder}
              className={n.textarea} />
      <button className={n.button}>Send message</button>
    </form>
  )
}

const NewMessageReduxForm = reduxForm({form: 'newMessage'})(NewMessage)

export default NewMessageReduxForm;
