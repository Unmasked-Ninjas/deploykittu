import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PigeonJourneySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const letterRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=400%",
        scrub: true,
        pin: true,
      }
    });

    tl.to(sceneRef.current, {
      xPercent: -80, // 5 zones = 500vw total, so we move -400vw (-80% of 500vw)
      ease: "none",
      duration: 10
    });

    const letterTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top -300%", 
        end: "+=50%",
        scrub: true,
      }
    });

    letterTl.fromTo(letterRef.current, 
      { scaleY: 0, opacity: 0 }, 
      { scaleY: 1, opacity: 1, duration: 1, transformOrigin: "bottom" }
    );

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="h-screen w-full overflow-hidden bg-[#0A0816] relative">
      <div ref={sceneRef} className="h-full w-[500vw] flex absolute top-0 left-0">
        
        {/* Zone 1: Nepal Mountains (Dark Indigo) */}
        <div className="w-[100vw] h-full relative bg-gradient-to-b from-[#0A0816] to-[#1A0A2E]">
          <div className="absolute bottom-0 w-full h-[60%] bg-[#0A1E2E]" style={{ clipPath: 'polygon(0% 100%, 0% 50%, 20% 20%, 40% 60%, 60% 10%, 80% 50%, 100% 30%, 100% 100%)' }}></div>
          <div className="absolute bottom-0 w-full h-[40%] bg-[#1A0A2E]" style={{ clipPath: 'polygon(0% 100%, 0% 60%, 30% 30%, 50% 70%, 70% 40%, 100% 50%, 100% 100%)' }}></div>
          {/* Snowcaps styled darkly */}
          <div className="absolute bottom-[40%] left-[10%] w-[20%] h-[20%] bg-[#7A9E87] opacity-20" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
          <h2 className="absolute top-20 left-20 font-['Cormorant_Garamond'] italic text-5xl text-[#C9A96E] opacity-60">From Nepal...</h2>
        </div>

        {/* Zone 2: Night Sky */}
        <div className="w-[100vw] h-full relative bg-gradient-to-b from-[#0A0816] to-[#1A0A2E]">
          <svg className="absolute top-20 right-32 w-24 h-24 text-[#F0E6D6] opacity-80" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
          {[...Array(30)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-[#F0E6D6] rounded-full opacity-60"
              style={{
                top: `${Math.random() * 80}%`,
                left: `${Math.random() * 100}%`,
                animation: `twinkle ${2 + Math.random() * 3}s infinite`
              }}
            />
          ))}
        </div>

        {/* Zone 3: Ocean (Deep Teal/Navy) */}
        <div className="w-[100vw] h-full relative bg-gradient-to-b from-[#1A0A2E] to-[#0A1E2E]">
          <svg className="absolute bottom-0 w-full h-48 opacity-30" preserveAspectRatio="none" viewBox="0 0 1440 320">
            <path fill="#7A9E87" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,197.3C960,213,1056,203,1152,176C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          <svg className="absolute bottom-0 w-full h-32 opacity-20" preserveAspectRatio="none" viewBox="0 0 1440 320">
            <path fill="#C9A96E" d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,213.3C672,203,768,149,864,138.7C960,128,1056,160,1152,176C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        {/* Zone 4: Sunset (Ember/Rose) */}
        <div className="w-[100vw] h-full relative bg-gradient-to-b from-[#0A1E2E] via-[#B8637A]/50 to-[#E8845A]/30">
          <div className="absolute bottom-0 left-1/2 -ml-48 w-96 h-96 bg-[#E8845A] rounded-full blur-[80px] opacity-40"></div>
          <div className="absolute bottom-0 w-full h-24 bg-[#0A0816]"></div>
        </div>

        {/* Zone 5: Sydney Arrival */}
        <div className="w-[100vw] h-full relative bg-gradient-to-b from-[#E8845A]/20 to-[#1A0A2E] flex items-end justify-center pb-20">
          <h2 className="absolute top-20 right-20 font-['Cormorant_Garamond'] italic text-5xl text-[#C9A96E] opacity-60">...to Sydney</h2>
          <div className="flex items-end opacity-80">
            {/* Dark silhouettes for Opera house */}
            <div className="w-20 h-32 bg-[#0A0816] border border-[#C9A96E]/20 rounded-tr-[100%] origin-bottom rotate-[-15deg] shadow-lg"></div>
            <div className="w-32 h-56 bg-[#0A0816] border border-[#C9A96E]/20 rounded-tr-[100%] origin-bottom z-10 shadow-xl"></div>
            <div className="w-24 h-40 bg-[#0A0816] border border-[#C9A96E]/20 rounded-tr-[100%] origin-bottom rotate-[15deg] -ml-6 shadow-md"></div>
          </div>
        </div>
      </div>

      {/* Fixed Pigeon / Bird SVG */}
      <div className="absolute top-[40%] left-1/2 -ml-12 z-40 animate-[drift_4s_infinite]">
        <div className="relative w-24 h-20">
          {/* Bird Body */}
          <svg viewBox="0 0 100 80" className="w-full h-full drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
            <path d="M20,40 Q40,10 70,30 Q90,40 80,60 Q60,70 30,60 Q10,50 20,40" fill="#F0E6D6" opacity="0.9" />
            <path d="M70,30 L85,25 L75,35" fill="#E8845A" /> {/* Beak */}
            <circle cx="65" cy="35" r="2" fill="#0A0816" /> {/* Eye */}
            <path d="M20,40 L5,35 L15,50" fill="#F0E6D6" opacity="0.9" /> {/* Tail */}
            
            {/* Wing - animated via CSS class wing-flap defined in index.css */}
            <g className="animate-[wing-flap_0.6s_infinite] origin-center">
              <path d="M40,40 Q30,10 60,20 Q50,45 40,40" fill="#FFFFFF" opacity="0.9" />
            </g>
          </svg>
          
          {/* Letter Envelope */}
          <div className="absolute bottom-0 right-6 w-8 h-6 bg-[#0A0816] border border-[#C9A96E] shadow-md rotate-12 flex items-center justify-center">
             <div className="w-2 h-2 bg-[#B8637A] rounded-full shadow-[0_0_4px_rgba(184,99,122,0.8)]"></div>
          </div>
        </div>
      </div>

      {/* Letter Reveal */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-50">
        <div ref={letterRef} className="w-full max-w-2xl bg-[#0A0816]/90 backdrop-blur-xl p-12 md:p-16 rounded-sm border border-[#C9A96E]/40 shadow-[0_0_50px_rgba(201,169,110,0.1)] relative opacity-0">
           <p className="font-['Pinyon_Script'] text-3xl md:text-5xl text-[#F0E6D6] leading-relaxed text-center">
             "My dearest love, every mile between us only makes my heart reach further for you. I carry you with me always — in every sunrise, every quiet moment, every breath. Soon, soon, soon. Until then — I love you endlessly."
           </p>
           <div className="absolute -top-6 left-1/2 -ml-6 w-12 h-12 bg-[#1A0A2E] rounded-full flex items-center justify-center border border-[#C9A96E]/50">
             <svg className="w-6 h-6 text-[#C9A96E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
             </svg>
           </div>
        </div>
      </div>
    </section>
  );
}