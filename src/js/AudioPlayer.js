import React, { useRef } from "react";
import { Media, Player } from "react-media-player";
import {
  SeekBar,
  RemaningTime,
  CurrentTime,
  PlayStopButton,
  SkipTime,
  RateControl
} from "./controls";

const AudioPlayer = () => {
  const player = useRef();

  return (
    <Media>
      <div className="sb-audio-player">
        <Player
          ref={player}
          src="https://www.buzzsprout.com/556657/1978534-untitled-episode.mp3?blob_id=6053845"
        />
        <div className="sb-audio-player__controls">
          <div className="sb-audio-player__rate">
            <RateControl player={player} />
          </div>
          <SkipTime dir="back" />
          <PlayStopButton />
          <SkipTime />
        </div>
        <div className="sb-audio-player__timers">
          <CurrentTime />
          <div className="sb-audio-player__seek-bar">
            <SeekBar />
          </div>
          <RemaningTime />
        </div>
      </div>
    </Media>
  );
};

export default AudioPlayer;
