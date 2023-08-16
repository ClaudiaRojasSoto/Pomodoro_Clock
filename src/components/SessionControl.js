import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementSession, decrementSession } from '../redux/actions/sessionActions';

const SessionControl = () => {
  const sessionLength = useSelector((state) => state.sessionLength);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Session Length</h2>
      <div>
        <button type="button" onClick={() => dispatch(decrementSession())}>-</button>
        <span>{sessionLength}</span>
        <button type="button" onClick={() => dispatch(incrementSession())}>+</button>
      </div>
    </div>
  );
};

export default SessionControl;
