
import React, { useEffect, useState } from 'react';

interface Electron {
  id: number;
  orbitRadius: number;
  speed: number;
  size: number;
  color: string;
  initialAngle: number;
}

const AtomVisualization = () => {
  const [scrollY, setScrollY] = useState(0);
  const [electrons] = useState<Electron[]>([
    {
      id: 1,
      orbitRadius: 80,
      speed: 0.02,
      size: 6,
      color: '#60A5FA',
      initialAngle: 0,
    },
    {
      id: 2,
      orbitRadius: 120,
      speed: 0.015,
      size: 8,
      color: '#F472B6',
      initialAngle: Math.PI,
    },
    {
      id: 3,
      orbitRadius: 160,
      speed: 0.01,
      size: 7,
      color: '#34D399',
      initialAngle: Math.PI / 2,
    },
  ]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-5">
      <div
        className="relative"
        style={{
          transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg) scale(${1 + scrollY * 0.0005})`,
        }}
      >
        {/* Nucleus */}
        <div
          className="absolute w-16 h-16 rounded-full"
          style={{
            background: 'radial-gradient(circle, #FFF8DC 0%, #F5DEB3 30%, #DDD8B8 70%, transparent 100%)',
            boxShadow: '0 0 30px rgba(245, 245, 220, 0.8), 0 0 60px rgba(245, 245, 220, 0.4)',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            animation: 'pulse-glow 3s ease-in-out infinite',
          }}
        />
        
        {/* Inner nucleus glow */}
        <div
          className="absolute w-8 h-8 rounded-full"
          style={{
            background: 'radial-gradient(circle, #FFFACD 0%, rgba(255, 250, 205, 0.8) 50%, transparent 100%)',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            animation: 'twinkle 2s ease-in-out infinite alternate',
          }}
        />

        {/* Electron orbits and electrons */}
        {electrons.map((electron) => (
          <div key={electron.id}>
            {/* Orbit path */}
            <div
              className="absolute border border-white/20 rounded-full"
              style={{
                width: `${electron.orbitRadius * 2}px`,
                height: `${electron.orbitRadius * 2}px`,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                boxShadow: `inset 0 0 20px rgba(255, 255, 255, 0.1)`,
              }}
            />
            
            {/* Electron */}
            <div
              className="absolute rounded-full"
              style={{
                width: `${electron.size}px`,
                height: `${electron.size}px`,
                background: `radial-gradient(circle, ${electron.color} 0%, ${electron.color}AA 70%, transparent 100%)`,
                boxShadow: `0 0 ${electron.size * 3}px ${electron.color}80`,
                left: '50%',
                top: '50%',
                transform: `
                  translate(-50%, -50%) 
                  rotate(${electron.initialAngle + scrollY * electron.speed}rad) 
                  translateX(${electron.orbitRadius}px)
                `,
                animation: `twinkle ${2 + electron.id}s ease-in-out infinite alternate`,
              }}
            />
            
            {/* Electron trail effect */}
            <div
              className="absolute rounded-full opacity-60"
              style={{
                width: `${electron.size * 0.6}px`,
                height: `${electron.size * 0.6}px`,
                background: `radial-gradient(circle, ${electron.color}60 0%, transparent 70%)`,
                left: '50%',
                top: '50%',
                transform: `
                  translate(-50%, -50%) 
                  rotate(${electron.initialAngle + scrollY * electron.speed - 0.3}rad) 
                  translateX(${electron.orbitRadius}px)
                `,
              }}
            />
            <div
              className="absolute rounded-full opacity-30"
              style={{
                width: `${electron.size * 0.4}px`,
                height: `${electron.size * 0.4}px`,
                background: `radial-gradient(circle, ${electron.color}40 0%, transparent 70%)`,
                left: '50%',
                top: '50%',
                transform: `
                  translate(-50%, -50%) 
                  rotate(${electron.initialAngle + scrollY * electron.speed - 0.6}rad) 
                  translateX(${electron.orbitRadius}px)
                `,
              }}
            />
          </div>
        ))}

        {/* Energy field around atom */}
        <div
          className="absolute rounded-full opacity-20"
          style={{
            width: '400px',
            height: '400px',
            background: 'conic-gradient(from 0deg, transparent 0deg, rgba(96, 165, 250, 0.1) 90deg, transparent 180deg, rgba(244, 114, 182, 0.1) 270deg, transparent 360deg)',
            left: '50%',
            top: '50%',
            transform: `translate(-50%, -50%) rotate(${scrollY * 0.05}deg)`,
            filter: 'blur(40px)',
            animation: 'cosmic-drift 15s ease-in-out infinite',
          }}
        />
      </div>
    </div>
  );
};

export default AtomVisualization;
