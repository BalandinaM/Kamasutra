import NavList from './navList';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    navList: state.navBar.navList,
  }
}

const NavListContainer = connect(mapStateToProps)(NavList);

export default NavListContainer;
