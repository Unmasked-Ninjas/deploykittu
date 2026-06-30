import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

/* ── SVG Flower Components ── */
function Rose({ size = 90, rotate = 0 }: { size?: number; rotate?: number }) {
  return (
    <svg viewBox="0 0 120 140" width={size} height={size} style={{ transform: `rotate(${rotate}deg)`, overflow: 'visible' }}>
      {[0,72,144,216,288].map(a => (
        <ellipse key={a} cx="60" cy="60" rx="19" ry="33"
          transform={`rotate(${a} 60 60) translate(0 -21)`}
          fill="#B8637A" opacity="0.82" />
      ))}
      {[36,108,180,252,324].map(a => (
        <ellipse key={a} cx="60" cy="60" rx="13" ry="23"
          transform={`rotate(${a} 60 60) translate(0 -15)`}
          fill="#C4768A" opacity="0.92" />
      ))}
      <circle cx="60" cy="60" r="11" fill="#8B3A52" />
      <circle cx="60" cy="60" r="5" fill="#6B2A3E" />
      <line x1="60" y1="68" x2="60" y2="135" stroke="#4A7C59" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="60" cy="105" rx="14" ry="7" transform="rotate(-30 60 105)" fill="#4A7C59" opacity="0.85" />
      <line x1="60" y1="105" x2="46" y2="100" stroke="#2D5C3A" strokeWidth="1" />
    </svg>
  );
}

function Lily({ size = 90, rotate = 0 }: { size?: number; rotate?: number }) {
  return (
    <svg viewBox="0 0 120 150" width={size} height={size} style={{ transform: `rotate(${rotate}deg)`, overflow: 'visible' }}>
      {[0,60,120,180,240,300].map(a => (
        <path key={a} d="M60,60 C50,42 41,22 60,8 C79,22 70,42 60,60"
          transform={`rotate(${a} 60 60)`}
          fill="#E8845A" opacity="0.8" />
      ))}
      {[0,60,120,180,240,300].map(a => (
        <path key={a} d="M60,60 C52,48 46,30 60,20 C74,30 68,48 60,60"
          transform={`rotate(${a} 60 60)`}
          fill="#F09A74" opacity="0.4" />
      ))}
      {[0,72,144,216,288].map((a,i) => (
        <line key={i} x1="60" y1="60" x2="60" y2="44"
          transform={`rotate(${a} 60 60)`}
          stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" />
      ))}
      {[0,72,144,216,288].map((a,i) => (
        <circle key={i} cx="60" cy="44" r="2.5"
          transform={`rotate(${a} 60 60)`}
          fill="#C9A96E" />
      ))}
      <line x1="60" y1="64" x2="60" y2="142" stroke="#4A7C59" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="60" cy="108" rx="13" ry="6" transform="rotate(25 60 108)" fill="#4A7C59" opacity="0.8" />
    </svg>
  );
}

function Tulip({ size = 85, rotate = 0 }: { size?: number; rotate?: number }) {
  return (
    <svg viewBox="0 0 100 150" width={size} height={size} style={{ transform: `rotate(${rotate}deg)`, overflow: 'visible' }}>
      <path d="M50,78 C28,66 18,38 34,16 C43,4 50,32 50,78" fill="#A478C8" />
      <path d="M50,78 C72,66 82,38 66,16 C57,4 50,32 50,78" fill="#B48FD8" />
      <path d="M50,78 C38,58 36,30 50,10 C64,30 62,58 50,78" fill="#C4A0E8" />
      <path d="M50,78 C40,62 39,36 50,18 C61,36 60,62 50,78" fill="#D4B0F4" opacity="0.5" />
      <path d="M50,80 Q48,108 50,140" stroke="#4A7C59" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M50,108 Q33,96 28,82" stroke="#4A7C59" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <ellipse cx="38" cy="91" rx="10" ry="5" transform="rotate(-30 38 91)" fill="#4A7C59" opacity="0.75" />
    </svg>
  );
}

