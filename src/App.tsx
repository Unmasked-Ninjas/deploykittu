import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { ReactLenis, useLenis } from 'lenis/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useState } from 'react';
import Home from '@/pages/Home';
import LoginPage from '@/pages/LoginPage';
import NotFound from '@/pages/not-found';

gsap.registerPlugin(ScrollTrigger);
const queryClient = new QueryClient();

function LenisSync() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    lenis.on('scroll', ScrollTrigger.update);
    const tickerCallback = (time: number) => { lenis.raf(time * 1000); };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);
    return () => {
      lenis.off('scroll', ScrollTrigger.update);
      gsap.ticker.remove(tickerCallback);
    };
  }, [lenis]);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function MainApp() {
  return (
    <ReactLenis root options={{ lerp: 0.07, duration: 1.4, smoothWheel: true, wheelMultiplier: 0.85, touchMultiplier: 1.5 }}>
      <LenisSync />
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Router />
      </WouterRouter>
    </ReactLenis>
  );
}

function SplashChecker() {
  return <div className="min-h-screen bg-[#0A0816]" />;
}

function App() {
  const [authed, setAuthed] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('ls_token');
    if (!token) { 
      setAuthed(false); 
      return; 
    }
    
    // Quick verify call
    fetch('/api/auth/verify', { headers: { Authorization: 'Bearer ' + token } })
      .then(r => {
        if (r.ok) {
          setAuthed(true);
        } else {
          localStorage.removeItem('ls_token');
          setAuthed(false);
        }
      })
      .catch(() => setAuthed(false));
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {authed === null ? (
          <SplashChecker />
        ) : !authed ? (
          <LoginPage onLogin={() => setAuthed(true)} />
        ) : (
          <MainApp />
        )}
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;