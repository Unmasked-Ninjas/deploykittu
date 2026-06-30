import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function BouquetSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bouquetRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=300%",
        scrub: true,
        pin: true,
      }
    });

    tl.fromTo(".rose", { scale: 0, opacity: 0, y: 50 }, { scale: 1, opacity: 1, y: 0, stagger: 0.1, duration: 1 })
      .fromTo(".lily", { scale: 0, opacity: 0, y: 50 }, { scale: 1, opacity: 1, y: 0, stagger: 0.1, duration: 1 })
      .fromTo(".tulip", { scale: 0, opacity: 0, y: 50 }, { scale: 1, opacity: 1, y: 0, stagger: 0.1, duration: 1 })
      .fromTo(".leaf", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, stagger: 0.1, duration: 1 })
      .fromTo(".breath", { opacity: 0 }, { opacity: 1, duration: 1 })
      .fromTo(".ribbon", { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 1 })
      .fromTo(".bouquet-particles", { opacity: 0, y: 20 }, { opacity: 1, y: -50, duration: 2 })
      .fromTo(".bloom-text", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1 });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="h-screen w-full bg-[#FFF8F3] relative overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #FFD6E7 25%, transparent 25%, transparent 75%, #FFD6E7 75%, #FFD6E7), repeating-linear-gradient(45deg, #FFD6E7 25%, #FFF8F3 25%, #FFF8F3 75%, #FFD6E7 75%, #FFD6E7)', backgroundPosition: '0 0, 10px 10px', backgroundSize: '20px 20px' }}></div>
      
      <div ref={bouquetRef} className="relative w-[300px] h-[400px]">
        {/* Leaves */}
        <div className="leaf absolute bottom-20 left-1/2 -ml-10 w-8 h-24 bg-green-300 rounded-full origin-bottom -rotate-45" />
        <div className="leaf absolute bottom-24 left-1/2 ml-2 w-8 h-20 bg-green-300 rounded-full origin-bottom rotate-45" />
        <div className="leaf absolute bottom-32 left-1/2 -ml-16 w-8 h-20 bg-green-400 rounded-full origin-bottom -rotate-60" />
        
        {/* Tulips (Lavender) */}
        <div className="tulip absolute top-20 left-10 w-12 h-16 bg-[#E8D8FF] rounded-[50%_50%_40%_40%] shadow-md" />
        <div className="tulip absolute top-16 right-12 w-12 h-16 bg-[#E8D8FF] rounded-[50%_50%_40%_40%] shadow-md" />
        <div className="tulip absolute top-8 left-1/2 -ml-6 w-12 h-16 bg-[#E8D8FF] rounded-[50%_50%_40%_40%] shadow-md" />

        {/* Lilies (Peach) */}
        <div className="lily absolute top-24 left-24 w-16 h-16 bg-[#FFE7DA] rotate-12 rounded-tl-full rounded-br-full shadow-md border-2 border-white/50" />
        <div className="lily absolute top-28 right-20 w-14 h-14 bg-[#FFE7DA] -rotate-12 rounded-tr-full rounded-bl-full shadow-md border-2 border-white/50" />

        {/* Roses (Red-pink) */}
        <div className="rose absolute top-32 left-12 w-14 h-14 bg-[#FF9BB3] rounded-full border-4 border-[#FFD6E7] shadow-lg" />
        <div className="rose absolute top-36 right-16 w-16 h-16 bg-[#FF9BB3] rounded-full border-4 border-[#FFD6E7] shadow-lg" />
        <div className="rose absolute top-40 left-1/2 -ml-8 w-16 h-16 bg-[#FF9BB3] rounded-full border-4 border-[#FFD6E7] shadow-lg" />

        {/* Baby's breath */}
        <div className="breath absolute top-16 left-20 w-3 h-3 bg-white rounded-full shadow-sm" />
        <div className="breath absolute top-24 right-10 w-3 h-3 bg-white rounded-full shadow-sm" />
        <div className="breath absolute top-40 left-8 w-3 h-3 bg-white rounded-full shadow-sm" />
        <div className="breath absolute top-10 right-24 w-3 h-3 bg-white rounded-full shadow-sm" />
        <div className="breath absolute top-48 right-12 w-3 h-3 bg-white rounded-full shadow-sm" />

        {/* Ribbon */}
        <div className="ribbon absolute bottom-10 left-1/2 -ml-12 w-24 h-8 bg-[#FFD6E7] -rotate-12 shadow-md rounded-sm origin-center border border-white/50" />
        <div className="ribbon absolute bottom-12 left-1/2 -ml-12 w-24 h-8 bg-[#FFD6E7] rotate-12 shadow-md rounded-sm origin-center border border-white/50" />
        
        {/* Stem base suggestion */}
        <div className="absolute bottom-0 left-1/2 -ml-4 w-8 h-20 bg-green-200 -z-10 rounded-b-xl" />

        <div className="bouquet-particles absolute inset-0 pointer-events-none text-2xl drop-shadow-sm font-sans z-20">
            <span className="absolute top-0 left-0 animate-bounce">✨</span>
            <span className="absolute top-10 right-0 animate-pulse">❤️</span>
            <span className="absolute top-20 -left-10 animate-pulse">✨</span>
        </div>
      </div>
      
      <h2 className="bloom-text font-['Dancing_Script'] text-5xl md:text-7xl text-[#5C3D5E] mt-12 z-10 drop-shadow-md">You made my life bloom.</h2>
    </section>
  );
}
