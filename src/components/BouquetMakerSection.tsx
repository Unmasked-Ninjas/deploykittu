import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Reusing SVGs locally for BouquetMaker
const SVGRose = ({ size = 60 }) => (
  <svg viewBox='0 0 120 120' width={size} height={size}>
    {[0,72,144,216,288].map(angle => (
      <ellipse key={`o-${angle}`} cx='60' cy='60' rx='18' ry='32' transform={`rotate(${angle} 60 60) translate(0 -20)`} fill='#B8637A' opacity='0.85' />
    ))}
    {[36,108,180,252,324].map(angle => (
      <ellipse key={`i-${angle}`} cx='60' cy='60' rx='13' ry='22' transform={`rotate(${angle} 60 60) translate(0 -14)`} fill='#C4768A' opacity='0.9' />
    ))}
    <circle cx='60' cy='60' r='10' fill='#8B3A52' />
  </svg>
);

const SVGLily = ({ size = 60 }) => (
  <svg viewBox='0 0 120 140' width={size} height={size}>
    {[0,60,120,180,240,300].map(angle => (
      <path key={`p-${angle}`} d='M60,60 C50,45 42,25 60,10 C78,25 70,45 60,60' transform={`rotate(${angle} 60 60)`} fill='#E8845A' opacity='0.85' />
    ))}
    <circle cx='60' cy='60' r='6' fill='#C9A96E' />
  </svg>
);

const SVGTulip = ({ size = 60 }) => (
  <svg viewBox='0 0 100 140' width={size} height={size}>
    <path d='M50,70 C30,60 20,35 35,15 C45,5 50,30 50,70' fill='#9B4D7E' opacity="0.9" />
    <path d='M50,70 C70,60 80,35 65,15 C55,5 50,30 50,70' fill='#A85C8D' opacity="0.9" />
    <path d='M50,70 C40,55 38,30 50,10 C62,30 60,55 50,70' fill='#B8637A' opacity="0.95" />
  </svg>
);

const SVGLeaf = ({ size = 60 }) => (
  <svg viewBox='0 0 60 100' width={size} height={size}>
    <path d='M30,10 C50,30 55,60 30,90 C5,60 10,30 30,10' fill='#4A7C59' />
    <line x1='30' y1='10' x2='30' y2='90' stroke='#2D5C3A' strokeWidth='1.5' />
  </svg>
);

const FLOWER_TYPES = [
  { id: 'rose', component: SVGRose, name: 'Rose' },
  { id: 'lily', component: SVGLily, name: 'Lily' },
  { id: 'tulip', component: SVGTulip, name: 'Tulip' },
  { id: 'leaf', component: SVGLeaf, name: 'Leaf' },
];

