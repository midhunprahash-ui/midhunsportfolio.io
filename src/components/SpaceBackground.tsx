
import React, { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  twinkleSpeed: number;
}

interface Planet {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  orbitRadius: number;
  orbitSpeed: number;
}

interface Nebula {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  opacity: number;
}

const SpaceBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  const [stars, setStars] = useState<Star[]>([]);
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [nebulas, setNebulas] = useState<Nebula[]>([]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Generate more realistic stars with different layers
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 300; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.9 + 0.1,
          speed: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 2 + 1,
        });
      }
      setStars(newStars);
    };

    // Generate planets with orbital motion
    const generatePlanets = () => {
      const colors = ['#8B5FBF', '#4A90E2', '#E94B3C', '#F5A623', '#7ED321', '#BD10E0'];
      const newPlanets: Planet[] = [];
      for (let i = 0; i < 6; i++) {
        newPlanets.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 120 + 40,
          color: colors[Math.floor(Math.random() * colors.length)],
          speed: Math.random() * 0.2 + 0.1,
          orbitRadius: Math.random() * 50 + 20,
          orbitSpeed: Math.random() * 0.02 + 0.01,
        });
      }
      setPlanets(newPlanets);
    };

    // Generate nebula clouds
    const generateNebulas = () => {
      const colors = ['#FF6B9D', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'];
      const newNebulas: Nebula[] = [];
      for (let i = 0; i < 4; i++) {
        newNebulas.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 300 + 200,
          color: colors[Math.floor(Math.random() * colors.length)],
          speed: Math.random() * 0.1 + 0.05,
          opacity: Math.random() * 0.3 + 0.1,
        });
      }
      setNebulas(newNebulas);
    };

    generateStars();
    generatePlanets();
    generateNebulas();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep space gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black" />
      
      {/* Cosmic dust gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 20% 30%, rgba(123, 58, 237, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(236, 72, 153, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 40% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
          transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`,
        }}
      />

      {/* Nebula clouds layer */}
      <div className="absolute inset-0">
        {nebulas.map((nebula) => (
          <div
            key={nebula.id}
            className="absolute rounded-full"
            style={{
              left: `${nebula.x}%`,
              top: `${nebula.y}%`,
              width: `${nebula.size}px`,
              height: `${nebula.size}px`,
              background: `radial-gradient(circle, ${nebula.color}${Math.floor(nebula.opacity * 255).toString(16).padStart(2, '0')} 0%, transparent 70%)`,
              transform: `translateY(${scrollY * nebula.speed * 0.3}px) rotate(${scrollY * 0.02}deg)`,
              filter: 'blur(60px)',
              mixBlendMode: 'screen',
            }}
          />
        ))}
      </div>

      {/* Distant stars layer (slowest parallax) */}
      <div className="absolute inset-0">
        {stars.slice(0, 100).map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size * 0.8}px`,
              height: `${star.size * 0.8}px`,
              opacity: star.opacity * 0.4,
              transform: `translateY(${scrollY * star.speed * 0.05}px)`,
              animation: `twinkle ${star.twinkleSpeed}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Medium distance stars */}
      <div className="absolute inset-0">
        {stars.slice(100, 200).map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              background: `radial-gradient(circle, white 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%)`,
              opacity: star.opacity * 0.7,
              transform: `translateY(${scrollY * star.speed * 0.15}px)`,
              boxShadow: `0 0 ${star.size * 4}px rgba(255, 255, 255, 0.3)`,
              animation: `twinkle ${star.twinkleSpeed}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Close stars layer (fastest parallax) */}
      <div className="absolute inset-0">
        {stars.slice(200).map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size * 1.2}px`,
              height: `${star.size * 1.2}px`,
              background: `radial-gradient(circle, #FFF8DC 0%, rgba(255, 248, 220, 0.9) 40%, transparent 100%)`,
              opacity: star.opacity,
              transform: `translateY(${scrollY * star.speed * 0.4}px)`,
              boxShadow: `0 0 ${star.size * 6}px rgba(255, 248, 220, 0.4)`,
              animation: `twinkle ${star.twinkleSpeed}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Celestial objects/planets with orbital motion */}
      <div className="absolute inset-0">
        {planets.map((planet, index) => (
          <div
            key={planet.id}
            className="absolute rounded-full"
            style={{
              left: `${planet.x + Math.sin(scrollY * planet.orbitSpeed + index) * (planet.orbitRadius * 0.1)}%`,
              top: `${planet.y + Math.cos(scrollY * planet.orbitSpeed + index) * (planet.orbitRadius * 0.05)}%`,
              width: `${planet.size}px`,
              height: `${planet.size}px`,
              background: `radial-gradient(circle at 30% 30%, ${planet.color}FF 0%, ${planet.color}CC 40%, ${planet.color}66 70%, transparent 100%)`,
              transform: `translateY(${scrollY * planet.speed * 0.1}px) rotate(${scrollY * 0.05}deg)`,
              boxShadow: `0 0 ${planet.size * 0.8}px ${planet.color}40, inset -${planet.size * 0.2}px -${planet.size * 0.2}px ${planet.size * 0.3}px rgba(0, 0, 0, 0.3)`,
              filter: 'blur(1px)',
              opacity: 0.6,
            }}
          />
        ))}
      </div>

      {/* Shooting stars */}
      <div className="absolute inset-0">
        <div
          className="absolute w-1 h-32 opacity-70"
          style={{
            top: '10%',
            left: '90%',
            background: 'linear-gradient(45deg, transparent 0%, white 50%, transparent 100%)',
            transform: `translateY(${scrollY * 0.6}px) translateX(-${scrollY * 0.3}px) rotate(45deg)`,
            animation: 'pulse 4s infinite',
            filter: 'blur(0.5px)',
          }}
        />
        <div
          className="absolute w-1 h-24 opacity-60"
          style={{
            top: '60%',
            left: '10%',
            background: 'linear-gradient(-45deg, transparent 0%, #FFF8DC 50%, transparent 100%)',
            transform: `translateY(${scrollY * 0.4}px) translateX(${scrollY * 0.2}px) rotate(-45deg)`,
            animation: 'pulse 6s infinite',
            filter: 'blur(0.5px)',
          }}
        />
      </div>

      {/* Galaxy spiral arm effect */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(147, 197, 253, 0.1) 90deg, transparent 180deg, rgba(196, 165, 232, 0.1) 270deg, transparent 360deg)',
          transform: `rotate(${scrollY * 0.01}deg) scale(${1 + scrollY * 0.0001})`,
          filter: 'blur(100px)',
        }}
      />
    </div>
  );
};

export default SpaceBackground;
