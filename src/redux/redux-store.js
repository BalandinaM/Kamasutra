import { configureStore } from '@reduxjs/toolkit';
import profileReduser from './profileReducer';
import dialogsReduser from './dialogsReducer';
import navBarReducer from './navBarReducer';

const store = configureStore({
  reducer: {
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    navBar: navBarReducer,
  }
})

export default store;
