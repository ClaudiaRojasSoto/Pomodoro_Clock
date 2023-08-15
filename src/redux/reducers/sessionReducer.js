import { INCREMENT_SESSION, DECREMENT_SESSION } from "../actions/actionTypes";

const initialState = 25;

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_SESSION:
      return Math.min(60, state + 1);
    case DECREMENT_SESSION:
      return Math.max(1, state - 1);
    default:
      return state;
  }
};

export default sessionReducer;
