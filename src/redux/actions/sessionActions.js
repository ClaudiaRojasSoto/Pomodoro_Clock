import { INCREMENT_SESSION, DECREMENT_SESSION } from './actionTypes';

export const incrementSession = () => ({ type: INCREMENT_SESSION });

export const decrementSession = () => ({ type: DECREMENT_SESSION });

export const SET_SESSION_LENGTH = 'SET_SESSION_LENGTH';

export const setSessionLength = (lengthInMinutes) => ({
  type: SET_SESSION_LENGTH,
  payload: lengthInMinutes,
});
