# TODO — seventh.day launch

## Phase 0 — accounts and infra

- [x] **Resend**: account exists, `seventh.day` domain added with DKIM/DMARC/verification records in Cloudflare DNS
- [ ] **Resend API key** for `seventh.day`: create at https://resend.com/api-keys (existing keys are restricted to other domains: foxgutters/garage-door/cleenly/thecentral). Permission `Sending access`, domain `seventh.day`. Paste key — gets set as Vercel env var.
- [x] **Email aliases**: `01@seventh.day` routed via SpaceMail MX (mx0001/mx0002.mx.spec...) per CF DNS

## Phase 7 — deploy

- [x] Vercel project `sevnth-day` (prj_fUZbVESAIZ6z8NodnkJuXIlVlL90) linked to GitHub `post-meta/sevnth-day`
- [x] First production deploy at `sevnth-day.vercel.app` (19/19 routes 200, OG works, API validation works)
- [ ] **Repoint `seventh.day`**: detach from old `seventhday` Vercel project, attach to new `sevnth-day` project (apex + www redirect)
- [ ] **Set Resend env vars**: `RESEND_FROM=noreply@seventh.day`, `RESEND_TO=01@seventh.day` (done), `RESEND_API_KEY=<from above>`
- [ ] **End-to-end test**: submit `/contact` form on https://seventh.day → check Resend dashboard `Emails` for delivery → check `01@seventh.day` inbox

## Phase 8 — content fill (post-launch refinement)

- [ ] Pull real metrics from project notes for each case study:
  - NW Garage Doors — actual organic traffic / call volume from records
  - Copper Fox Gutters — Stage 1 blog metrics, GBP review velocity
  - Flawless Aesthetics — bot conversion, lead response time
- [ ] Add client quote per case study (with permission)
- [ ] Add 1-2 real photos per case study (not stock)

## Open items (deferred)

- [ ] Category positioning ("studio" / "growth studio" / no-category) — set in `<title>` after launch traffic data
- [ ] Premium audit tier ($2,500 AI Readiness Audit) — Phase 2 product
- [ ] Fractional CMO branch — separate landing for startup segment, Phase 2
- [ ] Reddit GEO content — 5 deep answer posts in r/smallbusiness, r/[trade] subs
- [ ] Multi-language (RU pages for Slavic diaspora cold outreach)
- [ ] Pricing increase to $750 / $7,500 / $2,500 after 5 cases shipped
- [ ] Cal.com booking flow — deferred per user decision 2026-05-01

## Cleanup after launch

- [ ] Detach `seventh.day` from `seventhday` Vercel project before reattaching
- [ ] Archive `post-meta/SEVENTH-DAY-AGENCY` on GitHub
- [ ] Archive `post-meta/seventhday` on GitHub
- [ ] Archive `post-meta/seventh-day-ref` on GitHub
- [ ] Local cleanup: `rm -rf` the three old repo folders in `~/GITHUB-PROJECT/`
- [ ] Update `wiki/agency/seventh-day.md` with launch date and canonical repo path
- [ ] Fill in empty `seventh-day.json` brand profile (per personal-brand backlog)
