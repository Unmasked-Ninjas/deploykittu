import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FloatingParticles from '@/components/FloatingParticles';

interface Props { onLogin: () => void; }

export default function LoginPage({ onLogin }: Props) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!password.trim()) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('ls_token', data.token);
        onLogin();
      } else {
        setError('Not quite right, love. Try again.');
        setPassword('');
        inputRef.current?.focus();
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 overflow-hidden flex items-center justify-center" style={{ background: '#0A0816' }}>
      {/* Star field */}
      {Array.from({ length: 60 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 2 + 1 + 'px',
            height: Math.random() * 2 + 1 + 'px',
            background: '#C9A96E',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            opacity: Math.random() * 0.6 + 0.1,
            animation: `twinkle ${2 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: Math.random() * 4 + 's',
          }}
        />
      ))}

      <FloatingParticles count={18} color="#C9A96E" size={3} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-md mx-4"
      >
        {/* Rings icon */}
        <div className="flex justify-center mb-8">
          <svg width="80" height="48" viewBox="0 0 80 48" fill="none">
            <circle cx="28" cy="24" r="16" stroke="#C9A96E" strokeWidth="1.5" fill="none" opacity="0.8" />
            <circle cx="52" cy="24" r="16" stroke="#C9A96E" strokeWidth="1.5" fill="none" opacity="0.8" />
            <circle cx="28" cy="24" r="16" stroke="#C9A96E" strokeWidth="0.5" fill="none" opacity="0.3"
              style={{ filter: 'blur(2px)' }} />
            <circle cx="52" cy="24" r="16" stroke="#C9A96E" strokeWidth="0.5" fill="none" opacity="0.3"
              style={{ filter: 'blur(2px)' }} />
          </svg>
        </div>

        {/* Card */}
        <div className="glass-dark rounded-2xl p-10" style={{ animation: 'breathe 6s ease-in-out infinite' }}>
          <h1
            className="text-center mb-2 italic"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '3rem', color: '#C9A96E', letterSpacing: '0.04em', lineHeight: 1.1 }}
          >
            Our Little Universe
          </h1>
          <p
            className="text-center mb-10"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: '0.8rem', color: 'rgba(240,230,214,0.5)', letterSpacing: '0.2em', textTransform: 'uppercase' }}
          >
            A love story, password-protected
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                ref={inputRef}
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter our secret..."
                className="w-full px-5 py-4 rounded-xl outline-none transition-all duration-300"
                style={{
                  background: 'rgba(10,8,22,0.8)',
                  border: '1px solid rgba(201,169,110,0.25)',
                  color: '#F0E6D6',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 300,
                  fontSize: '0.95rem',
                  letterSpacing: '0.05em',
                }}
                onFocus={e => { e.target.style.borderColor = 'rgba(201,169,110,0.7)'; e.target.style.boxShadow = '0 0 0 3px rgba(201,169,110,0.08)'; }}
                onBlur={e => { e.target.style.borderColor = 'rgba(201,169,110,0.25)'; e.target.style.boxShadow = 'none'; }}
              />
            </div>

            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-center text-sm"
                  style={{ color: '#E88A9A', fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl font-medium transition-all duration-300 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #C9A96E 0%, #D4B97E 50%, #B8956A 100%)',
                color: '#0A0816',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
                fontSize: '0.9rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
              onMouseEnter={e => { (e.target as HTMLElement).style.transform = 'scale(1.02)'; (e.target as HTMLElement).style.boxShadow = '0 0 30px rgba(201,169,110,0.4)'; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.transform = 'scale(1)'; (e.target as HTMLElement).style.boxShadow = 'none'; }}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 rounded-full border-2 border-t-transparent animate-spin" style={{ borderColor: '#0A0816', borderTopColor: 'transparent' }} />
                  Opening...
                </span>
              ) : 'Open Our World'}
            </button>
          </form>

          <p
            className="text-center mt-8"
            style={{ fontFamily: "'Pinyon Script', cursive", fontSize: '1.4rem', color: 'rgba(201,169,110,0.4)' }}
          >
            Nepal · Sydney
          </p>
        </div>
      </motion.div>
    </div>
  );
}
