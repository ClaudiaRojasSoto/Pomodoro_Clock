import {
  SET_TIMER, START_TIMER, PAUSE_TIMER, RESET_TIMER, SET_SESSION_LENGTH, SWITCH_SESSION_BREAK,
} from './actionTypes';

export const setTimer = (timeInSeconds) => ({ type: SET_TIMER, payload: timeInSeconds });

export const startTimer = () => ({ type: START_TIMER });

export const pauseTimer = () => ({ type: PAUSE_TIMER });

export const resetTimer = () => ({ type: RESET_TIMER });

export const setSessionLength = (lengthInMinutes) => ({
  type: SET_SESSION_LENGTH,
  payload: lengthInMinutes,
});

export const switchSessionBreak = (sessionLength, breakLength) => ({
  type: SWITCH_SESSION_BREAK,
  sessionLength,
  breakLength,
});

export const toggleSessionBreak = () => ({
  type: 'TOGGLE_SESSION_BREAK',
});