export default function BouquetMakerSection() {
  const [bouquet, setBouquet] = useState<string[]>([]);
  const [showToast, setShowToast] = useState(false);
  const [isFlying, setIsFlying] = useState(false);

  const addFlower = (id: string) => {
    if (bouquet.length >= 25) return;
    setBouquet([...bouquet, id]);
  };

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleSend = () => {
    setIsFlying(true);
    setTimeout(() => {
      setBouquet([]);
      setIsFlying(false);
    }, 3000);
  };

  return (
    <section className="min-h-screen w-full bg-[#1A0A2E] py-20 px-4 md:px-20 relative flex flex-col md:flex-row gap-12 items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,8,22,0.8)_100%)]" />
      <div className="absolute inset-0 opacity-30">
         {[...Array(30)].map((_, i) => (
           <div key={i} className="absolute w-0.5 h-0.5 bg-[#F0E6D6] rounded-full" style={{ left: `${Math.random()*100}%`, top: `${Math.random()*100}%`, animation: `twinkle ${2 + Math.random()*3}s infinite` }} />
         ))}
      </div>
      
      <div className="w-full md:w-1/3 bg-[#0A0816]/90 backdrop-blur-md p-8 rounded-sm shadow-2xl z-10 border border-[#C9A96E]/20 relative">
        <h2 className="font-['Cormorant_Garamond'] italic text-4xl text-[#C9A96E] mb-8 text-center drop-shadow-sm">Build Her a Bouquet</h2>
        
        <div className="grid grid-cols-2 gap-4">
          {FLOWER_TYPES.map(f => (
            <button
              key={f.id}
              onClick={() => addFlower(f.id)}
              className="bg-[#1A0A2E] border border-[#C9A96E]/20 p-4 md:p-6 rounded-sm flex flex-col items-center justify-center hover:bg-[#C9A96E]/10 hover:border-[#C9A96E]/50 transition-all active:scale-95 group"
            >
              <div className="mb-3 group-hover:scale-110 transition-transform">
                <f.component size={50} />
              </div>
              <span className="font-sans font-light text-[#F0E6D6]/80 text-sm tracking-widest uppercase">{f.name}</span>
            </button>
          ))}
        </div>
        
        <div className="mt-10 flex flex-col gap-4">
           <button onClick={handleSave} disabled={bouquet.length === 0} className="w-full py-4 bg-[#1A0A2E] border border-[#C9A96E]/50 text-[#C9A96E] font-sans font-medium text-sm tracking-widest uppercase hover:bg-[#C9A96E]/10 disabled:opacity-30 disabled:hover:bg-[#1A0A2E] transition-all">
             Save Bouquet
           </button>
           <button onClick={handleSend} disabled={bouquet.length === 0} className="w-full py-4 bg-[#C9A96E] text-[#0A0816] font-sans font-medium text-sm tracking-widest uppercase hover:bg-[#F0E6D6] hover:shadow-[0_0_15px_rgba(201,169,110,0.5)] disabled:opacity-30 disabled:hover:bg-[#C9A96E] disabled:shadow-none transition-all">
             Send to Sydney
           </button>
           <button onClick={() => setBouquet([])} disabled={bouquet.length === 0} className="w-full py-2 text-[#F0E6D6]/40 font-sans text-xs tracking-widest uppercase hover:text-[#F0E6D6] disabled:opacity-30 transition-colors">
             Clear All
           </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 h-[600px] relative flex items-center justify-center z-10">
        <motion.div 
          className="relative w-64 h-64 flex justify-center"
          animate={isFlying ? { y: -1000, opacity: 0, scale: 0.5 } : { y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          {/* Vase Redesign - Dark minimalist vase */}
          <div className="absolute bottom-[-150px] w-24 h-48 bg-[#0A0816] rounded-b-xl rounded-t-sm border border-[#C9A96E]/30 shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col items-center">
            <div className="w-28 h-2 bg-[#1A0A2E] rounded-full border border-[#C9A96E]/50 -mt-1"></div>
            <div className="w-1 h-full bg-gradient-to-b from-white/10 to-transparent absolute left-4"></div>
          </div>
          
          <AnimatePresence>
            {bouquet.map((item, i) => {
              const flower = FLOWER_TYPES.find(f => f.id === item);
              const randomX = (Math.random() - 0.5) * 120;
              const randomY = (Math.random() - 0.5) * 120 - 40;
              const randomRot = (Math.random() - 0.5) * 60;
              
              if (!flower) return null;

              return (
                <motion.div
                  key={`${i}-${item}`}
                  initial={{ scale: 0, opacity: 0, y: -100 }}
                  animate={{ scale: 1, opacity: 1, y: randomY, x: randomX, rotate: randomRot }}
                  exit={{ scale: 0, opacity: 0, y: 100 }}
                  className="absolute top-1/2 left-1/2 -ml-[30px] -mt-[30px] drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]"
                  style={{ zIndex: i }}
                >
                  <flower.component size={60} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50, x: '-50%' }} 
            animate={{ opacity: 1, y: 0, x: '-50%' }} 
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            className="fixed bottom-10 left-1/2 px-8 bg-[#0A0816] border border-[#C9A96E] text-[#C9A96E] text-center py-4 shadow-[0_0_20px_rgba(201,169,110,0.3)] font-sans tracking-widest text-sm uppercase z-50"
          >
            Bouquet Saved
          </motion.div>
        )}
        {isFlying && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0A0816]/90 backdrop-blur-md z-50 flex flex-col items-center justify-center"
          >
            <div className="text-[#C9A96E] mb-8 animate-[drift_2s_infinite]">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                 <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
              </svg>
            </div>
            <h2 className="font-['Cormorant_Garamond'] italic text-4xl text-[#F0E6D6] tracking-widest">Flying across the world...</h2>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}