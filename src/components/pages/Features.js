import React from 'react';
import { FaVideo, FaUserFriends, FaGlobeAmericas, FaShieldAlt, FaBolt, FaMagic } from 'react-icons/fa';
import './Pages.css';

const Features = () => {
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
    <div className="page-container">
      <div className="page-header">
        <h1>Возможности</h1>
        <p>Откройте для себя все преимущества нашего сервиса</p>
      </div>
      
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
  );
};

export default Features; 