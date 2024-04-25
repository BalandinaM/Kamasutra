import React from 'react';
//import t from './talk.module.css'
import Message from './message/message';


const Talk = (props) => {
  return (
    <div>
        <Message message='Hi!'/>
        <Message message='The style prop works like a normal style prop'/>
        <Message message='You can pass a render prop as children to customize the content'/>
        <Message message='Please note that this API is marked unstable and may be subject to breaking changes without a major release. '/>
    </div>
  )
}

export default Talk;
