const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let initialState = {

};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
}

export const addMessageActionCreator = (text) => ({type: ADD_MESSAGE, newMessage: text,});

export const updateNewMessageActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  newMessage: text,
});

export default dialogsReduser;
