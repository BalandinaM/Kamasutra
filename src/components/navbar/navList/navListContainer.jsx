import React from 'react';
import NavList from './navList';
import StoreContext from '../../../StoreContext';

const NavListContainer = () => {

  return <StoreContext.Consumer>
    { store => {
      return <NavList navList={store.getState().navBar.navList}/>
      }
    }
  </StoreContext.Consumer>
}

export default NavListContainer;
