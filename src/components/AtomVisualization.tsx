
import React, { useEffect, useState } from 'react';

const AtomVisualization = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate rotation based on scroll position
  const rotation = scrollY * 0.5;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800 opacity-95" />
      
      {/* Atom Container - Centered */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-96 h-96">
          
          {/* Nucleus */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-4 h-4 bg-white rounded-full shadow-lg opacity-80" />
          </div>

          {/* First Electron Orbit */}
          <div 
            className="absolute inset-0 border border-gray-600 rounded-full opacity-30"
            style={{
              width: '120px',
              height: '120px',
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
            }}
          >
            <div className="absolute w-2 h-2 bg-blue-400 rounded-full -top-1 left-1/2 transform -translate-x-1/2 shadow-sm" />
          </div>

          {/* Second Electron Orbit */}
          <div 
            className="absolute inset-0 border border-gray-600 rounded-full opacity-30"
            style={{
              width: '180px',
              height: '180px',
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) rotate(${rotation * 0.7 + 60}deg)`,
            }}
          >
            <div className="absolute w-2 h-2 bg-green-400 rounded-full -top-1 left-1/2 transform -translate-x-1/2 shadow-sm" />
          </div>

          {/* Third Electron Orbit */}
          <div 
            className="absolute inset-0 border border-gray-600 rounded-full opacity-30"
            style={{
              width: '240px',
              height: '240px',
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) rotate(${rotation * 0.4 + 120}deg)`,
            }}
          >
            <div className="absolute w-2 h-2 bg-purple-400 rounded-full -top-1 left-1/2 transform -translate-x-1/2 shadow-sm" />
          </div>

        </div>
      </div>

      {/* Subtle particle effects */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gray-500 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translateY(${scrollY * (0.1 + Math.random() * 0.2)}px)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AtomVisualization;
