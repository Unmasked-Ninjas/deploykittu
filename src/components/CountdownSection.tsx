import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Target Date: July 1, 2026 (User can customize this)
    const targetDate = new Date('2026-07-01T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setIsComplete(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const boxes = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="py-32 w-full min-h-screen bg-[#0A0816] relative flex flex-col items-center justify-center overflow-hidden">
      {/* Ambient floating particles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#C9A96E] rounded-full blur-[1px]"
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
          style={{
            top: `${20 + i * 20}%`,
            left: `${20 + i * 20}%`
          }}
        />
      ))}

      <div className="z-10 text-center mb-16 px-4">
        <h2 className="font-['Cormorant_Garamond'] italic text-5xl md:text-6xl text-[#C9A96E] mb-4">
          Until We Meet Again
        </h2>
        <p className="font-sans font-light text-[#F0E6D6]/60 text-lg">
          Counting every moment
        </p>
      </div>

      <div className="z-10 flex flex-wrap justify-center gap-4 md:gap-8 px-4 w-full max-w-4xl">
        {isComplete ? (
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center"
          >
            <h3 className="font-['Pinyon_Script'] text-6xl md:text-8xl text-[#C9A96E] drop-shadow-[0_0_20px_rgba(201,169,110,0.5)]">
              Today is our day! 💫
            </h3>
          </motion.div>
        ) : (
          boxes.map((box, i) => (
            <motion.div
              key={box.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center bg-[#1A0A2E]/60 backdrop-blur-md border border-[#C9A96E]/30 w-32 h-32 md:w-40 md:h-40 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)] relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#C9A96E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-[#C9A96E] mb-2 font-light">
                {box.value.toString().padStart(2, '0')}
              </span>
              <span className="font-sans text-xs md:text-sm text-[#F0E6D6]/60 uppercase tracking-widest font-light">
                {box.label}
              </span>
              
              {/* Subtle glow pulse */}
              <motion.div 
                className="absolute inset-0 border border-[#C9A96E]/20 rounded-2xl pointer-events-none"
                animate={{ boxShadow: ['0 0 0px rgba(201,169,110,0)', '0 0 15px rgba(201,169,110,0.2)', '0 0 0px rgba(201,169,110,0)'] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              />
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
}