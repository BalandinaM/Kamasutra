import React from 'react';
//import t from './talk.module.css'
import Message from './message/message';


const Talk = (props) => {

  let postData = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'The style prop works like a normal style prop'},
    {id: 3, message: 'You can pass a render prop as children to customize the content'},
    {id: 4, message: 'Please note that this API is marked unstable and may be subject to breaking changes without a major release.'},
  ]

  return (
    <div>
        <Message message={postData[0].message}/>
        <Message message={postData[1].message}/>
        <Message message={postData[2].message}/>
        <Message message={postData[3].message}/>
    </div>
  )
}

export default Talk;
