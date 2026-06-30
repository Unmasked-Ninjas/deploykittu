import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { ReactLenis, useLenis } from 'lenis/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import Home from '@/pages/Home';
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

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ReactLenis root>
          <LenisSync />
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
            <Router />
          </WouterRouter>
          <Toaster />
        </ReactLenis>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
