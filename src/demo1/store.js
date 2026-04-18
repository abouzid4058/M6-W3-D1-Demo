import { createStore } from 'redux';

// Action Types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET     = 'RESET';

// Action Creators
export const increment = (amount = 1) => ({ type: INCREMENT, payload: amount });
export const decrement = (amount = 1) => ({ type: DECREMENT, payload: amount });
export const reset     = ()           => ({ type: RESET });

// Initial State
const initialState = {
  count: 0,
  lastAction: null,
};

// Reducer
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + action.payload, lastAction: 'increment' };
    case DECREMENT:
      return { count: state.count - action.payload, lastAction: 'decrement' };
    case RESET:
      return { count: 0, lastAction: 'reset' };
    default:
      return state;
  }
}

export const store = createStore(counterReducer);
