# ICE Studio

Premium Persian-first creative studio landing page for AI-powered content production.

## Stack
- Next.js App Router + TypeScript
- Tailwind CSS v4
- Framer Motion for hero, cards, and scroll interactions
- Lenis for smooth scrolling
- Radix UI Accordion for accessible FAQ interactions
- Lucide React icon system
- React Hook Form + Zod validation
- Self-hosted Vazirmatn variable font via Fontsource

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Launch checklist
Replace the demo phone number, email, Instagram handle, customer wordmarks and indicative plan prices in `components/ice-experience.tsx`. The contact form currently opens a prefilled email draft; it does not submit to a server. The hero uses a remotely hosted Unsplash image with animated interactive ice fragments. For production, consider downloading and serving an optimized WebP/AVIF hero asset locally.
