import React, { useState, useEffect, useRef } from "react";
import "./RateControl.scss";

const RateControl = props => {
  const { player } = props;
  const [showTooltip, setShowTooltip] = useState(false);

  let currentRate = 1;

  if (player.current) {
    currentRate = player.current.instance.playbackRate;
  }

  const config = [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.25];

  const onPressHandler = rate => {
    setShowTooltip(false);
    player.current.instance.playbackRate = rate;
  };

  const ref = useRef(null);

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShowTooltip(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return (
    <div className="sb-audio-player__rate-control sb-rate-control">
      <div
        className="sb-rate-control__button"
        onClick={() => {
          setShowTooltip(true);
        }}
      >
        <span className="sb-rate-control__button-name">Speed: </span>
        <span className="sb-rate-control__button-value">{currentRate}x</span>
      </div>
      <div
        ref={ref}
        className={`sb-rate-control__tooltip ${
          showTooltip ? "is-visible" : ""
        }`}
      >
        {config.map(rate => {
          const isSelected = rate === currentRate;

          return (
            <span
              key={rate}
              onClick={() => onPressHandler(rate)}
              className={`sb-rate-control__item ${
                isSelected ? "is-selected" : ""
              }`}
            >
              {rate}x
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default RateControl;
