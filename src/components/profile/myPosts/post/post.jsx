import React from 'react';
import p from './post.module.css';
import LikeCounter from './likeCounter/likeCounter';

const Post = (props) => {
  return (
    <li className={p.post}>
      { props.message }
      <LikeCounter counter={props.counter} />
    </li>
  )
}

export default Post;
