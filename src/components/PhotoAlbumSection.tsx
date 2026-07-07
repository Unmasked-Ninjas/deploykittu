import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Explicit imports for your photos (remove spaces in filenames later if you prefer)
import pic1 from "../assets/photos/pic 1.jpeg";
import pic2 from "../assets/photos/pic 2 beach.jpeg";
import pic3 from "../assets/photos/pic 3 ktm.jpeg";
import pic4 from "../assets/photos/pic 4 gemini.jpeg";
import pic5 from "../assets/photos/pic 5 ananda.jpeg";
import pic7 from "../assets/photos/pic 7 surusuru.jpeg";
import pic8 from "../assets/photos/pic 8 mukh kuchheko.jpeg";

// Four pages (8 photos). Images will be taken from `src/assets/photos` in sorted order.
const pages = [
  {
    id: 1,
    leftTitle: "The day we met",
    leftDate: "November 2023",
    leftPhoto: imagesList[0] ?? "photo1.jpg",
    rightTitle: "First conversation",
    rightDate: "December 2023",
    rightPhoto: imagesList[1] ?? "photo2.jpg",
  },
  {
    id: 2,
    leftTitle: "Laughing for hours",
    leftDate: "January 2024",
    leftPhoto: imagesList[2] ?? "photo3.jpg",
    rightTitle: "Falling for you",
    rightDate: "February 2024",
    rightPhoto: imagesList[3] ?? "photo4.jpg",
  },
  {
    id: 3,
    leftTitle: "Sunsets & Calls",
    leftDate: "March 2024",
    leftPhoto: imagesList[4] ?? "photo5.jpg",
    rightTitle: "First Trip",
    rightDate: "April 2024",
    rightPhoto: imagesList[5] ?? "photo6.jpg",
  },
  {
    id: 4,
    leftTitle: "Laughs & Tears",
    leftDate: "May 2024",
    leftPhoto: imagesList[6] ?? "photo7.jpg",
    rightTitle: "Always",
    rightDate: "June 2024",
    rightPhoto: imagesList[7] ?? "photo8.jpg",
  },
  }
];
// Map imports to pages (we only have seven files; missing slot will reuse pic8)
const pages = [
  {
    id: 1,
    leftTitle: "The day we met",
    leftDate: "November 2023",
    leftPhoto: pic1,
    rightTitle: "First conversation",
    rightDate: "December 2023",
    rightPhoto: pic2,
  },
  {
    id: 2,
    leftTitle: "Laughing for hours",
    leftDate: "January 2024",
    leftPhoto: pic3,
    rightTitle: "Falling for you",
    rightDate: "February 2024",
    rightPhoto: pic4,
  },
  {
    id: 3,
    leftTitle: "Sunsets & Calls",
    leftDate: "March 2024",
    leftPhoto: pic5,
    rightTitle: "First Trip",
    rightDate: "April 2024",
    rightPhoto: pic7,
  },
  {
    id: 4,
    leftTitle: "Laughs & Tears",
    leftDate: "May 2024",
    leftPhoto: pic8,
    rightTitle: "Always",
    rightDate: "June 2024",
    rightPhoto: pic8,
  }
];
];

