import React from "react";
import { useDispatch } from "react-redux";
import { startTimer, pauseTimer, resetTimer } from "../redux/actions/timerActions";

const TimerControls = ({ isRunning }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(isRunning ? pauseTimer() : startTimer())}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={() => dispatch(resetTimer())}>Reset</button>
    </div>
  );
};

export default TimerControls;
