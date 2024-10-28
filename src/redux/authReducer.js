//import { stopSubmit } from "redux-form";
import { authAPI, profileAPI } from "../api/api";
import { setUserProfile } from '../redux/profileReducer';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA = 'SET_CAPTCHA';

let initialState = {
  id: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
  isCaptcha: false,
  urlCaptcha: '',
};

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return Object.assign({}, state, {
        //...action.data,
        //isAuth: true,
        ...action.payload,
      });
    case SET_CAPTCHA:
      return Object.assign({}, state, {
        isCaptcha: true,
        urlCaptcha: action.url,
      });

    default:
      return state;
  }
};

export const setUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: { id, email, login, isAuth } });

export const setCaptcha = (url) => ({type: SET_CAPTCHA, url})

export const getMyProfile = () => {
  return (dispatch) => {
    authAPI.getMyProfile()
      .then((data) => {
        if (data.resultCode === 0) {
          let { id, login, email } = data.data;//днструктуризация чтобы много раз не писать response.data.data.login, response.data.data.email и т.д.
          dispatch(setUserData(id, email, login, true));
          return id;
        }
      })
      .then((id) => {
        profileAPI.getProfile(id)
          .then((data) => {
            dispatch(setUserProfile(data));
          });
      })
  }
}

export const login = (email, password, rememberMe, captcha) => (dispatch) => {
  authAPI.login(email, password, rememberMe, captcha)
  .then((response) => {
    console.log(response)
    if (response.data.resultCode === 0) {
      dispatch(getMyProfile());
    } else {
      let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
      console.log(message);
      //dispatch(stopSubmit('login', {_error: message}));
      if (message === "Incorrect anti-bot symbols") {
        //console.log('captcha')
        authAPI.getCaptcha()
        .then((response) => {
          if (response.data.url.length > 0) {
            console.log(response.data.url);
            dispatch(setCaptcha(response.data.url));
          }
        })
      }
    }
  })
};


export const logout = () => (dispatch) => {
  authAPI.logout()
  .then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setUserData(null, null, null, false));
    }
  })
};

export default authReduser;
