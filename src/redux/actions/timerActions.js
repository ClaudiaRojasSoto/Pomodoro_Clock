import { SET_TIMER, START_TIMER, PAUSE_TIMER, RESET_TIMER } from "./actionTypes";

export const setTimer = (timeInSeconds) => {
  return { type: SET_TIMER, payload: timeInSeconds };
};

export const startTimer = () => {
  return { type: START_TIMER };
};

export const pauseTimer = () => {
  return { type: PAUSE_TIMER };
};

export const resetTimer = () => {
  return { type: RESET_TIMER };
};
