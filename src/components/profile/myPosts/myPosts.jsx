import React from 'react';
import p from './myPosts.module.css';
import NewPost from './newPost/newPost';
import Post from './post/post';

const MyPosts = (props) => {
  let postElems = props.postsData.map(p => <Post message={p.message} like={p.like} src={props.srcImg}/>)

  return (
    <section className={p.wrapPosts}>
      <h3>My posts</h3>
      <NewPost  addPost = {props.addPost} newPostText = {props.newPostText} updateNewPostText = {props.updateNewPostText}/>
      <ul className={p.listPosts}>
        { postElems }
      </ul>
    </section>
  )
}

export default MyPosts;
