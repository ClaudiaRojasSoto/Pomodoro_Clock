import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTimer, startTimer, switchSessionBreak } from '../redux/actions/timerActions';
import TimerControls from './TimerControls';
import './Timer.css';

const Timer = () => {
  const sessionLength = useSelector((state) => state.sessionLength);
  const breakLength = useSelector((state) => state.breakLength);
  const { timeInSeconds, isRunning, isSession } = useSelector((state) => state.timer);
  const dispatch = useDispatch();
  const [timerInterval, setTimerInterval] = useState(null);

  useEffect(() => {
    if (isRunning && timeInSeconds > 0) {
      setTimerInterval(setInterval(() => {
        dispatch(setTimer(timeInSeconds - 1));
      }, 1000));
    } else if (timeInSeconds === 0) {
      document.getElementById('beep').play();
      clearInterval(timerInterval);
      if (isSession) {
        dispatch(switchSessionBreak(sessionLength, breakLength)); // Cambio a descanso
      } else {
        dispatch(switchSessionBreak(breakLength, sessionLength)); // Cambio a sesión
      }
      dispatch(startTimer());
    } else {
      clearInterval(timerInterval);
    }
    return () => {
      clearInterval(timerInterval);
    };
  }, [isRunning, timeInSeconds, isSession, breakLength, sessionLength, dispatch]);

  const formatTime = () => {
    const minutes = Math.floor(timeInSeconds / 60);
    const remainderSeconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainderSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="timer-container">
      <h2 id="timer-label" className="timer-label">{isSession ? 'Session' : 'Break'}</h2>
      <div id="time-left" className="time-display">{formatTime()}</div>
      <TimerControls isRunning={isRunning} />
    </div>
  );
};

export default Timer;
