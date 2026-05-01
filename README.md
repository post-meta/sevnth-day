# SEVENTH DAY

Growth operations for service businesses. Solo operator, Greater Seattle.

Production: https://seventh.day

## Stack

- Next.js 16 App Router · React 19 · TypeScript strict
- Tailwind CSS v4 (CSS-based config)
- Inter + JetBrains Mono via `next/font/google`
- Resend (transactional email)
- Deploy: Vercel · Domain DNS: Cloudflare

## Local development

```bash
pnpm install
pnpm dev   # http://localhost:3000
```

Required env vars (see `.env.example`):

- `RESEND_API_KEY` — from https://resend.com/api-keys (after verifying `seventh.day` domain)
- `RESEND_FROM` — defaults to `noreply@seventh.day`
- `RESEND_TO` — defaults to `01@seventh.day`

## Routes

| Route | Purpose |
|---|---|
| `/` | Homepage — hero + 4-job picker + proof + how-it-works |
| `/grow`, `/rebuild`, `/handover`, `/catchup` | Job-specific landings |
| `/services` + 4 sub-pages | Offering catalog |
| `/cases` + 3 sub-pages | NW Garage / Copper Fox / Flawless |
| `/about` | Founder story |
| `/pricing` | Published prices |
| `/contact` | Form + sidebar |
| `/api/contact` | POST → Resend → 01@seventh.day |
| `/sitemap.xml`, `/robots.txt`, `/opengraph-image` | SEO assets |

## Design tokens

Tech Brutalism + warm greige (REF.digital reference).

- `--background: #ebe9e2` (warm greige)
- `--foreground: #0a0a0a` (deep charcoal)
- Two-color palette · accent through hover-inversion only
- ASCII-style section dividers `─── LABEL ───`
- Monospace technical labels in `[XX.XX_LABEL]` format

See `app/globals.css` for token + utility classes (`label-mono`, `divider-ascii`, `invert-on-hover`, `bg-grid`).

## Deploying

1. Vercel → New Project → import `post-meta/sevnth-day`
2. Set env vars (`RESEND_API_KEY`)
3. Add custom domain `seventh.day` (and `www.seventh.day` redirect)
4. Cloudflare: confirm A/CNAME records per Vercel

## Status

See `TODO.md` for outstanding items.
