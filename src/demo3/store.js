import { createStore } from 'redux';

// Action Types
export const ADD_ITEM    = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CLEAR_ALL   = 'CLEAR_ALL';

// Action Creators
export const addItem    = text => ({ type: ADD_ITEM,    payload: { id: Date.now(), text } });
export const removeItem = id   => ({ type: REMOVE_ITEM, payload: id });
export const clearAll   = ()   => ({ type: CLEAR_ALL });

const initialState = {
  items: [
    { id: 1, text: 'Click + to add items' },
    { id: 2, text: 'Click ✕ to remove with animation' },
    { id: 3, text: 'Redux manages the list state' },
  ],
};

function listReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return { items: [...state.items, action.payload] };
    case REMOVE_ITEM:
      return { items: state.items.filter(item => item.id !== action.payload) };
    case CLEAR_ALL:
      return { items: [] };
    default:
      return state;
  }
}

export const store = createStore(listReducer);
