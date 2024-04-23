import React from 'react';
import p from './newPost.module.css';

const NewPost = () => {
  return (
    <div className={p.newPost}>
      <textarea></textarea>
      <button>Add post</button>
      <button>Delete post</button>
    </div>
  )
}

export default NewPost;
