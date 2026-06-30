import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Star, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const pages = [
  {
    id: 1,
    leftTitle: 'This day was perfect',
    leftColor: 'bg-[#FFD6E7]',
    rightTitle: 'I love your laugh',
    rightColor: 'bg-[#DDF3FF]',
  },
  {
    id: 2,
    leftTitle: "Can't wait to hold your hand",
    leftColor: 'bg-[#E8D8FF]',
    rightTitle: 'Every moment with you',
    rightColor: 'bg-[#FFE7DA]',
  }
];

export default function PhotoAlbumSection() {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => setCurrentPage(p => Math.min(pages.length - 1, p + 1));
  const prevPage = () => setCurrentPage(p => Math.max(0, p - 1));

  return (
    <section className="py-32 w-full bg-[#FFF8F3] relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#FF9BB3 2px, transparent 2px)', backgroundSize: '30px 30px' }} />
      
      <h2 className="font-['Pacifico'] text-5xl text-[#FF9BB3] mb-16 drop-shadow-sm z-10">Our Story</h2>
      
      <div className="relative w-full max-w-4xl h-[400px] md:h-[500px] perspective-[1500px] z-10 px-4">
        <div className="absolute inset-0 flex px-4">
          <div className="w-1/2 bg-[#FFD6E7] rounded-l-3xl border-4 border-r-0 border-[#FF9BB3] shadow-2xl" />
          <div className="w-1/2 bg-[#FFD6E7] rounded-r-3xl border-4 border-l-0 border-[#FF9BB3] shadow-2xl" />
          <div className="absolute top-0 bottom-0 left-1/2 w-8 bg-gradient-to-r from-[#FF9BB3]/50 to-[#FF9BB3] -ml-4 rounded-full shadow-inner" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={currentPage}
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-4 md:inset-8 flex bg-[#FFFCF9] rounded-xl shadow-[inset_0_0_20px_rgba(0,0,0,0.05)] overflow-hidden origin-center"
          >
            {/* Left Page */}
            <div className="w-1/2 h-full border-r-2 border-gray-200/50 p-4 md:p-8 relative">
              <div className={`w-full h-32 md:h-48 ${pages[currentPage].leftColor} rounded-md shadow-inner flex items-center justify-center rotate-[-2deg] hover:rotate-0 transition-transform`}>
                 <Heart className="w-12 h-12 text-white/50" fill="currentColor" />
              </div>
              <div className="mt-8 bg-[#FFF9C4] p-4 rotate-3 shadow-md w-[90%] mx-auto relative group">
                <div className="absolute -top-3 left-1/2 w-8 h-3 bg-red-400/20 -ml-4 rotate-[-5deg]"></div>
                <p className="font-['Dancing_Script'] text-xl md:text-2xl text-[#5C3D5E] text-center">{pages[currentPage].leftTitle}</p>
              </div>
              <Sparkles className="absolute bottom-6 left-6 text-[#FF9BB3] w-6 h-6 animate-pulse" />
            </div>
            
            {/* Right Page */}
            <div className="w-1/2 h-full p-4 md:p-8 relative">
              <div className={`w-full h-32 md:h-48 ${pages[currentPage].rightColor} rounded-md shadow-inner flex items-center justify-center rotate-[2deg] hover:rotate-0 transition-transform`}>
                 <Star className="w-12 h-12 text-white/50" fill="currentColor" />
              </div>
              <div className="mt-8 bg-[#E8D8FF] p-4 -rotate-2 shadow-md w-[90%] mx-auto relative">
                <div className="absolute -top-3 left-1/2 w-8 h-3 bg-purple-400/20 -ml-4 rotate-[5deg]"></div>
                <p className="font-['Dancing_Script'] text-xl md:text-2xl text-[#5C3D5E] text-center">{pages[currentPage].rightTitle}</p>
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#FF9BB3] to-transparent rounded-tl-[100%] opacity-80" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex gap-6 mt-16 z-10">
        <button 
          onClick={prevPage} 
          disabled={currentPage === 0}
          aria-label="Previous page"
          className="p-4 bg-white text-[#5C3D5E] rounded-full shadow-lg border-2 border-[#FFD6E7] hover:bg-[#FFD6E7] hover:scale-110 disabled:opacity-50 disabled:hover:scale-100 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextPage} 
          disabled={currentPage === pages.length - 1}
          aria-label="Next page"
          className="p-4 bg-white text-[#5C3D5E] rounded-full shadow-lg border-2 border-[#FFD6E7] hover:bg-[#FFD6E7] hover:scale-110 disabled:opacity-50 disabled:hover:scale-100 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
