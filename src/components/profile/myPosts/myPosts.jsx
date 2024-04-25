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
        <Post message='Hi, how are you?' src="https://img.freepik.com/free-photo/the-adorable-illustration-of-kittens-playing-in-the-forest-generative-ai_260559-483.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1714003200&semt=ais" counter='5'/>
        <Post message='It is my second post!' src="https://img.freepik.com/free-photo/the-adorable-illustration-of-kittens-playing-in-the-forest-generative-ai_260559-483.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1714003200&semt=ais" counter='10'/>
        <Post message='It is my first post! Hello, world! Hello, React!' src="https://img.freepik.com/free-photo/the-adorable-illustration-of-kittens-playing-in-the-forest-generative-ai_260559-483.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1714003200&semt=ais" counter='1'/>
      </ul>
    </section>
  )
}

export default MyPosts;
