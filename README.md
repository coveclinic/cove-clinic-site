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

1. Go to [claude.ai/code](https://claude.ai/code) and connect your GitHub account the first time.
2. Choose the `cove-clinic-site` repository.
3. Describe the change in plain English, for example: "Change the price of a single chemical peel to £90."
4. Claude makes the change and opens a pull request.
5. Open the pull request on GitHub and click the Vercel preview link to check the change.
6. If it looks right, click **Merge pull request**. The live site updates within a minute or two. If not, tell Claude what to adjust.

Prices and opening hours are in `lib/content.ts` and `lib/treatments.ts`, so most changes are small and quick.

## Help

Kestrel built and looks after the site: [rick@wearekestrel.com](mailto:rick@wearekestrel.com).

## For developers

```bash
npm install
npm run dev
```

Next.js 16 with the App Router and Tailwind 4. Read `CLAUDE.md` before making changes.
