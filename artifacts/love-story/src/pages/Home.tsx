import { useState, useEffect, useRef } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import BouquetSection from '@/components/BouquetSection';
import MemoriesSection from '@/components/MemoriesSection';
import MapSection from '@/components/MapSection';
import PhotoAlbumSection from '@/components/PhotoAlbumSection';
import CountdownSection from '@/components/CountdownSection';
import MessageWallSection from '@/components/MessageWallSection';
import PigeonJourneySection from '@/components/PigeonJourneySection';
import BouquetMakerSection from '@/components/BouquetMakerSection';
import ForeverSection from '@/components/ForeverSection';

const SECTIONS = [
  { id: 'bouquet',   label: 'A Bouquet' },
  { id: 'memories',  label: 'Memories' },
  { id: 'map',       label: 'Our Distance' },
  { id: 'album',     label: 'Our Story' },
  { id: 'countdown', label: 'Countdown' },
  { id: 'messages',  label: 'Miss You' },
  { id: 'journey',   label: 'The Journey' },
  { id: 'maker',     label: 'Bouquet Maker' },
  { id: 'forever',   label: 'Forever' },
];

function SideNav({ active }: { active: string }) {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <nav className="fixed left-5 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
      {SECTIONS.map(s => (
        <button
          key={s.id}
          onClick={() => scrollTo(s.id)}
          className="group flex items-center gap-3"
          aria-label={`Go to ${s.label}`}
        >
          <div
            className="w-1.5 h-1.5 rounded-full transition-all duration-300"
            style={{
              background: active === s.id ? '#C9A96E' : 'rgba(240,230,214,0.2)',
              boxShadow: active === s.id ? '0 0 8px rgba(201,169,110,0.6)' : 'none',
              transform: active === s.id ? 'scale(1.4)' : 'scale(1)',
            }}
          />
          <span
            className="opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 300,
              fontSize: '0.62rem',
              letterSpacing: '0.15em',
              color: 'rgba(201,169,110,0.8)',
              textTransform: 'uppercase',
            }}
          >
            {s.label}
          </span>
        </button>
      ))}
    </nav>
  );
}

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('bouquet');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!loaded) return;
    observerRef.current = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, [loaded]);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      {loaded && (
        <>
          <SideNav active={activeSection} />
          <main style={{ background: '#0A0816' }}>
            <BouquetSection />
            <MemoriesSection />
            <MapSection />
            <PhotoAlbumSection />
            <CountdownSection />
            <MessageWallSection />
            <PigeonJourneySection />
            <BouquetMakerSection />
            <ForeverSection />
          </main>
        </>
      )}
    </>
  );
}
