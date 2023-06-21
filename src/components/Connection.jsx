import React, { Component } from "react";
import { Alert } from "react-bootstrap";
import ROSLIB from "roslib";

export default class Connection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connectionStatus: null,
      error: null,
    };
  }

  componentDidMount() {
    this.initConnection();
  }

  initConnection() {
    const ros = new ROSLIB.Ros();
    ros.on("error", (error) => {
      console.log(error);
      this.setState({
        connectionStatus: "error",
        error: error.message,
      });
    });

    ros.on("connection", () => {
      console.log("Robot Connected!");
      this.setState({
        connectionStatus: "connected",
        error: null,
      });
    });

    ros.on("close", () => {
      console.log("Robot Disconnected!");
      this.setState({
        connectionStatus: "closed",
        error: null,
      });
    });

    ros.connect("ws://localhost:9090");
  }

  render() {
    const { connectionStatus, error } = this.state;

    let alertVariant;
    let alertMessage;

    if (connectionStatus === "connected") {
      alertVariant = "success";
      alertMessage = "Robot Connected";
    } else if (connectionStatus === "error" || connectionStatus === "closed") {
      alertVariant = "danger";
      alertMessage = connectionStatus === "error" ? "Error" : "Connection Closed";
    } else {
      alertVariant = "secondary";
      alertMessage = "Connecting...";
    }

    return (
      <div>
        <Alert className="text-center m-6" variant={alertVariant}>
          {alertMessage}
        </Alert>
        {error && (
          <Alert className="text-center m-6" variant="danger">
            Error: {error}
          </Alert>
        )}
      </div>
    );
  }
}
