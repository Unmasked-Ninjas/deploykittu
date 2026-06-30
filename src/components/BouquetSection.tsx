import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SVGRose = ({ size = 120, className = "" }) => (
  <svg viewBox='0 0 120 120' width={size} height={size} className={className}>
    {[0,72,144,216,288].map(angle => (
      <ellipse key={`outer-${angle}`} cx='60' cy='60' rx='18' ry='32' transform={`rotate(${angle} 60 60) translate(0 -20)`} fill='#B8637A' opacity='0.85' />
    ))}
    {[36,108,180,252,324].map(angle => (
      <ellipse key={`inner-${angle}`} cx='60' cy='60' rx='13' ry='22' transform={`rotate(${angle} 60 60) translate(0 -14)`} fill='#C4768A' opacity='0.9' />
    ))}
    <circle cx='60' cy='60' r='10' fill='#8B3A52' />
    <line x1='60' y1='60' x2='60' y2='115' stroke='#4A7C59' strokeWidth='3' strokeLinecap='round' />
    <ellipse cx='60' cy='90' rx='12' ry='6' transform='rotate(-30 60 90)' fill='#4A7C59' />
  </svg>
);

const SVGLily = ({ size = 140, className = "" }) => (
  <svg viewBox='0 0 120 140' width={size} height={size} className={className}>
    {[0,60,120,180,240,300].map(angle => (
      <path key={`petal-${angle}`} d='M60,60 C50,45 42,25 60,10 C78,25 70,45 60,60' transform={`rotate(${angle} 60 60)`} fill='#E8845A' opacity='0.85' />
    ))}
    {[0,72,144,216,288].map((angle,i) => (
      <line key={`stamen-${i}`} x1='60' y1='60' x2='60' y2='45' transform={`rotate(${angle} 60 60)`} stroke='#C9A96E' strokeWidth='1.5' />
    ))}
    <line x1='60' y1='62' x2='60' y2='130' stroke='#4A7C59' strokeWidth='3' strokeLinecap='round' />
  </svg>
);

const SVGTulip = ({ size = 140, className = "" }) => (
  <svg viewBox='0 0 100 140' width={size} height={size} className={className}>
    <path d='M50,70 C30,60 20,35 35,15 C45,5 50,30 50,70' fill='#9B4D7E' opacity="0.9" />
    <path d='M50,70 C70,60 80,35 65,15 C55,5 50,30 50,70' fill='#A85C8D' opacity="0.9" />
    <path d='M50,70 C40,55 38,30 50,10 C62,30 60,55 50,70' fill='#B8637A' opacity="0.95" />
    <path d='M50,70 Q48,100 50,130' stroke='#4A7C59' strokeWidth='3' fill='none' strokeLinecap='round' />
    <path d='M50,100 Q35,90 30,78' stroke='#4A7C59' strokeWidth='2.5' fill='none' strokeLinecap='round' />
  </svg>
);

const SVGLeaf = ({ size = 100, className = "" }) => (
  <svg viewBox='0 0 60 100' width={size} height={size} className={className}>
    <path d='M30,10 C50,30 55,60 30,90 C5,60 10,30 30,10' fill='#4A7C59' />
    <line x1='30' y1='10' x2='30' y2='90' stroke='#2D5C3A' strokeWidth='1.5' />
  </svg>
);

const SVGBabysBreath = ({ size = 80, className = "" }) => (
  <svg viewBox='0 0 80 80' width={size} height={size} className={className}>
    {[[40,15],[25,35],[55,35],[15,55],[40,55],[65,55],[30,70],[50,70]].map(([cx,cy],i) => (
      <circle key={`dot-${i}`} cx={cx} cy={cy} r='5' fill='#F0E6D6' opacity='0.75' />
    ))}
  </svg>
);

const SVGRibbon = ({ size = 120, className = "" }) => (
  <svg viewBox='0 0 120 60' width={size} height={size} className={className}>
    <path d='M60,30 C40,10 10,5 20,30 C10,55 40,50 60,30' fill='#C9A96E' opacity='0.9' />
    <path d='M60,30 C80,10 110,5 100,30 C110,55 80,50 60,30' fill='#C9A96E' opacity='0.9' />
    <circle cx='60' cy='30' r='8' fill='#1A0A2E' />
  </svg>
);

