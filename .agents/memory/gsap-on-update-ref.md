---
name: GSAP onUpdate stale closure fix
description: How to safely update React state from GSAP ScrollTrigger onUpdate
---

## Problem
Closing over React state inside useGSAP's ScrollTrigger onUpdate creates a stale closure — the state value is frozen at the time the trigger was created, so conditionals comparing state to the current value always see the initial value.

## Fix
Track the "previous value" in a ref, not in state:

```ts
const myRef = useRef(false);
// inside useGSAP:
onUpdate: (self) => {
  const shouldBeOpen = self.progress > 0.88;
  if (shouldBeOpen !== myRef.current) {
    myRef.current = shouldBeOpen;
    setMyState(shouldBeOpen); // only called when value actually changes
  }
}
```

**Why:** Refs are mutable and always current inside closures. State reads inside GSAP callbacks are captured at creation time.

## Also avoid
- `ScrollTrigger.getAll().forEach(t => t.kill())` in cleanup — kills unrelated triggers from other components. Let useGSAP's scope handle cleanup instead.
