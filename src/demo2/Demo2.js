import React from 'react';
import { Provider, connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { store, toggleBox, setColor, setAnim } from './store';
import './Demo2.css';

const COLORS = [
  { label: 'Purple', value: '#7c3aed' },
  { label: 'Cyan',   value: '#06b6d4' },
  { label: 'Pink',   value: '#f43f5e' },
  { label: 'Amber',  value: '#f59e0b' },
  { label: 'Green',  value: '#10b981' },
];

const ANIMS = ['fade', 'slide', 'zoom', 'flip'];

function ToggleDemo({ visible, color, animation, onToggle, onSetColor, onSetAnim }) {
  return (
    <div className="toggle-root">

      {/* Controls */}
      <div className="toggle-controls-grid">
        <div className="control-group">
          <label className="control-label">Animation</label>
          <div className="anim-tabs">
            {ANIMS.map(a => (
              <button
                key={a}
                className={`anim-tab ${animation === a ? 'anim-tab--active' : ''}`}
                onClick={() => onSetAnim(a)}
              >
                {a}
              </button>
            ))}
          </div>
        </div>

        <div className="control-group">
          <label className="control-label">Color</label>
          <div className="color-row">
            {COLORS.map(c => (
              <button
                key={c.value}
                className={`color-swatch ${color === c.value ? 'color-swatch--active' : ''}`}
                style={{ background: c.value }}
                title={c.label}
                onClick={() => onSetColor(c.value)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Toggle button */}
      <button
        className={`toggle-btn ${visible ? 'toggle-btn--hide' : 'toggle-btn--show'}`}
        onClick={onToggle}
      >
        {visible ? '✕ Hide Box' : '+ Show Box'}
      </button>

      {/* Animated box stage */}
      <div className="stage">
        <CSSTransition
          in={visible}
          timeout={400}
          classNames={`anim-${animation}`}
          unmountOnExit
        >
          <div
            className="animated-box"
            style={{ background: color }}
          >
            <span className="box-label">Redux</span>
            <span className="box-sub">Controlled</span>
          </div>
        </CSSTransition>

        {!visible && (
          <div className="stage-placeholder">
            <span>Click "Show Box" to animate</span>
          </div>
        )}
      </div>

      <div className="state-display">
        Redux state: <span>{'{ visible: '}{String(visible)}{', animation: "'}{animation}{'" }'}</span>
      </div>
    </div>
  );
}

const mapState = state => ({
  visible:   state.visible,
  color:     state.color,
  animation: state.animation,
});

const mapDispatch = dispatch => ({
  onToggle:   ()      => dispatch(toggleBox()),
  onSetColor: color   => dispatch(setColor(color)),
  onSetAnim:  anim    => dispatch(setAnim(anim)),
});

const Connected = connect(mapState, mapDispatch)(ToggleDemo);

function Demo2() {
  return (
    <div className="demo-wrapper">
      <div className="demo-header">
        <div className="demo-tag demo-tag--2">Demo 2</div>
        <h1 className="demo-title">Toggle & Fade Animation</h1>
        <p className="demo-desc">
          Redux controls visibility state. React Transition Group's CSSTransition handles
          smooth enter/exit animations — choose from fade, slide, zoom, or flip.
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

export default Demo2;
