import React from 'react';
import { FaHeadset, FaEnvelope, FaExclamationTriangle } from 'react-icons/fa';
import './Pages.css';

const Support = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Поддержка</h1>
        <p>Мы всегда готовы помочь вам</p>
      </div>

      <div className="support-grid">
        <div className="support-card">
          <FaHeadset className="support-icon" />
          <h3>Онлайн поддержка</h3>
          <p>Наша команда поддержки доступна 24/7</p>
          <button className="support-button">Начать чат</button>
        </div>

        <div className="support-card">
          <FaEnvelope className="support-icon" />
          <h3>Email поддержка</h3>
          <p>Напишите нам на почту</p>
          <a href="mailto:support@ruletka.com" className="support-button">
            Написать письмо
          </a>
        </div>

        <div className="support-card">
          <FaExclamationTriangle className="support-icon" />
          <h3>Сообщить о нарушении</h3>
          <p>Помогите нам сделать сервис лучше</p>
          <button className="support-button warning">Сообщить</button>
        </div>
      </div>

      <div className="faq-section">
        <h2>Часто задаваемые вопросы</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>Как начать чат?</h3>
            <p>Просто нажмите кнопку "Начать чат" на главной странице и разрешите доступ к камере и микрофону.</p>
          </div>
          <div className="faq-item">
            <h3>Безопасно ли это?</h3>
            <p>Мы используем шифрование и модерацию контента для обеспечения безопасности пользователей.</p>
          </div>
          <div className="faq-item">
            <h3>Это бесплатно?</h3>
            <p>Да, наш сервис полностью бесплатный для всех пользователей.</p>
          </div>
          <div className="faq-item">
            <h3>Нужна ли регистрация?</h3>
            <p>Нет, вы можете начать общение без регистрации.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support; 