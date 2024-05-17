import { addMessageActionCreator, updateNewMessageActionCreator } from "../../../redux/dialogsReducer";
import NewMessage from "./newMessage";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    plaseholder: state.dialogsPage.newMessageBody,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessage) => {
      dispatch(addMessageActionCreator(newMessage))
    },

    onMessageChange: (newMessage) => {
      dispatch(updateNewMessageActionCreator(newMessage))
    }
  }
}

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage);

export default NewMessageContainer;
