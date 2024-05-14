import React from 'react';
import StoreContext from '../../../StoreContext';
import SideBar from './sidebar';

const SideBarContainer = () => {
  return <StoreContext.Consumer>
    { store => {
        return <SideBar friendsList = {store.getState().dialogsPage.dialogsData}/>
      }
    }
  </StoreContext.Consumer>
}

export default SideBarContainer;
