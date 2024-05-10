const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

const dialogsReduser = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: state.newMessageBody,
      };
      state.postData.push(newMessage);
      state.newMessageBody = '';
      return state;

    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.newMessage;
      return state;
    default:
      return state;
  }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  newMessage: text,
});

export default dialogsReduser;
