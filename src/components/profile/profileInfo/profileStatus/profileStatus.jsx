import React from 'react';
import s from './profileStatus.module.css';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  activateEditMode() {
    this.setState({
      editMode: true,
    })
  }

  deactivateEditMode() {
    this.setState({
      editMode: false,
    })
  }

  render() {
    return (
      <div className={s.wrap}>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status} type="text" />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
