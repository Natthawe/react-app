import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'

export default class Connection extends Component {
  state = { connected: true}

  init_connection(){
    var ros = new window.ROSLIB.Ros()
  }

  render() {
    return(
      <div>
        <Alert className='text-center m-5' variant={this.state.connected ? "success" : "danger"}>
          {this.state.connected ? "Robot Connected" : "Robot Disconnect"}
        </Alert>    
      </div>
    )
  }
}
