import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FloatingParticles from '@/components/FloatingParticles';

interface LoginPageProps {
  onLogin: () => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.token) {
          localStorage.setItem('ls_token', data.token);
          onLogin();
        } else {
          // Allow mock bypass if token logic isn't fully implemented on backend yet
          localStorage.setItem('ls_token', 'mock_token');
          onLogin();
        }
      } else {
        setError(true);
      }
    } catch (err) {
      // If backend completely unreachable, show error rather than bypass to force real auth flow behavior
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[100dvh] w-full bg-[#0A0816] flex items-center justify-center relative overflow-hidden">
      <FloatingParticles count={20} color="#C9A96E" size={4} speed="slow" />
      
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md p-8 md:p-12 bg-[#1A0A2E]/80 backdrop-blur-xl border border-[#C9A96E]/20 rounded-2xl shadow-[0_0_40px_rgba(201,169,110,0.05)] relative z-10 mx-4 flex flex-col items-center animate-[shimmer_8s_infinite]"
        style={{ animationName: 'none' /* Will use CSS scale breathing via inline styles or tailwind */ }}
      >
        <div className="w-16 h-16 mb-8 text-[#C9A96E]">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <path d="M50 30 C50 30, 20 0, 20 30 C20 50, 50 80, 50 80 C50 80, 80 50, 80 30 C80 0, 50 30, 50 30 Z" />
          </svg>
        </div>
        
        <h1 className="font-['Cormorant_Garamond'] italic text-4xl md:text-[3.5rem] text-[#C9A96E] tracking-wide mb-2 text-center leading-tight">
          Our Little Universe
        </h1>
        <p className="font-sans font-light text-[#F0E6D6]/60 text-sm tracking-wider mb-10 text-center">
          A love story, password-protected
        </p>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter our secret..."
              className="w-full bg-[#0A0816] border border-[#C9A96E]/30 rounded-lg px-6 py-4 text-[#F0E6D6] font-sans placeholder:text-[#F0E6D6]/30 focus:outline-none focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E]/50 transition-all duration-300"
            />
          </div>

          {error && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#B8637A] text-sm text-center font-sans"
            >
              Not quite right, love. Try again.
            </motion.p>
          )}

          <button
            type="submit"
            disabled={isLoading || !password}
            className="w-full bg-[#C9A96E] text-[#0A0816] font-sans font-medium rounded-lg px-6 py-4 mt-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(201,169,110,0.3)] disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-none"
          >
            {isLoading ? 'Opening...' : 'Open Our World'}
          </button>
        </form>
      </motion.div>
    </div>
  );
}