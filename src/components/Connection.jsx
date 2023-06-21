import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'
import ROSLIB from 'roslib'

export default class Connection extends Component {

  componentDidMount() {
    this.init_connection()
  }

  init_connection() {
    const ros = new ROSLIB.Ros()
    // If there is an error on the backend, an 'error' emit will be emitted.
    ros.on('error', function(error) {
      document.getElementById('connecting').style.display = 'none';
      document.getElementById('connected').style.display = 'none';
      document.getElementById('closed').style.display = 'none';
      document.getElementById('error').style.display = 'inline';
      console.log(error);
    });

    // Find out exactly when we made a connection.
    ros.on('connection', function() {
      console.log('Connected!');
      document.getElementById('connecting').style.display = 'none';
      document.getElementById('error').style.display = 'none';
      document.getElementById('closed').style.display = 'none';
      document.getElementById('connected').style.display = 'inline';
    });

    ros.on('close', function() {
      console.log('Connection closed!');
      document.getElementById('connecting').style.display = 'none';
      document.getElementById('connected').style.display = 'none';
      document.getElementById('closed').style.display = 'inline';
    });

    // Create a connection to the rosbridge WebSocket server.
    ros.connect('ws://localhost:9090');
  }  



  render() {
    return (
      <div>
        <div id="connecting">
          Connecting to rosbridge...
        </div>
        <div id="connected">
          Connected
        </div>
        <div id="error">
          Error in the backend!
        </div>
        <div id="closed">
          Connection closed.
        </div>
      </div>
    )
  }
}