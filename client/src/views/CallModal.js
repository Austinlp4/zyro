import React, { Component } from 'react';
import PropTypes from 'proptypes';
import classnames from 'classnames';
import '../css/call-modal.css';

class CallModal extends Component {

  acceptWithVideo(video) {
    const config = { audio: true, video };
    return () => this.props.startCall(false, this.props.callFrom, config);
  }

  render() {
    return (   
      <div className={classnames('call-modal', this.props.status)}>
        <p>
          <span className="caller">{this.props.callFrom}</span> is calling ...
        </p>
        <button
          className="btn-action"
          onClick={this.acceptWithVideo(true)}
        >Video</button>
        <button
          className="btn-action"
          onClick={this.acceptWithVideo(false)}
        >Phone</button>
        <button
          className="btn-action hangup"
          onClick={this.props.rejectCall}
        >Hangup</button>
      </div>
      
    );
  }
}

CallModal.propTypes = {
  status: PropTypes.string.isRequired,
  callFrom: PropTypes.string.isRequired,
  startCall: PropTypes.func.isRequired,
  rejectCall: PropTypes.func.isRequired
};

export default CallModal;