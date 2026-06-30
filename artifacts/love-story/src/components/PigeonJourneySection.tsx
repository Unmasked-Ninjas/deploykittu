import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function PigeonJourneySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const pigeonRef = useRef<HTMLDivElement>(null);
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
      xPercent: -83.33, 
      ease: "none",
      duration: 10
    });

    const letterTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top -350%", 
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
    <section ref={containerRef} className="h-screen w-full overflow-hidden bg-[#DDF3FF] relative">
      <div ref={sceneRef} className="h-full w-[600vw] flex absolute top-0 left-0">
        
        {/* Zone 1: Nepal Mountains */}
        <div className="w-[100vw] h-full relative bg-gradient-to-b from-[#DDF3FF] to-[#A8E0FF]">
          <div className="absolute bottom-0 w-full h-[60%] bg-[#5C3D5E]" style={{ clipPath: 'polygon(0% 100%, 0% 50%, 20% 20%, 40% 60%, 60% 10%, 80% 50%, 100% 30%, 100% 100%)' }}></div>
          <div className="absolute bottom-0 w-full h-[40%] bg-[#3D2C4E]" style={{ clipPath: 'polygon(0% 100%, 0% 60%, 30% 30%, 50% 70%, 70% 40%, 100% 50%, 100% 100%)' }}></div>
          {/* Snowcaps */}
          <div className="absolute bottom-[40%] left-[10%] w-[20%] h-[20%] bg-white opacity-80" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
          <h2 className="absolute top-20 left-20 font-['Pacifico'] text-5xl text-[#5C3D5E] opacity-50">From Nepal...</h2>
        </div>

        {/* Zone 2: Misty Clouds */}
        <div className="w-[100vw] h-full relative bg-gradient-to-b from-[#A8E0FF] to-[#FFF8F3]">
          <div className="absolute top-1/4 left-10 w-64 h-24 bg-white rounded-full opacity-80 blur-md"></div>
          <div className="absolute top-1/3 left-1/2 w-96 h-32 bg-white rounded-full opacity-70 blur-lg"></div>
          <div className="absolute bottom-1/4 right-20 w-80 h-24 bg-white rounded-full opacity-90 blur-md"></div>
        </div>

        {/* Zone 3: Night Sky */}
        <div className="w-[100vw] h-full relative bg-gradient-to-b from-[#1A1025] to-[#3D2C4E]">
          <div className="absolute top-20 right-32 w-32 h-32 rounded-full bg-[#FFF9C4] shadow-[0_0_60px_rgba(255,249,196,0.8)]"></div>
          <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-[twinkle_2s_infinite]"></div>
          <div className="absolute top-30 left-1/3 w-3 h-3 bg-white rounded-full animate-[twinkle_3s_infinite]"></div>
          <div className="absolute top-20 right-1/4 w-2 h-2 bg-white rounded-full animate-[twinkle_2.5s_infinite]"></div>
          <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-white rounded-full animate-[twinkle_1.5s_infinite]"></div>
        </div>

        {/* Zone 4: Ocean */}
        <div className="w-[100vw] h-full relative bg-gradient-to-b from-[#3D2C4E] to-[#FF9BB3]">
          <svg className="absolute bottom-0 w-full h-48" preserveAspectRatio="none" viewBox="0 0 1440 320">
            <path fill="#4A90E2" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,197.3C960,213,1056,203,1152,176C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          <svg className="absolute bottom-0 w-full h-32 opacity-50" preserveAspectRatio="none" viewBox="0 0 1440 320">
            <path fill="#DDF3FF" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,213.3C672,203,768,149,864,138.7C960,128,1056,160,1152,176C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        {/* Zone 5: Sunset */}
        <div className="w-[100vw] h-full relative bg-gradient-to-b from-[#FF9BB3] to-[#FFE7DA]">
          <div className="absolute bottom-10 left-1/2 -ml-48 w-96 h-96 bg-orange-400 rounded-full blur-[60px] opacity-60"></div>
        </div>

        {/* Zone 6: Sydney Arrival */}
        <div className="w-[100vw] h-full relative bg-gradient-to-b from-[#FFE7DA] to-[#DDF3FF] flex items-end justify-center pb-20">
          <h2 className="absolute top-20 right-20 font-['Pacifico'] text-5xl text-[#5C3D5E] opacity-50">...to Sydney</h2>
          <div className="flex items-end">
            <div className="w-20 h-32 bg-white border-2 border-gray-200 rounded-tr-[100%] origin-bottom rotate-[-15deg] shadow-lg"></div>
            <div className="w-32 h-56 bg-white border-2 border-gray-200 rounded-tr-[100%] origin-bottom z-10 shadow-xl"></div>
            <div className="w-24 h-40 bg-white border-2 border-gray-200 rounded-tr-[100%] origin-bottom rotate-[15deg] -ml-6 shadow-md"></div>
          </div>
        </div>
      </div>

      {/* Fixed Pigeon */}
      <div ref={pigeonRef} className="absolute top-[40%] left-1/2 -ml-12 z-40 animate-[drift_4s_infinite]">
        <div className="relative w-24 h-20">
          <div className="absolute top-5 left-0 w-20 h-12 bg-white rounded-full shadow-md border border-gray-100"></div>
          <div className="absolute top-0 right-0 w-12 h-12 bg-white rounded-full shadow-md border border-gray-100"></div>
          <div className="absolute top-5 right-[-8px] w-6 h-4 bg-orange-400 rounded-r-full"></div>
          <div className="absolute top-4 right-4 w-2 h-2 bg-black rounded-full"></div>
          <div className="absolute top-3 left-6 w-14 h-8 bg-gray-100 rounded-full origin-left animate-[wing-flap_0.5s_infinite]"></div>
          <div className="absolute bottom-0 right-6 w-8 h-6 bg-[#FFD6E7] border border-[#FF9BB3] shadow-md rotate-12 flex items-center justify-center">
             <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Letter Reveal */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-50">
        <div ref={letterRef} className="w-full max-w-2xl bg-[#FFF8F3] p-12 md:p-16 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] border-4 border-[#FFD6E7] relative opacity-0">
           <p className="font-['Dancing_Script'] text-3xl md:text-5xl text-[#5C3D5E] leading-relaxed text-center">
             "My dearest love, every mile between us only makes my heart reach further for you. I carry you with me always — in every sunrise, every quiet moment, every breath. Soon, soon, soon. Until then — I love you endlessly."
           </p>
           <div className="absolute -top-8 left-1/2 -ml-8 w-16 h-16 bg-[#FF9BB3] rounded-full flex items-center justify-center text-white shadow-xl text-3xl border-4 border-white">
             ❤️
           </div>
        </div>
      </div>
    </section>
  );
}
