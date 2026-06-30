import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
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
  { id: 'bouquet', label: 'Bloom' },
  { id: 'memories', label: 'Memories' },
  { id: 'map', label: 'Distance' },
  { id: 'album', label: 'Story' },
  { id: 'countdown', label: 'Time' },
  { id: 'messages', label: 'Letters' },
  { id: 'journey', label: 'Journey' },
  { id: 'maker', label: 'Bouquet' },
  { id: 'forever', label: 'Forever' }
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('bouquet');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return;
    
    const observers = new Map();
    const callbacks = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    
    const observer = new IntersectionObserver(callbacks, {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    });

    SECTIONS.forEach(section => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [loading]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="w-full bg-[#0A0816] relative selection:bg-[#B8637A]/30 selection:text-[#F0E6D6]">
      <AnimatePresence>
        {loading && <LoadingScreen key="loading" onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      {!loading && (
        <>
          {/* Side Navigation */}
          <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className="group relative flex items-center"
                aria-label={`Scroll to ${section.label}`}
              >
                <div 
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeSection === section.id ? 'bg-[#C9A96E] scale-150 shadow-[0_0_8px_rgba(201,169,110,0.8)]' : 'bg-[#F0E6D6]/20 hover:bg-[#C9A96E]/50'
                  }`} 
                />
                <span className="absolute left-6 font-sans font-light text-xs text-[#F0E6D6]/80 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {section.label}
                </span>
              </button>
            ))}
          </nav>

          <div className="w-full">
            <div id="bouquet"><BouquetSection /></div>
            <div id="memories"><MemoriesSection /></div>
            <div id="map"><MapSection /></div>
            <div id="album"><PhotoAlbumSection /></div>
            <div id="countdown"><CountdownSection /></div>
            <div id="messages"><MessageWallSection /></div>
            <div id="journey"><PigeonJourneySection /></div>
            <div id="maker"><BouquetMakerSection /></div>
            <div id="forever"><ForeverSection /></div>
          </div>
        </>
      )}
    </main>
  );
}