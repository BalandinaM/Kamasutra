import MyPosts from './myPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  }
}

const MyPostsContainer = connect(mapStateToProps)(MyPosts);

export default MyPostsContainer;
