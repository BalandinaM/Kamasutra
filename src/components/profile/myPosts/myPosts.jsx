import React from 'react';
import p from './myPosts.module.css';
import NewPost from './newPost/newPost';
import Post from './post/post';

const MyPosts = () => {
  return (
    <section className={p.wrapPosts}>
      <h3>My posts</h3>
      <NewPost />
      <ul className={p.listPosts}>
        <Post message='Hi, how are you?' counter='5'/>
        <Post message='It is my second post!' counter='10'/>
        <Post message='It is my first post! Hello, world! Hello, React!' counter='1'/>
      </ul>
    </section>
  )
}

export default MyPosts;
