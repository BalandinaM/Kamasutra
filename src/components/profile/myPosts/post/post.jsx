import React from 'react';
import p from './post.module.css';
import LikeCounter from './likeCounter/likeCounter';

const Post = (props) => {
  return (
    <li className={p.post}>
      <img className={p.img} alt='Аватар пользователя' src={props.src} width='50' height='50'/>
      <p>{ props.message }</p>
      <LikeCounter counter={props.like} />
    </li>
  )
}

export default Post;
