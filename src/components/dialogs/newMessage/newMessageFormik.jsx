import React from "react";
import { Formik, Form, } from 'formik';
import * as Yup from 'yup';
import TextInput from "../../common/inputText/textInput";
// import n from './newMessage.module.css';
// import { Field, reduxForm } from "redux-form";
// import { Textarea } from "../../common/formControls/formControls";
// import { maxLengthCreator, required } from "../../../utils/validators";

//const maxLength50 = maxLengthCreator(50);


const NewMessage = (props) => {
  return (
    // <form onSubmit={props.handleSubmit} className={n.wrap}>

    //   <Field component={Textarea}
    //          name={"messageNewText"}
    //          validate={[required, maxLength50]}
    //           placeholder={"New message"}
    //           className={n.textarea} />
    //   <button className={n.button}>Send message</button>
    // </form>

    <Formik
    initialValues={{ messageNewText:'', }}
    validationSchema={Yup.object({
      messageNewText: Yup.string()
        .max(200, "Must be 15 characters or less")
    })}
    onSubmit={props.onSubmit}
  >
    <Form>
      <TextInput label="messageNewText" name="messageNewText" type="textarea" placeholder="Введите текст вашего сообщения"/>
      <button type="submit">Отправить сообщение</button>
    </Form>
  </Formik>
  )
}

export default NewMessage;
