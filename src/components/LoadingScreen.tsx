import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FloatingParticles from './FloatingParticles';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const messages = [
    'Gathering our memories...',
    'Crossing the distance...',
    'Opening our universe...'
  ];
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 1100);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0A0816]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
      onAnimationComplete={(def) => {
        if (def && (def as any).opacity === 0 && onComplete) {
          onComplete();
        }
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.15)_0%,transparent_70%)] blur-2xl" />
      </div>

      <div className="relative w-40 h-40 mb-12 z-10">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#C9A96E]">
          {/* Constellation / geometric pattern */}
          <motion.path 
            d="M 50 10 L 80 30 L 80 70 L 50 90 L 20 70 L 20 30 Z" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5"
            strokeDasharray="300"
            initial={{ strokeDashoffset: 300 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
          <motion.path 
            d="M 50 10 L 50 90 M 20 30 L 80 70 M 20 70 L 80 30" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.5"
            strokeDasharray="200"
            initial={{ strokeDashoffset: 200 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
          />
          <circle cx="50" cy="10" r="2" fill="currentColor" />
          <circle cx="80" cy="30" r="2" fill="currentColor" />
          <circle cx="80" cy="70" r="2" fill="currentColor" />
          <circle cx="50" cy="90" r="2" fill="currentColor" />
          <circle cx="20" cy="70" r="2" fill="currentColor" />
          <circle cx="20" cy="30" r="2" fill="currentColor" />
          <circle cx="50" cy="50" r="3" fill="currentColor" />
        </svg>
      </div>

      <motion.div 
        className="flex mb-4 overflow-hidden z-10"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.05 } }
        }}
        initial="hidden"
        animate="show"
      >
        {"Our Little Universe".split('').map((char, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0 }
            }}
            className="font-['Cormorant_Garamond'] italic text-4xl md:text-5xl text-[#C9A96E] drop-shadow-[0_0_10px_rgba(201,169,110,0.3)] whitespace-pre"
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="font-sans font-light tracking-[0.3em] text-[#F0E6D6]/50 text-sm uppercase mb-12 z-10"
      >
        Nepal · Sydney
      </motion.p>
      
      <div className="w-64 h-[2px] bg-[#1A0A2E] rounded-full overflow-hidden mb-6 z-10 relative">
        <motion.div 
          className="h-full bg-[#C9A96E]"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 3.5, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-[200%] animate-[gold-shimmer_2s_infinite]" />
      </div>
      
      <div className="h-6 z-10">
        <AnimatePresence mode="wait">
          <motion.p
            key={messageIndex}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-[#F0E6D6]/60 font-sans font-light text-sm"
          >
            {messages[messageIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      <FloatingParticles count={15} type="dot" color="#C9A96E" size={3} speed="slow" />
    </motion.div>
  );
}