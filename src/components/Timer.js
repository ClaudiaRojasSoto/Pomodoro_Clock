import React, { useEffect, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTimer, startTimer, switchSessionBreak } from '../redux/actions/timerActions';
import TimerControls from './TimerControls';

const Timer = () => {
  const timer = useSelector((state) => state.timer);
  const breakLength = useSelector((state) => state.breakLength);
  const { timeInSeconds, isRunning, isSession } = timer;
  const dispatch = useDispatch();
  const intervalRef = useRef(null);

  const decrementTime = useCallback(() => {
    dispatch(setTimer(timeInSeconds - 1));
    if (timeInSeconds - 1 === 0) {
      document.getElementById('beep').play();
      dispatch(switchSessionBreak(25, breakLength));
      dispatch(startTimer());
    }
  }, [timeInSeconds, isSession, breakLength, dispatch]);

  useEffect(() => {
    if (isRunning && timeInSeconds > 0) {
      intervalRef.current = setInterval(decrementTime, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning, timeInSeconds, decrementTime]);

  const formatTime = () => {
    const totalSeconds = timeInSeconds;
    const minutes = Math.floor(totalSeconds / 60);
    const remainderSeconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainderSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h2 id="timer-label">{isSession ? 'Session' : 'Break'}</h2>
      {/* Cambia según la sesión o el descanso */}
      <div id="time-left">{formatTime()}</div>
      <TimerControls isRunning={isRunning} />
    </div>
  );
};

export default Timer;
