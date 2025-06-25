
import React, { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

interface Planet {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
}

const SpaceBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  const [stars, setStars] = useState<Star[]>([]);
  const [planets, setPlanets] = useState<Planet[]>([]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Generate stars
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 200; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.5 + 0.1,
        });
      }
      setStars(newStars);
    };

    // Generate planets/celestial objects
    const generatePlanets = () => {
      const colors = ['#4F46E5', '#7C3AED', '#EC4899', '#F59E0B', '#10B981'];
      const newPlanets: Planet[] = [];
      for (let i = 0; i < 8; i++) {
        newPlanets.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 80 + 20,
          color: colors[Math.floor(Math.random() * colors.length)],
          speed: Math.random() * 0.3 + 0.1,
        });
      }
      setPlanets(newPlanets);
    };

    generateStars();
    generatePlanets();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      
      {/* Deep space gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-transparent via-purple-900/10 to-black/50"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />

      {/* Stars layer 1 (furthest/slowest) */}
      <div className="absolute inset-0">
        {stars.slice(0, 100).map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity * 0.6,
              transform: `translateY(${scrollY * star.speed * 0.1}px)`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Stars layer 2 (medium speed) */}
      <div className="absolute inset-0">
        {stars.slice(100, 150).map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-amber-100"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size * 1.2}px`,
              height: `${star.size * 1.2}px`,
              opacity: star.opacity * 0.8,
              transform: `translateY(${scrollY * star.speed * 0.2}px)`,
              boxShadow: `0 0 ${star.size * 2}px rgba(245, 245, 220, 0.3)`,
            }}
          />
        ))}
      </div>

      {/* Stars layer 3 (closest/fastest) */}
      <div className="absolute inset-0">
        {stars.slice(150).map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-blue-200"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size * 0.8}px`,
              height: `${star.size * 0.8}px`,
              opacity: star.opacity,
              transform: `translateY(${scrollY * star.speed * 0.3}px)`,
              boxShadow: `0 0 ${star.size * 3}px rgba(191, 219, 254, 0.4)`,
            }}
          />
        ))}
      </div>

      {/* Celestial objects/planets */}
      <div className="absolute inset-0">
        {planets.map((planet) => (
          <div
            key={planet.id}
            className="absolute rounded-full opacity-20"
            style={{
              left: `${planet.x}%`,
              top: `${planet.y}%`,
              width: `${planet.size}px`,
              height: `${planet.size}px`,
              backgroundColor: planet.color,
              transform: `translateY(${scrollY * planet.speed * 0.15}px) rotate(${scrollY * 0.1}deg)`,
              boxShadow: `0 0 ${planet.size}px ${planet.color}40`,
              filter: 'blur(1px)',
            }}
          />
        ))}
      </div>

      {/* Nebula-like clouds */}
      <div className="absolute inset-0">
        <div
          className="absolute w-96 h-96 rounded-full opacity-10 bg-gradient-radial from-purple-500 to-transparent"
          style={{
            top: '20%',
            left: '10%',
            transform: `translateY(${scrollY * 0.05}px) scale(${1 + scrollY * 0.0001})`,
            filter: 'blur(40px)',
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full opacity-10 bg-gradient-radial from-blue-500 to-transparent"
          style={{
            top: '60%',
            right: '15%',
            transform: `translateY(${scrollY * 0.08}px) scale(${1 + scrollY * 0.0001})`,
            filter: 'blur(50px)',
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full opacity-15 bg-gradient-radial from-pink-500 to-transparent"
          style={{
            top: '40%',
            left: '60%',
            transform: `translateY(${scrollY * 0.06}px) scale(${1 + scrollY * 0.0001})`,
            filter: 'blur(30px)',
          }}
        />
      </div>

      {/* Shooting stars */}
      <div className="absolute inset-0">
        <div
          className="absolute w-px h-20 bg-gradient-to-b from-white to-transparent opacity-60"
          style={{
            top: '15%',
            left: '80%',
            transform: `translateY(${scrollY * 0.4}px) rotate(45deg)`,
            animation: 'pulse 3s infinite',
          }}
        />
        <div
          className="absolute w-px h-16 bg-gradient-to-b from-amber-200 to-transparent opacity-50"
          style={{
            top: '70%',
            left: '20%',
            transform: `translateY(${scrollY * 0.3}px) rotate(-45deg)`,
            animation: 'pulse 4s infinite',
          }}
        />
      </div>
    </div>
  );
};

export default SpaceBackground;
