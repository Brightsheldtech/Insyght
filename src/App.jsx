import { useState } from 'react'

/* ── Inline SVG icons ────────────────────────────────────────── */
const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="7" cy="7" r="4.5" />
    <line x1="10.5" y1="10.5" x2="14" y2="14" />
  </svg>
)

const CheckIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="2.5 8.5 6.5 12.5 13.5 4" />
  </svg>
)

const ShieldIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 1.5L2.5 4.5v5c0 3.5 2.8 6.5 6.5 7 3.7-.5 6.5-3.5 6.5-7v-5L9 1.5z" />
    <polyline points="6 9 8 11 12 7" />
  </svg>
)

const UsersIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="7" cy="6" r="2.5" />
    <path d="M1 16c0-3.3 2.7-6 6-6" />
    <circle cx="13" cy="6" r="2.5" />
    <path d="M17 16c0-3.3-2.7-6-6-6" />
  </svg>
)

const GlobeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="9" cy="9" r="7.5" />
    <ellipse cx="9" cy="9" rx="3" ry="7.5" />
    <line x1="1.5" y1="9" x2="16.5" y2="9" />
    <line x1="2.5" y1="5.5" x2="15.5" y2="5.5" />
    <line x1="2.5" y1="12.5" x2="15.5" y2="12.5" />
  </svg>
)

const NewsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="3" width="14" height="12" rx="1.5" />
    <line x1="5" y1="7" x2="13" y2="7" />
    <line x1="5" y1="10" x2="10" y2="10" />
    <line x1="5" y1="13" x2="8" y2="13" />
  </svg>
)

const BrainIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 4c0-1.7-1.3-3-3-3C4.3 1 3 2.3 3 4c0 .5.1 1 .3 1.4C2.5 6 2 7 2 8c0 1.4.7 2.6 1.8 3.3C4 11.8 4 12.4 4 13c0 1.7 1.3 3 3 3h4c1.7 0 3-1.3 3-3 0-.6 0-1.2.2-1.7C15.3 10.6 16 9.4 16 8c0-1-.5-2-1.3-2.6.2-.4.3-.9.3-1.4 0-1.7-1.3-3-3-3-1.7 0-3 1.3-3 3z" />
    <line x1="9" y1="4" x2="9" y2="13" />
    <line x1="6" y1="8.5" x2="12" y2="8.5" />
  </svg>
)

const BuildingIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="14" height="12" rx="1" />
    <path d="M6 4V2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V4" />
    <line x1="6" y1="9" x2="12" y2="9" />
    <line x1="6" y1="12" x2="10" y2="12" />
  </svg>
)

const FileIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10.5 2H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6.5L10.5 2z" />
    <polyline points="10.5 2 10.5 6.5 15 6.5" />
  </svg>
)

const CreditCardIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="16" height="13" rx="2" />
    <line x1="2" y1="8.5" x2="18" y2="8.5" />
    <line x1="5" y1="13" x2="8" y2="13" />
  </svg>
)

const ZapIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="11 2 3 12 10 12 9 18 17 8 10 8 11 2" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="2.5" y1="7.5" x2="12.5" y2="7.5" />
    <polyline points="9 4 12.5 7.5 9 11" />
  </svg>
)

const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M12.6 0h2.4L9.7 6.1 16 16h-4.9L7.2 10.4 2.5 16H.1l5.7-6.5L0 0h5l3.5 5.1L12.6 0zm-.8 14.4h1.3L4.2 1.4H2.8l9 13z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M13.7 0H2.3C1 0 0 1 0 2.3v11.4C0 15 1 16 2.3 16h11.4C15 16 16 15 16 13.7V2.3C16 1 15 0 13.7 0zM5 13H2.5V6H5v7zm-1.3-8C2.9 5 2 4.1 2 3s.9-2 1.7-2c1 0 1.7.9 1.7 2s-.7 2-1.7 2zm9.8 8H11V9.5c0-1-.4-1.7-1.2-1.7-.7 0-1.1.5-1.3 1-.1.1-.1.4-.1.6V13H6V6h2.4v1c.3-.5 1-1.2 2.3-1.2 1.7 0 3 1.1 3 3.4V13z" />
  </svg>
)

