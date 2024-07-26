import React from 'react';
import p from './newPost.module.css';
import { Field, reduxForm } from 'redux-form';

const NewPost = (props) => {

  return (
    <form onSubmit={props.handleSubmit} className={p.newPost}>
      <Field  component={"textarea"}
              name={"postText"}
              placeholder={"New post"}
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
