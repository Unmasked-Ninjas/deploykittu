import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ForeverSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  const text1Opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.5], [0, 1, 0]);
  const text2Opacity = useTransform(scrollYProgress, [0.4, 0.6, 0.8], [0, 1, 0]);
  const text3Opacity = useTransform(scrollYProgress, [0.7, 0.85, 0.95], [0, 1, 0]);
  const finalOpacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);
  const finalScale = useTransform(scrollYProgress, [0.9, 1], [0.9, 1]);

  return (
    <section ref={ref} className="h-[300vh] w-full relative bg-gradient-to-t from-[#0A0816] via-[#1A0A2E] to-[#0A0816] overflow-hidden flex flex-col items-center">
      
      {/* Fairy Lights (Top) */}
      <div className="fixed top-20 w-full h-1 pointer-events-none z-10 flex justify-around items-center opacity-40">
         <div className="absolute w-[120%] h-[1px] bg-white/10 rotate-2"></div>
         {[...Array(25)].map((_, i) => (
           <div key={`light-${i}`} className="relative">
             <div className="w-1.5 h-1.5 bg-[#E8845A] rounded-full" style={{ animation: `glow-pulse ${2 + Math.random() * 2}s infinite ${Math.random()}s` }}></div>
             <div className="absolute -top-4 left-1/2 w-[1px] h-4 bg-white/20"></div>
           </div>
         ))}
      </div>

      {/* Stars Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-0.5 h-0.5 bg-[#F0E6D6] rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${1.5 + Math.random() * 3}s infinite alternate ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Lanterns */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
         {[...Array(8)].map((_, i) => (
           <div 
             key={`lantern-${i}`} 
             className="absolute bottom-[-100px] w-12 h-16 rounded-[50%_50%_40%_40%] opacity-80"
             style={{ 
               left: `${10 + i * 12}%`, 
               animation: `lantern-rise ${15 + Math.random() * 10}s infinite linear ${i * 4}s`,
               background: 'radial-gradient(ellipse at bottom, #E8845A 0%, #B8637A 50%, transparent 100%)',
               boxShadow: '0 0 30px rgba(232, 132, 90, 0.4)'
             }}
           >
             <div className="absolute bottom-2 left-1/2 -ml-1.5 w-3 h-3 bg-[#F0E6D6] rounded-full blur-[2px] opacity-80"></div>
           </div>
         ))}
      </div>

      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center p-8 z-20">
         <motion.div style={{ opacity: text1Opacity }} className="absolute text-center w-full px-4">
           <h2 className="font-['Cormorant_Garamond'] italic text-5xl md:text-7xl text-[#C9A96E] drop-shadow-[0_0_15px_rgba(201,169,110,0.3)]">
             I would choose you in every universe.
           </h2>
         </motion.div>
         
         <motion.div style={{ opacity: text2Opacity }} className="absolute text-center w-full px-4">
           <p className="font-sans font-light text-3xl md:text-5xl text-[#F0E6D6] tracking-wide">
             Distance never changed what home feels like.
           </p>
         </motion.div>
         
         <motion.div style={{ opacity: text3Opacity }} className="absolute text-center w-full px-4">
           <p className="font-sans font-light text-2xl md:text-4xl text-[#F5C5D5] tracking-widest">
             Thank you for being my favorite person.
           </p>
         </motion.div>

         <motion.div style={{ opacity: finalOpacity, scale: finalScale }} className="absolute text-center flex flex-col items-center">
           <h1 className="font-['Pinyon_Script'] text-7xl md:text-9xl text-[#B8637A] mb-8" style={{ textShadow: '0 0 40px rgba(184, 99, 122, 0.6)' }}>
             I love you forever.
           </h1>
           
           <motion.div 
             initial={{ strokeDashoffset: 100 }}
             whileInView={{ strokeDashoffset: 0 }}
             transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
             viewport={{ once: false }}
             className="w-24 h-24 text-[#C9A96E]"
           >
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full drop-shadow-[0_0_8px_rgba(201,169,110,0.8)]">
               <motion.path 
                 d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                 strokeDasharray="100"
               />
             </svg>
           </motion.div>
         </motion.div>

         <motion.div style={{ opacity: finalOpacity }} className="absolute bottom-10 text-center">
           <p className="font-sans font-light text-[#F0E6D6]/40 tracking-[0.2em] text-xs uppercase">
             Made with love across the distance · Nepal & Sydney
           </p>
         </motion.div>
      </div>
    </section>
  );
}