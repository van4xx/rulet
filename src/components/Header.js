import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaVideo, FaUserFriends, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <FaVideo className="logo-icon" />
          <span>RULETKA</span>
        </Link>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Главная
          </Link>
          <Link 
            to="/chat" 
            className={`nav-link ${location.pathname === '/chat' ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Чат
          </Link>
          <div className="nav-status">
            <FaUserFriends className="status-icon" />
            <span className="online-count">1337 онлайн</span>
          </div>
        </nav>

        <button 
          className="menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header; 