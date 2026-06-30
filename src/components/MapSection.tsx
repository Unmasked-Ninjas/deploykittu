import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function MapSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={containerRef} className="py-32 w-full min-h-screen bg-[#0A0816] relative flex flex-col items-center justify-center overflow-hidden">
      {/* Subtle Map Grid Texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#F0E6D6 1px, transparent 1px), linear-gradient(90deg, #F0E6D6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="z-10 text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="font-['Cormorant_Garamond'] italic text-5xl md:text-6xl text-[#C9A96E] mb-4"
        >
          Across the World
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-sans font-light text-[#F0E6D6]/60 text-lg"
        >
          But never far apart
        </motion.p>
      </div>

      <div className="w-full max-w-5xl px-4 relative z-10">
        {/* SVG Map Arch */}
        <div className="relative w-full h-[300px] md:h-[400px]">
          <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="xMidYMid meet">
            {/* The Arch Path */}
            <motion.path
              d="M 200 300 Q 500 50 800 300"
              fill="none"
              stroke="#C9A96E"
              strokeWidth="2"
              strokeDasharray="1000"
              initial={{ strokeDashoffset: 1000 }}
              whileInView={{ strokeDashoffset: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
              opacity="0.6"
              strokeLinecap="round"
            />
            
            {/* Distance Label along path */}
            <motion.text
              x="500"
              y="150"
              textAnchor="middle"
              fill="#F0E6D6"
              opacity="0.5"
              className="font-sans text-sm font-light tracking-widest"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 2.5 }}
            >
              ~8,897 km
            </motion.text>
          </svg>

          {/* Locations */}
          <motion.div 
            className="absolute left-[15%] md:left-[20%] top-[75%] flex flex-col items-center -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="w-4 h-4 rounded-full bg-[#7A9E87] shadow-[0_0_15px_rgba(122,158,135,0.8)] mb-2 animate-pulse" />
            <span className="font-sans text-[#F0E6D6] font-medium tracking-wider text-sm md:text-base">Nepal</span>
          </motion.div>

          <motion.div 
            className="absolute right-[15%] md:right-[20%] top-[75%] flex flex-col items-center translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 2.8 }}
          >
            <div className="w-4 h-4 rounded-full bg-[#E8845A] shadow-[0_0_15px_rgba(232,132,90,0.8)] mb-2 animate-pulse" />
            <span className="font-sans text-[#F0E6D6] font-medium tracking-wider text-sm md:text-base">Sydney</span>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { label: 'Distance', value: '~8,897 km apart' },
            { label: 'Time Zones', value: '+5:45 / +10:00' },
            { label: 'Connection', value: 'Bound by love' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 3 + i * 0.2 }}
              className="bg-[#1A0A2E]/50 backdrop-blur-md border border-[#C9A96E]/20 p-6 rounded-xl text-center shadow-[0_0_30px_rgba(0,0,0,0.5)]"
            >
              <h3 className="font-['Cormorant_Garamond'] italic text-2xl text-[#C9A96E] mb-2">{stat.value}</h3>
              <p className="font-sans font-light text-sm text-[#F0E6D6]/50 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}