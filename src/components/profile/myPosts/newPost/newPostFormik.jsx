import React from 'react';
import { Formik, Form, } from 'formik';
import * as Yup from 'yup';
import TextInput from '../../../login/textInput';

const NewPost = (props) => {

  return (
    <Formik
    initialValues={{ newPost:'', }}
    validationSchema={Yup.object({
      newPost: Yup.string()
        .max(15, "Must be 15 characters or less")
    })}
    onSubmit={props.onSubmit}
  >
    <Form>
      <TextInput label="newPost" name="newPost" type="textarea" placeholder="Чем вы хотите поделиться с друзьями?"/>
      <button type="submit">Поделиться</button>
    </Form>
  </Formik>
  )
}

export default NewPost;
