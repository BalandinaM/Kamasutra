import React from "react";
import { addMessageActionCreator, updateNewMessageActionCreator } from "../../../redux/dialogsReducer";
import StoreContext from "../../../StoreContext";
import NewMessage from "./newMessage";

const NewMessageContainer = () => {

  return <StoreContext.Consumer>
    { store => {
      let onSendMessage = (newMessage) => {
        store.dispatch(addMessageActionCreator(newMessage));
      }

      let updateMessageChange = (newMessage) => {
        store.dispatch(updateNewMessageActionCreator(newMessage))
      }

      return <NewMessage sendMessage = {onSendMessage}
                         onMessageChange = {updateMessageChange}
                         plaseholder = {store.getState().dialogsPage.newMessageBody}/>
      }
    }
  </StoreContext.Consumer>
}

export default NewMessageContainer;
