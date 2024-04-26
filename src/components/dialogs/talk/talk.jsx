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

  let postElems = postData.map(p => <Message message={p.message}/>);

  return (
    <div>
        { postElems }
    </div>
  )
}

export default Talk;
