import React from "react";
import { withMediaProps } from "react-media-player";
import Slider from "rc-slider";

import "rc-slider/assets/index.css";

const styles = {
  trackStyle: {
    backgroundColor: "#23AD64"
  },
  railStyle: {
    backgroundColor: "#eee"
  },
  handleStyle: {
    width: "15px",
    height: "15px",
    background: "#fff",
    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.35)",
    border: 0
  }
};

const SeekBar = props => {
  const {
    media: { currentTime, seekTo, duration }
  } = props;

  return (
    <Slider
      value={currentTime}
      min={0}
      max={duration}
      onChange={seekTo}
      {...styles}
    />
  );
};

export default withMediaProps(SeekBar);
