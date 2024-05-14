import React from 'react';
import p from './newPost.module.css';

const NewPost = (props) => {

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.onPostChange(text);
  }

  return (
    <div className={p.newPost}>
      <textarea ref={newPostElement}
                onChange={onPostChange}
                value={props.plaseholder}
                className={p.textarea} />
      <div className={p.wrapButton}>
        <button>Delete post</button>
        <button onClick={ addPost }>Add post</button>
      </div>
    </div>
  )
}

export default NewPost;
