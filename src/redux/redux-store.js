import { configureStore } from '@reduxjs/toolkit';
import profileReduser from './profileReducer';
import dialogsReduser from './dialogsReducer';
import navBarReducer from './navBarReducer';
import usersReduser from './usersReducer';

const store = configureStore({
  reducer: {
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    navBar: navBarReducer,
    usersPage: usersReduser,
  }
})

window.store = store;

export default store;
