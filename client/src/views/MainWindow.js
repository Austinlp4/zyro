import React, { Component } from 'react';
import PropTypes from 'proptypes';
import '../css/main-window.css';

let friendID;

class MainWindow extends Component {
  /**
   * Start the call with or without video
   * @param {Boolean} video
   */
  callWithVideo(video) {
    const config = { audio: true };
    config.video = video;
    return () => this.props.startCall(true, friendID, config);
  }
  render() {
    const { clientId } = this.props;
    document.title = `${clientId} - VideoCall`;
    return (
      <div className="container main-window">
        <div className='yourid'>
          <h3>
            Hi, your ID is:
            <input type="text" className="txt-clientId" value={clientId} />
          </h3>
        </div>
        <div className='friendId'>
          <input
            type="text"
            className="txt-clientId"
            spellCheck={false}
            placeholder="Your friend ID"
            onChange={event => friendID = event.target.value}
          />
          <div>
            <button
              className="btn-action call-video"
              onClick={this.callWithVideo(true)}
            >Video</button>
            <button
              className="btn-action call-phone"
              onClick={this.callWithVideo(false)}
            >Phone</button>
          </div>
        </div>
      </div>
    );
  }
}

MainWindow.propTypes = {
  clientId: PropTypes.string.isRequired,
  startCall: PropTypes.func.isRequired
};

export default MainWindow;