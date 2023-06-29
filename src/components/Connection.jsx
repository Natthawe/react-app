import React, { Component } from "react";
import { Alert } from "react-bootstrap";
import ROSLIB from "roslib";
import Config from "../scripts/config.js";

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

      //try to reconnect every 3 seconds
      setTimeout(() => {
        ros.connect(
          "ws://" +
            Config.ROSBRIDGE_SERVER_IP +
            ":" +
            Config.ROSBRIDGE_SERVER_PORT +
            ""
        );
      }, Config.RECONNECTION_TIMER);
    });

    ros.connect(
      "ws://" +
        Config.ROSBRIDGE_SERVER_IP +
        ":" +
        Config.ROSBRIDGE_SERVER_PORT +
        ""
    );
  }

  render() {
    const { connectionStatus, error } = this.state;

    let alertVariant;
    let alertMessage;

    if (connectionStatus === "connected") {
      alertVariant = "success";
      alertMessage = "Robot Connected!";
    } else if (connectionStatus === "error" || connectionStatus === "closed") {
      alertVariant = "danger";
      alertMessage =
        connectionStatus === "error" ? "Error" : "Robot Disconnected!";
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
