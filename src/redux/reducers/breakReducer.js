import { INCREMENT_BREAK, DECREMENT_BREAK } from "../actions/actionTypes";

const initialState = 5;

const breakReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_BREAK:
      return Math.min(60, state + 1);
    case DECREMENT_BREAK:
      return Math.max(1, state - 1);
    default:
      return state;
  }
};

export default breakReducer;
