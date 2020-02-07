import React from "react";
import { withMediaProps } from "react-media-player";
import iconPause from "../../../assets/svg/pause.svg";
import iconPlay from "../../../assets/svg/play.svg";

import "./PlayStopButton.scss";

const PlayStopButton = props => {
  const {
    media: { play, pause, isPlaying }
  } = props;

  return (
    <div
      className="sb-play-stop-button"
      onClick={() => {
        if (isPlaying) {
          pause();
        } else {
          play();
        }
      }}
    >
      {isPlaying ? (
        <img src={iconPause} />
      ) : (
        <img src={iconPlay} style={{ marginLeft: "4px" }} />
      )}
    </div>
  );
};

export default withMediaProps(PlayStopButton);
