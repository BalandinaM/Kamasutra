import ContactsList from './contactsList';
import { connect } from 'react-redux';

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

const ContactsListContainer = connect(mapStateToProps)(ContactsList);

export default ContactsListContainer;
