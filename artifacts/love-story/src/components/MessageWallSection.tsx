import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FloatingParticles from './FloatingParticles';

interface Message {
  id: number;
  text: string;
  color: string;
  rotation: number;
  x: number;
  y: number;
}

const initialMessages: Message[] = [
  { id: 1, text: 'I miss your voice every single day', color: 'bg-[#FFF9C4]', rotation: -5, x: 10, y: 10 },
  { id: 2, text: 'Distance is just a number, you are always in my heart', color: 'bg-[#DDF3FF]', rotation: 4, x: 40, y: 30 },
  { id: 3, text: 'One day, no more miles between us', color: 'bg-[#FFD6E7]', rotation: -3, x: 20, y: 60 },
  { id: 4, text: 'Counting down the days', color: 'bg-[#E8D8FF]', rotation: 6, x: 60, y: 15 },
];

const colors = ['bg-[#FFF9C4]', 'bg-[#DDF3FF]', 'bg-[#FFD6E7]', 'bg-[#E8D8FF]', 'bg-[#FFE7DA]'];

export default function MessageWallSection() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [particlesKey, setParticlesKey] = useState(0);

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
    setParticlesKey(prev => prev + 1);
  };

  return (
    <section className="py-20 w-full min-h-screen bg-gradient-to-br from-[#E8D8FF] to-[#FFD6E7] relative flex flex-col md:flex-row overflow-hidden items-center">
      <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay">
         <div className="absolute top-20 left-10 w-16 h-12 bg-white rotate-12 shadow-sm flex items-center justify-center animate-[drift_8s_infinite]"><div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-200"></div></div>
         <div className="absolute top-1/2 right-20 w-16 h-12 bg-white -rotate-12 shadow-sm flex items-center justify-center animate-[drift_10s_infinite_reverse]"><div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-200"></div></div>
         <div className="absolute bottom-20 left-1/4 w-12 h-8 bg-white rotate-45 shadow-sm flex items-center justify-center animate-[drift_12s_infinite]"><div className="w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-gray-200"></div></div>
      </div>

      <div className="w-full md:w-1/3 p-8 flex flex-col items-center justify-center z-10">
        <div className="w-32 h-40 relative mb-8 hover:scale-105 transition-transform cursor-pointer">
          <div className="absolute bottom-0 w-full h-24 bg-[#FF9BB3] rounded-b-xl shadow-lg border-2 border-white"></div>
          <div className="absolute top-0 w-full h-20 bg-[#FF9BB3] rounded-t-full shadow-md border-2 border-white border-b-0"></div>
          <div className="absolute top-1/2 left-1/2 -ml-8 -mt-2 w-16 h-2 bg-gray-800 rounded-full shadow-inner"></div>
          <div className="absolute top-10 -right-2 w-2 h-16 bg-red-400 origin-bottom rotate-12 rounded-full"></div>
        </div>

        <form onSubmit={handleSend} className="w-full max-w-sm bg-white p-6 rounded-3xl shadow-xl border-4 border-white/50 backdrop-blur-sm">
          <h3 className="font-['Pacifico'] text-3xl text-[#5C3D5E] mb-4 text-center">Write a note...</h3>
          <label htmlFor="love-note" className="sr-only">Write a love note</label>
          <textarea 
            id="love-note"
            className="w-full h-32 p-4 bg-[repeating-linear-gradient(transparent,transparent_23px,#FFD6E7_24px)] leading-[24px] focus:outline-none resize-none font-['Dancing_Script'] text-2xl text-[#5C3D5E] rounded-xl"
            placeholder="I love you..."
            value={newMessage}
            onChange={e => setNewMessage(e.target.value)}
          />
          <button type="submit" className="mt-6 w-full py-4 bg-[#FF9BB3] text-white rounded-full font-bold hover:bg-[#FF5E85] transition-colors shadow-lg hover:shadow-xl active:scale-95 text-lg">
            Send with Love 💌
          </button>
        </form>
      </div>

      <div className="w-full md:w-2/3 p-8 relative min-h-[600px] mt-12 md:mt-0">
        {messages.map((msg, i) => (
          <motion.div
            key={msg.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5, delay: i < initialMessages.length ? i * 0.2 : 0 }}
            className={`absolute p-6 ${msg.color} shadow-lg w-56 h-56 flex items-center justify-center hover:z-50 hover:scale-110 transition-transform cursor-pointer`}
            style={{
              left: `${msg.x}%`,
              top: `${msg.y}%`,
              rotate: `${msg.rotation}deg`,
              boxShadow: '3px 5px 20px rgba(0,0,0,0.1)'
            }}
          >
            <div className="absolute top-3 left-1/2 -ml-1.5 w-3 h-3 rounded-full bg-red-400 shadow-sm border border-red-500" />
            <p className="font-['Dancing_Script'] text-2xl text-center text-[#5C3D5E] leading-relaxed">{msg.text}</p>
          </motion.div>
        ))}
      </div>

      <FloatingParticles key={particlesKey} count={particlesKey > 0 ? 8 : 0} type="heart" color="#FF9BB3" size={24} />
    </section>
  );
}
