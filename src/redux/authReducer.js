import { stopSubmit } from "redux-form";
import { authAPI, profileAPI } from "../api/api";
import { setUserProfile } from '../redux/profileReducer';

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  id: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
};

const authReduser = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA:
      return Object.assign({}, state, {
        //...action.data,
        //isAuth: true,
        ...action.payload
      })

    default:
      return state;
  }
}

export const setUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: { id, email, login, isAuth } });

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

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe)
  .then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(getMyProfile());
    } else {
      let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
      dispatch(stopSubmit('login', {_error: message}))
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
