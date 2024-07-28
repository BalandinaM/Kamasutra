import React from "react";
import n from './newMessage.module.css';
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/formControls/formControls";
import { maxLengthCreator, required } from "../../../utils/validators";

const maxLength50 = maxLengthCreator(50);


const NewMessage = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={n.wrap}>

      <Field component={Textarea}
             name={"messageNewText"}
             validate={[required, maxLength50]}
              placeholder={"New message"}
              className={n.textarea} />
      <button className={n.button}>Send message</button>
    </form>
  )
}

const NewMessageReduxForm = reduxForm({form: 'newMessage'})(NewMessage)

export default NewMessageReduxForm;
