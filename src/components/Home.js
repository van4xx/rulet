import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaVideo, FaUserFriends, FaGlobeAmericas, FaShieldAlt, FaBolt, FaMagic, 
         FaTwitter, FaInstagram, FaTelegram, FaDiscord, FaRocket, FaSatellite } from 'react-icons/fa';
import { GiAlienStare, GiUfo, GiAstronautHelmet } from 'react-icons/gi';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [onlineCount, setOnlineCount] = useState(1234);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineCount(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <FaVideo />,
      title: "HD Видео чат",
      description: "Кристально чистое видео и звук для комфортного общения"
    },
    {
      icon: <FaUserFriends />,
      title: "Случайные знакомства",
      description: "Находите новых интересных собеседников каждый день"
    },
    {
      icon: <FaGlobeAmericas />,
      title: "Без границ",
      description: "Общайтесь с людьми со всего мира в реальном времени"
    },
    {
      icon: <FaShieldAlt />,
      title: "Безопасность",
      description: "Защищенное соединение и модерация контента"
    },
    {
      icon: <FaBolt />,
      title: "Быстрый старт",
      description: "Начните общение одним кликом, без регистрации"
    },
    {
      icon: <FaMagic />,
      title: "Эффекты и маски",
      description: "Разнообразные 3D маски и эффекты для веселого общения"
    }
  ];

  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-circles">
            <div className="hero-circle"></div>
            <div className="hero-circle"></div>
            <div className="hero-circle"></div>
          </div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <FaRocket className="hero-badge-icon" />
            <span className="hero-badge-text">Рулетка</span>
          </div>
          
          <h1 className="hero-title">
            Рулетка
          </h1>
          
          <p className="hero-description">
            Погрузитесь в уникальный опыт общения с незнакомцами со всего мира. 
            Используйте видеочат с инопланетными фильтрами и мгновенным переводом.
          </p>
          
          <div className="hero-buttons">
            <Link to="/chat" className="hero-button hero-button-primary">
              <FaVideo />
              Начать общение
            </Link>
            <button className="hero-button hero-button-secondary">
              <FaGlobeAmericas />
              Узнать больше
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-value">1,000+</div>
              <div className="stat-label">Онлайн</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">50M+</div>
              <div className="stat-label">Чатов</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">200+</div>
              <div className="stat-label">Стран</div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="features-section">
        <h2>Почему выбирают нас</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-section">
        <div className="cta-content">
          <h2>Готовы начать общение?</h2>
          <p>Присоединяйтесь к тысячам пользователей прямо сейчас!</p>
          <button 
            className="cta-button"
            onClick={() => navigate('/chat')}
          >
            Начать видеочат
            <span className="arrow">→</span>
          </button>
        </div>
        <div className="cta-background"></div>
      </div>

      <div className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-number">1M+</span>
            <span className="stat-label">Пользователей</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50K+</span>
            <span className="stat-label">Чатов в день</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100+</span>
            <span className="stat-label">Стран</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Поддержка</span>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>О нас</h3>
            <p>Ruletka - современная платформа для видеообщения со случайными собеседниками со всего мира.</p>
            <div className="social-links">
              <a href="#" className="social-link"><FaTwitter /></a>
              <a href="#" className="social-link"><FaInstagram /></a>
              <a href="#" className="social-link"><FaTelegram /></a>
              <a href="#" className="social-link"><FaDiscord /></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Навигация</h3>
            <Link to="/">Главная</Link>
            <Link to="/chat">Начать чат</Link>
            <Link to="/features">Возможности</Link>
            <Link to="/support">Поддержка</Link>
          </div>
          
          <div className="footer-section">
            <h3>Правовая информация</h3>
            <Link to="/terms">Условия использования</Link>
            <Link to="/privacy">Политика конфиденциальности</Link>
            <Link to="/cookies">Политика cookies</Link>
            <Link to="/safety">Правила безопасности</Link>
          </div>
          
          <div className="footer-section">
            <h3>Поддержка</h3>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Связаться с нами</Link>
            <Link to="/report">Сообщить о нарушении</Link>
            <div className="support-badge">
              <span className="support-dot"></span>
              Онлайн поддержка 24/7
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>© 2024 Ruletka. Все права защищены.</p>
            <div className="language-selector">
              <select>
                <option value="ru">Русский</option>
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home; 