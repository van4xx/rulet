const spaceThemes = {
  day: {
    background: 'linear-gradient(to bottom, #0288d1, #29b6f6, #81d4fa, #b3e5fc)',
    stars: {
      count: 100,
      color: '#ffd700',
      size: { min: 2, max: 4 },
      twinkleSpeed: { min: 2, max: 4 },
    },
    planets: [
      {
        size: 180,
        color: 'radial-gradient(circle at 30% 30%, #ffd700, #ffa000, #ff6f00)',
        orbitRadius: 300,
        orbitSpeed: 25,
        glowColor: 'rgba(255, 215, 0, 0.6)',
        rings: true,
        ringsColor: 'rgba(255, 215, 0, 0.3)',
        atmosphere: true,
        atmosphereColor: 'rgba(255, 140, 0, 0.3)',
        satellites: [
          { size: 25, orbitRadius: 200, orbitSpeed: 5, color: '#ffd740' },
          { size: 20, orbitRadius: 240, orbitSpeed: 8, color: '#ffab00' },
          { size: 15, orbitRadius: 280, orbitSpeed: 6, color: '#ff6d00' }
        ]
      },
      {
        size: 120,
        color: 'radial-gradient(circle at 40% 40%, #64ffda, #00bfa5, #009688)',
        orbitRadius: 500,
        orbitSpeed: 20,
        atmosphere: true,
        atmosphereColor: 'rgba(0, 191, 165, 0.3)',
        glowColor: 'rgba(0, 191, 165, 0.4)',
        rings: true,
        ringsColor: 'rgba(0, 191, 165, 0.2)'
      },
      {
        size: 90,
        color: 'radial-gradient(circle at 35% 35%, #ff80ab, #ff4081, #f50057)',
        orbitRadius: 650,
        orbitSpeed: 15,
        glowColor: 'rgba(245, 0, 87, 0.4)',
        atmosphere: true,
        atmosphereColor: 'rgba(245, 0, 87, 0.2)'
      }
    ],
    comets: {
      count: 6,
      tailLength: 180,
      color: '#40c4ff',
      speed: { min: 3, max: 7 }
    },
    asteroids: {
      count: 25,
      size: { min: 2, max: 8 },
      color: '#ffecb3',
      speed: { min: 2, max: 4 }
    },
    ufos: {
      count: 4,
      emoji: '🛸',
      size: 30,
      speed: { min: 1, max: 3 }
    },
    nebulas: [
      {
        size: 450,
        color: 'rgba(0, 191, 165, 0.15)',
        position: { x: '20%', y: '30%' }
      },
      {
        size: 400,
        color: 'rgba(255, 64, 129, 0.12)',
        position: { x: '70%', y: '60%' }
      },
      {
        size: 350,
        color: 'rgba(124, 77, 255, 0.1)',
        position: { x: '40%', y: '50%' }
      }
    ],
    shootingStars: {
      count: 3,
      tailLength: 150,
      color: '#ffd700',
      speed: { min: 3, max: 6 }
    }
  },
  night: {
    background: 'linear-gradient(to bottom, #000000, #1a237e, #311b92, #4a148c)',
    stars: {
      count: 300,
      color: '#ffffff',
      size: { min: 2, max: 5 },
      twinkleSpeed: { min: 2, max: 5 },
    },
    planets: [
      {
        size: 150,
        color: 'radial-gradient(circle at 35% 35%, #9575cd, #7e57c2, #5e35b1)',
        orbitRadius: 350,
        orbitSpeed: 30,
        rings: true,
        ringsColor: 'rgba(126, 87, 194, 0.4)',
        atmosphere: true,
        atmosphereColor: 'rgba(126, 87, 194, 0.3)',
        glowColor: 'rgba(126, 87, 194, 0.5)',
        satellites: [
          { size: 35, orbitRadius: 190, orbitSpeed: 6, color: '#b39ddb' },
          { size: 28, orbitRadius: 230, orbitSpeed: 9, color: '#9575cd' },
          { size: 22, orbitRadius: 270, orbitSpeed: 7, color: '#7e57c2' }
        ]
      },
      {
        size: 110,
        color: 'radial-gradient(circle at 40% 40%, #90caf9, #42a5f5, #1976d2)',
        orbitRadius: 550,
        orbitSpeed: 22,
        glowColor: 'rgba(25, 118, 210, 0.5)',
        atmosphere: true,
        atmosphereColor: 'rgba(25, 118, 210, 0.3)',
        rings: true,
        ringsColor: 'rgba(25, 118, 210, 0.3)'
      },
      {
        size: 85,
        color: 'radial-gradient(circle at 45% 45%, #f48fb1, #ec407a, #d81b60)',
        orbitRadius: 700,
        orbitSpeed: 18,
        glowColor: 'rgba(216, 27, 96, 0.4)',
        atmosphere: true,
        atmosphereColor: 'rgba(216, 27, 96, 0.2)'
      }
    ],
    comets: {
      count: 12,
      tailLength: 200,
      color: '#18ffff',
      speed: { min: 4, max: 8 }
    },
    asteroids: {
      count: 45,
      size: { min: 2, max: 10 },
      color: '#9e9e9e',
      speed: { min: 2, max: 5 }
    },
    nebulas: [
      {
        size: 600,
        color: 'rgba(103, 58, 183, 0.15)',
        position: { x: '30%', y: '40%' }
      },
      {
        size: 500,
        color: 'rgba(3, 169, 244, 0.1)',
        position: { x: '80%', y: '20%' }
      },
      {
        size: 550,
        color: 'rgba(233, 30, 99, 0.12)',
        position: { x: '50%', y: '70%' }
      },
      {
        size: 450,
        color: 'rgba(156, 39, 176, 0.13)',
        position: { x: '15%', y: '60%' }
      }
    ],
    shootingStars: {
      count: 8,
      tailLength: 180,
      color: '#ffffff',
      speed: { min: 4, max: 8 }
    },
    ufos: {
      count: 6,
      emoji: '🛸',
      size: 35,
      speed: { min: 1, max: 3 }
    }
  }
};

export default spaceThemes; 