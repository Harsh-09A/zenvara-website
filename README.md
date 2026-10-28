# Zenvara Ventures website

Corporate website for a Navi Mumbai real estate investment advisory.
Next.js (App Router), TypeScript, Tailwind CSS 4, react-icons. No animation libraries.

```bash
npm install
npm run dev        # open http://localhost:3000
npm run build      # production build
```

## Pages

| Page | File |
| --- | --- |
| Home | `app/page.tsx` |
| About (story, vision, mission, goal, values) | `app/about/page.tsx` |
| Services (services, area prices, EMI calculator) | `app/services/page.tsx` |
| Contact | `app/contact/page.tsx` |

## Folder guide

| Folder / file | What it does |
| --- | --- |
| `components/` | Reusable pieces: Header, Hero, Footer, ServiceCard, VisionMission, WhyZenvara, Process, Faq, PriceBars, EmiCalculator, ContactForm, Reveal |
| `lib/data.ts` | All text: services, vision/mission/goal, values, FAQs, area prices, loan info |
| `lib/site.ts` | Company name, phone, email, address, menu links |
| `lib/images.ts` | Stock photo links |
| `app/globals.css` | Brand colours, pastel colours, fonts, hero animation |
| `app/api/enquiry/route.ts` | Receives the contact form |

## Colours

Brand: `navy`, `ivory`, `gold`, `beige`.
Pastels: `sage`, `sky`, `blush`, `sand`, `lavender`.
Use them like normal Tailwind colours: `bg-sky`, `text-navy`.

## Animations (all simple)

- Hero text rises on load: CSS classes `hero-rise`, `hero-rise-2`, `hero-rise-3` in `globals.css`.
- Sections fade up on scroll: wrap content in `<Reveal>` (`components/Reveal.tsx`).
- Hover effects: Tailwind classes such as `hover:-translate-y-2 hover:shadow-xl`.

## Before launch

1. Add phone, email and MahaRERA agent number in `lib/site.ts`.
2. Vision, mission, values and "Why Zenvara" in `lib/data.ts` are draft text. Replace with your own.
3. Contact form: `app/api/enquiry/route.ts` only prints enquiries in the server console. Add email or CRM sending there.
4. Review the area prices in `lib/data.ts` every few months. They are indicative asking prices.
5. Set `NEXT_PUBLIC_SITE_URL` (see `.env.example`).
6. Add Privacy Policy and Terms pages, since the site collects phone numbers.
