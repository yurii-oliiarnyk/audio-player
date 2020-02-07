import React from "react";
import { withMediaProps } from "react-media-player";
import icon from "../../../assets/svg/rotate.svg";

import "./SkipTime.scss";

const SkipTime = props => {
  const {
    media: { skipTime },
    dir
  } = props;

  const skipTimeValue = dir === "back" ? -5 : 5;

  return (
    <div
      className="sb-player-skip-time"
      onClick={() => {
        skipTime(skipTimeValue);
      }}
    >
      <img
        src={icon}
        style={{
          transform: dir !== "back" ? "scale(-1, 1)" : ""
        }}
      />
      <span>5</span>
    </div>
  );
};

export default withMediaProps(SkipTime);
