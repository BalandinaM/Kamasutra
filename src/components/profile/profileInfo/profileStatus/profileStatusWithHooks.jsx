import React, { useEffect, useState } from 'react';
import s from './profileStatus.module.css';

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  }

    return (
      <div className={s.wrap}>
        {!editMode && (
          <div>
            <span onDoubleClick={ activateEditMode }>{props.status || "--------"}</span>
          </div>
        )}
        {editMode && (
          <div>
            <input
              onChange={onStatusChange}
              autoFocus={true}
              onBlur={deactivateEditMode}
              value={status}
              type="text"
            />
          </div>
        )}
      </div>
    );
}

export default ProfileStatusWithHooks;
