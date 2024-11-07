import MyPosts from './myPosts';
import { addPostActionCreator } from '../../../redux/profileReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';

let mapStateToProps = (state) => ({
    profilePage: state.profilePage,
})

// let mapDispatchToProps = (dispatch) => {
//   return {
//     addPost: (text) => {
//       dispatch(addPostActionCreator(text))
//     },
//   }
// }

const MyPostsContainer = compose(
  connect(mapStateToProps, {addPostActionCreator}))(MyPosts);

export default MyPostsContainer;
