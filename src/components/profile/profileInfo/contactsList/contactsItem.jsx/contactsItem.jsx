import React from 'react';
import c from './contactsItem.module.css';
import { NavLink } from 'react-router-dom';

const ContactsItem = (props) => {
  return (
    <li className={c.contacts_item}>
      {<NavLink className={c.contacts_link} to={props.href}>{props.href}</NavLink>}
    </li>
  );
};

export default ContactsItem;
