import React from 'react';
import p from './myPosts.module.css';
import Post from './post/post';
import NewPostReduxForm from './newPost/newPost';

const MyPosts = (props) => {
  let store = props.profilePage;

  let postElems = store.postsData.map(p => <Post key={p.id} message={p.message} like={p.like} src={store.srcImg}/>)

  const addPost = (values) => {
    props.addPost(values.postText);
  }

  return (
    <section className={p.wrapPosts}>
      <h3>My posts</h3>
      <NewPostReduxForm onSubmit={addPost}/>
      <ul className={p.listPosts}>
        { postElems }
      </ul>
    </section>
  )
}

export default MyPosts;
