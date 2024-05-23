import { configureStore } from '@reduxjs/toolkit';
import profileReduser from './profileReducer';
import dialogsReduser from './dialogsReducer';
import navBarReducer from './navBarReducer';
import usersReducer from './usersReducer';

const store = configureStore({
  reducer: {
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    navBar: navBarReducer,
    usersPage: usersReducer,
  }
})

window.store = store;

export default store;
