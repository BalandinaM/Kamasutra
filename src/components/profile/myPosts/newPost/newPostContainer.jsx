import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profileReducer';
import NewPost from './newPost';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    plaseholder: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (text) => {
      dispatch(addPostActionCreator(text))
    },
    onPostChange: (text) => {
      dispatch(updateNewPostTextActionCreator(text))
    }
  }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;
