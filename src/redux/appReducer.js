import { getMyProfile } from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
  initialized: false,
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return Object.assign({}, state, {
        initialized: true,
      });

    default:
      return state;
  }
};

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch) => {
  let promise = getMyProfile();
  Promise.all([promise])
    .then(() => {
      dispatch(initializedSuccess());
    });
}

export default appReducer;
