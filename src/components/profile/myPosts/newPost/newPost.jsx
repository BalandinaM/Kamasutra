import React from 'react';
import p from './newPost.module.css';

const NewPost = () => {

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
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
