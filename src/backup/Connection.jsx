import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'
import ROSLIB from 'roslib'

export default class Connection extends Component {
  state = { 
    connected: true, 
    ros: null 
  }

  componentDidMount() {
    this.init_connection()
  }

  init_connection() {
    const ros = new ROSLIB.Ros()
    ros.on('connection', () => {
      console.log('Connection established!')
      this.setState({ connected: true, ros })
    });

    ros.on('close', () => {
      console.log('Connection is closed!');
      this.setState({ connected: false, ros: null })
    });

    this.setState({ ros });
  }  



  render() {
    const { connected } = this.state;
    return (
      <div>
        <Alert className="text-center m-6" variant={connected ? 'success' : 'danger'}>
          {connected ? 'Robot Connected' : 'Robot Disconnected'}
        </Alert>
      </div>
    )
  }
}