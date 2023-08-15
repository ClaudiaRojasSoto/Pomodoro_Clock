import { INCREMENT_BREAK, DECREMENT_BREAK } from "./actionTypes";

export const incrementBreak = () => {
  return { type: INCREMENT_BREAK };
};

export const decrementBreak = () => {
  return { type: DECREMENT_BREAK };
};
