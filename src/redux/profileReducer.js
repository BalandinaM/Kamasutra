const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  srcImg: 'https://img.freepik.com/free-photo/the-adorable-illustration-of-kittens-playing-in-the-forest-generative-ai_260559-483.jpg?size=338& ext=jpg&ga=GA1.1.2116175301.1714003200&semt=ais',

  postsData: [
    {id: 1, message: 'Hi, how are you?', like: '78'},
    {id: 2, message: 'It is my second post!', like: '1'},
    {id: 3, message: 'It is my first post! Hello, world! Hello, React!', like: '100'},
  ],

  newPostText: 'it-kamasutra',
};

const profileReduser = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST:
      return Object.assign({}, state, {
        postsData: [
          ...state.postsData,
          {
            id: 4,
            message: action.newText,
            like: 0,
          }
        ],

        newPostText: '',
      })

    case UPDATE_NEW_POST_TEXT:
      return Object.assign({}, state, {
        newPostText: action.newText,
      })

    default:
      return state;
  }
}

export const addPostActionCreator = (text) => ({type: ADD_POST, newText: text});

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});

export default profileReduser;


//////////////////////////////////старый код/////////////////////
// const profileReduser = (state = initialState, action) => {
//   //debugger;
//   switch(action.type) {
//     case ADD_POST:
//       let newPost = {
//         id: 4,
//         message: state.newPostText,
//         like: 0,
//       };
//       state.postsData.push(newPost);
//       state.newPostText = '';
//       return state;

//     case UPDATE_NEW_POST_TEXT:
//       //debugger;
//       state.newPostText = action.newText;
//       return state;

//     default:
//       return state;
//   }
// }
//////////////////////////////////////////////////////////////////////
