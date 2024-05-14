import React from 'react';
import p from './myPosts.module.css';
//import NewPost from './newPost/newPost';
import Post from './post/post';
import NewPostContainer from './newPost/newPostContainer';

const MyPosts = (props) => {
  let store = props.profilePage;

  let postElems = store.postsData.map(p => <Post key={p.id} message={p.message} like={p.like} src={store.srcImg}/>)

  return (
    <section className={p.wrapPosts}>
      <h3>My posts</h3>
      <NewPostContainer />
      <ul className={p.listPosts}>
        { postElems }
      </ul>
    </section>
  )
}

export default MyPosts;
