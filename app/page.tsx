"use client";

import { useState, FormEvent } from "react";

const LOOPS_ENDPOINT =
  "https://app.loops.so/api/newsletter-form/cmmo0aiq02lh0i3kqvdpjzmp";

function WaitlistForm({ size = "large" }: { size?: "large" | "small" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const body = new URLSearchParams({ email });
      const res = await fetch(LOOPS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        style={{
          background: "rgba(45,110,247,0.1)",
          border: "1px solid rgba(45,110,247,0.3)",
          borderRadius: 12,
          padding: "16px 24px",
          textAlign: "center",
          color: "#5b8fff",
          fontWeight: 500,
        }}
      >
        ✓ You&apos;re on the list! We&apos;ll be in touch soon.
      </div>
    );
  }

  const isLarge = size === "large";

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
      <input
        className="input-field"
        type="email"
        placeholder="you@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{
          padding: isLarge ? "14px 18px" : "11px 16px",
          fontSize: isLarge ? 16 : 14,
          flex: 1,
          minWidth: 220,
        }}
      />
      <button
        className="btn-primary"
        type="submit"
        disabled={status === "loading"}
        style={{ padding: isLarge ? "14px 28px" : "11px 22px", fontSize: isLarge ? 15 : 14 }}
      >
        {status === "loading" ? "Joining…" : "Join the Waitlist"}
        {status !== "loading" && (
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
      {status === "error" && (
        <p style={{ color: "#f87171", fontSize: 13, width: "100%" }}>
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}

const steps = [
  {
    n: "01",
    icon: "🔗",
    title: "Connect Crossbeam",
    desc: "Link your Crossbeam instance in seconds via API. ECOLED instantly syncs all your partner overlap accounts.",
  },
  {
    n: "02",
    icon: "⚡",
    title: "Score Your Overlaps",
    desc: "A configurable scoring engine ranks accounts by fit, intent, and partnership stage — no more spreadsheet guessing.",
  },
  {
    n: "03",
    icon: "🤖",
    title: "AI Research Briefs",
    desc: "One click generates a full account brief: company summary, buyer personas, partner angle, and custom talking points.",
  },
  {
    n: "04",
    icon: "📬",
    title: "Launch Co-Sell Outreach",
    desc: "Send personalized co-sell sequences via email (Instantly) or LinkedIn (HeyReach). You approve every message first.",
  },
  {
    n: "05",
    icon: "📊",
    title: "Track Attribution",
    desc: "See exactly which deals were influenced by partner overlaps. Close the loop on every pipeline contribution.",
  },
];

const features = [
  {
    icon: "🎯",
    title: "Priority Scoring",
    desc: "Weighted scoring rules surface your highest-value overlaps automatically. Focus on accounts that will close, not just accounts that exist.",
  },
  {
    icon: "🧠",
    title: "Claude-Powered Research",
    desc: "Every account gets an AI brief with company background, key contacts, partnership angle, and ready-to-use talking points.",
  },
  {
    icon: "✍️",
    title: "Human-in-the-Loop",
    desc: "You approve every outreach message before it sends. AI does the heavy lifting; you stay in control of your relationships.",
  },
  {
    icon: "🔄",
    title: "Auto-Sync Every 6 Hours",
    desc: "Crossbeam data stays fresh automatically. New overlaps surface in real time — no manual exports, ever.",
  },
  {
    icon: "📤",
    title: "Multi-Channel Outreach",
    desc: "Email via Instantly or LinkedIn via HeyReach — your choice. One workflow, two channels, full attribution.",
  },
  {
    icon: "📈",
    title: "Pipeline Attribution",
    desc: "Know exactly which partner overlaps are moving pipeline. Prove the ROI of your partnership program with hard data.",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    desc: "Try ECOLED with no commitment.",
    features: [
      "100 overlaps / month",
      "1 user seat",
      "Crossbeam sync",
      "Basic scoring",
      "AI research briefs",
    ],
    cta: "Join Waitlist",
    featured: false,
  },
  {
    name: "Growth",
    price: "$299",
    period: "/month",
    desc: "For partnership teams ready to scale.",
    features: [
      "1,000 overlaps / month",
      "1 user seat",
      "Advanced scoring rules",
      "Unlimited AI briefs",
      "Email + LinkedIn outreach",
      "Pipeline attribution",
      "Priority support",
    ],
    cta: "Join Waitlist",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For large partnership teams.",
    features: [
      "Unlimited overlaps",
      "Unlimited seats",
      "Custom scoring models",
      "Dedicated onboarding",
      "SLA + SSO",
      "Custom integrations",
    ],
    cta: "Join Waitlist",
    featured: false,
  },
];


const faqs = [
  {
    q: "Do I need to already use Crossbeam?",
    a: "Yes — ECOLED is built on top of Crossbeam as its core data source. If your company uses Crossbeam for partner overlap data, ECOLED automates everything that happens next.",
  },
  {
    q: "Does ECOLED replace Crossbeam or Instantly?",
    a: "No. ECOLED sits on top of your existing stack. Crossbeam provides the overlap data. Instantly and HeyReach handle message delivery. ECOLED connects them and adds AI scoring and research.",
  },
  {
    q: "Will outreach be sent automatically?",
    a: "Never without your approval. Every AI-generated message goes through your review queue. You can edit, approve, or reject before anything is sent.",
  },
  {
    q: "How does the AI research work?",
    a: "ECOLED sends account data to the Claude API (Anthropic) which generates a structured brief: company overview, ideal buyer persona, partnership angle, and ready-to-send talking points.",
  },
  {
    q: "When will ECOLED be available?",
    a: "We're in private beta. Join the waitlist and you'll be among the first to get access — with founder-level onboarding included.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>

      {/* NAV */}
      <nav className="nav-bar">
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: "linear-gradient(135deg, #2d6ef7, #1a55d8)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 16, fontWeight: 800, color: "white",
            }}>E</div>
            <span style={{ fontWeight: 700, fontSize: 18, color: "var(--text)", letterSpacing: "-0.02em" }}>
              ECOLED
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <a href="#how-it-works" style={{ color: "var(--text-muted)", fontSize: 14, textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
            >How it works</a>
            <a href="#pricing" style={{ color: "var(--text-muted)", fontSize: 14, textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
            >Pricing</a>
            <a href="#waitlist" className="btn-primary" style={{ padding: "9px 20px", fontSize: 14 }}>
              Get Early Access
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-bg" style={{ paddingTop: 160, paddingBottom: 100, textAlign: "center", position: "relative" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 24px" }}>
          <div className="badge animate-fade-up" style={{ marginBottom: 28, display: "inline-flex" }}>
            <span className="badge-dot" />
            Now in private beta · Join the waitlist
          </div>

          <h1 className="animate-fade-up delay-100" style={{
            fontSize: "clamp(40px, 7vw, 72px)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: 24,
          }}>
            <span className="text-gradient">Turn Crossbeam Overlaps</span>
            <br />into Revenue — on Autopilot
          </h1>

          <p className="animate-fade-up delay-200" style={{
            fontSize: "clamp(17px, 2.5vw, 20px)",
            color: "var(--text-muted)",
            lineHeight: 1.65,
            marginBottom: 48,
            maxWidth: 600,
            margin: "0 auto 48px",
          }}>
            ECOLED automates the full partner-led growth workflow. Score overlaps,
            generate AI research briefs, and launch personalized co-sell outreach —
            all without leaving your browser.
          </p>

          <div className="animate-fade-up delay-300" style={{ maxWidth: 520, margin: "0 auto 20px" }}>
            <WaitlistForm size="large" />
          </div>

          <p className="animate-fade-up delay-400" style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 16 }}>
            Free to start · No credit card required · Built for Crossbeam users
          </p>
        </div>

        {/* Mock dashboard preview */}
        <div className="animate-fade-up delay-400 animate-float" style={{
          maxWidth: 900,
          margin: "72px auto 0",
          padding: "0 24px",
        }}>
          <div style={{
            background: "rgba(13, 21, 57, 0.8)",
            border: "1px solid rgba(45,110,247,0.2)",
            borderRadius: 20,
            overflow: "hidden",
            boxShadow: "0 40px 120px rgba(0,0,0,0.5), 0 0 60px rgba(45,110,247,0.1)",
          }}>
            {/* Window chrome */}
            <div style={{
              background: "rgba(255,255,255,0.04)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              padding: "12px 20px",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
              <div style={{ flex: 1, textAlign: "center", fontSize: 12, color: "var(--text-muted)" }}>
                app.ecoled.io — Accounts Dashboard
              </div>
            </div>
            {/* Dashboard content */}
            <div style={{ padding: "28px 28px 20px", textAlign: "left" }}>
              {/* Stats row */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 24 }}>
                {[
                  { label: "Total Overlaps", value: "847", change: "+12%" },
                  { label: "High Priority", value: "124", change: "+8%" },
                  { label: "Outreach Sent", value: "56", change: "+23%" },
                  { label: "Deals Influenced", value: "$284K", change: "+31%" },
                ].map((stat) => (
                  <div key={stat.label} style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 12,
                    padding: "16px",
                  }}>
                    <p style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.08em" }}>{stat.label}</p>
                    <p style={{ fontSize: 22, fontWeight: 700, color: "white", marginBottom: 4 }}>{stat.value}</p>
                    <p style={{ fontSize: 11, color: "#34d399" }}>{stat.change} this month</p>
                  </div>
                ))}
              </div>
              {/* Account rows */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 120px", gap: 12, padding: "0 12px", fontSize: 11, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  <span>Company</span><span>Score</span><span>Partner</span><span>Stage</span><span>Action</span>
                </div>
                {[
                  { name: "Acme Corp", domain: "acme.com", score: 94, partner: "HubSpot", stage: "Prospect", color: "#34d399" },
                  { name: "Globex Inc", domain: "globex.io", score: 87, partner: "Apollo", stage: "Customer", color: "#60a5fa" },
                  { name: "Initech Ltd", domain: "initech.com", score: 81, partner: "LeadIQ", stage: "Prospect", color: "#a78bfa" },
                ].map((row) => (
                  <div key={row.name} style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr 1fr 1fr 120px",
                    gap: 12,
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 10,
                    padding: "14px 12px",
                    alignItems: "center",
                    fontSize: 13,
                  }}>
                    <div>
                      <p style={{ color: "white", fontWeight: 600 }}>{row.name}</p>
                      <p style={{ fontSize: 11, color: "var(--text-muted)" }}>{row.domain}</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <div style={{ width: 32, height: 32, borderRadius: 6, background: `${row.color}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: row.color }}>{row.score}</div>
                    </div>
                    <span style={{ color: "var(--text-muted)" }}>{row.partner}</span>
                    <span style={{ background: "rgba(255,255,255,0.06)", borderRadius: 6, padding: "3px 8px", fontSize: 11, color: "var(--text-muted)", display: "inline-block" }}>{row.stage}</span>
                    <button style={{ background: "rgba(45,110,247,0.15)", border: "1px solid rgba(45,110,247,0.3)", borderRadius: 8, padding: "6px 12px", fontSize: 11, color: "#5b8fff", cursor: "pointer", fontWeight: 600 }}>Research →</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* STATS */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 2 }}>
            {[
              { value: "10x", label: "Faster than manual outreach" },
              { value: "24/7", label: "Overlap monitoring & sync" },
              { value: "100%", label: "Human-approved outreach" },
              { value: "$0", label: "To get started" },
            ].map((stat, i) => (
              <div key={i} style={{
                textAlign: "center",
                padding: "40px 24px",
                borderLeft: i > 0 ? "1px solid var(--border)" : "none",
              }}>
                <div className="stat-number" style={{ marginBottom: 8 }}>{stat.value}</div>
                <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.5 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="badge" style={{ marginBottom: 16, display: "inline-flex" }}>How It Works</div>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16 }}>
              From Crossbeam data to closed deals
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: 17, maxWidth: 520, margin: "0 auto", lineHeight: 1.6 }}>
              A fully automated workflow that runs 24/7 — so your partnership team can focus on relationships, not spreadsheets.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {steps.map((step, i) => (
              <div key={i} style={{ display: "flex", gap: 32, alignItems: "flex-start", position: "relative", paddingBottom: i < steps.length - 1 ? 48 : 0 }}>
                {/* Left: number + line */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div className="step-number">{step.n}</div>
                  {i < steps.length - 1 && (
                    <div style={{ width: 2, flex: 1, marginTop: 12, background: "linear-gradient(180deg, rgba(45,110,247,0.4) 0%, rgba(45,110,247,0.05) 100%)", minHeight: 40 }} />
                  )}
                </div>
                {/* Right: content */}
                <div className="card card-hover" style={{ flex: 1, padding: "28px 32px", display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 28 }}>{step.icon}</span>
                  <div>
                    <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{step.title}</h3>
                    <p style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.6 }}>{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* FEATURES */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="badge" style={{ marginBottom: 16, display: "inline-flex" }}>Features</div>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16 }}>
              Everything your partnership team needs
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {features.map((f, i) => (
              <div key={i} className="card card-hover" style={{ padding: "28px 28px" }}>
                <div style={{ fontSize: 28, marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{f.title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* PRICING */}
      <section id="pricing" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1020, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="badge" style={{ marginBottom: 16, display: "inline-flex" }}>Pricing</div>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16 }}>
              Simple, transparent pricing
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: 17 }}>
              Start free. Scale when it works.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, alignItems: "start" }}>
            {pricing.map((plan) => (
              <div key={plan.name} className={`pricing-card${plan.featured ? " featured" : ""}`} style={{ position: "relative" }}>
                {plan.featured && (
                  <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)" }}>
                    <span style={{
                      background: "linear-gradient(135deg, #2d6ef7, #1a55d8)",
                      color: "white", fontSize: 12, fontWeight: 700,
                      padding: "4px 16px", borderRadius: 100,
                      letterSpacing: "0.05em", textTransform: "uppercase",
                    }}>Most Popular</span>
                  </div>
                )}
                <p style={{ fontSize: 13, color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>{plan.name}</p>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 8 }}>
                  <span style={{ fontSize: 40, fontWeight: 800, color: "white" }}>{plan.price}</span>
                  {plan.period && <span style={{ color: "var(--text-muted)", fontSize: 15 }}>{plan.period}</span>}
                </div>
                <p style={{ color: "var(--text-muted)", fontSize: 14, marginBottom: 28 }}>{plan.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                  {plan.features.map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div className="check">✓</div>
                      <span style={{ fontSize: 14, color: "var(--text)" }}>{f}</span>
                    </div>
                  ))}
                </div>
                <a href="#waitlist" className="btn-primary" style={{
                  display: "flex", width: "100%",
                  padding: "13px 20px",
                  background: plan.featured
                    ? "linear-gradient(135deg, #2d6ef7, #1a55d8)"
                    : "rgba(255,255,255,0.07)",
                  color: "white",
                  textDecoration: "none",
                  justifyContent: "center",
                  border: plan.featured ? "none" : "1px solid var(--border)",
                }}>
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* FAQ */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="badge" style={{ marginBottom: 16, display: "inline-flex" }}>FAQ</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, letterSpacing: "-0.02em" }}>
              Common questions
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="card"
                style={{ padding: "0", overflow: "hidden", cursor: "pointer" }}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div style={{
                  padding: "20px 24px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 16,
                }}>
                  <p style={{ fontWeight: 600, fontSize: 15, color: "var(--text)" }}>{faq.q}</p>
                  <span style={{
                    color: "var(--accent-light)",
                    fontSize: 20,
                    transform: openFaq === i ? "rotate(45deg)" : "none",
                    transition: "transform 0.2s",
                    flexShrink: 0,
                  }}>+</span>
                </div>
                {openFaq === i && (
                  <div style={{ padding: "0 24px 20px", borderTop: "1px solid var(--border)" }}>
                    <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.7, paddingTop: 16 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* FINAL CTA */}
      <section id="waitlist" style={{ padding: "100px 24px", textAlign: "center" }}>
        <div style={{
          maxWidth: 680,
          margin: "0 auto",
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(45,110,247,0.12) 0%, transparent 70%)",
          padding: "60px 40px",
          borderRadius: 24,
          border: "1px solid rgba(45,110,247,0.15)",
        }}>
          <div className="badge" style={{ marginBottom: 24, display: "inline-flex" }}>
            <span className="badge-dot" />
            Limited early access spots
          </div>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 800, letterSpacing: "-0.025em", marginBottom: 16, lineHeight: 1.1 }}>
            Ready to automate your<br />
            <span className="text-gradient">partner-led growth?</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: 16, marginBottom: 40, lineHeight: 1.6 }}>
            Join the waitlist and be among the first to turn your Crossbeam
            overlaps into a predictable revenue stream.
          </p>
          <div style={{ maxWidth: 480, margin: "0 auto" }}>
            <WaitlistForm size="large" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid var(--border)", padding: "40px 24px" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 28, height: 28, borderRadius: 7,
              background: "linear-gradient(135deg, #2d6ef7, #1a55d8)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 14, fontWeight: 800, color: "white",
            }}>E</div>
            <span style={{ fontWeight: 700, fontSize: 16, color: "var(--text)" }}>ECOLED</span>
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: 13 }}>
            © 2026 ECOLED. Built for partnership teams who use Crossbeam.
          </p>
          <a href="mailto:hello@bmconsultingmk.com" style={{ color: "var(--text-muted)", fontSize: 13, textDecoration: "none" }}>
            hello@bmconsultingmk.com
          </a>
        </div>
      </footer>
    </div>
  );
}
