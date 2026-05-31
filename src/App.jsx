import { useState, useEffect } from 'react'

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
  <svg width="20" height="20" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

const LicenceIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="14" height="14" rx="2" />
    <polyline points="6 9 8 11 12 7" />
    <line x1="5" y1="5.5" x2="9" y2="5.5" />
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
  'Alpha Procurement Ltd', 'Okafor & Partners', 'First Alliance Capital', 'Greenfield Properties',
  'Meridian Consulting', 'Lagos Legal Group', 'Premier Trade Partners', 'Integrity Advisory',
  'Alpha Procurement Ltd', 'Okafor & Partners', 'First Alliance Capital', 'Greenfield Properties',
  'Meridian Consulting', 'Lagos Legal Group', 'Premier Trade Partners', 'Integrity Advisory',
]

/* ── Intelligence Cloud tags ─────────────────────────────────── */
const INTEL_TAGS = [
  { text: 'CAC Verification',    x: 2,  y: 8,  anim: 'float-a', dur: 7,   delay: 0,    accent: true },
  { text: 'Director Checks',     x: 36, y: 3,  anim: 'float-b', dur: 9,   delay: -3    },
  { text: 'FIRS TIN',            x: 68, y: 8,  anim: 'float-c', dur: 6,   delay: -1.5, accent: true },
  { text: 'BVN Verification',    x: 44, y: 13, anim: 'float-d', dur: 8,   delay: -4,   accent: true },
  { text: 'Shareholder Lookup',  x: 74, y: 16, anim: 'float-d', dur: 11,  delay: -5    },
  { text: 'NAICOM Check',        x: 13, y: 17, anim: 'float-b', dur: 8,   delay: -2.8  },
  { text: 'NCC Licence',         x: 56, y: 1,  anim: 'float-a', dur: 8.5, delay: -7    },
  { text: 'SEC Registration',    x: 1,  y: 42, anim: 'float-c', dur: 8,   delay: -2.2  },
  { text: 'PEP Screening',       x: 1,  y: 57, anim: 'float-a', dur: 9,   delay: -1.8, accent: true },
  { text: 'CBN Compliance',      x: 74, y: 37, anim: 'float-d', dur: 10,  delay: -4    },
  { text: 'NIN Check',           x: 80, y: 50, anim: 'float-b', dur: 7.5, delay: -6.5  },
  { text: 'Annual Returns',      x: 2,  y: 68, anim: 'float-a', dur: 7.5, delay: -1    },
  { text: 'NAFDAC Licence',      x: 71, y: 60, anim: 'float-b', dur: 9.5, delay: -6    },
  { text: 'SCUML Check',         x: 4,  y: 83, anim: 'float-c', dur: 8,   delay: -3.5  },
  { text: 'KYB Compliance',      x: 29, y: 86, anim: 'float-d', dur: 7,   delay: -2,   accent: true },
  { text: 'Sanctions Check',     x: 43, y: 93, anim: 'float-a', dur: 10,  delay: -5.2  },
  { text: 'Domain Intelligence', x: 55, y: 81, anim: 'float-a', dur: 11,  delay: -4.5  },
  { text: 'AI Risk Score',       x: 72, y: 78, anim: 'float-b', dur: 6.5, delay: -0.8, accent: true },
  { text: 'Media Scan',          x: 19, y: 76, anim: 'float-c', dur: 9,   delay: -5.5  },
]