export default function BouquetSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=450%",
        scrub: 1.2,
        pin: true,
      }
    });

    const setInitial = (selector: string) => {
      gsap.set(selector, { opacity: 0, scale: 0.3, y: 60, rotation: gsap.utils.random(-30, 30, true) });
    };

    setInitial('.rose');
    setInitial('.lily');
    setInitial('.tulip');
    setInitial('.breath');
    setInitial('.leaf');
    gsap.set('.ribbon', { opacity: 0, scale: 0, y: 20 });
    gsap.set('.gold-sparkle', { opacity: 0, y: 0 });
    gsap.set('.bloom-text', { opacity: 0, y: 20 });
    gsap.set('.bloom-subtext', { opacity: 0, y: 20 });

    tl.to('.rose', { opacity: 1, scale: 1, y: 0, rotation: gsap.utils.wrap([-10, 0, 10]), stagger: 0.05, duration: 0.15 })
      .to('.lily', { opacity: 1, scale: 1, y: 0, rotation: gsap.utils.wrap([-20, 20]), stagger: 0.05, duration: 0.15 })
      .to('.tulip', { opacity: 1, scale: 1, y: 0, rotation: gsap.utils.wrap([-15, 15, -5]), stagger: 0.05, duration: 0.15 })
      .to('.breath', { opacity: 1, scale: 1, y: 0, rotation: 0, stagger: 0.02, duration: 0.1 })
      .to('.leaf', { opacity: 1, scale: 1, y: 0, rotation: gsap.utils.wrap([-30, 0, 30, -15]), stagger: 0.05, duration: 0.05 }, "<")
      .to('.ribbon', { opacity: 1, scale: 1, y: 0, duration: 0.15 })
      .to('.gold-sparkle', { opacity: 1, y: -40, stagger: 0.02, duration: 0.15 })
      .to('.bloom-text', { opacity: 1, y: 0, duration: 0.1 })
      .to('.bloom-subtext', { opacity: 1, y: 0, duration: 0.1 }, "+=0.05");

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="h-screen w-full bg-[#1A0A2E] relative overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,8,22,0.8)_100%)] z-0" />
      
      <div className="relative w-[400px] h-[500px] z-10">
        {/* Leaves */}
        <SVGLeaf size={80} className="leaf absolute left-[120px] top-[300px]" />
        <SVGLeaf size={90} className="leaf absolute left-[180px] top-[310px]" />
        <SVGLeaf size={70} className="leaf absolute left-[220px] top-[290px]" />
        <SVGLeaf size={80} className="leaf absolute left-[150px] top-[320px]" />
        
        {/* Tulips */}
        <SVGTulip size={100} className="tulip absolute left-[160px] top-[140px]" />
        <SVGTulip size={90} className="tulip absolute left-[220px] top-[110px]" />
        <SVGTulip size={110} className="tulip absolute left-[270px] top-[145px]" />

        {/* Lilies */}
        <SVGLily size={120} className="lily absolute left-[100px] top-[120px]" />
        <SVGLily size={130} className="lily absolute left-[300px] top-[120px]" />

        {/* Roses */}
        <SVGRose size={110} className="rose absolute left-[140px] top-[80px]" />
        <SVGRose size={130} className="rose absolute left-[200px] top-[60px]" />
        <SVGRose size={120} className="rose absolute left-[260px] top-[80px]" />

        {/* Baby's breath */}
        <SVGBabysBreath size={40} className="breath absolute left-[120px] top-[70px]" />
        <SVGBabysBreath size={50} className="breath absolute left-[170px] top-[40px]" />
        <SVGBabysBreath size={45} className="breath absolute left-[240px] top-[50px]" />
        <SVGBabysBreath size={40} className="breath absolute left-[290px] top-[80px]" />
        <SVGBabysBreath size={50} className="breath absolute left-[150px] top-[180px]" />
        <SVGBabysBreath size={35} className="breath absolute left-[250px] top-[190px]" />
        <SVGBabysBreath size={45} className="breath absolute left-[210px] top-[150px]" />
        <SVGBabysBreath size={40} className="breath absolute left-[280px] top-[160px]" />

        {/* Ribbon */}
        <SVGRibbon size={140} className="ribbon absolute left-[130px] top-[300px]" />

        {/* Sparkles */}
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className="gold-sparkle absolute w-2 h-2 rounded-full bg-[#C9A96E] shadow-[0_0_8px_rgba(201,169,110,0.8)]"
            style={{
              left: 100 + Math.random() * 200,
              top: 100 + Math.random() * 200,
            }}
          />
        ))}
      </div>
      
      <div className="z-20 text-center mt-8">
        <h2 className="bloom-text font-['Cormorant_Garamond'] italic text-4xl md:text-5xl text-[#C9A96E] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          You made my life bloom.
        </h2>
        <p className="bloom-subtext font-sans font-light text-[#F0E6D6]/60 tracking-wider text-sm mt-4">
          Nepal × Sydney, always.
        </p>
      </div>
    </section>
  );
}