import React from 'react';
import ContactsItem from './contactsItem.jsx/contactsItem';
import c from './contactsList.module.css'

const ContactsList = (props) => {
  const getNewArr = () => {
    let arrNew = [];

    for (let elem of Object.values(props.profile.contacts)) {
      if (elem != null) {
        arrNew.push(elem);
      }
    }
    return arrNew;
  };

  const arr = getNewArr();

  let contactsItems = arr.map((c) => <ContactsItem href={c}>{c}</ContactsItem>);

  return <ul className={c.contacts_list}>{contactsItems}</ul>;
};

export default ContactsList;
