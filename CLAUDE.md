# Cove Clinic website

The website for Cove Clinic, a nurse-led aesthetic clinic at 8 Devonshire Street, Penrith. Built with Next.js and Tailwind, hosted on Vercel. Built and looked after by Kestrel (rick@wearekestrel.com).

@AGENTS.md

## Where things live

- `lib/content.ts`: all the words on the homepage, About page, footer, Find us card, privacy and terms, plus the phone number, email, opening hours, address and the free consultation booking link.
- `lib/treatments.ts`: every treatment page, including prices, times, the "At a glance" facts, questions and each page's booking link.
- `public/photos/web/`: the photographs used on the site. Use 4:5 portrait crops, around 1600 by 2000 pixels.
- `components/`: the building blocks of each page. Change these only for layout or design changes, never for wording.
- `components/PenrithMap.tsx` is generated from map data. Do not edit it by hand; ask Kestrel.

## Rules

- Words only ever change in `lib/content.ts` or `lib/treatments.ts`. Never type wording directly into a component.
- Colours come only from the tokens in `app/globals.css` (paper, clay, umber, walnut, ink, stone, sage, white). No other colours, no gradients, no shadows.
- Fonts are Fraunces for headings and Figtree for everything else. Do not add others.
- Never name a prescription-only medicine, including any brand of anti-wrinkle injection, anywhere on the site, and never show a price for anti-wrinkle injections. UK advertising rules forbid it. Dermal fillers, skin boosters and polynucleotides can be named and priced.
- Treatments are for over-18s only; keep that wherever it is already said.
- British English. Plain, warm, honest wording. No exclamation marks, no superlatives such as "best" or "number one", and no promised results.
- Prices and booking links must match the clinic's booking system. Confirm with Gina before changing them.
- Keep it working on phones: check any change at a narrow width as well as on a laptop.

## How to make a change

1. Never change the `main` branch directly. Make a new branch for each change.
2. Make the change, then run `npm run build` and `npm run lint`. Both must pass.
3. Open a pull request with a short plain-English description of what changed and why.
4. Vercel posts a preview link on the pull request. Check the change there, on a phone and a laptop.
5. Merging the pull request puts the change live on cove-clinic.co.uk within a minute or two.
