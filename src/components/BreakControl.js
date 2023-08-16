import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementBreak, decrementBreak } from '../redux/actions/breakActions';

const BreakControl = () => {
  const breakLength = useSelector((state) => state.breakLength);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Break Length</h2>
      <div>
        <button type="button" onClick={() => dispatch(decrementBreak())}>-</button>
        <span>{breakLength}</span>
        <button type="button" onClick={() => dispatch(incrementBreak())}>+</button>
      </div>
    </div>
  );
};

export default BreakControl;