/* ── Navigation ──────────────────────────────────────────────── */
function Nav() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [scrolled, setScrolled]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleDrawer = () => setDrawerOpen(v => !v)
  const closeDrawer  = () => setDrawerOpen(false)

  const handleNavLink = (e, id) => {
    e.preventDefault()
    closeDrawer()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`nav${scrolled ? ' nav-scrolled' : ''}`} aria-label="Main navigation">
        <div className="nav-inner">
          <a href="/" className="wordmark" aria-label="Insyght home">
            Ins<span className="y-wrap">y<span className="y-dot" aria-hidden="true" /></span>ght
          </a>

          <div className="nav-right">
            <ul className="nav-links" role="list">
              <li><a href="#who-uses" onClick={e => handleNavLink(e, 'who-uses')}>Who it&apos;s for</a></li>
              <li><a href="#how-it-works" onClick={e => handleNavLink(e, 'how-it-works')}>How it works</a></li>
              <li><a href="#pricing" onClick={e => handleNavLink(e, 'pricing')}>Pricing</a></li>
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
          <a href="#who-uses" onClick={e => handleNavLink(e, 'who-uses')}>Who it&apos;s for</a>
          <a href="#how-it-works" onClick={e => handleNavLink(e, 'how-it-works')}>How it works</a>
          <a href="#pricing" onClick={e => handleNavLink(e, 'pricing')}>Pricing</a>
          <a href="#hero" className="drawer-cta" onClick={e => handleNavLink(e, 'hero')}>Get a Report</a>
        </div>
      </div>
    </>
  )
}

/* ── Animated score counter hook ──────────────────────────────── */
function useCountUp(target, { delay = 0, duration = 1200 } = {}) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    let start = null
    let rafId
    const timeout = setTimeout(() => {
      const step = ts => {
        if (!start) start = ts
        const progress = Math.min((ts - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setValue(Math.round(eased * target))
        if (progress < 1) rafId = requestAnimationFrame(step)
      }
      rafId = requestAnimationFrame(step)
    }, delay)
    return () => { clearTimeout(timeout); cancelAnimationFrame(rafId) }
  }, [target, delay, duration])
  return value
}

