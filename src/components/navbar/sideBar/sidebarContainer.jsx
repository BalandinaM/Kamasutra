import SideBar from './sidebar';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    friendsList: state.dialogsPage.dialogsData,
  }
}

const SideBarContainer = connect(mapStateToProps)(SideBar);

export default SideBarContainer;
