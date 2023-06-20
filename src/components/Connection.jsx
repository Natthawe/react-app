import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'

export default class Connection extends Component {
  state = { connected: true, ros: null }

  // constructor() {
  //   super()
  //   this.init_connection()
  // }

  init_connection() {
    this.state.ros = new window.ROSLIB.Ros()
    console.log(this.state.ros)

    // this.state.ros.on("connection", () => {
    //   console.log("connection established!")
    //   this.setState({ connected: true })
    // })

    // this.state.ros.on("close", () => {
    //   console.log("connection is closed!")
    //   this.setState({ connected: true })
    // })
  }

  render() {
    return (
      <div>
        <Alert className='text-center m-6' variant={this.state.connected ? "success" : "danger"}>
          {this.state.connected ? "Robot Connected" : "Robot Disconnected"}
        </Alert>
      </div>
    )
  }
}