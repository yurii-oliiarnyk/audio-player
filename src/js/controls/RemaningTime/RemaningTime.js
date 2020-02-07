import React from "react";
import { withMediaProps } from "react-media-player";
import formatTime from "react-media-player/lib/utils/format-time";

const RemainingTime = props => {
  const {
    media: { currentTime, duration }
  } = props;

  return (
    <div>
      <span>{formatTime(duration - currentTime)}</span>
    </div>
  );
};

export default withMediaProps(RemainingTime);
