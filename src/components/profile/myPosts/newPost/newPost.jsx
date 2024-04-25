import React from 'react';
import p from './newPost.module.css';

const NewPost = () => {
  return (
    <div className={p.newPost}>
      <textarea className={p.textarea}></textarea>
      <div className={p.wrapButton}>
        <button>Delete post</button>
        <button>Add post</button>
      </div>
    </div>
  )
}

export default NewPost;
