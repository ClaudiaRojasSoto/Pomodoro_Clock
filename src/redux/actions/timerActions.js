import {
  SET_TIMER, START_TIMER, PAUSE_TIMER, RESET_TIMER,
} from './actionTypes';

export const setTimer = (timeInSeconds) => ({ type: SET_TIMER, payload: timeInSeconds });

export const startTimer = () => ({ type: START_TIMER });

export const pauseTimer = () => ({ type: PAUSE_TIMER });

export const resetTimer = () => ({ type: RESET_TIMER });
