import { configureStore } from '@reduxjs/toolkit';
import profileReduser from './profileReducer';
import dialogsReduser from './dialogsReducer';
import navBarReducer from './navBarReducer';
import usersReducer from './usersReducer';
import authReduser from './authReducer';

const store = configureStore({
  reducer: {
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    navBar: navBarReducer,
    usersPage: usersReducer,
    auth: authReduser,
  }
})

window.store = store;

export default store;
