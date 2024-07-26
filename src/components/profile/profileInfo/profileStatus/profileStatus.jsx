import React from 'react';
import s from './profileStatus.module.css';
// import { compose } from 'redux';
// import { withAuthRedirect } from '../../../../hoc/withAuthRedirect';
// import { connect } from 'react-redux';
// import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profileReducer';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    })
    //debugger;
    this.props.updateStatus(this.state.status);
  }

  // newStatus = React.createRef();

  // addStatus = () => {
  //   let text = this.newStatus.current.value;
  //   addPostActionCreator(text);
  // }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    //debugger;
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }


  render() {
    return (
      <div className={s.wrap}>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status || "--------"}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deactivateEditMode.bind(this)}
              value={this.state.status}
              type="text"
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
