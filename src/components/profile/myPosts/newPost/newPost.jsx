import React from 'react';
import p from './newPost.module.css';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../../common/formControls/formControls';
import { maxLengthCreator, required } from '../../../../utils/validators';

const maxLength10 = maxLengthCreator(10);

const NewPost = (props) => {

  return (
    <form onSubmit={props.handleSubmit} className={p.newPost}>
      <Field  component={Textarea}
              name={"postText"}
              placeholder={"New post"}
              validate={[required, maxLength10]}
              className={p.textarea} />
      <div className={p.wrapButton}>
        <button>Delete post</button>
        <button>Add post</button>
      </div>
    </form>
  )
}

const NewPostReduxForm = reduxForm({form: 'newPost'})(NewPost);

export default NewPostReduxForm;
