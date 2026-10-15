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

Gina asks for changes in plain English and should never need to use GitHub. Do the git work for her and explain what you did in plain words, without technical terms.

1. Make the change on this session's working branch. Run `npm run build` and `npm run lint`. Both must pass; fix anything that fails.
2. Commit with a short plain-English message and push the branch.
3. Vercel builds a preview of the branch within about two minutes. Find its address from GitHub's record of the Vercel deployment for that commit (for example `gh api repos/coveclinic/cove-clinic-site/deployments?sha=<commit>`, then that deployment's statuses, which hold the preview link). Send Gina the link and a one-line summary of what changed, and ask her to check it on her phone and laptop. Preview links ask her to log in to Vercel the first time; she uses Continue with GitHub.
4. When Gina says it looks right ("publish", "yes", "looks good" and so on), put it live: bring the branch up to date with `main`, then push it to `main` (for example `git fetch origin main && git rebase origin/main && git push origin HEAD:main`). The site at www.cove-clinic.co.uk updates within a minute or two. Tell her it is live.
5. If she wants something different, keep working on the same branch and send a new preview.

Never push to `main` until Gina has said to publish. Do not open pull requests unless asked. If anything in these steps fails, explain it simply and suggest she contacts Kestrel.