/* ── Hero ─────────────────────────────────────────────────────── */
function Hero() {
  const score = useCountUp(18, { delay: 900, duration: 1400 })

  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-badge" aria-label="Product category">
            <span className="badge-dot" aria-hidden="true" />
            Nigerian Company Intelligence
          </div>

          <h1 className="hero-headline">
            Know who you&apos;re doing business with.
          </h1>

          <p className="hero-subheadline">
            Before you sign a contract or release payment to any Nigerian company, run an
            Insyght check. Every report covers CAC registration, directors and shareholders,
            director BVN and NIN identity verification, PEP and sanctions screening, FIRS
            tax compliance, sector licensing from CBN to NAFDAC to SEC, digital footprint,
            media mentions, and an AI risk score. One PDF. Under 2 minutes.
          </p>

          <div className="hero-buttons">
            <a href="#hero" className="btn-primary">
              Run a Free Search <ArrowRightIcon />
            </a>
            <a
              href="#report"
              className="btn-outline"
              onClick={e => { e.preventDefault(); document.getElementById('report')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              See Sample Report
            </a>
          </div>

          <div className="trust-row" role="list">
            {['CAC to SEC Verified', '13 Intelligence Checks', 'PDF in Under 2 Minutes'].map(label => (
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
                    <div className="result-rc">RC Number: 1087432</div>
                  </div>
                  <span className="badge-active" aria-label="Company status: Active">ACTIVE</span>
                </div>

                <dl className="result-meta">
                  <div className="result-row">
                    <dt className="result-label">Incorporated</dt>
                    <dd className="result-value">22 September 2017</dd>
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
                    <div className="score-bar" role="progressbar" aria-valuenow={score} aria-valuemin={0} aria-valuemax={100} aria-label={`Risk score ${score} out of 100`}>
                      <div className="score-fill" style={{ width: `${score}%` }} />
                    </div>
                    <span className="score-num">{score}/100</span>
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

/* ── Intelligence Cloud ──────────────────────────────────────── */
function IntelligenceCloud() {
  return (
    <section className="intel-cloud-section" aria-label="Intelligence capabilities">
      {/* Mobile: pill grid + text */}
      <div className="intel-cloud-mobile">
        <div className="intel-inner-mobile">
          <h2 className="intel-cloud-headline">
            13 intelligence checks.<br />One report. Under 2 minutes.
          </h2>
          <p className="intel-cloud-sub">
            Every Insyght report runs all of these automatically, against official Nigerian government sources.
          </p>
          <div className="intel-tag-grid" aria-hidden="true">
            {INTEL_TAGS.map((tag, i) => (
              <span
                key={tag.text}
                className={`intel-tag${tag.accent ? ' accent' : ''}`}
                style={{ animationDelay: `${i * 0.055}s` }}
              >
                {tag.text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: floating scattered cloud */}
      <div className="intel-cloud-canvas" aria-hidden="true">
        {INTEL_TAGS.map(tag => (
          <span
            key={tag.text}
            className={`intel-tag${tag.accent ? ' accent' : ''}`}
            style={{
              position: 'absolute',
              left: `${tag.x}%`,
              top:  `${tag.y}%`,
              animation: `${tag.anim} ${tag.dur}s ease-in-out ${tag.delay}s infinite`,
            }}
          >
            {tag.text}
          </span>
        ))}
        <div className="intel-cloud-center">
          <h2 className="intel-cloud-headline">
            13 intelligence checks.<br />One report. Under 2 minutes.
          </h2>
          <p className="intel-cloud-sub">
            Every Insyght report runs all of these automatically, against official Nigerian government sources.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ── Who It's Built For ───────────────────────────────────────── */
const PERSONAS = [
  {
    icon: <BuildingIcon />,
    role: 'Procurement Officers',
    headline: 'One bad vendor approval can end your career.',
    body: 'Insyght gives procurement teams a fast, documentable way to verify any supplier before a payment is raised or a contract is signed. Every check creates a paper trail your audit committee can see.',
  },
  {
    icon: <FileIcon />,
    role: 'Lawyers and Law Firms',
    headline: 'Your client is about to sign. Do you know who is on the other side?',
    body: 'Run a full counterparty check before any contract, acquisition, or partnership agreement is finalised. Reports are available in your firm\'s branding so the due diligence looks entirely yours.',
  },
  {
    icon: <CreditCardIcon />,
    role: 'Banks and Fintechs',
    headline: "The CBN's 2026 KYB mandate is not optional.",
    body: 'Insyght covers the full CBN KYB scope: CAC status, directors, BVN and NIN identity checks for every named director, PEP and sanctions screening, and sector licensing. Every verification is documented and downloadable.',
  },
  {
    icon: <ShieldIcon />,
    role: 'Investors and Individuals',
    headline: 'Every fake investment company in Nigeria has a CAC number.',
    body: 'A CAC registration number does not mean a company is licensed to take your money. Insyght checks SEC registration, actual operational history, and director track record before you commit a single naira.',
  },
]

function WhoUsesInsyght() {
  return (
    <section id="who-uses" className="section who-section">
      <div className="section-inner">
        <h2 className="section-title reveal">Built for professionals who cannot afford to be wrong</h2>
        <div className="persona-grid" role="list">
          {PERSONAS.map((p, i) => (
            <article
              key={p.role}
              className="persona-card reveal"
              role="listitem"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="persona-icon-wrap" aria-hidden="true">
                {p.icon}
              </div>
              <div className="persona-role">{p.role}</div>
              <p className="persona-headline">{p.headline}</p>
              <p className="persona-body">{p.body}</p>
            </article>
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
    desc: 'Enter any company name or CAC RC number. A free preview shows basic registration status immediately so you can confirm the company exists before paying.',
  },
  {
    num: '02',
    icon: <CreditCardIcon />,
    title: 'Pay',
    desc: 'Pay ₦10,000 securely via Flutterwave. No subscriptions, no hidden fees, no recurring charges. Each payment gives you one complete 13-check intelligence report.',
  },
  {
    num: '03',
    icon: <ZapIcon />,
    title: 'Know',
    desc: 'Your full report is ready in under 2 minutes. View it on screen immediately, download it as a formatted PDF, and share it with your team or attach it to your vendor file.',
  },
]

function HowItWorks() {
  return (
    <section id="how-it-works" className="section">
      <div className="section-inner">
        <h2 className="section-title reveal">Company due diligence in three simple steps</h2>
        <div className="steps-grid" role="list">
          {STEPS.map((step, i) => (
            <article
              key={step.num}
              className="step-card reveal"
              role="listitem"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
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

/* ── Verification Flow ───────────────────────────────────────── */
const FLOW_NODES = [
  { label: 'Company name or RC number entered',       type: 'start'  },
  { label: 'CAC registration status verified',        type: 'check',  badge: 'ACTIVE'           },
  { label: 'Directors and ownership cross referenced',type: 'check'  },
  { label: 'Director BVN and NIN identity verified',  type: 'check'  },
  { label: 'FIRS TIN and annual returns checked',     type: 'check'  },
  { label: 'PEP and sanctions screening completed',   type: 'check',  badge: 'CLEAR'            },
  { label: 'Sector licensing confirmed',              type: 'multi',  tags: ['CBN', 'NAFDAC', 'SEC', 'SCUML'] },
  { label: 'Domain age and media scan completed',     type: 'check'  },
  { label: 'AI risk score calculated',                type: 'output', badge: 'LOW RISK · 18/100' },
]

function VerificationFlow() {
  return (
    <section className="flow-section" aria-label="Verification process">
      <div className="flow-inner">
        <div className="flow-text reveal">
          <h2 className="flow-title">
            Every check runs automatically, in the right order.
          </h2>
          <p className="flow-sub">
            The moment payment is confirmed, Insyght runs all 13 verification
            steps in sequence — CAC, director identity, tax, PEP screening,
            sector licensing, digital presence, and AI analysis. No manual steps, no waiting.
          </p>
        </div>
        <div className="flow-diagram" aria-label="Verification steps">
          {FLOW_NODES.map((node, i) => (
            <div key={i} className={`flow-node flow-node-${node.type}`} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="flow-node-dot" aria-hidden="true" />
              <div className="flow-node-content">
                <span className="flow-node-label">{node.label}</span>
                {node.badge && (
                  <span className={`flow-badge${node.type === 'output' ? ' flow-badge-green' : ''}`}>
                    {node.badge}
                  </span>
                )}
                {node.tags && (
                  <div className="flow-tags" aria-label="Covered bodies">
                    {node.tags.map(tag => <span key={tag} className="flow-tag">{tag}</span>)}
                  </div>
                )}
              </div>
              {i < FLOW_NODES.length - 1 && <div className="flow-connector" aria-hidden="true" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Use Case Cards ───────────────────────────────────────────── */
const USE_CASES = [
  {
    iconBg: '#E8F5EE', iconColor: '#2D6A4F',
    icon: (
      <svg width="26" height="26" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 1.5L2.5 4.5v5c0 3.5 2.8 6.5 6.5 7 3.7-.5 6.5-3.5 6.5-7v-5L9 1.5z"/>
        <polyline points="6 9 8 11 12 7"/>
      </svg>
    ),
    headline: 'For Due Diligence',
    body: 'Before your client signs or your organisation pays, you have a timestamped downloadable record of exactly what was verified. Every Insyght check is audit-ready from day one.',
  },
  {
    iconBg: '#EEF2FF', iconColor: '#4361EE',
    icon: (
      <svg width="26" height="26" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="14" height="12" rx="1"/>
        <path d="M6 4V2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V4"/>
        <line x1="6" y1="9" x2="12" y2="9"/>
        <line x1="6" y1="12" x2="10" y2="12"/>
      </svg>
    ),
    headline: 'For KYB Compliance',
    body: "CBN's 2026 KYB mandate requires more than a CAC check. Insyght covers director BVN and NIN identity verification plus PEP and sanctions screening, giving compliance teams a complete, documented process for every merchant and partner onboarded.",
  },
  {
    iconBg: '#FFF4E6', iconColor: '#C8963E',
    icon: (
      <svg width="26" height="26" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="7" cy="7" r="4.5"/>
        <line x1="10.5" y1="10.5" x2="14" y2="14"/>
      </svg>
    ),
    headline: 'For Fraud Prevention',
    body: 'Most fraud in Nigeria hides behind a legitimate CAC number. Insyght checks what a basic search cannot — sector licences, tax compliance, director flags, and media history.',
  },
  {
    iconBg: '#F3EEFF', iconColor: '#7C3AED',
    icon: (
      <svg width="26" height="26" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="7" cy="6" r="2.5"/>
        <path d="M1 16c0-3.3 2.7-6 6-6"/>
        <circle cx="13" cy="6" r="2.5"/>
        <path d="M17 16c0-3.3-2.7-6-6-6"/>
      </svg>
    ),
    headline: 'For Investment Safety',
    body: 'A company can be registered and still be a risk. Insyght checks ownership changes, annual returns compliance, and SEC licensing before you commit a single naira.',
  },
]

function UseCaseCards() {
  return (
    <section className="usecases-section">
      <div className="section-inner">
        <h2 className="section-title reveal">One platform. Every use case.</h2>
        <div className="usecases-grid" role="list">
          {USE_CASES.map((uc, i) => (
            <article
              key={uc.headline}
              className="usecase-card reveal"
              role="listitem"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div
                className="usecase-icon-circle"
                style={{ background: uc.iconBg, color: uc.iconColor }}
                aria-hidden="true"
              >
                {uc.icon}
              </div>
              <h3 className="usecase-headline">{uc.headline}</h3>
              <p className="usecase-body">{uc.body}</p>
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
    data: 'RC 1087432 · Zenith Trading Ltd\nStatus: Active · Incorporated: 22 Sep 2017\nRegistered Address: 14 Broad Street, Lagos Island',
  },
  {
    icon: <UsersIcon />,
    name: 'Directors and Ownership',
    data: 'Director: Adeyemi Okafor (CEO, 60%)\nDirector: Chinwe Nwosu (CFO, 40%)\nBVN verified · NIN verified · No PEP flags',
  },
  {
    icon: <ShieldIcon />,
    name: 'Tax and Compliance',
    data: 'FIRS TIN: 1008432001\nVAT Registered: Yes\nAnnual Returns: Filed (2023, 2024)',
  },
  {
    icon: <GlobeIcon />,
    name: 'Digital Presence',
    data: 'Website: zenithtradingltd.com (Active)\nDomain Age: 6 years · SSL: Valid\nLinkedIn: 140 followers · Google Business: Listed',
  },
  {
    icon: <NewsIcon />,
    name: 'News and Media',
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
    title: 'Company Identity and Status',
    desc: 'Full CAC registration details including RC number, registered address, company type, and incorporation date. Crucially, Insyght surfaces companies that are struck off or inactive, a status that does not always appear in a basic CAC search.',
  },
  {
    icon: <UsersIcon />,
    title: 'Directors and Ownership',
    desc: 'Named directors with shareholding percentages, appointment dates, and nationalities. Each profile is cross referenced for adverse records and last-minute ownership changes before a transaction, which is one of the most common fraud patterns in Nigeria.',
  },
  {
    icon: <ShieldIcon />,
    title: 'Director Identity Verification',
    desc: 'Every named director is verified against BVN and NIN databases to confirm they are real, living individuals with matching records. Combined with a PEP and sanctions screening, this closes the gap between knowing who owns a company on paper and knowing whether those individuals represent a risk.',
  },
  {
    icon: <ShieldIcon />,
    title: 'Tax and Regulatory Compliance',
    desc: 'FIRS Tax Identification Number verification and VAT registration status. Annual returns filing history flagged by compliance level. A company claiming active commercial operations with no traceable TIN is a significant red flag.',
  },
  {
    icon: <LicenceIcon />,
    title: 'Sector Licensing Checks',
    desc: 'For regulated industries, Insyght verifies licences directly: CBN for financial services, NAFDAC for food and pharmaceuticals, SEC for investment and capital markets, SCUML for designated non-financial businesses. A company operating in a regulated sector without a licence is breaking the law regardless of their CAC status.',
  },
  {
    icon: <GlobeIcon />,
    title: 'Digital Presence and Media',
    desc: 'Website health, SSL validity, domain registration age, and social media activity. Insyght automatically flags domain age against company registration date. A company claiming seven years of operation whose website was registered three months ago has a problem.',
  },
  {
    icon: <BrainIcon />,
    title: 'AI Risk Score and Summary',
    desc: 'An overall risk score from 0 to 100, backed by a plain English assessment written like a senior analyst. Every data point across all sections is synthesised into a single verdict: Low, Medium, or High risk, with specific reasons stated clearly.',
  },
]

function ReportSection() {
  return (
    <section id="report" className="section report-section-bg" aria-label="What's inside a report">
      <div className="section-inner">
        <h2 className="section-title left reveal">Everything inside every Insyght report</h2>
        <div className="report-grid">
          <div className="mock-report reveal" role="img" aria-label="Sample intelligence report preview">
            <div className="mock-report-header">
              <div>
                <div className="mock-report-title">Zenith Trading Ltd</div>
                <div className="mock-report-sub">RC 1087432 · Intelligence Report</div>
              </div>
              <span className="report-stamp">VERIFIED</span>
            </div>
            <div className="mock-report-body">
              {REPORT_SECTIONS.map((sec, i) => (
                <div
                  key={sec.name}
                  className={`report-sec${sec.isAI ? ' report-ai-section' : ''}`}
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="report-sec-header">
                    <span className="report-sec-icon" aria-hidden="true">{sec.icon}</span>
                    <span className="report-sec-name">{sec.name}</span>
                  </div>
                  {sec.isAI ? (
                    <>
                      <div className="badge-low-risk" style={{ marginLeft: '1.625rem', marginBottom: '0.5rem', display: 'inline-block' }}>LOW RISK</div>
                      <div className="report-ai-wrap">
                        <p className="report-ai-text">
                          Zenith Trading Ltd is registered and active with the CAC. All annual
                          returns are filed and current. Directors show no adverse flags in public
                          records and the company holds a valid FIRS TIN. Domain age matches
                          incorporation date. No litigation or adverse media found. Risk level: Low.
                        </p>
                        <div className="report-ai-fade" aria-hidden="true" />
                      </div>
                    </>
                  ) : (
                    <div className="report-data-line">
                      {sec.data.split('\n').map((line, j) => (
                        <div key={j}>{line}</div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="feature-rows" role="list">
            {FEATURE_ROWS.map((row, i) => (
              <div
                key={row.title}
                className="feature-row reveal"
                role="listitem"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
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
const REPORT_FEATURES = [
  'Full CAC registration and status check',
  'Directors and full shareholder breakdown',
  'Director BVN and NIN identity verification',
  'PEP and sanctions screening',
  'FIRS TIN and annual returns compliance',
  'Sector licensing verification (CBN, NAFDAC, SEC and more)',
  'Digital presence and domain intelligence',
  'News and media sentiment scan',
  'AI risk score and plain English summary',
  'Branded PDF download',
]

const TEAM_FEATURES = [
  '20 reports included per month',
  'Additional reports at ₦4,000 each',
  'Team dashboard with shared report history',
  'Multiple user accounts',
  'Company monitoring and change alerts',
  'Priority support',
  'White label PDF option',
]

function PricingCard({ plan, price, priceNote, sub, desc, features, cta, ctaStyle = 'primary', featured = false, saveBadge = null, popular = null, revealDelay = 0 }) {
  return (
    <article
      className={`pricing-card${featured ? ' featured' : ''} reveal`}
      style={{ transitionDelay: `${revealDelay}s` }}
    >
      {popular && <div className="popular-badge" aria-label="Most popular plan">{popular}</div>}
      {saveBadge && <div className="save-badge" aria-label={saveBadge}>{saveBadge}</div>}
      <div className="plan-name">{plan}</div>
      <div className="plan-price">
        {price}
        {priceNote && <span className="plan-price-per">{priceNote}</span>}
      </div>
      {sub && <div className="plan-sub">{sub}</div>}
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
        <h2 className="section-title reveal">Simple pricing. No subscription required.</h2>
        <div className="pricing-grid pricing-grid-4">
          <PricingCard
            plan="Single Report"
            price="₦10,000"
            sub="per report"
            desc="One full intelligence report on any CAC-registered Nigerian company. Pay once, download immediately."
            features={REPORT_FEATURES}
            cta="Get a Report"
            revealDelay={0}
          />
          <PricingCard
            plan="Five Reports"
            price="₦40,000"
            sub="₦8,000 per report"
            desc="Five full reports at a better rate. Ideal for occasional professional use and single-matter due diligence."
            features={REPORT_FEATURES}
            cta="Get Started"
            saveBadge="Save ₦10,000"
            revealDelay={0.1}
          />
          <PricingCard
            plan="Ten Reports"
            price="₦75,000"
            sub="₦7,500 per report"
            desc="Ten reports at the best per-report rate. Suited for law firms, procurement teams, and active deal pipelines."
            features={REPORT_FEATURES}
            cta="Get Started"
            featured
            popular="BEST VALUE"
            saveBadge="Save ₦25,000"
            revealDelay={0.2}
          />
          <PricingCard
            plan="Team Plan"
            price="₦150,000"
            priceNote="/month"
            desc="For law firms, banks, and procurement departments running regular company checks."
            features={TEAM_FEATURES}
            cta="Contact Sales"
            ctaStyle="outline"
            revealDelay={0.3}
          />
        </div>
        <p className="pricing-note">
          Need more than 50 reports per month or API access?{' '}
          <a href="mailto:hello@insyght.io">Contact us for Enterprise pricing.</a>
        </p>
      </div>
    </section>
  )
}

/* ── Final CTA ─────────────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="cta-section" aria-labelledby="cta-headline">
      <div className="cta-noise" aria-hidden="true" />
      <div className="cta-inner">
        <h2 className="cta-headline" id="cta-headline">
          Don&apos;t sign until you&apos;ve run an Insyght check.
        </h2>
        <p className="cta-sub">
          Search any CAC-registered Nigerian company and get your full intelligence report
          in under 2 minutes. No subscription, no commitment.
        </p>
        <a
          href="#hero"
          className="btn-primary cta-btn"
          onClick={e => { e.preventDefault(); document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }) }}
        >
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
              <li><a href="#who-uses" onClick={e => { e.preventDefault(); document.getElementById('who-uses')?.scrollIntoView({ behavior: 'smooth' }) }}>Who it&apos;s for</a></li>
              <li><a href="#how-it-works" onClick={e => { e.preventDefault(); document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }) }}>How it works</a></li>
              <li><a href="#report" onClick={e => { e.preventDefault(); document.getElementById('report')?.scrollIntoView({ behavior: 'smooth' }) }}>Sample Report</a></li>
              <li><a href="#pricing" onClick={e => { e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }) }}>Pricing</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            <ul role="list">
              <li><a href="#about">About Insyght</a></li>
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
  useEffect(() => {
    if (!window.IntersectionObserver) return
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed')
          observer.unobserve(e.target)
        }
      }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SocialProof />
        <IntelligenceCloud />
        <WhoUsesInsyght />
        <HowItWorks />
        <VerificationFlow />
        <ReportSection />
        <UseCaseCards />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
