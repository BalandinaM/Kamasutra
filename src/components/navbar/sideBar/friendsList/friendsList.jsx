import React from 'react';
import FriendItem from './friendItem/friendItem';
import f from './friendsList.module.css';

const FriendsList = (props) => {

  let friendItems = props.friendsList.map(f => <FriendItem href={f.href} userName={f.name} hrefImg={f.hrefImg} id={f.id}/>)

  return (
    <ul className={f.list}>
      { friendItems }
    </ul>
  )
}

export default FriendsList;
