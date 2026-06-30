---
name: Love Story Auth
description: JWT bearer auth pattern used in the love story API
---

## Pattern
- POST /api/auth/login accepts { password }, returns { token, message }
- GET /api/auth/verify with Bearer token, returns { valid, message }
- Token stored in localStorage('ls_token'), checked in App.tsx AuthGate on mount
- 30d JWT expiry (jsonwebtoken), signed with SESSION_SECRET

## Security rules
- SESSION_SECRET and SHARED_PASSWORD are required env vars; server throws at startup if missing (no insecure fallbacks)
- On verify failure: localStorage.removeItem('ls_token') then show login

**Why:** Insecure fallbacks like `?? "dev-secret-change-me"` allow trivial JWT forgery if env vars aren't set in prod.
