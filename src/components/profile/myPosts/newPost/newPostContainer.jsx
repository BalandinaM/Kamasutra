import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profileReducer';
import StoreContext from '../../../../StoreContext';
import NewPost from './newPost';

const NewPostContainer = () => {

  return <StoreContext.Consumer>
    { store => {
        let onAddPost = (text) => {
          store.dispatch(addPostActionCreator(text));
        }

        let postChange = (text) => {
          store.dispatch(updateNewPostTextActionCreator(text));
        }

        return <NewPost addPost = {onAddPost}
                        onPostChange = {postChange}
                        plaseholder = {store.getState().profilePage.newPostText}/>
      }
    }
  </StoreContext.Consumer>
}

export default NewPostContainer;
