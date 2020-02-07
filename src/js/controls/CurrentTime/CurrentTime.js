import React from "react";
import { withMediaProps } from "react-media-player";
import formatTime from "react-media-player/lib/utils/format-time";

import "./CurrentTime.scss";

const CurrentTime = props => {
  const {
    media: { currentTime, duration }
  } = props;

  return (
    <div className="sb-current-time">
      <span>{formatTime(currentTime)}</span>
      <span className="sb-current-time__total">{formatTime(duration)}</span>
    </div>
  );
};

export default withMediaProps(CurrentTime);
