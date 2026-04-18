import React, { useState } from 'react';
import { Provider, connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { store, addItem, removeItem, clearAll } from './store';
import './Demo3.css';

const SUGGESTIONS = [
  'Learn Redux',
  'Build cool apps',
  'Master animations',
  'Ship great code',
  'Read the docs',
  'Write clean reducers',
  'Dispatch actions',
  'Subscribe to store',
];

function ListDemo({ items, onAdd, onRemove, onClear }) {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    const text = inputValue.trim() || SUGGESTIONS[Math.floor(Math.random() * SUGGESTIONS.length)];
    onAdd(text);
    setInputValue('');
  };

  const handleKey = e => {
    if (e.key === 'Enter') handleAdd();
  };

  return (
    <div className="list-root">

      {/* Input row */}
      <div className="list-input-row">
        <input
          className="list-input"
          type="text"
          placeholder="Type something or press + for random..."
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={handleKey}
        />
        <button className="btn btn--2" onClick={handleAdd}>+ Add</button>
        {items.length > 0 && (
          <button className="btn btn--ghost" onClick={onClear}>Clear All</button>
        )}
      </div>

      {/* Animated list */}
      <div className="list-stage">
        {items.length === 0 ? (
          <div className="list-empty">
            <span>📭</span>
            <p>List is empty. Add some items!</p>
          </div>
        ) : (
          <TransitionGroup component="ul" className="list-ul">
            {items.map((item, index) => (
              <CSSTransition
                key={item.id}
                timeout={400}
                classNames="list-item-anim"
              >
                <li className="list-item">
                  <span className="list-item-index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="list-item-text">{item.text}</span>
                  <button
                    className="list-item-remove"
                    onClick={() => onRemove(item.id)}
                    title="Remove"
                  >
                    ✕
                  </button>
                </li>
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </div>

      <div className="state-display">
        Redux state: <span>{items.length}</span> item{items.length !== 1 ? 's' : ''} in list
      </div>
    </div>
  );
}

const mapState    = state    => ({ items: state.items });
const mapDispatch = dispatch => ({
  onAdd:    text => dispatch(addItem(text)),
  onRemove: id   => dispatch(removeItem(id)),
  onClear:  ()   => dispatch(clearAll()),
});

const Connected = connect(mapState, mapDispatch)(ListDemo);

function Demo3() {
  return (
    <div className="demo-wrapper">
      <div className="demo-header">
        <div className="demo-tag demo-tag--3">Demo 3</div>
        <h1 className="demo-title">List Item Animations</h1>
        <p className="demo-desc">
          Redux manages a dynamic list. React Transition Group's TransitionGroup
          animates each item as it enters or exits the list with staggered effects.
        </p>
      </div>

      <div className="demo-card">
        <Provider store={store}>
          <Connected />
        </Provider>
      </div>
    </div>
  );
}

export default Demo3;
