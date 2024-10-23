import React from 'react';
import styled from 'styled-components';
import LikeCounter from './likeCounter/likeCounter';

const Li = styled.li`
  padding: 15px;
  margin-bottom: 15px;
  box-sizing: border-box;
  width: 100%;
  background-color: #6BB77B;
`;

const Img = styled.img`
  border-radius: 50%;
`;

const Post = (props) => {
  return (
    <Li>
      <Img alt='Аватар пользователя' src={props.src} width='50' height='50'/>
      <p>{ props.message }</p>
      <LikeCounter counter={props.like} />
    </Li>
  )
}

export default Post;