export default function PhotoAlbumSection() {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () =>
    setCurrentPage((p) => Math.min(pages.length - 1, p + 1));
  const prevPage = () => setCurrentPage((p) => Math.max(0, p - 1));

  return (
    <section className="py-32 w-full bg-[#1A0A2E] relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(#C9A96E 2px, transparent 2px)",
          backgroundSize: "30px 30px",
        }}
      />

      <h2 className="font-['Pinyon_Script'] text-5xl md:text-6xl text-[#C9A96E] mb-16 drop-shadow-sm z-10">
        Our Story
      </h2>

      <div className="relative w-full max-w-4xl h-[400px] md:h-[500px] perspective-[2000px] z-10 px-4">
        {/* Book Base (Cover back) */}
        <div className="absolute inset-0 flex px-4">
          <div className="w-1/2 bg-[#0A0816] rounded-l-md border-y-4 border-l-4 border-[#C9A96E]/40 shadow-2xl relative">
            <div className="absolute inset-2 border border-[#C9A96E]/20 rounded-l-sm" />
          </div>
          <div className="w-1/2 bg-[#0A0816] rounded-r-md border-y-4 border-r-4 border-[#C9A96E]/40 shadow-2xl relative">
            <div className="absolute inset-2 border border-[#C9A96E]/20 rounded-r-sm" />
          </div>
          {/* Spine binding */}
          <div className="absolute top-0 bottom-0 left-1/2 w-10 bg-gradient-to-r from-[#0A0816] via-[#1A0A2E] to-[#0A0816] border-x border-[#C9A96E]/20 -ml-5 shadow-inner" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1] }}
            className="absolute inset-4 md:inset-6 flex bg-[#1A0A2E] shadow-[inset_0_0_40px_rgba(0,0,0,0.8)] overflow-hidden origin-center"
          >
            {/* Left Page */}
            <div className="w-1/2 h-full border-r border-[#C9A96E]/10 p-6 md:p-10 relative bg-gradient-to-r from-black/20 to-transparent">
              {/* Photo Area placeholder */}
              <div className="w-full h-40 md:h-56 bg-[#0A0816] border border-[#C9A96E]/30 rounded-sm shadow-inner flex items-center justify-center mb-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#B8637A]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                  src={`/images/${pages[currentPage].leftPhoto}`}
                  alt={pages[currentPage].leftTitle}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Sticky Note */}
              <div className="bg-[#C9A96E]/10 border border-[#C9A96E]/20 p-4 -rotate-2 shadow-md w-[80%] mx-auto relative backdrop-blur-sm">
                <div className="absolute -top-2 left-1/2 w-8 h-2 bg-[#C9A96E]/30 -ml-4 rotate-[2deg]"></div>
                <p className="font-['Cormorant_Garamond'] italic text-xl md:text-2xl text-[#F0E6D6] text-center mb-1">
                  {pages[currentPage].leftTitle}
                </p>
                <p className="font-sans text-[10px] text-[#C9A96E] text-center tracking-widest uppercase">
                  {pages[currentPage].leftDate}
                </p>
              </div>
            </div>

            {/* Right Page */}
            <div className="w-1/2 h-full p-6 md:p-10 relative bg-gradient-to-l from-black/20 to-transparent">
              {/* Photo Area placeholder */}
              <div className="w-full h-40 md:h-56 bg-[#0A0816] border border-[#C9A96E]/30 rounded-sm shadow-inner flex items-center justify-center mb-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#B8637A]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                  src={`/images/${pages[currentPage].rightPhoto}`}
                  alt={pages[currentPage].rightTitle}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Sticky Note */}
              <div className="bg-[#C9A96E]/10 border border-[#C9A96E]/20 p-4 rotate-2 shadow-md w-[80%] mx-auto relative backdrop-blur-sm">
                <div className="absolute -top-2 left-1/2 w-8 h-2 bg-[#C9A96E]/30 -ml-4 -rotate-[2deg]"></div>
                <p className="font-['Cormorant_Garamond'] italic text-xl md:text-2xl text-[#F0E6D6] text-center mb-1">
                  {pages[currentPage].rightTitle}
                </p>
                <p className="font-sans text-[10px] text-[#C9A96E] text-center tracking-widest uppercase">
                  {pages[currentPage].rightDate}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex gap-6 mt-16 z-10">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          aria-label="Previous page"
          className="p-4 bg-[#0A0816]/80 text-[#C9A96E] rounded-full shadow-lg border border-[#C9A96E]/30 hover:bg-[#1A0A2E] hover:border-[#C9A96E] disabled:opacity-30 disabled:pointer-events-none transition-all duration-300 backdrop-blur-md"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === pages.length - 1}
          aria-label="Next page"
          className="p-4 bg-[#0A0816]/80 text-[#C9A96E] rounded-full shadow-lg border border-[#C9A96E]/30 hover:bg-[#1A0A2E] hover:border-[#C9A96E] disabled:opacity-30 disabled:pointer-events-none transition-all duration-300 backdrop-blur-md"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </section>
  );
}
