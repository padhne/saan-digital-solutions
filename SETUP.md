# DigiNep Next.js — Setup Guide

## Quick Start

```bash
cd diginep-next
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
diginep-next/
├── app/                        # Next.js App Router pages
│   ├── page.tsx                # Home page
│   ├── about/page.tsx          # About Us
│   ├── services/page.tsx       # All Services
│   ├── case-studies/           # Case Studies
│   │   ├── page.tsx            # Listing page
│   │   └── [slug]/page.tsx     # Individual case study
│   ├── blog/                   # Blog
│   │   ├── page.tsx            # Blog listing
│   │   └── [slug]/page.tsx     # Blog post
│   ├── pricing/page.tsx        # Pricing plans
│   ├── careers/page.tsx        # Job listings
│   ├── contact/page.tsx        # Contact form
│   ├── admin/page.tsx          # Admin dashboard (password: diginep2025)
│   └── api/
│       ├── contact/route.ts    # Contact form API
│       └── chat/route.ts       # AI chatbot API
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Global navigation
│   │   └── Footer.tsx          # Global footer
│   ├── Chatbot.tsx             # AI chatbot widget
│   ├── CrispChat.tsx           # Crisp live chat embed
│   ├── Cursor.tsx              # Custom cursor
│   ├── HeroCanvas.tsx          # Three.js hero animation
│   ├── RevealSection.tsx       # Scroll reveal component
│   └── WhatsAppFloat.tsx       # WhatsApp float button
├── lib/
│   └── data.ts                 # All site data (services, blog posts, etc.)
└── .env.local                  # Environment variables (configure this)
```

---

## Configuration

### 1. Update Contact Information
Edit `lib/data.ts` and replace all placeholder values.
Also update WhatsApp number in `components/WhatsAppFloat.tsx` and `app/contact/page.tsx`.

### 2. Enable AI Chatbot
Add your OpenAI API key to `.env.local`:
```
OPENAI_API_KEY=sk-...
```
Without the key, the chatbot uses built-in rule-based responses (still works).

### 3. Enable Crisp Live Chat
1. Sign up at [crisp.chat](https://crisp.chat) (free plan available)
2. Get your Website ID
3. Add to `components/CrispChat.tsx`:
```typescript
const CRISP_WEBSITE_ID = "your-actual-id-here";
```

### 4. Enable Contact Form Email
Install Resend: `npm install resend`
Add your key to `.env.local` and uncomment the Resend code in `app/api/contact/route.ts`.

### 5. Admin Dashboard
- URL: `/admin`
- Default password: `diginep2025`
- Change in `app/admin/page.tsx` → `const ADMIN_PASSWORD`
- In production, replace with NextAuth or Supabase Auth

---

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```
Add environment variables in Vercel dashboard.

### Self-hosted
```bash
npm run build
npm start
```

---

## Customization

### Adding New Services
Edit `lib/data.ts` → `services` array.

### Adding Blog Posts
Edit `lib/data.ts` → `blogPosts` array.
For real MDX blog posts, install `next-mdx-remote` and create `.mdx` files in `content/blog/`.

### Adding Case Studies
Edit `lib/data.ts` → `caseStudies` array.

### Changing Colors
Edit `app/globals.css` → `:root` CSS variables.

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + custom CSS variables
- **3D Animations:** Three.js (via CDN)
- **Icons:** Inline SVG / Emoji
- **Chatbot:** Custom + OpenAI GPT-4o-mini
- **Live Chat:** Crisp (optional)
- **Deployment:** Vercel / any Node.js host
