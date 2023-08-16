import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTimer, setSessionLength } from '../redux/actions/timerActions';
import './Timer.css';

const SessionControl = () => {
  const sessionLength = useSelector((state) => state.sessionLength);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    if (sessionLength < 60) {
      const newLength = sessionLength + 1;
      dispatch(setSessionLength(newLength));
      dispatch(setTimer(newLength * 60));
    }
  };

  const handleDecrement = () => {
    if (sessionLength > 1) {
      const newLength = sessionLength - 1;
      dispatch(setSessionLength(newLength));
      dispatch(setTimer(newLength * 60));
    }
  };

  return (
    <div className="session-length">
      <h2 id="session-label">Session Length</h2>
      <div>
        <button id="session-decrement" type="button" onClick={handleDecrement}>-</button>
        <span id="session-length">{sessionLength}</span>
        <button id="session-increment" type="button" onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default SessionControl;
