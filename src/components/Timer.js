import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTimer } from '../redux/actions/timerActions';
import TimerControls from './TimerControls';

const Timer = () => {
  const timer = useSelector((state) => state.timer);
  const { timeInSeconds, isRunning } = timer;
  const dispatch = useDispatch();

  useEffect(() => {
    if (isRunning && timeInSeconds > 0) {
      const interval = setInterval(() => {
        dispatch(setTimer(timeInSeconds - 1));
      }, 1000);
      return () => clearInterval(interval);
    }
    // Return an empty function as cleanup
    return () => {};
  }, [isRunning, timeInSeconds, dispatch]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    return `${minutes}:${remainderSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h2>Timer</h2>
      <div id="time-left">{formatTime(timeInSeconds)}</div>
      <TimerControls isRunning={isRunning} />
    </div>
  );
};

export default Timer;
