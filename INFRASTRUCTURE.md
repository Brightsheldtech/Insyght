# Insyght — Infrastructure and Accounts Setup

A complete list of every external service and account required to build,
launch, and operate Insyght.

---

## DOMAIN AND HOSTING

| Service | URL | Purpose |
|---|---|---|
| Namecheap | namecheap.com | Purchase and manage insyght.io domain |
| Railway | railway.app | Host both React frontend and Node.js backend in one project |

---

## CODE AND INFRASTRUCTURE

| Service | URL | Purpose |
|---|---|---|
| GitHub | github.com | Version control and code repository |
| Supabase | supabase.com | Database (PostgreSQL), authentication, and file storage |

---

## EXTERNAL APIs

| Service | URL | Purpose |
|---|---|---|
| Dojah | dojah.io | CAC lookup, TIN verification, and business data |
| SerpAPI | serpapi.com | Web search, news intelligence, and digital presence checks |
| Anthropic | console.anthropic.com | Claude API for AI powered risk summary generation |
| Flutterwave | flutterwave.com | Payment processing — create business account under BrightSheld Technologies |

---

## EMAIL AND COMMUNICATION

| Service | URL | Purpose |
|---|---|---|
| Google Workspace | workspace.google.com | Professional email — hello@insyght.io |
| Brevo | brevo.com | Transactional emails — report delivery, payment confirmation, alerts, and newsletter |

---

## SOCIAL MEDIA

| Platform | Handle |
|---|---|
| Twitter/X | @insyghthq |
| LinkedIn | Insyght (Company Page) |
| Instagram | @insyghthq |
| Facebook | Insyght (Business Page) |

> Secure all four handles immediately even if not actively used at launch.

---

## ANALYTICS AND MONITORING

| Service | URL | Purpose |
|---|---|---|
| Google Analytics | analytics.google.com | Website traffic, user behaviour, and conversion tracking |
| Google Search Console | search.google.com/search-console | SEO performance and search visibility monitoring |
| Sentry | sentry.io | Real-time error monitoring and crash reporting |
| Hotjar | hotjar.com | Heatmaps and user session recordings for UX improvement |

---

## LEGAL AND COMPLIANCE

| Service | URL | Purpose |
|---|---|---|
| CAC Trade Marks Registry | trademarks.cac.gov.ng | Register "Insyght" as a trademark under BrightSheld Technologies |
| NDPC | ndpc.gov.ng | Data Controller registration — required once platform exceeds 200 users |

---

## PRODUCTIVITY AND OPERATIONS

| Service | URL | Purpose |
|---|---|---|
| Notion | notion.so | Product roadmap, documentation, and team wiki |
| Linear | linear.app | Task tracking and issue management |
| Slack | slack.com | Team communication |
| Loom | loom.com | Product demo videos for sales outreach |

---

## FINANCIAL

| Service | URL | Purpose |
|---|---|---|
| Moniepoint Business or Providus | — | Dedicated business bank account for Insyght revenue |
| Wave | waveapps.com | Free accounting software — track all income and expenses from day one |

---

## SETUP PRIORITY

### Do today
- [ ] Namecheap — secure insyght.io domain
- [ ] Dojah — create account and get test API key
- [ ] Supabase — create project and get credentials
- [ ] Flutterwave — set up business account under BrightSheld Technologies
- [ ] Google Workspace — activate hello@insyght.io

### Do this week
- [ ] Railway — create project, connect GitHub repo
- [x] SerpAPI — account created, API key secured
- [ ] Anthropic Console — create account and get Claude API key
- [ ] Twitter/X, LinkedIn, Instagram, Facebook — secure all handles
- [ ] Google Analytics and Google Search Console — set up and link to domain

### Do before launch
- [ ] Notion — set up product documentation workspace
- [ ] Linear — set up project board
- [ ] Wave — set up chart of accounts
- [ ] Business bank account — open dedicated Insyght account
- [ ] Sentry — integrate error monitoring into codebase
- [ ] CAC Trade Marks Registry — file "Insyght" trademark

---

## ENVIRONMENT VARIABLES (RAILWAY)

Configure all of the following in Railway before deployment:

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
