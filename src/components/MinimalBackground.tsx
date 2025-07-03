
import React from 'react';

const MinimalBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};

export default MinimalBackground;
