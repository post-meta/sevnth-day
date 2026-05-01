# TODO — sevnth.day launch

## Phase 0 — accounts and infra (user actions)

- [ ] **Cal.com**: register, claim handle `sevnthday`, create event "30-min Discovery Call", connect Google Calendar. Verify `cal.com/sevnthday/discovery` resolves.
- [ ] **Resend**: sign up at resend.com → Domains → add `sevnth.day` → add SPF/DKIM/DMARC records to Cloudflare DNS → wait for verification → API Keys → create production key.
- [ ] **Email aliases**: confirm `01@sevnth.day` and `noreply@sevnth.day` route to your inbox (Cloudflare Email Routing or Google Workspace).

## Phase 7 — deploy

- [ ] `vercel link` (or import via Vercel UI) — connect repo to Vercel project
- [ ] Set Vercel env vars: `RESEND_API_KEY`, `RESEND_FROM=noreply@sevnth.day`, `RESEND_TO=01@sevnth.day`
- [ ] Attach custom domain `sevnth.day` in Vercel
- [ ] Cloudflare DNS: A → `76.76.21.21` (Vercel) for apex, CNAME `www` → `cname.vercel-dns.com`
- [ ] First production deploy
- [ ] **End-to-end test**: submit form → check Resend dashboard delivery → check `01@sevnth.day` inbox
- [ ] **End-to-end test**: open `/contact` → verify Cal.com iframe loads → book a test slot

## Phase 8 — content fill (post-launch refinement)

- [ ] Pull real metrics from project notes for each case study (currently outcome lines are honest but generic):
  - NW Garage Doors — actual organic traffic / call volume numbers from your records
  - Copper Fox Gutters — Stage 1 blog metrics, GBP review velocity
  - Flawless Aesthetics — bot conversion, lead response time
- [ ] Add client quote per case study (with permission)
- [ ] Add 1-2 photos per case study (real work, not stock)

## Open items (deferred, not blocking)

- [ ] Category positioning ("studio" / "growth studio" / no-category) — set in `<title>` after launch traffic data
- [ ] Premium audit tier ($2,500 AI Readiness Audit) — Phase 2 product
- [ ] Fractional CMO branch — separate landing for startup segment, Phase 2
- [ ] Reddit GEO content — 5 deep answer posts in r/smallbusiness, r/[trade] subs
- [ ] Multi-language (RU pages for Slavic diaspora cold outreach)
- [ ] Pricing increase to $750 / $7,500 / $2,500 after 5 cases shipped

## Cleanup after launch

- [ ] Archive `post-meta/SEVENTH-DAY-AGENCY` on GitHub
- [ ] Archive `post-meta/seventhday` on GitHub
- [ ] Archive `post-meta/seventh-day-ref` on GitHub
- [ ] Local cleanup: `rm -rf` the three old repo folders in `~/GITHUB-PROJECT/`
- [ ] Update `wiki/agency/seventh-day.md` with launch date and canonical repo path
- [ ] Fill in empty `seventh-day.json` brand profile (per personal-brand backlog)
