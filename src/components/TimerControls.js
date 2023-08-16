import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { startTimer, pauseTimer } from '../redux/actions/timerActions';
import { RESET_ALL } from '../redux/actions/actionTypes';

const TimerControls = ({ isRunning }) => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch({ type: RESET_ALL });
    const beep = document.getElementById('beep');
    beep.pause();
    beep.currentTime = 0;
  };

  return (
    <div>
      <button id="start_stop" type="button" onClick={() => dispatch(isRunning ? pauseTimer() : startTimer())}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button id="reset" type="button" onClick={handleReset}>Reset</button>
    </div>
  );
};

TimerControls.propTypes = {
  isRunning: PropTypes.bool.isRequired,
};

export default TimerControls;
