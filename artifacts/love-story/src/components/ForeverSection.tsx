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
  const finalScale = useTransform(scrollYProgress, [0.9, 1], [0.8, 1]);

  return (
    <section ref={ref} className="h-[300vh] w-full relative bg-gradient-to-t from-[#1A1025] via-[#3D2C4E] to-[#FF9BB3] overflow-hidden flex flex-col items-center">
      <div className="fixed top-0 w-full h-32 pointer-events-none z-10 flex justify-around items-start pt-4 opacity-50 mix-blend-screen">
         {[...Array(20)].map((_, i) => (
           <div key={i} className="w-2 h-2 bg-[#FFE7DA] rounded-full" style={{ animation: `glow-pulse ${2 + Math.random() * 2}s infinite ${Math.random()}s` }}></div>
         ))}
      </div>

      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
         {[...Array(10)].map((_, i) => (
           <div 
             key={i} 
             className="absolute bottom-[-100px] w-16 h-24 bg-gradient-to-t from-orange-400 to-yellow-200 rounded-[50%_50%_40%_40%] opacity-80 blur-[2px] shadow-[0_0_40px_rgba(255,165,0,0.6)]"
             style={{ 
               left: `${5 + i * 10}%`, 
               animation: `lantern-rise ${15 + Math.random() * 10}s infinite linear ${i * 3}s` 
             }}
           >
             <div className="absolute bottom-3 left-1/2 -ml-2 w-4 h-4 bg-orange-500 rounded-full blur-[3px]"></div>
           </div>
         ))}
      </div>

      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center p-8 z-20">
         <motion.div style={{ opacity: text1Opacity }} className="absolute text-center w-full px-4">
           <h2 className="font-['Dancing_Script'] text-5xl md:text-7xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">I would choose you in every universe.</h2>
         </motion.div>
         
         <motion.div style={{ opacity: text2Opacity }} className="absolute text-center w-full px-4">
           <p className="font-sans font-bold text-3xl md:text-5xl text-[#FFD6E7] drop-shadow-lg">Distance never changed what home feels like.</p>
         </motion.div>
         
         <motion.div style={{ opacity: text3Opacity }} className="absolute text-center w-full px-4">
           <p className="font-sans font-bold text-2xl md:text-4xl text-[#E8D8FF] drop-shadow-lg">Thank you for being my favorite person.</p>
         </motion.div>

         <motion.div style={{ opacity: finalOpacity, scale: finalScale }} className="absolute text-center bg-[#1A1025]/60 backdrop-blur-xl p-12 md:p-20 rounded-[3rem] border-2 border-white/20 shadow-[0_0_100px_rgba(255,155,179,0.3)]">
           <h1 className="font-['Dancing_Script'] text-7xl md:text-9xl text-[#FF9BB3] drop-shadow-[0_0_30px_rgba(255,155,179,0.8)]">
             I love you forever <span className="inline-block animate-pulse">❤️</span>
           </h1>
         </motion.div>

         <motion.div style={{ opacity: finalOpacity }} className="absolute bottom-10 text-center">
           <p className="font-sans text-white/50 tracking-widest text-sm md:text-base uppercase">Made with love across the distance — Nepal & Sydney</p>
         </motion.div>
      </div>
    </section>
  );
}
