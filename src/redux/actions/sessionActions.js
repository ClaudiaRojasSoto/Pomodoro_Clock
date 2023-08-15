import { INCREMENT_SESSION, DECREMENT_SESSION } from "./actionTypes";

export const incrementSession = () => {
  return { type: INCREMENT_SESSION };
};

export const decrementSession = () => {
  return { type: DECREMENT_SESSION };
};
