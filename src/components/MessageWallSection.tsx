import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Message {
  id: number;
  text: string;
  color: string;
  rotation: number;
  x: number;
  y: number;
}

const initialMessages: Message[] = [
  { id: 1, text: 'I miss your voice every single day', color: 'bg-[#1A0A2E]', rotation: -5, x: 10, y: 10 },
  { id: 2, text: 'Distance is just a number, you are always in my heart', color: 'bg-[#2D0A2E]', rotation: 4, x: 40, y: 30 },
  { id: 3, text: 'One day, no more miles between us', color: 'bg-[#0A1E2E]', rotation: -3, x: 20, y: 60 },
  { id: 4, text: 'Counting down the days', color: 'bg-[#1A0A2E]', rotation: 6, x: 60, y: 15 },
];

const colors = ['bg-[#1A0A2E]', 'bg-[#2D0A2E]', 'bg-[#0A1E2E]'];

export default function MessageWallSection() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    const newMsg: Message = {
      id: Date.now(),
      text: newMessage,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 20 - 10,
      x: Math.random() * 60 + 10,
      y: Math.random() * 60 + 10,
    };
    
    setMessages([...messages, newMsg]);
    setNewMessage('');
  };

  return (
    <section className="py-20 w-full min-h-screen bg-[#0A0816] relative flex flex-col md:flex-row overflow-hidden items-center">
      {/* Animated Gold Dust */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#C9A96E] rounded-full blur-[1px] opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `drift ${5 + Math.random() * 10}s infinite alternate`
            }}
          />
        ))}
      </div>

      {/* Floating Envelopes */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
         <svg className="absolute top-20 left-10 w-16 h-12 text-[#C9A96E] rotate-12 animate-[drift_8s_infinite]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
         </svg>
         <svg className="absolute top-1/2 right-20 w-16 h-12 text-[#C9A96E] -rotate-12 animate-[drift_10s_infinite_reverse]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
         </svg>
      </div>

      <div className="w-full md:w-1/3 p-8 flex flex-col items-center justify-center z-10">
        <h2 className="font-['Cormorant_Garamond'] italic text-5xl text-[#B8637A] mb-12 drop-shadow-[0_0_15px_rgba(184,99,122,0.3)] text-center">
          I Miss You
        </h2>

        {/* Mailbox Redesign */}
        <div className="w-32 h-40 relative mb-12 group">
          <div className="absolute bottom-0 w-full h-24 bg-[#1A0A2E] rounded-b-xl shadow-lg border-2 border-[#C9A96E]/50"></div>
          <div className="absolute top-0 w-full h-20 bg-[#1A0A2E] rounded-t-full shadow-md border-2 border-[#C9A96E]/50 border-b-0"></div>
          {/* Glowing Slot */}
          <div className="absolute top-1/2 left-1/2 -ml-8 -mt-2 w-16 h-2 bg-[#0A0816] rounded-full shadow-[0_0_10px_rgba(201,169,110,0.5)] border border-[#C9A96E]/20"></div>
          {/* Flag */}
          <div className="absolute top-10 -right-2 w-2 h-16 bg-[#C9A96E] origin-bottom rotate-12 rounded-full transition-transform group-hover:-rotate-12"></div>
        </div>

        <form onSubmit={handleSend} className="w-full max-w-sm bg-[#1A0A2E]/80 p-6 rounded-2xl border border-[#C9A96E]/30 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <label htmlFor="love-note" className="sr-only">Write a love note</label>
          <textarea 
            id="love-note"
            className="w-full h-32 p-4 bg-[#0A0816] text-[#F0E6D6] leading-[24px] focus:outline-none resize-none font-['Pinyon_Script'] text-2xl rounded-xl border border-[#C9A96E]/20 focus:border-[#C9A96E]/80 focus:ring-1 focus:ring-[#C9A96E]/50 transition-all placeholder:text-[#F0E6D6]/30"
            placeholder="Write to me..."
            value={newMessage}
            onChange={e => setNewMessage(e.target.value)}
          />
          <button type="submit" className="mt-6 w-full py-4 bg-[#C9A96E] text-[#0A0816] rounded-full font-sans font-medium hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(201,169,110,0.3)] transition-all active:scale-95 text-sm uppercase tracking-widest">
            Send Letter
          </button>
        </form>
      </div>

      <div className="w-full md:w-2/3 p-8 relative min-h-[600px] mt-12 md:mt-0">
        {messages.map((msg, i) => (
          <motion.div
            key={msg.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.4, delay: i < initialMessages.length ? i * 0.2 : 0 }}
            className={`absolute p-6 ${msg.color} border border-[#C9A96E]/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)] w-56 h-56 flex items-center justify-center hover:z-50 hover:scale-110 transition-transform cursor-pointer backdrop-blur-md`}
            style={{
              left: `${msg.x}%`,
              top: `${msg.y}%`,
              rotate: `${msg.rotation}deg`
            }}
          >
            {/* Pin */}
            <div className="absolute top-3 left-1/2 -ml-1.5 w-3 h-3 rounded-full bg-[#C9A96E] shadow-[0_0_5px_rgba(201,169,110,0.8)]" />
            <p className="font-['Pinyon_Script'] text-3xl text-center text-[#F0E6D6] leading-relaxed">{msg.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}