function Leaf({ size = 55, rotate = 0 }: { size?: number; rotate?: number }) {
  return (
    <svg viewBox="0 0 60 110" width={size} height={size} style={{ transform: `rotate(${rotate}deg)`, overflow: 'visible' }}>
      <path d="M30,8 C52,30 56,65 30,100 C4,65 8,30 30,8Z" fill="#4A7C59" />
      <path d="M30,8 C36,30 38,65 30,100" stroke="#2D5C3A" strokeWidth="1.5" fill="none" />
      {[25,40,55,70].map((y,i) => (
        <line key={i} x1="30" y1={y} x2={i%2===0 ? 44 : 16} y2={y+8}
          stroke="#2D5C3A" strokeWidth="0.8" opacity="0.7" />
      ))}
    </svg>
  );
}

function BabysBreath({ size = 70 }: { size?: number }) {
  const pts = [[40,12],[22,28],[58,28],[10,48],[35,48],[62,48],[50,64],[25,64],[40,78]];
  return (
    <svg viewBox="0 0 80 90" width={size} height={size} style={{ overflow: 'visible' }}>
      {pts.map(([cx,cy],i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="5.5" fill="white" opacity="0.75" />
          <circle cx={cx} cy={cy} r="2" fill="rgba(201,169,110,0.6)" />
        </g>
      ))}
      <line x1="40" y1="78" x2="40" y2="90" stroke="#4A7C59" strokeWidth="1.5" />
    </svg>
  );
}

function Ribbon({ size = 110 }: { size?: number }) {
  return (
    <svg viewBox="0 0 140 70" width={size} height={size} style={{ overflow: 'visible' }}>
      <path d="M70,35 C48,12 12,6 24,35 C12,64 48,58 70,35Z" fill="#C9A96E" opacity="0.88" />
      <path d="M70,35 C92,12 128,6 116,35 C128,64 92,58 70,35Z" fill="#C9A96E" opacity="0.88" />
      <path d="M70,35 C56,28 52,18 70,14 C88,18 84,28 70,35Z" fill="#D4B97E" opacity="0.6" />
      <path d="M70,35 C56,42 52,52 70,56 C88,52 84,42 70,35Z" fill="#D4B97E" opacity="0.6" />
      <circle cx="70" cy="35" r="10" fill="#B8637A" />
      <circle cx="70" cy="35" r="5" fill="#8B3A52" />
    </svg>
  );
}

/* ── Bouquet positions ── */
const FLOWERS = [
  { C: Rose,        props: { size:95, rotate:-12 }, x:115, y:45,  id:'r1' },
  { C: Rose,        props: { size:105,rotate:0   }, x:195, y:20,  id:'r2' },
  { C: Rose,        props: { size:95, rotate:14  }, x:278, y:48,  id:'r3' },
  { C: Lily,        props: { size:88, rotate:-22 }, x:72,  y:95,  id:'l1' },
  { C: Lily,        props: { size:88, rotate:22  }, x:318, y:98,  id:'l2' },
  { C: Tulip,       props: { size:82, rotate:-10 }, x:148, y:120, id:'t1' },
  { C: Tulip,       props: { size:88, rotate:2   }, x:220, y:90,  id:'t2' },
  { C: Tulip,       props: { size:82, rotate:12  }, x:288, y:122, id:'t3' },
  { C: BabysBreath, props: { size:60             }, x:100, y:160, id:'b1' },
  { C: BabysBreath, props: { size:55             }, x:192, y:175, id:'b2' },
  { C: BabysBreath, props: { size:58             }, x:295, y:158, id:'b3' },
  { C: Leaf,        props: { size:52, rotate:-50 }, x:100, y:230, id:'lf1' },
  { C: Leaf,        props: { size:58, rotate:-25 }, x:155, y:240, id:'lf2' },
  { C: Leaf,        props: { size:58, rotate:25  }, x:235, y:240, id:'lf3' },
  { C: Leaf,        props: { size:52, rotate:50  }, x:290, y:228, id:'lf4' },
  { C: Ribbon,      props: { size:120            }, x:130, y:310, id:'rib' },
];

