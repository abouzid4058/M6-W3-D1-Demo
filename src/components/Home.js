import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const demos = [
  {
    id: 1,
    to: '/demo1',
    tag: 'Demo 1',
    title: 'Counter Animation',
    desc: 'Redux-powered increment/decrement counter with smooth CSS transitions and animated number changes.',
    color: 'var(--accent1)',
    bgColor: 'rgba(124,58,237,0.08)',
    borderColor: 'rgba(124,58,237,0.3)',
    icon: '🔢',
  },
  {
    id: 2,
    to: '/demo2',
    tag: 'Demo 2',
    title: 'Toggle & Fade Animation',
    desc: 'Redux state controlling mount/unmount animations using React Transition Group for smooth enter/exit effects.',
    color: 'var(--accent2)',
    bgColor: 'rgba(6,182,212,0.08)',
    borderColor: 'rgba(6,182,212,0.3)',
    icon: '🔄',
  },
  {
    id: 3,
    to: '/demo3',
    tag: 'Demo 3',
    title: 'List Item Animations',
    desc: 'Redux-managed list with staggered item animations — add and remove items with animated transitions.',
    color: 'var(--accent3)',
    bgColor: 'rgba(244,63,94,0.08)',
    borderColor: 'rgba(244,63,94,0.3)',
    icon: '📋',
  },
];

function Home() {
  return (
    <div className="home">
      <div className="home-hero">
        <p className="home-eyebrow">Module 6 · Week 3 · Day 1</p>
        <h1 className="home-title">Redux Animation<br /><span>Showcase</span></h1>
        <p className="home-subtitle">
          Three interactive demos exploring how Redux state management
          drives UI animations in React applications.
        </p>
      </div>

      <div className="home-grid">
        {demos.map(demo => (
          <Link
            key={demo.id}
            to={demo.to}
            className="demo-card-link"
            style={{ '--card-color': demo.color, '--card-bg': demo.bgColor, '--card-border': demo.borderColor }}
          >
            <div className="demo-card-home">
              <div className="demo-card-icon">{demo.icon}</div>
              <div className="demo-card-tag">{demo.tag}</div>
              <h2 className="demo-card-title">{demo.title}</h2>
              <p className="demo-card-desc">{demo.desc}</p>
              <div className="demo-card-arrow">View Demo →</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="home-footer-note">
        <p>Built with React · Redux · React Router · React Transition Group</p>
      </div>
    </div>
  );
}

export default Home;
