import { INCREMENT_BREAK, DECREMENT_BREAK, RESET_ALL } from '../actions/actionTypes';

const initialState = 5;

const breakReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_BREAK:
      return Math.min(60, state + 1);
    case DECREMENT_BREAK:
      return Math.max(1, state - 1);
    case RESET_ALL:
      return initialState;
    default:
      return state;
  }
};

export default breakReducer;
