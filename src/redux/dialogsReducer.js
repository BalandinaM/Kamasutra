const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let initialState = {
  dialogsData: [
    {id: 1, name: 'Sergey', hrefImg: 'https://img.freepik.com/free-photo/cute-dog-with-sunglasses-posing-for-portrait-generative-ai_188544-12590.jpg?size=626&ext=jpg&ga=GA1.1.867424154.1714348800&semt=ais',},
    {id: 2, name: 'Katy', hrefImg: 'https://i.pinimg.com/736x/37/d1/28/37d12877e296094971827f1e8b909bd4.jpg',},
    {id: 3, name: 'Vera', hrefImg: 'https://avavatar.ru/images/full/47/HF24oiPlGyYzBjF2.jpg',},
    {id: 4, name: 'Alise', hrefImg: 'https://shapka-youtube.ru/wp-content/uploads/2021/10/ava-sobaka-v-kapyushone.jpg',},
    {id: 5, name: 'Helen', hrefImg: 'https://kartinki.pics/uploads/posts/2022-05/1652237087_1-kartinkin-net-p-kartinki-na-avu-sobaki-1.jpg',},
    {id: 6, name: 'Dimon', hrefImg: 'https://i.pinimg.com/originals/f8/2c/4d/f82c4d72749605a09c761cd0825ff330.jpg',},
  ],

  postData: [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'The style prop works like a normal style prop'},
    {id: 3, message: 'You can pass a render prop as children to customize the content'},
    {id: 4, message: 'Please note that this API is marked unstable and may be subject to breaking changes without a major release.'},
  ],

  newMessageBody: '',
};

const dialogsReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return Object.assign({}, state, {
        postData: [
          ...state.postData,
          {
            id: 5,
            message: action.newMessage,
          }
        ],
        newMessageBody: '',
      })

    case UPDATE_NEW_MESSAGE_BODY:
      return Object.assign({}, state, {
        newMessageBody: action.newMessage,
      })

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

// const dialogsReduser = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_MESSAGE:
//       let newMessage = {
//         id: 5,
//         message: state.newMessageBody,
//       };
//       state.postData.push(newMessage);
//       state.newMessageBody = '';
//       return state;

//     case UPDATE_NEW_MESSAGE_BODY:
//       state.newMessageBody = action.newMessage;
//       return state;
//     default:
//       return state;
//   }
// }
