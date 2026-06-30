import React from 'react';

interface FloatingParticlesProps {
  count: number;
  type: 'heart' | 'star' | 'sparkle';
  color?: string;
  size?: number;
}

export default function FloatingParticles({ count, type, color = '#FFD6E7', size = 20 }: FloatingParticlesProps) {
  const getIcon = () => {
    if (type === 'heart') return '❤️';
    if (type === 'star') return '⭐';
    return '✨';
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => {
        const left = `${Math.random() * 100}%`;
        const bottom = `-${Math.random() * 20}%`;
        const animationDuration = `${Math.random() * 5 + 5}s`;
        const animationDelay = `${Math.random() * 5}s`;
        const particleSize = size * (0.5 + Math.random() * 0.5);

        return (
          <div
            key={i}
            className="absolute"
            style={{
              left,
              bottom,
              fontSize: `${particleSize}px`,
              color,
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
