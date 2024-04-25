import React from 'react';
import p from './myPosts.module.css';
import NewPost from './newPost/newPost';
import Post from './post/post';

const MyPosts = () => {

  let srcImg = 'https://img.freepik.com/free-photo/the-adorable-illustration-of-kittens-playing-in-the-forest-generative-ai_260559-483.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1714003200&semt=ais';
  let postsData = [
    {id: 1, message: 'Hi, how are you?', like: '78'},
    {id: 2, message: 'It is my second post!', like: '1'},
    {id: 3, message: 'It is my first post! Hello, world! Hello, React!', like: '100'},
  ]

  return (
    <section className={p.wrapPosts}>
      <h3>My posts</h3>
      <NewPost />
      <ul className={p.listPosts}>
        <Post message={postsData[0].message} like={postsData[0].like} src={srcImg}/>
        <Post message={postsData[1].message} like={postsData[1].like} src={srcImg}/>
        <Post message={postsData[2].message} like={postsData[2].like} src={srcImg}/>
      </ul>
    </section>
  )
}

export default MyPosts;
