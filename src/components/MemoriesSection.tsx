import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const polaroids = [
  { id: 1, label: 'First Hello', color: 'from-[#1A0A2E] to-[#B8637A]/40', rotation: -8, yOffset: 20 },
  { id: 2, label: 'Making You Laugh', color: 'from-[#0A0816] to-[#C9A96E]/30', rotation: 5, yOffset: -30 },
  { id: 3, label: 'Missing You', color: 'from-[#1A0A2E] to-[#7A9E87]/40', rotation: -4, yOffset: 10 },
  { id: 4, label: 'Our Calls', color: 'from-[#1A0A2E] to-[#E8845A]/30', rotation: 7, yOffset: -10 },
  { id: 5, label: 'Forever Yours', color: 'from-[#0A0816] to-[#B8637A]/50', rotation: -10, yOffset: 30 },
];

export default function MemoriesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={ref} className="min-h-[150vh] w-full bg-gradient-to-b from-[#0A0816] to-[#1A0A2E] relative overflow-hidden flex flex-col items-center justify-center py-32">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at center, #C9A96E 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <h2 className="font-['Cormorant_Garamond'] italic text-5xl md:text-6xl text-[#C9A96E] mb-24 z-20 drop-shadow-[0_0_15px_rgba(201,169,110,0.2)] mt-32">
        Our Memories
      </h2>
      
      <div className="max-w-6xl w-full mx-auto relative h-[800px] flex items-center justify-center z-10">
        {polaroids.map((p, i) => {
          const y = useTransform(scrollYProgress, [0, 1], [300 + p.yOffset * 5, -300 - p.yOffset * 5]);
          const x = useTransform(scrollYProgress, [0, 0.5, 1], [(i % 2 === 0 ? -200 : 200), 0, (i % 2 === 0 ? 100 : -100)]);
          const rotate = useTransform(scrollYProgress, [0, 1], [p.rotation * 2, p.rotation]);
          const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

          return (
            <motion.div
              key={p.id}
              style={{ y, x, rotate, opacity }}
              className="absolute p-4 pb-8 bg-[#1A0A2E] rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-[#C9A96E]/20 hover:scale-110 hover:shadow-[0_20px_50px_rgba(201,169,110,0.15)] hover:border-[#C9A96E]/50 hover:z-50 transition-all duration-300 cursor-pointer"
            >
              <div className={`w-56 h-64 bg-gradient-to-br ${p.color} rounded-sm flex items-center justify-center shadow-inner relative overflow-hidden`}>
                <svg viewBox="0 0 24 24" className="w-16 h-16 text-[#C9A96E]/30" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                <div className="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
              </div>
              <div className="pt-6 pb-2 text-center">
                <p className="font-['Pinyon_Script'] text-3xl text-[#C9A96E]">{p.label}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}