import React, { Component } from "react";
import ReactDOM from "react-dom";
import styles from "./styles";
import AudioPlayer from "./AudioPlayer.js";

class App extends Component {
  render() {
    return <AudioPlayer />;
  }
}

ReactDOM.render(<App />, document.getElementById("media-player"));
