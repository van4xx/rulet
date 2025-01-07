import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaDiscord, FaTelegram, FaHeart, FaRocket, FaShieldAlt } from 'react-icons/fa';

const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  color: white;
  padding: 3rem 0 0 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin: 0;
`;

const FooterContent = styled.div`
  width: 100%;
  margin: 0;
  padding: 0 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.2rem;
    color: #64ffda;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid rgba(100, 255, 218, 0.3);
  }
`;

const FooterLink = styled(Link)`
  display: block;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  margin-bottom: 0.8rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #64ffda;
    transform: translateX(5px);
  }
`;

const ExternalLink = styled.a`
  display: block;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  margin-bottom: 0.8rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #64ffda;
    transform: translateX(5px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.5rem;
    transition: all 0.3s ease;

    &:hover {
      color: #64ffda;
      transform: translateY(-3px);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin: 3rem 0 0 0;
  padding: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;

  span {
    color: #64ffda;
  }
`;

const FooterStats = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;

  svg {
    color: #64ffda;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>О проекте</h3>
          <FooterLink to="/about">О нас</FooterLink>
          <FooterLink to="/faq">FAQ</FooterLink>
          <FooterLink to="/terms">Условия использования</FooterLink>
          <FooterLink to="/privacy">Политика конфиденциальности</FooterLink>
          <FooterStats>
            <FaRocket /> Запуск в 2025
          </FooterStats>
        </FooterSection>
        <FooterSection>
          <h3>Поддержка</h3>
          <FooterLink to="/contact">Связаться с нами</FooterLink>
          <FooterLink to="/report">Сообщить о проблеме</FooterLink>
          <FooterLink to="/safety">Правила безопасности</FooterLink>
          <FooterStats>
            <FaShieldAlt /> Безопасность 24/7
          </FooterStats>
        </FooterSection>
        <FooterSection>
          <h3>Сообщество</h3>
          <ExternalLink href="https://blog.alienruletka.com">Блог</ExternalLink>
          <ExternalLink href="https://forum.alienruletka.com">Форум</ExternalLink>
          <SocialLinks>
            <ExternalLink href="https://github.com/alienruletka">
              <FaGithub />
            </ExternalLink>
            <ExternalLink href="https://twitter.com/alienruletka">
              <FaTwitter />
            </ExternalLink>
            <ExternalLink href="https://discord.gg/alienruletka">
              <FaDiscord />
            </ExternalLink>
            <ExternalLink href="https://t.me/alienruletka">
              <FaTelegram />
            </ExternalLink>
          </SocialLinks>
        </FooterSection>
      </FooterContent>
      <Copyright>
        © 2023-2025 Alien Ruletka. Создано с <FaHeart style={{ color: '#ff6b6b' }} /> к космосу. 
        <br />
        <span>Готовимся к запуску в 2025 году</span>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 