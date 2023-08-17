import { INCREMENT_SESSION, DECREMENT_SESSION, RESET_ALL } from '../actions/actionTypes';
import { SET_SESSION_LENGTH } from '../actions/sessionActions';

const initialState = 25;

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SESSION_LENGTH:
      return action.payload;
    case INCREMENT_SESSION:
      return Math.min(60, state + 1);
    case DECREMENT_SESSION:
      return Math.max(1, state - 1);
    case RESET_ALL:
      return initialState;
    default:
      return state;
  }
};

export default sessionReducer;
