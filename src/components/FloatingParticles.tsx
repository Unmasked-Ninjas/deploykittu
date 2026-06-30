import React from 'react';

interface FloatingParticlesProps {
  count: number;
  type?: 'heart' | 'star' | 'sparkle' | 'dot';
  color?: string;
  size?: number;
  speed?: 'slow' | 'medium' | 'fast';
}

export default function FloatingParticles({ count, type = 'dot', color = '#C9A96E', size = 4, speed = 'medium' }: FloatingParticlesProps) {
  const getIcon = () => {
    if (type === 'heart') return (
      <svg viewBox="0 0 24 24" width={size} height={size} fill={color} opacity="0.8">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    );
    if (type === 'star') return (
      <svg viewBox="0 0 24 24" width={size} height={size} fill={color} opacity="0.8">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
    );
    if (type === 'sparkle') return (
      <svg viewBox="0 0 24 24" width={size} height={size} fill={color} opacity="0.8">
        <path d="M12 2L9 9H2l6 4.5-2.5 8L12 16.5l6.5 5-2.5-8L22 9h-7z"/>
      </svg>
    );
    return <div style={{ width: size, height: size, backgroundColor: color, borderRadius: '50%', opacity: 0.7 }} />;
  };

  const getSpeed = () => {
    if (speed === 'slow') return 15;
    if (speed === 'fast') return 5;
    return 10;
  };

  const baseSpeed = getSpeed();

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => {
        const left = `${Math.random() * 100}%`;
        const bottom = `-${Math.random() * 20}%`;
        const animationDuration = `${Math.random() * 5 + baseSpeed}s`;
        const animationDelay = `${Math.random() * 5}s`;

        return (
          <div
            key={i}
            className="absolute"
            style={{
              left,
              bottom,
              animation: `float-up ${animationDuration} ${animationDelay} infinite linear`,
            }}
          >
            {getIcon()}
          </div>
        );
      })}
    </div>
  );
}