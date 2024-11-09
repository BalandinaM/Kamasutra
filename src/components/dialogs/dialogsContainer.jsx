import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Dialogs from './dialogs';
import { connect } from 'react-redux';
import { addMessageActionCreator } from '../../redux/dialogsReducer';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

// let mapDispatchToProps = (dispatch) => {
//   return {
//     sendMessage: (newMessage) => {
//       dispatch(addMessageActionCreator(newMessage))
//     },
//   }
// }

export default compose(
  connect(mapStateToProps, { addMessageActionCreator }),
  withAuthRedirect
)(Dialogs);

