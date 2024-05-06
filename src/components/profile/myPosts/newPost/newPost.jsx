import React from 'react';
import p from './newPost.module.css';

const NewPost = (props) => {

  let newPostElement = React.createRef();

  let addPost = () => {
    //debugger;
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  }

  return (
    <div className={p.newPost}>
      <textarea ref={newPostElement} className={p.textarea}></textarea>
      <div className={p.wrapButton}>
        <button>Delete post</button>
        <button onClick={ addPost }>Add post</button>
      </div>
    </div>
  )
}

export default NewPost;
