import {
  SET_TIMER, START_TIMER, PAUSE_TIMER, RESET_TIMER, RESET_ALL, SWITCH_SESSION_BREAK,
} from '../actions/actionTypes';

const initialState = {
  timeInSeconds: 1500,
  isRunning: false,
  isSession: true,
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
    case SWITCH_SESSION_BREAK:
      return {
        ...state,
        isSession: !state.isSession,
        timeInSeconds: !state.isSession ? action.sessionLength * 60 : action.breakLength * 60,
      };
    case RESET_ALL:
      return initialState;
    default:
      return state;
  }
};

export default timerReducer;
