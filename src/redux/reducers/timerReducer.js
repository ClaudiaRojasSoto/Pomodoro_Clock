import {
  SET_TIMER, START_TIMER, PAUSE_TIMER, RESET_TIMER,
} from '../actions/actionTypes';

const initialState = {
  timeInSeconds: 1500, // 25 minutes
  isRunning: false,
};

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TIMER:
      return { ...state, timeInSeconds: action.payload };
    case START_TIMER:
      return { ...state, isRunning: true };
    case PAUSE_TIMER:
      return { ...state, isRunning: false };
    case RESET_TIMER:
      return { ...initialState };
    default:
      return state;
  }
};

export default timerReducer;
