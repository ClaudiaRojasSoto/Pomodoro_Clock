import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementBreak, decrementBreak } from '../redux/actions/breakActions';

const BreakControl = () => {
  const breakLength = useSelector((state) => state.breakLength);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 id="break-label">Break Length</h2>
      <div>
        <button id="break-decrement" type="button" onClick={() => dispatch(decrementBreak())}>-</button>
        <span id="break-length">{breakLength}</span>
        <button id="break-increment" type="button" onClick={() => dispatch(incrementBreak())}>+</button>
      </div>
    </div>
  );
};

export default BreakControl;
