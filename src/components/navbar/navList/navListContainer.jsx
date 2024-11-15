import NavList from './navList';
import { connect } from 'react-redux';
import { getProfile, getUserStatus} from '../../../redux/profileReducer';


let mapStateToProps = (state) => {
  return {
    navList: state.navBar.navList,
    userId: state.auth.id,
  }
}

const NavListContainer = connect(mapStateToProps, {getProfile, getUserStatus})(NavList);

export default NavListContainer;
