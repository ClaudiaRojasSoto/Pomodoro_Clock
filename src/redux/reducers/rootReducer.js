import { combineReducers } from 'redux';
import breakReducer from './breakReducer';
import sessionReducer from './sessionReducer';
import timerReducer from './timerReducer';

const rootReducer = combineReducers({
  breakLength: breakReducer,
  sessionLength: sessionReducer,
  timer: timerReducer,
});

export default rootReducer;
