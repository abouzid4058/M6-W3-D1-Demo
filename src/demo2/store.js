import { createStore } from 'redux';

// Action Types
export const TOGGLE_BOX   = 'TOGGLE_BOX';
export const SET_COLOR    = 'SET_COLOR';
export const SET_ANIM     = 'SET_ANIM';

// Action Creators
export const toggleBox  = ()      => ({ type: TOGGLE_BOX });
export const setColor   = color   => ({ type: SET_COLOR, payload: color });
export const setAnim    = anim    => ({ type: SET_ANIM,  payload: anim  });

const initialState = {
  visible: false,
  color: '#7c3aed',
  animation: 'fade',
};

function toggleReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_BOX:  return { ...state, visible: !state.visible };
    case SET_COLOR:   return { ...state, color: action.payload };
    case SET_ANIM:    return { ...state, animation: action.payload };
    default:          return state;
  }
}

export const store = createStore(toggleReducer);
