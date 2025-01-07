import React from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaStar, FaUserAstronaut, FaGlobeAmericas } from 'react-icons/fa';
import './Home.css';

const Home = ({ theme = 'morning' }) => {
  return (
    <div className={`home-container ${theme}`}>
      <div className="space-background">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
        {theme === 'morning' && <div className="sunrise"></div>}
        {theme === 'day' && <div className="sun"></div>}
        {theme === 'night' && <div className="moon"></div>}
        
        <div className="floating-aliens">
          <div className="alien alien-1"></div>
          <div className="alien alien-2"></div>
          <div className="alien alien-3"></div>
          <div className="ufo"></div>
        </div>
      </div>

      <div className="hero-section">
        <div className="hero-content">
          <div className="alien-badge">
            <FaUserAstronaut />
            <span>Космический видеочат</span>
          </div>
          
          <h1>
            <span className="gradient-text">Alien</span> Ruletka
          </h1>
          
          <p className="hero-description">
            Исследуйте галактику общения с незнакомцами из разных уголков вселенной
          </p>

          <div className="cta-buttons">
            <Link to="/chat" className="start-chat-btn">
              <FaRocket className="btn-icon" />
              <span>Начать путешествие</span>
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <FaStar className="stat-icon" />
              <span>1337 онлайн</span>
            </div>
            <div className="stat-item">
              <FaGlobeAmericas className="stat-icon" />
              <span>Вся галактика</span>
            </div>
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="feature-card">
          <div className="feature-icon">👽</div>
          <h3>Случайные встречи</h3>
          <p>Знакомьтесь с инопланетянами со всей галактики</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🚀</div>
          <h3>Мгновенный старт</h3>
          <p>Без регистрации и межгалактических паспортов</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🌌</div>
          <h3>Космические фильтры</h3>
          <p>Уникальные эффекты и маски для общения</p>
        </div>
      </div>
    </div>
  );
};

export default Home; 