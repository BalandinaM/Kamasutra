import { configureStore } from '@reduxjs/toolkit';
import profileReduser from './profileReducer';
import dialogsReduser from './dialogsReducer';
import navBarReducer from './navBarReducer';
import usersReducer from './usersReducer';
import authReduser from './authReducer';
import appReducer from './appReducer';
import { reducer as formReducer } from 'redux-form'


const store = configureStore({
  reducer: {
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    navBar: navBarReducer,
    usersPage: usersReducer,
    auth: authReduser,
    form: formReducer,
    app: appReducer,
  }
});

window.store = store;

export default store;
