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
        ...action.data,
        isAuth: true,
      })

    default:
      return state;
  }
}

export const setUserData = (id, email, login) => ({type: SET_USER_DATA, data: { id, email, login } });

export const getMyProfile = () => {
  return (dispatch) => {
    authAPI.getMyProfile()
      .then((data) => {
      //  debugger;
        if (data.resultCode === 0) {
          let { id, login, email } = data.data;//днструктуризация чтобы много раз не писать response.data.data.login, response.data.data.email и т.д.
          dispatch(setUserData(id, email, login));
          return id;
        }
      })
      .then((id) => {
        // debugger;
        profileAPI.getProfile(id)
          .then((data) => {
            //debugger;
            dispatch(setUserProfile(data));
          });
      })
  }
}

export default authReduser;
