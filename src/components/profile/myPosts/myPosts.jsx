import React from 'react';
import styled from "styled-components";
import Post from './post/post';
import NewPost from './newPost/newPostFormik'

const Section = styled.section`
  padding: 15px;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;

const MyPosts = React.memo((props) => {
  let store = props.profilePage;

  let postElems = store.postsData.map(p => <Post key={p.id} message={p.message} like={p.like} src={store.srcImg}/>)

  const submit = (values, { resetForm }) => {
    props.addPostActionCreator(values.newPost);
    resetForm();
  }

  return (
    <Section>
      <h3>My posts</h3>
      <NewPost onSubmit={submit}/>
      <Ul>
        { postElems }
      </Ul>
    </Section>
  )
});

export default MyPosts;
