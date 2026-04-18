import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Demo1 from './demo1/Demo1';
import Demo2 from './demo2/Demo2';
import Demo3 from './demo3/Demo3';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <div className="logo">
            <span className="logo-icon">⚡</span>
            <span className="logo-text">Redux<span className="logo-accent">Animations</span></span>
          </div>
          <nav className="nav">
            <NavLink exact to="/" className="nav-link" activeClassName="nav-link--active">
              Home
            </NavLink>
            <NavLink to="/demo1" className="nav-link nav-link--1" activeClassName="nav-link--active">
              Demo 1
            </NavLink>
            <NavLink to="/demo2" className="nav-link nav-link--2" activeClassName="nav-link--active">
              Demo 2
            </NavLink>
            <NavLink to="/demo3" className="nav-link nav-link--3" activeClassName="nav-link--active">
              Demo 3
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/demo1" component={Demo1} />
          <Route path="/demo2" component={Demo2} />
          <Route path="/demo3" component={Demo3} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
