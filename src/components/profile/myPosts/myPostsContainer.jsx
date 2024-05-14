import React from 'react';
import StoreContext from '../../../StoreContext';
import MyPosts from './myPosts';

const MyPostsContainer = (props) => {

  return <StoreContext.Consumer>
    { store => {
        return <MyPosts profilePage={store.getState().profilePage}/>
      }
    }
  </StoreContext.Consumer>
}

export default MyPostsContainer;
