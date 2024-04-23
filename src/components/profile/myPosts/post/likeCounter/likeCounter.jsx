import React from 'react';
import p from './likeCounter.module.css';

const LikeCounter = (props) => {
  return (
      <div className={p.wrap}>
        <span className={p.counter}>
          { props.counter }
        </span>
      </div>
  )
}

export default LikeCounter;
