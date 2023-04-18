import React, { useState, useEffect, useCallback } from 'react';
import { useTimer } from "react-use-precision-timer";

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(true);
  const [elapsedTime, setElapsedTime] = useState(0);

  // eslint-disable-next-line
  const callback = useCallback(() => setElapsedTime(elapsedTime + 1))
  const timer = useTimer({delay: 1000}, callback);

  useEffect(() => {
    timer.start()
  // eslint-disable-next-line
  }, []);

  function handleStartStop() {
    if (isRunning) {
      timer.pause()
      setIsRunning(false)
    }
    else {
      timer.resume()
      setIsRunning(true)
    }
  }

  function handleReset() {
    setElapsedTime(0)

  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  }
  

  return (
    <div className="stopwatch">
      <h3>Stopwatch</h3>
      <p>{formatTime(elapsedTime)}</p>
      <button onClick={handleStartStop}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Stopwatch;