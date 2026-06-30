---
name: Lenis + GSAP sync pattern
description: How to sync Lenis smooth scroll with GSAP ScrollTrigger without hooks-count violations
---

## Pattern
Create a null-rendering `<LenisSync />` component that uses plain `useEffect` (not `useGSAP`) to attach Lenis to the GSAP ticker:

```tsx
function LenisSync() {
  const lenis = useLenis();
  useEffect(() => {
    if (!lenis) return;
    lenis.on('scroll', ScrollTrigger.update);
    const tick = (time: number) => { lenis.raf(time * 1000); };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      lenis.off('scroll', ScrollTrigger.update);
      gsap.ticker.remove(tick);
    };
  }, [lenis]);
  return null;
}
```

Place `<LenisSync />` inside the `<ReactLenis root>` wrapper.

**Why:** Using `useGSAP` with a `[lenis]` dependency array caused a React hooks-count violation (different number of internal hooks between renders). A plain `useEffect` avoids this.

## Lenis tuning for smoothness
```
lerp: 0.07, duration: 1.4, smoothWheel: true, wheelMultiplier: 0.85, touchMultiplier: 1.5
```
