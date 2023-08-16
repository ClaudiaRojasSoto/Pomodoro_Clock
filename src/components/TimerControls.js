import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { startTimer, pauseTimer, resetTimer } from '../redux/actions/timerActions';

const TimerControls = ({ isRunning }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <button type="button" onClick={() => dispatch(isRunning ? pauseTimer() : startTimer())}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button type="button" onClick={() => dispatch(resetTimer())}>Reset</button>
    </div>
  );
};

TimerControls.propTypes = {
  isRunning: PropTypes.bool.isRequired,
};

export default TimerControls;
