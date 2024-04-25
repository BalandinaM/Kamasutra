import React from 'react';
import t from './message.module.css'

const Message = (props) => {
  return (
    <div className={t.message}>{props.message}</div>
  )
}

export default Message;
