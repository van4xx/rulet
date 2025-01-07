import React from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaCloudSun } from 'react-icons/fa';
import './Header.css';

const Header = ({ theme, onThemeChange }) => {
  return (
    <header className={`header ${theme}`}>
      <div className="header-content">
        <Link to="/" className="logo">
          <span className="logo-text">Alien Ruletka</span>
          <div className="nav-status">
            <span className="online-count">1337 онлайн</span>
          </div>
        </Link>

        <nav className="nav-links">
          <Link to="/">Главная</Link>
          <Link to="/chat">Начать чат</Link>
          <Link to="/features">Возможности</Link>
          <Link to="/support">Поддержка</Link>
        </nav>

        <div className="theme-switcher">
          <button
            className={`theme-btn ${theme === 'morning' ? 'active' : ''}`}
            onClick={() => onThemeChange('morning')}
          >
            <FaCloudSun />
          </button>
          <button
            className={`theme-btn ${theme === 'day' ? 'active' : ''}`}
            onClick={() => onThemeChange('day')}
          >
            <FaSun />
          </button>
          <button
            className={`theme-btn ${theme === 'night' ? 'active' : ''}`}
            onClick={() => onThemeChange('night')}
          >
            <FaMoon />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 