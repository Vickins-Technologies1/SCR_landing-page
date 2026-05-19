# Sorana Property Managers Website (Next.js App Router)

Ultra‑premium, mobile‑first marketing site for Sorana Property Managers Limited.

## Tech Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (subtle premium animations)
- Embla Carousel (testimonials)
- React Hook Form + Zod (contact form validation)

## Brand Colors

This project preserves Sorana’s existing palette via CSS variables in `src/app/globals.css`.

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables (Optional)

- `NEXT_PUBLIC_ANDROID_APK_URL` — override APK download URL (defaults to `https://www.soranapropertymanagers.com/downloads/sorana.apk`)
- `NEXT_PUBLIC_ANDROID_APK_SHA256` — override APK SHA256 shown on `/download-app`

## Build

```bash
npm run build
npm run start
```

## Site Configuration

Central config (URLs, contacts, social links, portal + Marketplace destinations) lives in `src/lib/site.ts`.

## Notes

- The navigation “Market Place” link intentionally points to Sorana’s external Marketplace URL (no internal Marketplace page).
- SEO: per‑page metadata, Open Graph/Twitter images, `robots.txt`, `sitemap.xml`, plus JSON‑LD LocalBusiness schema in `src/app/layout.tsx`.
