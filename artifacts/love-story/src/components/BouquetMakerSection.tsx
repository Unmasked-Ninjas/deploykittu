import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FLOWER_TYPES = [
  { id: 'rose', emoji: '🌹', name: 'Rose', color: 'bg-[#FF9BB3]' },
  { id: 'lily', emoji: '🌸', name: 'Lily', color: 'bg-[#FFE7DA]' },
  { id: 'tulip', emoji: '🌷', name: 'Tulip', color: 'bg-[#E8D8FF]' },
  { id: 'leaf', emoji: '🌿', name: 'Leaf', color: 'bg-green-200' },
  { id: 'ribbon', emoji: '🎀', name: 'Ribbon', color: 'bg-[#FFD6E7]' },
];

export default function BouquetMakerSection() {
  const [bouquet, setBouquet] = useState<string[]>([]);
  const [showToast, setShowToast] = useState(false);
  const [isFlying, setIsFlying] = useState(false);

  const addFlower = (id: string) => {
    if (bouquet.length >= 20) return;
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
    <section className="min-h-screen w-full bg-[#FFE7DA] py-20 px-4 md:px-20 relative flex flex-col md:flex-row gap-12 items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#FF9BB3 2px, transparent 2px)', backgroundSize: '40px 40px' }} />
      
      <div className="w-full md:w-1/3 bg-white p-8 rounded-[2rem] shadow-2xl z-10 border-4 border-[#FFD6E7] relative">
        <h2 className="font-['Pacifico'] text-4xl text-[#5C3D5E] mb-8 text-center drop-shadow-sm">Flower Shop</h2>
        <div className="grid grid-cols-2 gap-4">
          {FLOWER_TYPES.map(f => (
            <button
              key={f.id}
              onClick={() => addFlower(f.id)}
              className={`${f.color} p-4 md:p-6 rounded-2xl flex flex-col items-center justify-center hover:scale-105 hover:shadow-lg transition-all active:scale-95 border-2 border-white/50`}
            >
              <span className="text-4xl md:text-5xl mb-3 drop-shadow-md">{f.emoji}</span>
              <span className="font-sans font-bold text-[#5C3D5E] text-lg">{f.name}</span>
            </button>
          ))}
        </div>
        
        <div className="mt-10 flex flex-col gap-4">
           <button onClick={handleSave} disabled={bouquet.length === 0} className="w-full py-4 bg-[#5C3D5E] text-white rounded-full font-bold text-lg hover:bg-[#3D2C4E] disabled:opacity-50 transition-colors shadow-md">
             Save Bouquet
           </button>
           <button onClick={handleSend} disabled={bouquet.length === 0} className="w-full py-4 bg-[#FF9BB3] text-white rounded-full font-bold text-lg hover:bg-[#FF5E85] disabled:opacity-50 transition-colors shadow-md">
             Send to Sydney ✈️
           </button>
           <button onClick={() => setBouquet([])} disabled={bouquet.length === 0} className="w-full py-4 bg-transparent border-2 border-gray-300 text-gray-500 rounded-full font-bold text-lg hover:bg-gray-100 disabled:opacity-50 transition-colors">
             Clear All
           </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 h-[600px] relative flex items-center justify-center z-10">
        <motion.div 
          className="relative w-64 h-64"
          animate={isFlying ? { y: -1000, opacity: 0, scale: 0.5 } : { y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <div className="absolute bottom-[-150px] left-1/2 -ml-16 w-32 h-56 bg-white/40 backdrop-blur-md rounded-b-[3rem] border-4 border-white shadow-[0_20px_40px_rgba(0,0,0,0.1)]"></div>
          
          <AnimatePresence>
            {bouquet.map((item, i) => {
              const flower = FLOWER_TYPES.find(f => f.id === item);
              const randomX = (Math.random() - 0.5) * 120;
              const randomY = (Math.random() - 0.5) * 120;
              const randomRot = (Math.random() - 0.5) * 60;
              
              return (
                <motion.div
                  key={`${i}-${item}`}
                  initial={{ scale: 0, opacity: 0, y: -100 }}
                  animate={{ scale: 1, opacity: 1, y: randomY, x: randomX, rotate: randomRot }}
                  exit={{ scale: 0, opacity: 0, y: 100 }}
                  className="absolute top-1/2 left-1/2 text-7xl -ml-10 -mt-10 drop-shadow-lg"
                  style={{ zIndex: i }}
                >
                  {flower?.emoji}
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
            className="fixed bottom-10 left-1/2 w-64 bg-[#FF9BB3] text-white text-center py-4 rounded-full shadow-2xl font-bold z-50 text-xl border-2 border-white"
          >
            Bouquet saved! ✨
          </motion.div>
        )}
        {isFlying && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center"
          >
            <div className="text-[10rem] animate-[drift_2s_infinite]">🕊️💐</div>
            <h2 className="mt-12 font-['Dancing_Script'] text-5xl text-[#5C3D5E]">Flying across the ocean...</h2>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