const PHASES = [
  { ids: ['r1','r2','r3'], start: 0,    end: 0.18 },
  { ids: ['l1','l2'],       start: 0.18, end: 0.34 },
  { ids: ['t1','t2','t3'],  start: 0.34, end: 0.50 },
  { ids: ['b1','b2','b3','lf1','lf2','lf3','lf4'], start: 0.50, end: 0.68 },
  { ids: ['rib'],           start: 0.68, end: 0.82 },
];

export default function BouquetSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const flowerRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const textRef  = useRef<HTMLDivElement>(null);
  const sparkRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    // set all invisible
    FLOWERS.forEach(({ id }) => {
      const el = flowerRefs.current[id];
      if (el) gsap.set(el, { opacity: 0, scale: 0.2, y: 60 });
    });
    if (textRef.current) gsap.set(textRef.current, { opacity: 0, y: 30 });
    sparkRef.current.forEach(el => el && gsap.set(el, { opacity: 0 }));

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2,
        pin: true,
        anticipatePin: 1,
      },
    });

    PHASES.forEach(({ ids, start, end }) => {
      ids.forEach((id, i) => {
        const el = flowerRefs.current[id];
        if (!el) return;
        const offset = (i / ids.length) * (end - start) * 0.4;
        tl.to(el, { opacity: 1, scale: 1, y: 0, duration: end - start, ease: 'back.out(1.4)' }, start + offset);
      });
    });

    sparkRef.current.forEach((el, i) => {
      if (!el) return;
      const start = 0.75 + i * 0.02;
      tl.fromTo(el, { opacity: 0, y: 0 }, { opacity: 1, y: -60,  duration: 0.08, ease: 'power2.out' }, start);
      tl.to(el,                            { opacity: 0, y: -120, duration: 0.08, ease: 'power2.in'  }, start + 0.08);
    });

    tl.to(textRef.current, { opacity: 1, y: 0, duration: 0.1, ease: 'power2.out' }, 0.88);
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="bouquet" className="relative overflow-hidden" style={{ height: '450vh', background: '#1A0A2E' }}>
      {/* pinned inner */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background radial glow */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 45%, rgba(201,169,110,0.06) 0%, transparent 70%)' }} />

        {/* Section label */}
        <p className="absolute top-12 left-0 right-0 text-center" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: '0.68rem', letterSpacing: '0.4em', color: 'rgba(201,169,110,0.4)', textTransform: 'uppercase' }}>
          for you
        </p>

        {/* Bouquet canvas */}
        <div className="relative" style={{ width: 420, height: 440 }}>
          {FLOWERS.map(({ C, props, x, y, id }) => (
            <div
              key={id}
              ref={el => { flowerRefs.current[id] = el; }}
              className="absolute"
              style={{ left: x, top: y, transformOrigin: 'bottom center', willChange: 'transform, opacity' }}
            >
              <C {...(props as { size?: number; rotate?: number })} />
            </div>
          ))}

          {/* Sparkles */}
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              ref={el => { if (el) sparkRef.current[i] = el; }}
              className="absolute"
              style={{
                left: 140 + Math.random() * 140,
                top: 80 + Math.random() * 120,
                fontSize: '0.9rem',
                color: '#C9A96E',
                willChange: 'transform, opacity',
              }}
            >✦</div>
          ))}
        </div>

        {/* End text */}
        <div ref={textRef} className="mt-6 text-center" style={{ willChange: 'transform, opacity' }}>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#C9A96E' }}
            className="gold-glow">
            You made my life bloom.
          </p>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: '0.75rem', letterSpacing: '0.35em', color: 'rgba(240,230,214,0.4)', textTransform: 'uppercase', marginTop: '0.75rem' }}>
            Nepal × Sydney, always
          </p>
        </div>
      </div>
    </section>
  );
}
