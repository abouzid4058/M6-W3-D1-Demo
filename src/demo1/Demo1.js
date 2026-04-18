import React, { useState, useEffect, useRef } from 'react';
import { Provider, connect } from 'react-redux';
import { store, increment, decrement, reset } from './store';
import './Demo1.css';

function CounterDisplay({ count, lastAction, onIncrement, onDecrement, onReset }) {
  const [animKey, setAnimKey] = useState(0);
  const [prevCount, setPrevCount] = useState(count);
  const prevCountRef = useRef(count);

  useEffect(() => {
    if (count !== prevCountRef.current) {
      setAnimKey(k => k + 1);
      setPrevCount(prevCountRef.current);
      prevCountRef.current = count;
    }
  }, [count]);

  const direction = lastAction === 'increment' ? 'up' : lastAction === 'decrement' ? 'down' : 'reset';

  return (
    <div className="counter-root">
      <div className={`counter-ring ring--${direction}`}>
        <div className="counter-inner">
          <div
            key={animKey}
            className={`counter-number anim--${direction}`}
          >
            {count}
          </div>
          <div className="counter-label">current count</div>
        </div>
      </div>

      <div className="counter-controls">
        <button className="btn btn--ghost counter-btn" onClick={() => onDecrement(10)}>−10</button>
        <button className="btn btn--ghost counter-btn" onClick={() => onDecrement(1)}>−1</button>
        <button className="btn btn--ghost counter-btn reset-btn" onClick={onReset}>↺</button>
        <button className="btn btn--1 counter-btn"  onClick={() => onIncrement(1)}>+1</button>
        <button className="btn btn--1 counter-btn"  onClick={() => onIncrement(10)}>+10</button>
      </div>

      <div className="counter-history">
        {lastAction && (
          <div className="history-item">
            Last action: <span className={`history-action action--${direction}`}>{lastAction}</span>
          </div>
        )}
        <div className="history-item">
          Redux state: <span>{'{ count: '}{count}{'}'}</span>
        </div>
      </div>
    </div>
  );
}

const mapState = state => ({
  count: state.count,
  lastAction: state.lastAction,
});

const mapDispatch = dispatch => ({
  onIncrement: amount => dispatch(increment(amount)),
  onDecrement: amount => dispatch(decrement(amount)),
  onReset: () => dispatch(reset()),
});

const ConnectedCounter = connect(mapState, mapDispatch)(CounterDisplay);

function Demo1() {
  return (
    <div className="demo-wrapper">
      <div className="demo-header">
        <div className="demo-tag demo-tag--1">Demo 1</div>
        <h1 className="demo-title">Counter Animation</h1>
        <p className="demo-desc">
          Redux manages a counter state. Each increment/decrement dispatches an action
          and the number animates in from above or below depending on direction.
        </p>
      </div>

      <div className="demo-card">
        <Provider store={store}>
          <ConnectedCounter />
        </Provider>
      </div>
    </div>
  );
}

export default Demo1;
