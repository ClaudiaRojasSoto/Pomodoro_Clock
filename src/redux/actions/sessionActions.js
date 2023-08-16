import { INCREMENT_SESSION, DECREMENT_SESSION } from './actionTypes';

export const incrementSession = () => ({ type: INCREMENT_SESSION });

export const decrementSession = () => ({ type: DECREMENT_SESSION });
