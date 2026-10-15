# Cove Clinic website

The website for Cove Clinic, a nurse-led aesthetic clinic at 8 Devonshire Street, Penrith, run by Gina, a registered nurse. Live at www.cove-clinic.co.uk. Built with Next.js 16 (App Router) and Tailwind 4, hosted on Vercel, which deploys whatever is on `main`. Built and looked after by Kestrel (rick@wearekestrel.com).

@AGENTS.md

## Who you are working with

Usually Gina, the clinic's owner. She is not technical and has never used code. So:

- Talk to her in plain English. Never use words like branch, commit, push, build, lint, component or deploy. Say "I've made the change", "here's a preview", "it's live".
- Keep replies short: what you changed, the preview link, and what to check.
- If a request could mean two things, ask one short question before changing anything.
- Change only what she asked for. Do not tidy up, restyle or rewrite anything else.
- Wording, prices, hours, photos, questions and reviews are hers to change. Anything bigger, such as a new section, a new layout or a design change, gently suggest she checks with Kestrel first, and only go ahead if she still wants to.

If the person is Rick from Kestrel instead, the same rules apply except you can talk technically.

## Where things live

- `lib/content.ts`: the words on the homepage, About page, footer, Find us card, privacy and terms, plus the phone number, email, opening hours, address, the free consultation booking link and the Google reviews.
- `lib/treatments.ts`: every treatment page: prices, times, the "At a glance" facts, the options list, questions, each page's search title and description, and its booking link.
- `public/photos/web/`: the photographs. New ones should be cropped to 4:5 portrait, about 1600 by 2000 pixels, JPEG.
- `components/`: the building blocks of each page. Change these only for layout or design changes, never for wording.
- `components/PenrithMap.tsx` is generated from map data. Never edit it by hand; tell her to ask Kestrel.
- `next.config.ts` holds redirects from the old website's addresses. Leave them alone.

## Common changes, and every place each one touches

- **A price.** One treatment's price usually appears in several places in its entry in `lib/treatments.ts`: the Price fact, the options list (`menu` items' `meta`), the search `description`, the `closing` text and sometimes the `lead` or `summary`. Search the whole entry for the old figure and change every one. The Google listing data and the AI guide update themselves.
- **Opening hours.** `site.hours` in `lib/content.ts`, then search both `lib` files for the old hours written out in sentences (for example "8am to 7pm") and update those too.
- **Phone or email.** `site` in `lib/content.ts`, `bookingActions` in `lib/treatments.ts`, and search both files and the privacy and terms text for the old value.
- **A booking link.** The page's `bookingUrl` in `lib/treatments.ts`. The free consultation link is used by every "Book a free consultation" button and lives in several `cta` entries in `lib/content.ts`; change them all. Links come from the clinic's Collums booking system; ask Gina to paste the exact link.
- **A question and answer.** Add or edit the page's `questions` in `lib/treatments.ts`, or `questions.items` in `lib/content.ts` for the homepage.
- **A review.** `reviews.items` in `lib/content.ts`. Use only genuine Google reviews, copied word for word (emoji removed), with the reviewer's first name and the treatment. Never use one that names a prescription-only medicine.
- **A photo.** Add the file to `public/photos/web/` and update the `src`, the `alt` text (describe what is in the picture) and the `position` if the crop needs nudging.
- **A new treatment page.** Copy an existing entry in `treatmentPages` in `lib/treatments.ts` with a new slug, add it to `treatmentsList` in `lib/content.ts` with the address `/treatments/<slug>`, and add its photo. The menu, footer, treatments list, sitemap and search data pick it up automatically. Suggest she checks bigger additions like this with Kestrel.

## Rules

- Wording only ever changes in `lib/content.ts` or `lib/treatments.ts`. Never type wording directly into a component.
- Never name a prescription-only medicine anywhere on the site, including any brand of anti-wrinkle injection, and never show a price for anti-wrinkle injections. UK advertising rules forbid it. Dermal fillers, skin boosters, polynucleotides, peels, facials, microneedling and PRP can be named and priced.
- Treatments are for over-18s only; keep that wherever it is already said.
- No promised or guaranteed results, no "best" or "number one", no exclamation marks. Results "typically" last a range of time, never a fixed promise.
- British English. Plain, warm and honest, as if Gina were speaking. Short sentences.
- Punctuation: no em dashes and no middle dots. Use full stops and commas.
- Prices and booking links must match the clinic's Collums booking system. If Gina gives a new price, use it; if you are not sure where a figure came from, ask her.
- Search titles stay under about 60 characters including " | Cove Clinic", and descriptions between about 140 and 160 characters.

## Design rules

The look is deliberate. Reuse what is already there rather than inventing anything new.

- Colours come only from the tokens in `app/globals.css`: paper, clay, umber, walnut, ink, stone, sage, white. No other colours, no gradients, no shadows.
- Fonts: Fraunces for headings, Figtree for everything else. Do not add others.
- There is one button style (`components/Button.tsx`, an outlined pill). Use it; do not create new button styles.
- Sections are either open on the paper background or a rounded clay card, and the dark walnut colour is kept for the footer and the homepage hero. Do not add new card colours.
- Never add fade-in animations, small capitalised labels above headings, or numbered markers.
- Every change must work on a phone as well as a laptop.

## Checking your work

Cloud sessions cannot open a browser or reach the preview site, so check like this:

1. Run `npm install` if `node_modules` is missing, then `npm run build` and `npm run lint`. Both must pass.
2. For wording changes, start the built site with `npx next start -p 3000` in the background and fetch the changed page with `curl -s http://localhost:3000/<page>`, confirming the new wording is there and the old wording is gone. Stop the server afterwards.
3. Gina checks the look on the preview link before anything goes live.

## How to make a change

Gina should never need to use GitHub. Do the git work for her.

1. Make the change on this session's working branch and check it as above.
2. Commit with a short plain-English message and push the branch.
3. Vercel builds a preview of the branch within about two minutes. Find its address from GitHub's record of the Vercel deployment for that commit (for example `gh api repos/coveclinic/cove-clinic-site/deployments?sha=<commit>`, then that deployment's statuses, which hold the preview link). Send Gina the link and a one-line summary of what changed, and ask her to check it on her phone and laptop. Preview links ask her to log in to Vercel the first time; she uses Continue with GitHub.
4. When Gina says it looks right ("publish", "yes", "looks good" and so on), put it live: bring the branch up to date with `main`, then push it to `main` (for example `git fetch origin main && git rebase origin/main && git push origin HEAD:main`). The site at www.cove-clinic.co.uk updates within a minute or two. Tell her it is live.
5. If she wants something different, keep working on the same branch and send a new preview.

Never push to `main` until Gina has said to publish. Do not open pull requests unless asked. If anything fails, explain it simply and suggest she contacts Kestrel.
