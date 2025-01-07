import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import spaceThemes from '../themes/spaceThemes';

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.theme.background};
  transition: background 1s ease;
  overflow: hidden;
  z-index: -1;
`;

const SpaceContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
`;

const Star = styled.div`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  border-radius: 50%;
  animation: twinkle ${props => props.twinkleSpeed}s ease-in-out infinite alternate;
  box-shadow: 0 0 ${props => props.size}px ${props => props.color};

  @keyframes twinkle {
    0% { opacity: 0.3; }
    100% { opacity: 1; }
  }
`;

const Planet = styled.div`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  border-radius: 50%;
  box-shadow: 0 0 30px ${props => props.glowColor || props.color};
  animation: orbit ${props => props.orbitSpeed}s linear infinite;
  transform-origin: 50% 50%;

  &::before {
    content: '';
    position: absolute;
    top: -5%;
    left: -5%;
    right: -5%;
    bottom: -5%;
    background: ${props => props.atmosphereColor || 'transparent'};
    border-radius: 50%;
    opacity: 0.5;
    animation: pulse 4s ease-in-out infinite;
  }

  ${props => props.rings ? `
    &::after {
      content: '';
      position: absolute;
      width: 140%;
      height: 20px;
      background: ${props.ringsColor || 'rgba(255, 255, 255, 0.2)'};
      left: -20%;
      top: 50%;
      transform: translateY(-50%) rotate(75deg);
      border-radius: 50%;
      box-shadow: 0 0 20px ${props.ringsColor || 'rgba(255, 255, 255, 0.2)'};
    }
  ` : ''}

  @keyframes orbit {
    from { transform: rotate(0deg) translateX(${props => props.orbitRadius}px) rotate(0deg); }
    to { transform: rotate(360deg) translateX(${props => props.orbitRadius}px) rotate(-360deg); }
  }

  @keyframes pulse {
    0% { transform: scale(1); opacity: 0.3; }
    50% { transform: scale(1.1); opacity: 0.5; }
    100% { transform: scale(1); opacity: 0.3; }
  }
`;

const Satellite = styled.div`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  border-radius: 50%;
  animation: orbit ${props => props.orbitSpeed}s linear infinite;
  transform-origin: 50% 50%;

  @keyframes orbit {
    from { transform: rotate(0deg) translateX(${props => props.orbitRadius}px) rotate(0deg); }
    to { transform: rotate(360deg) translateX(${props => props.orbitRadius}px) rotate(-360deg); }
  }
`;

const Nebula = styled.div`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.6;
  left: ${props => props.position.x};
  top: ${props => props.position.y};
  animation: nebulaPulse 20s ease-in-out infinite;

  @keyframes nebulaPulse {
    0% { transform: scale(1); opacity: 0.4; }
    50% { transform: scale(1.1); opacity: 0.6; }
    100% { transform: scale(1); opacity: 0.4; }
  }
`;

const Comet = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background: ${props => props.color};
  border-radius: 50%;
  animation: cometMove ${props => props.speed}s linear infinite;
  animation-delay: ${props => props.delay}s;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    width: ${props => props.tailLength}px;
    height: 2px;
    background: linear-gradient(to left, ${props => props.color}, transparent);
    transform: translateY(-50%);
  }

  @keyframes cometMove {
    from { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
    to { transform: translateX(200%) translateY(200%) rotate(45deg); }
  }
`;

const UFO = styled.div`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => Math.floor(props.size * 0.4)}px;
  background: ${props => props.color};
  border-radius: 50% 50% 20% 20%;
  box-shadow: 0 0 20px ${props => props.glowColor};
  animation: ufoFloat ${props => 5 / props.speed}s ease-in-out infinite;

  @keyframes ufoFloat {
    0% { transform: translate(0, 0); }
    50% { transform: translate(30px, 30px); }
    100% { transform: translate(0, 0); }
  }
`;

const Aurora = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(
    to bottom,
    transparent,
    ${props => props.colors.map((color, i) => `${color} ${i * 25}%`).join(', ')}
  );
  opacity: ${props => props.intensity};
  filter: blur(30px);
  animation: auroraWave ${props => props.speed}s ease-in-out infinite;

  @keyframes auroraWave {
    0% { transform: translateX(-25%) scale(1); }
    50% { transform: translateX(25%) scale(1.2); }
    100% { transform: translateX(-25%) scale(1); }
  }
`;

const SpaceBackground = ({ theme = 'night' }) => {
  const canvasRef = useRef(null);
  const currentTheme = spaceThemes[theme];

  useEffect(() => {
    const generateStars = () => {
      const stars = [];
      const { count, size, color, twinkleSpeed } = currentTheme.stars;
      
      for (let i = 0; i < count; i++) {
        stars.push({
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          size: Math.random() * (size.max - size.min) + size.min,
          twinkleSpeed: Math.random() * (twinkleSpeed.max - twinkleSpeed.min) + twinkleSpeed.min
        });
      }
      
      return stars;
    };

    if (canvasRef.current) {
      canvasRef.current.innerHTML = '';
      const stars = generateStars();
      stars.forEach(star => {
        const starElement = document.createElement('div');
        Object.assign(starElement.style, {
          position: 'absolute',
          left: star.left,
          top: star.top,
          width: `${star.size}px`,
          height: `${star.size}px`,
          background: currentTheme.stars.color,
          borderRadius: '50%',
          boxShadow: `0 0 ${star.size}px ${currentTheme.stars.color}`,
          animation: `twinkle ${star.twinkleSpeed}s ease-in-out infinite alternate`
        });
        canvasRef.current.appendChild(starElement);
      });
    }
  }, [theme, currentTheme.stars]);

  return (
    <Background theme={currentTheme}>
      <SpaceContainer>
        <div ref={canvasRef} style={{ position: 'absolute', width: '100%', height: '100%' }} />
        
        {currentTheme.nebulas?.map((nebula, i) => (
          <Nebula key={i} {...nebula} />
        ))}

        {currentTheme.planets.map((planet, i) => (
          <React.Fragment key={i}>
            <Planet {...planet} />
            {planet.satellites?.map((satellite, j) => (
              <Satellite key={`${i}-${j}`} {...satellite} />
            ))}
          </React.Fragment>
        ))}

        {currentTheme.comets && Array.from({ length: currentTheme.comets.count }).map((_, i) => (
          <Comet
            key={i}
            color={currentTheme.comets.color}
            tailLength={currentTheme.comets.tailLength}
            speed={Math.random() * (currentTheme.comets.speed.max - currentTheme.comets.speed.min) + currentTheme.comets.speed.min}
            delay={Math.random() * 10}
          />
        ))}

        {currentTheme.ufos && Array.from({ length: currentTheme.ufos.count }).map((_, i) => (
          <UFO
            key={i}
            {...currentTheme.ufos}
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`
            }}
          />
        ))}

        {currentTheme.aurora?.active && (
          <Aurora {...currentTheme.aurora} />
        )}

        {currentTheme.shootingStars && Array.from({ length: currentTheme.shootingStars.count }).map((_, i) => (
          <Comet
            key={`shooting-star-${i}`}
            color={currentTheme.shootingStars.color}
            tailLength={currentTheme.shootingStars.tailLength}
            speed={Math.random() * (currentTheme.shootingStars.speed.max - currentTheme.shootingStars.speed.min) + currentTheme.shootingStars.speed.min}
            delay={Math.random() * 15}
          />
        ))}
      </SpaceContainer>
    </Background>
  );
};

export default SpaceBackground; 