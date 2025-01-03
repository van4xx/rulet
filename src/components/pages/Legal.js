import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { FaShieldAlt, FaCookie, FaUserSecret, FaFileContract } from 'react-icons/fa';
import './Pages.css';

const Terms = () => (
  <div className="legal-content">
    <h2>Условия использования</h2>
    <div className="legal-section">
      <h3>1. Общие положения</h3>
      <p>Используя наш сервис, вы соглашаетесь с данными условиями использования.</p>
      
      <h3>2. Правила поведения</h3>
      <p>Пользователи обязуются соблюдать общепринятые нормы поведения и не нарушать законодательство.</p>
      
      <h3>3. Ответственность</h3>
      <p>Сервис не несет ответственности за действия пользователей и контент, создаваемый ими.</p>
    </div>
  </div>
);

const Privacy = () => (
  <div className="legal-content">
    <h2>Политика конфиденциальности</h2>
    <div className="legal-section">
      <h3>1. Сбор данных</h3>
      <p>Мы собираем только необходимые данные для работы сервиса.</p>
      
      <h3>2. Использование данных</h3>
      <p>Ваши данные используются исключительно для обеспечения работы сервиса.</p>
      
      <h3>3. Защита информации</h3>
      <p>Мы используем современные методы шифрования для защиты ваших данных.</p>
    </div>
  </div>
);

const Cookies = () => (
  <div className="legal-content">
    <h2>Политика cookies</h2>
    <div className="legal-section">
      <h3>1. Что такое cookies</h3>
      <p>Cookies - это небольшие файлы, которые сохраняются на вашем устройстве.</p>
      
      <h3>2. Использование cookies</h3>
      <p>Мы используем cookies для улучшения работы сервиса и персонализации.</p>
      
      <h3>3. Управление cookies</h3>
      <p>Вы можете управлять настройками cookies в вашем браузере.</p>
    </div>
  </div>
);

const Safety = () => (
  <div className="legal-content">
    <h2>Правила безопасности</h2>
    <div className="legal-section">
      <h3>1. Общие рекомендации</h3>
      <p>Не делитесь личной информацией с незнакомцами.</p>
      
      <h3>2. Безопасное общение</h3>
      <p>Соблюдайте правила безопасного общения в интернете.</p>
      
      <h3>3. Сообщение о нарушениях</h3>
      <p>Если вы столкнулись с нарушением, сообщите об этом модераторам.</p>
    </div>
  </div>
);

const Legal = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Правовая информация</h1>
        <p>Ознакомьтесь с нашими правилами и политиками</p>
      </div>

      <div className="legal-navigation">
        <Link to="/legal/terms" className={`legal-nav-item ${path.includes('/terms') ? 'active' : ''}`}>
          <FaFileContract />
          <span>Условия использования</span>
        </Link>
        <Link to="/legal/privacy" className={`legal-nav-item ${path.includes('/privacy') ? 'active' : ''}`}>
          <FaUserSecret />
          <span>Конфиденциальность</span>
        </Link>
        <Link to="/legal/cookies" className={`legal-nav-item ${path.includes('/cookies') ? 'active' : ''}`}>
          <FaCookie />
          <span>Cookies</span>
        </Link>
        <Link to="/legal/safety" className={`legal-nav-item ${path.includes('/safety') ? 'active' : ''}`}>
          <FaShieldAlt />
          <span>Безопасность</span>
        </Link>
      </div>

      <div className="legal-container">
        <Routes>
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/safety" element={<Safety />} />
        </Routes>
      </div>
    </div>
  );
};

export default Legal; 