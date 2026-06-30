import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FloatingParticles from './FloatingParticles';

export default function LoadingScreen() {
  const messages = [
    'Preparing our memories...',
    'Gathering our love...',
    'Opening our little universe...'
  ];
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-b from-[#FFD6E7] to-[#E8D8FF]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ y: '-100vh', opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-32 h-32 mb-8">
         <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <circle cx="50" cy="50" r="40" fill="#FFF" />
            <path d="M 20 40 L 10 10 L 40 20 Z" fill="#FFF" />
            <path d="M 80 40 L 90 10 L 60 20 Z" fill="#FFF" />
            <path d="M 70 15 A 10 10 0 1 1 85 25 A 10 10 0 1 1 70 35 Z" fill="#FF9BB3" />
            <circle cx="75" cy="25" r="5" fill="#5C3D5E" />
            <ellipse cx="35" cy="50" rx="4" ry="6" fill="#5C3D5E" className="animate-[blink_3s_infinite]" />
            <ellipse cx="65" cy="50" rx="4" ry="6" fill="#5C3D5E" className="animate-[blink_3s_infinite]" />
            <ellipse cx="50" cy="58" rx="4" ry="3" fill="#FFE7DA" />
            <line x1="10" y1="45" x2="25" y2="48" stroke="#5C3D5E" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="5" y1="52" x2="23" y2="52" stroke="#5C3D5E" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="10" y1="59" x2="25" y2="56" stroke="#5C3D5E" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="90" y1="45" x2="75" y2="48" stroke="#5C3D5E" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="95" y1="52" x2="77" y2="52" stroke="#5C3D5E" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="90" y1="59" x2="75" y2="56" stroke="#5C3D5E" strokeWidth="1.5" strokeLinecap="round" />
         </svg>
      </div>
      <h1 className="font-['Dancing_Script'] text-4xl text-[#5C3D5E] mb-6 drop-shadow-sm">Our Little Universe</h1>
      
      <div className="w-64 h-2 bg-[#FFD6E7] rounded-full overflow-hidden mb-4 shadow-inner">
        <motion.div 
          className="h-full bg-gradient-to-r from-[#FF9BB3] to-[#A8E0FF]"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 3.5, ease: "linear" }}
        />
      </div>
      
      <div className="h-6">
        <AnimatePresence mode="wait">
          <motion.p
            key={messageIndex}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-[#5C3D5E] font-sans font-semibold text-sm drop-shadow-sm"
          >
            {messages[messageIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      <FloatingParticles count={10} type="heart" color="#FF9BB3" />
      <FloatingParticles count={5} type="star" color="#FFF8F3" />
    </motion.div>
  );
}
