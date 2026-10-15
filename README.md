# Cove Clinic website

The website for [Cove Clinic](https://www.cove-clinic.co.uk), a nurse-led aesthetic clinic in Penrith, Cumbria.

## How it fits together

| Service | What it does | Who pays |
| --- | --- | --- |
| GitHub | Holds the website's files and every change ever made | Free |
| Vercel | Puts the site online and updates it when a change is approved | Cove Clinic, Pro plan |
| Wix | Holds the domain, cove-clinic.co.uk | Cove Clinic, domain renewal |
| Collums | Online booking, linked from the site's buttons | Cove Clinic |
| Google Workspace | The clinic email | Cove Clinic |

## Asking for a change with Claude

1. Go to [claude.ai/code](https://claude.ai/code). The first time, connect your GitHub account when asked.
2. Choose `cove-clinic-site` in the box under the message area.
3. Type what you would like changed in plain English, for example: "Change the price of a single chemical peel to £90."
4. Claude makes the change and sends you a preview link. Open it and check the change on your phone and laptop. The first time, it asks you to log in to Vercel: choose Continue with GitHub.
5. If it looks right, reply **publish**. The live website updates within a minute or two. If not, tell Claude what to change and it sends a new preview.

You never need to open GitHub. Prices and opening hours live in `lib/content.ts` and `lib/treatments.ts`, so most changes are small and quick.

## Help

Kestrel built and looks after the site: [rick@wearekestrel.com](mailto:rick@wearekestrel.com).

## For developers

```bash
npm install
npm run dev
```

Next.js 16 with the App Router and Tailwind 4. Read `CLAUDE.md` before making changes.
