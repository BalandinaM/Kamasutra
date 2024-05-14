import React from 'react';
import Dialogs from './dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {

  return <StoreContext.Consumer>
    { store => {
      return <Dialogs
              dialogsPage={store.getState().dialogsPage} />
      }
    }
  </StoreContext.Consumer>
}

export default DialogsContainer;
