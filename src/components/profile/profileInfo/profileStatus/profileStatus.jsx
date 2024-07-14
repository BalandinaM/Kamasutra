import React from 'react';
import s from './profileStatus.module.css';

class ProfileStatus extends React.Component {
  state = {
    editMode: true,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    })
  }

  render() {
    return (
      <div className={s.wrap}>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status} type="text" />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
