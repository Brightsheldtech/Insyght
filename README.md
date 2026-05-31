# Insyght

**Know who you're doing business with.**

Nigeria's company intelligence platform. Delivers 11-section due diligence reports on any CAC-registered Nigerian company in under 2 minutes.

Built by [BrightSheld Technologies](https://brightsheld.com) · Lagos, Nigeria.

Live: [insyght.netlify.app](https://insyght.netlify.app)

---

## What It Does

A user enters a company name or CAC RC number, pays ₦10,000 via Paystack, and receives a comprehensive PDF intelligence report in under 2 minutes. No manual research, no phone calls, no connections needed.

Every report covers three intelligence tiers:

**Tier 1 — Core Identity and Compliance**
- Company identity and CAC registration status
- Directors, shareholders, and ownership structure
- Annual returns and compliance history
- FIRS Tax Identification Number verification
- SCUML registration check for regulated non-financial businesses

**Tier 2 — Digital Presence and Public Footprint**
- Website health, domain age, and SSL status
- Social media presence and digital credibility signals
- News and media mentions with sentiment analysis

**Tier 3 — Sector Licensing**
- CBN licence for financial services companies
- NAFDAC registration for food, pharma, and cosmetics
- SEC registration for investment and capital market operators
- NCC licence for telecoms and ISPs
- NAICOM licence for insurance companies

Every report ends with an AI-generated risk score (0–100) and a plain English risk summary.

---

## Who Uses It

| Customer | Why They Pay |
|---|---|
| Procurement officers | Verify vendors before payment is raised |
| Lawyers and law firms | Counterparty checks before contracts are signed |
| Banks and fintechs | KYB compliance for merchant onboarding (CBN 2026 mandate) |
| Investors and individuals | Verify investment companies before committing capital |
| HR and recruitment firms | Confirm employers are legitimate before placing candidates |

---

## Pricing

| Plan | Price | Notes |
|---|---|---|
| Single Report | ₦10,000 | One full report, no account needed |
| Five Reports | ₦40,000 | Save ₦10,000 |
| Ten Reports | ₦75,000 | Save ₦25,000, best per-report rate |
| Team Plan | ₦150,000/month | 20 reports, dashboard, monitoring, white label PDF |
| Enterprise | Custom | 50+ reports/month, API access, custom integrations |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19 + Vite + Tailwind CSS 4 |
| Backend | Node.js + Express |
| Database | Supabase (PostgreSQL) |
| Auth | Supabase Auth |
| Payments | Flutterwave (BrightSheld Technologies business account) |
| CAC and company data | Dojah API (paid reports only) |
| Free preview data | CAC portal scraper (Puppeteer) |
| Web intelligence | SerpAPI |
| Sector licence checks | Scrapers against CBN, NAFDAC, SEC, NCC, NAICOM public registers |
| AI analysis | Claude API (claude-sonnet) |
| PDF generation | Puppeteer |
| Hosting | Railway (frontend + backend in one project) |
| Transactional email | Brevo (report delivery, payment confirmation, alerts) |
| Error monitoring | Sentry |

---

## Current Status

**Frontend: Complete and live**

Landing page is fully built and deployed. Sections include:
- Hero with live search UI mockup
- Who it's built for (4 persona cards)
- How it works (3 steps)
- Full report section preview (6 data sections)
- Pricing (4 tiers)
- CTA and footer

**Backend: Not started**

---

## Build Plan

### Week 1 — Foundation
User auth via Supabase (email/password + Google OAuth). Flutterwave payment integration. Core flow — search, pay, confirmation screen — is functional end to end.

### Week 2 — Free Preview (CAC Scraper)
Puppeteer scraper hits the CAC public portal on every search. Returns company name, RC number, registration status, incorporation date, and company type. This data is free — no API cost. Everything beyond this is locked behind payment. Scraper results are cached in Supabase for 7 days to avoid redundant requests.

### Week 3 — Paid Report: Tier 1
Dojah API call triggered only after confirmed Flutterwave payment. Populates Company Identity, Directors and Ownership, Annual Returns, FIRS TIN, and SCUML sections of the report.

### Week 4 — Paid Report: Tier 2
SerpAPI for news and web intelligence. WHOIS lookup for domain data. Social presence detection. Populates Digital Presence and News sections.

### Week 5 — Sector Licensing + AI + PDF
Sector-appropriate licence checks scraped from CBN, NAFDAC, SEC public registers. All collected data sent to Claude API for risk score and plain English summary. Puppeteer renders the full HTML report as a branded PDF. Report viewable on screen and downloadable.

### Week 6 — Testing and Soft Launch
End-to-end testing on 20 to 30 real Nigerian companies. Bug fixes. Mobile review. Soft launch to first paying users from personal and professional network.

---

## Free Preview Architecture

The free preview (shown before payment) is powered by a Puppeteer scraper against the CAC public portal — not the Dojah API. This keeps the cost per free search at zero.

**What the free preview shows:**
- Company name (exact CAC registered name)
- RC or BN number
- Registration status (Active, Inactive, or Struck Off)
- Date of incorporation
- Company type

**What is locked behind payment:**
- Directors and shareholders
- Annual returns compliance
- FIRS TIN
- SCUML registration
- Sector licences (CBN, NAFDAC, SEC, etc.)
- Digital presence and domain intelligence
- News and media mentions
- AI risk score and summary

Locked sections appear in the UI as blurred rows with a lock icon and a "Unlock Full Report" CTA.

Scraper results are cached per RC number with a 7-day TTL to handle rate limiting and reduce load on the CAC portal.

---

## Repository Structure (Planned)

```
insyght/
├── frontend/          # React + Vite landing page and report viewer
├── backend/
│   ├── src/
│   │   ├── routes/    # Express API routes
│   │   ├── services/
│   │   │   ├── cac-scraper.js      # Free preview scraper
│   │   │   ├── dojah.js            # Paid report data
│   │   │   ├── serp.js             # Web intelligence
│   │   │   ├── licensing/          # CBN, NAFDAC, SEC scrapers
│   │   │   ├── claude.js           # AI risk summary
│   │   │   └── pdf.js              # Report PDF generation
│   │   └── utils/
│   ├── supabase/      # DB schema and migrations
│   └── index.js
└── README.md
```

---

## Environment Variables (Railway)

```env
# Supabase
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Dojah
DOJAH_API_KEY=
DOJAH_APP_ID=

# SerpAPI
SERPAPI_KEY=

# Anthropic
ANTHROPIC_API_KEY=

# Flutterwave
FLUTTERWAVE_PUBLIC_KEY=
FLUTTERWAVE_SECRET_KEY=
FLUTTERWAVE_ENCRYPTION_KEY=

# App
NODE_ENV=production
FRONTEND_URL=https://insyght.io
```

---

## Operating Entity

BrightSheld Technologies — CAC registered, Lagos, Nigeria.
Contact: hello@insyght.io
