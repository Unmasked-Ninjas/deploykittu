import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';
import BouquetSection from '@/components/BouquetSection';
import MemoriesSection from '@/components/MemoriesSection';
import PhotoAlbumSection from '@/components/PhotoAlbumSection';
import MessageWallSection from '@/components/MessageWallSection';
import PigeonJourneySection from '@/components/PigeonJourneySection';
import BouquetMakerSection from '@/components/BouquetMakerSection';
import ForeverSection from '@/components/ForeverSection';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="w-full bg-background relative selection:bg-[#FFD6E7] selection:text-[#5C3D5E]">
      <AnimatePresence>
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>
      <div className={loading ? 'h-screen overflow-hidden' : ''}>
          <BouquetSection />
          <MemoriesSection />
          <PhotoAlbumSection />
          <MessageWallSection />
          <PigeonJourneySection />
          <BouquetMakerSection />
          <ForeverSection />
      </div>
    </main>
  );
}