/* ── Marquee data ─────────────────────────────────────────────── */
const MARQUEE_NAMES = [
  'Raven Capital', 'Lex Associates', 'TrustPay Nigeria', 'BuildCore Ltd',
  'Veridian Partners', 'Apex Procurement', 'Lagos Legal Group',
  'Raven Capital', 'Lex Associates', 'TrustPay Nigeria', 'BuildCore Ltd',
  'Veridian Partners', 'Apex Procurement', 'Lagos Legal Group',
]

/* ── Navigation ──────────────────────────────────────────────── */
function Nav() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = () => setDrawerOpen(v => !v)
  const closeDrawer  = () => setDrawerOpen(false)

  const handleNavLink = (e, id) => {
    e.preventDefault()
    closeDrawer()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className="nav" aria-label="Main navigation">
        <div className="nav-inner">
          <a href="/" className="wordmark" aria-label="Insyght home">
            Ins<span className="y-wrap">y<span className="y-dot" aria-hidden="true" /></span>ght
          </a>

          <div className="nav-right">
            <ul className="nav-links" role="list">
              <li><a href="#how-it-works" onClick={e => handleNavLink(e, 'how-it-works')}>How it works</a></li>
              <li><a href="#pricing" onClick={e => handleNavLink(e, 'pricing')}>Pricing</a></li>
              <li><a href="#pricing" onClick={e => handleNavLink(e, 'pricing')}>For Teams</a></li>
            </ul>
            <a href="#hero" className="btn-nav-cta" onClick={e => handleNavLink(e, 'hero')}>Get a Report</a>
          </div>

          <button
            className={`hamburger${drawerOpen ? ' open' : ''}`}
            onClick={toggleDrawer}
            aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={drawerOpen}
            aria-controls="mobile-drawer"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        id="mobile-drawer"
        className={`mobile-drawer${drawerOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="drawer-overlay" onClick={closeDrawer} aria-hidden="true" />
        <div className="drawer-panel">
          <a href="#how-it-works" onClick={e => handleNavLink(e, 'how-it-works')}>How it works</a>
          <a href="#pricing" onClick={e => handleNavLink(e, 'pricing')}>Pricing</a>
          <a href="#pricing" onClick={e => handleNavLink(e, 'pricing')}>For Teams</a>
          <a href="#hero" className="drawer-cta" onClick={e => handleNavLink(e, 'hero')}>Get a Report</a>
        </div>
      </div>
    </>
  )
}

/* ── Hero ─────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-badge" aria-label="Product category">
            <span className="badge-dot" aria-hidden="true" />
            Nigeria&apos;s Company Intelligence Platform
          </div>

          <h1 className="hero-headline">
            Know who you&apos;re doing business with.
          </h1>

          <p className="hero-subheadline">
            Before you sign a contract, onboard a vendor, or release payment to any Nigerian
            company, run an Insyght check. Get verified CAC data, director profiles, risk
            scores, media mentions, and digital presence in a single PDF report. Ready in
            under 2 minutes.
          </p>

          <div className="hero-buttons">
            <a href="#hero" className="btn-primary">
              Run a Free Search <ArrowRightIcon />
            </a>
            <a href="#report" className="btn-outline"
              onClick={e => { e.preventDefault(); document.getElementById('report')?.scrollIntoView({ behavior: 'smooth' }) }}>
              See Sample Report
            </a>
          </div>

          <div className="trust-row" role="list">
            {['CAC Verified Data', 'Risk Scored Reports', 'PDF in Under 2 Minutes'].map(label => (
              <div key={label} className="trust-item" role="listitem">
                <span style={{ color: 'var(--success)', display: 'flex' }}>
                  <CheckIcon size={14} />
                </span>
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-card-wrap">
            <div className="hero-card-glow" aria-hidden="true" />
            <div className="hero-card">
              <div className="hero-card-header">
                <div className="card-logo-mark" aria-hidden="true">
                  <span>I</span>
                </div>
                <div className="hero-card-header-text">
                  <h3>Company Intelligence Search</h3>
                  <p>Powered by CAC and AI</p>
                </div>
              </div>

              <div className="search-row">
                <label htmlFor="company-search" className="visually-hidden">Search company name or RC number</label>
                <input
                  id="company-search"
                  type="text"
                  className="search-input"
                  placeholder="Enter company name or RC number..."
                  defaultValue="Zenith Trading Ltd"
                  aria-label="Company name or RC number"
                  readOnly
                />
                <button className="btn-search" aria-label="Search">
                  <SearchIcon />
                  Search
                </button>
              </div>

              <div className="card-divider" aria-hidden="true" />

              <div className="result-card" role="region" aria-label="Sample search result">
                <div className="result-header">
                  <div>
                    <div className="result-name">Zenith Trading Ltd</div>
                    <div className="result-rc">RC Number: 1234567</div>
                  </div>
                  <span className="badge-active" aria-label="Company status: Active">ACTIVE</span>
                </div>

                <dl className="result-meta">
                  <div className="result-row">
                    <dt className="result-label">Registered</dt>
                    <dd className="result-value">14 March 2018</dd>
                  </div>
                  <div className="result-row">
                    <dt className="result-label">Type</dt>
                    <dd className="result-value">Private Limited Company</dd>
                  </div>
                  <div className="result-row">
                    <dt className="result-label">Risk Level</dt>
                    <dd><span className="badge-low-risk">LOW RISK</span></dd>
                  </div>
                </dl>

                <div className="result-footer">
                  <span className="result-score-label">Risk Score</span>
                  <div className="score-bar-wrap">
                    <div className="score-bar" role="progressbar" aria-valuenow={22} aria-valuemin={0} aria-valuemax={100} aria-label="Risk score 22 out of 100">
                      <div className="score-fill" />
                    </div>
                    <span className="score-num">22/100</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Social Proof Marquee ─────────────────────────────────────── */
function SocialProof() {
  return (
    <section className="proof-section" aria-label="Trusted by">
      <p className="proof-label">
        Used by procurement officers, legal practitioners and financial analysts across Nigeria
      </p>
      <div className="marquee-outer" aria-hidden="true">
        <div className="marquee-track">
          {[...MARQUEE_NAMES, ...MARQUEE_NAMES].map((name, i) => (
            <span key={i} className="marquee-item">
              <span className="marquee-name">{name}</span>
              <span className="marquee-sep" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── How It Works ─────────────────────────────────────────────── */
const STEPS = [
  {
    num: '01',
    icon: <SearchIcon />,
    title: 'Search',
    desc: 'Enter any company name or CAC RC number. Insyght searches the official CAC database and cross-references public records to confirm the company is exactly who they claim to be.',
  },
  {
    num: '02',
    icon: <CreditCardIcon />,
    title: 'Pay',
    desc: 'Pay ₦10,000 securely via Paystack. No subscriptions, no hidden fees, no recurring charges. Each payment gives you one complete company intelligence report.',
  },
  {
    num: '03',
    icon: <ZapIcon />,
    title: 'Know',
    desc: 'Your report is ready in under 2 minutes. Download it as a formatted PDF to share with your team, attach to a vendor file, or present in a board meeting.',
  },
]

function HowItWorks() {
  return (
    <section id="how-it-works" className="section">
      <div className="section-inner">
        <h2 className="section-title">Company due diligence in three simple steps</h2>
        <div className="steps-grid" role="list">
          {STEPS.map(step => (
            <article key={step.num} className="step-card" role="listitem">
              <div className="step-number" aria-hidden="true">STEP {step.num}</div>
              <div className="step-icon-wrap" aria-hidden="true">
                {step.icon}
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── What's Inside a Report ───────────────────────────────────── */
const REPORT_SECTIONS = [
  {
    icon: <BuildingIcon />,
    name: 'Company Identity',
    data: 'RC Number: 1234567 · Zenith Trading Ltd\nStatus: Active · Incorporated: 14 Mar 2018\nRegistered Address: 45 Broad Street, Lagos Island',
  },
  {
    icon: <UsersIcon />,
    name: 'Directors & Ownership',
    data: 'Director: Adeyemi Okafor (CEO, 60%)\nDirector: Chinwe Nwosu (CFO, 40%)\nNo adverse director flags detected',
  },
  {
    icon: <GlobeIcon />,
    name: 'Digital Presence',
    data: 'Website: zenithtradingltd.com (Active)\nLinkedIn: 140 followers · Twitter: @zenithtrading\nSSL Valid · Domain registered 2019',
  },
  {
    icon: <NewsIcon />,
    name: 'News & Mentions',
    data: 'Businessday: 3 mentions (2023 to 2025)\nPunch: No adverse mentions found\nNAN: 1 business feature article',
  },
  {
    icon: <BrainIcon />,
    name: 'AI Risk Summary',
    data: null,
    isAI: true,
  },
]

const FEATURE_ROWS = [
  {
    icon: <BuildingIcon />,
    title: 'Company Identity',
    desc: 'Full CAC registration details including RC number, registered office address, company type, and date of incorporation. Every data point is verified directly against the official CAC database.',
  },
  {
    icon: <UsersIcon />,
    title: 'Directors and Ownership',
    desc: 'Named directors with shareholding percentages, appointment dates, and nationalities. Each profile is cross-referenced for adverse records and Politically Exposed Person connections.',
  },
  {
    icon: <GlobeIcon />,
    title: 'Digital Presence',
    desc: 'Website health, SSL validity, domain registration age, and social media activity. These signals quickly distinguish companies with real commercial operations from those that exist on paper only.',
  },
  {
    icon: <NewsIcon />,
    title: 'News and Media Mentions',
    desc: 'Coverage aggregated from Nigerian business media including Businessday, Punch, Vanguard, and The Cable. Each mention is automatically categorised by sentiment so you can spot red flags at a glance.',
  },
  {
    icon: <BrainIcon />,
    title: 'AI Risk Score and Summary',
    desc: 'An overall risk score from 0 to 100, backed by a plain-English assessment of key risk factors. Designed for decision-makers who need the critical insight before reading the full report.',
  },
]

function ReportSection() {
  return (
    <section id="report" className="section report-section-bg" aria-label="What's inside a report">
      <div className="section-inner">
        <h2 className="section-title left">Everything inside every Insyght company report</h2>
        <div className="report-grid">
          <div className="mock-report" role="img" aria-label="Sample intelligence report preview">
            <div className="mock-report-header">
              <div>
                <div className="mock-report-title">Zenith Trading Ltd</div>
                <div className="mock-report-sub">RC 1234567 · Intelligence Report</div>
              </div>
              <span className="report-stamp">VERIFIED</span>
            </div>
            <div className="mock-report-body">
              {REPORT_SECTIONS.map(sec => (
                <div key={sec.name} className={`report-sec${sec.isAI ? ' report-ai-section' : ''}`}>
                  <div className="report-sec-header">
                    <span className="report-sec-icon" aria-hidden="true">{sec.icon}</span>
                    <span className="report-sec-name">{sec.name}</span>
                  </div>
                  {sec.isAI ? (
                    <>
                      <div className="badge-medium-risk">MEDIUM RISK</div>
                      <div className="report-ai-wrap">
                        <p className="report-ai-text">
                          Zenith Trading Ltd is registered and active with the CAC. Directors
                          show no adverse flags in public records, but the company has limited
                          trading history and a thin digital footprint. We recommend requesting
                          audited financial statements for any engagement above ₦5 million.
                          No litigation records were found in public databases.
                        </p>
                        <div className="report-ai-fade" aria-hidden="true" />
                      </div>
                    </>
                  ) : (
                    <div className="report-data-line">
                      {sec.data.split('\n').map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="feature-rows" role="list">
            {FEATURE_ROWS.map(row => (
              <div key={row.title} className="feature-row" role="listitem">
                <div className="feature-icon-wrap" aria-hidden="true">
                  {row.icon}
                </div>
                <div className="feature-text">
                  <h3>{row.title}</h3>
                  <p>{row.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Pricing ──────────────────────────────────────────────────── */
const SINGLE_FEATURES = [
  'Full CAC registration verification',
  'Directors and shareholder breakdown',
  'Digital presence and web health check',
  'Nigerian media news mentions',
  'AI risk score and plain-English summary',
  'Branded PDF download',
]

const TEAM_FEATURES = [
  '20 reports per month',
  'Team dashboard with shared report history',
  'Company monitoring and change alerts',
  'Priority support',
  'White-label PDF option',
]

function PricingCard({ plan, price, priceNote, desc, features, cta, ctaStyle = 'primary', featured = false, saveBadge = null, popular = null }) {
  return (
    <article className={`pricing-card${featured ? ' featured' : ''}`}>
      {popular && <div className="popular-badge" aria-label="Most popular plan">{popular}</div>}
      {saveBadge && <div className="save-badge" aria-label={saveBadge}>{saveBadge}</div>}
      <div className="plan-name">{plan}</div>
      <div className="plan-price">
        {price}
        {priceNote && <span className="plan-price-per">{priceNote}</span>}
      </div>
      <p className="plan-desc">{desc}</p>
      <div className="pricing-divider" aria-hidden="true" />
      <ul className="features-list" role="list">
        {features.map(f => (
          <li key={f} role="listitem">
            <span className="check-icon"><CheckIcon /></span>
            {f}
          </li>
        ))}
      </ul>
      {ctaStyle === 'primary'
        ? <a href="#hero" className="btn-primary-full">{cta}</a>
        : <a href="mailto:hello@insyght.io" className="btn-outline-full">{cta}</a>
      }
    </article>
  )
}

function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="section-inner">
        <h2 className="section-title">Simple pricing. No subscription required.</h2>
        <div className="pricing-grid">
          <PricingCard
            plan="Single Report"
            price="₦10,000"
            desc="One full intelligence report on any CAC-registered Nigerian company. Pay once, download immediately. No account needed."
            features={SINGLE_FEATURES}
            cta="Get a Report"
          />
          <PricingCard
            plan="Five Reports"
            price="₦40,000"
            desc="Five full company intelligence reports at a better per-report rate. Suited for vendor onboarding, legal due diligence, and active deal pipelines."
            features={SINGLE_FEATURES}
            cta="Get Started"
            featured
            popular="MOST POPULAR"
            saveBadge="Save ₦10,000"
          />
          <PricingCard
            plan="Team Plan"
            price="₦150,000"
            priceNote="/month"
            desc="Designed for law firms, banks, procurement departments, and compliance teams that run regular company checks."
            features={TEAM_FEATURES}
            cta="Contact Sales"
            ctaStyle="outline"
          />
        </div>
      </div>
    </section>
  )
}

/* ── Final CTA ─────────────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="cta-section" aria-labelledby="cta-headline">
      <div className="cta-inner">
        <h2 className="cta-headline" id="cta-headline">
          Don&apos;t sign until you&apos;ve run an Insyght check.
        </h2>
        <p className="cta-sub">Search any CAC-registered Nigerian company and get your report in under 2 minutes. No subscription, no commitment.</p>
        <a href="#hero" className="btn-primary" style={{ fontSize: '1.0625rem', padding: '1rem 2rem' }}
          onClick={e => { e.preventDefault(); document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }) }}>
          Get a Report <ArrowRightIcon />
        </a>
      </div>
    </section>
  )
}

/* ── Footer ────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a href="/" className="wordmark" aria-label="Insyght home">
            Ins<span className="y-wrap">y<span className="y-dot" aria-hidden="true" /></span>ght
          </a>
          <p className="footer-tagline">
            Nigeria&apos;s company intelligence platform. Helping businesses make informed decisions before they commit.
          </p>
        </div>

        <div className="footer-cols">
          <div className="footer-col">
            <h5>Product</h5>
            <ul role="list">
              <li><a href="#how-it-works" onClick={e => { e.preventDefault(); document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }) }}>How it works</a></li>
              <li><a href="#pricing" onClick={e => { e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }) }}>Pricing</a></li>
              <li><a href="#report" onClick={e => { e.preventDefault(); document.getElementById('report')?.scrollIntoView({ behavior: 'smooth' }) }}>Sample Report</a></li>
              <li><a href="#api">API Docs</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            <ul role="list">
              <li><a href="#about">About</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Legal</h5>
            <ul role="list">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#data">Data Policy</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Contact</h5>
            <ul role="list">
              <li><a href="mailto:hello@insyght.io">hello@insyght.io</a></li>
              <li>
                <a href="https://twitter.com/insyght_ng" target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <TwitterIcon /> Twitter
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/company/insyght" target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <LinkedInIcon /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="footer-bottom-inner">
          <p>© 2025 Insyght. A product of BrightSheld Technologies.</p>
        </div>
      </div>
    </footer>
  )
}

/* ── App ───────────────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SocialProof />
        <HowItWorks />
        <ReportSection />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
