import React from 'react';
//import t from './talk.module.css'
import Message from './message/message';


const Talk = (props) => {

  let postElems = props.postData.map(p => <Message message={p.message} key={p.id}/>);

  return (
    <div>
        { postElems }
    </div>
  )
}

export default Talk;
