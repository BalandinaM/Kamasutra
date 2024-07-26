import { profileAPI } from "../api/api"

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
  srcImg: 'https://img.freepik.com/free-photo/the-adorable-illustration-of-kittens-playing-in-the-forest-generative-ai_260559-483.jpg?size=338& ext=jpg&ga=GA1.1.2116175301.1714003200&semt=ais',

  postsData: [
    {id: 1, message: 'Hi, how are you?', like: '78'},
    {id: 2, message: 'It is my second post!', like: '1'},
    {id: 3, message: 'It is my first post! Hello, world! Hello, React!', like: '100'},
  ],

  profile: null,
  status: 'Marina Balandina, Frontend-developer',
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
      })

    case SET_USER_PROFILE: {
      return Object.assign({}, state, {
        profile: action.profile,
      })
    }

    case SET_USER_STATUS:
      return Object.assign({}, state, {
        status: action.status,
      })

    default:
      return state;
  }
}

export const addPostActionCreator = (text) => ({type: ADD_POST, newText: text});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});

export const getProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};

export const getUserStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getUserStatus(userId).then((data) => {
      dispatch(setUserStatus(data))
    });
  };
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateUserStatus(status)
  .then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setUserStatus(status))
    }
  })
};

export default profileReduser;
