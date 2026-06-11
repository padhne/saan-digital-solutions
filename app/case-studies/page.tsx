import Link from "next/link";
import { clients, testimonials } from "@/lib/data";
import Reveal3D from "@/components/Reveal3D";

export const metadata = {
  title: "Our Work | Projects Completed — SAAN Digital Solutions",
  description: "From the USA to Nepal — SAAN Digital Solutions has delivered websites, SEO, and digital marketing for 8+ clients across USA, Nepal & beyond. Every project owned end-to-end.",
  keywords: [
    "SAAN Digital work", "digital agency USA clients", "web development portfolio Nepal",
    "SEO projects USA", "digital marketing completed", "remote digital agency Nepal",
  ],
  alternates: { canonical: "https://saandigitalsolutions.com/case-studies" },
  openGraph: {
    title: "Our Work | Projects Completed — SAAN Digital Solutions",
    description: "8+ projects delivered across USA & Nepal — web development, SEO, ads, and full-stack execution. Every project taken from brief to live.",
    url: "https://saandigitalsolutions.com/case-studies",
    type: "website",
  },
};

const colorMap: Record<string, string> = {
  accent: "var(--accent)", orange: "var(--orange)", blue: "var(--blue)", pink: "var(--pink)",
  purple: "var(--purple)", cyan: "var(--cyan)",
};

const trustSignals = [
  { icon: "🌍", label: "Remote-first team" },
  { icon: "💬", label: "English-first communication" },
  { icon: "⚡", label: "Response within 24 hours" },
  { icon: "🕐", label: "US · Dubai · Qatar timezone-ready" },
  { icon: "🔒", label: "NDA & contracts available" },
  { icon: "⭐", label: "5-star rated on Google" },
];

const processSteps = [
  {
    num: "01",
    icon: "📞",
    title: "Discovery Call",
    desc: "Free 30-min call. We learn your goals, constraints, and timeline — no commitment required.",
    color: "var(--accent)",
  },
  {
    num: "02",
    icon: "📋",
    title: "Proposal & Scope",
    desc: "Clear scope, timeline, and pricing delivered within 48 hours. No hidden fees.",
    color: "var(--purple)",
  },
  {
    num: "03",
    icon: "🛠️",
    title: "Build & Deliver",
    desc: "Weekly progress updates via your preferred channel. You always know where things stand.",
    color: "var(--blue)",
  },
  {
    num: "04",
    icon: "🚀",
    title: "Launch & Support",
    desc: "We go live together. 30-day post-launch support included in every project.",
    color: "var(--cyan)",
  },
];

const industries = [
  "Business Services", "Wireless Retail", "EdTech", "AI Product Engineering",
  "R&D · IoT", "Blog & Media", "Tech Blog", "B2B Marketplace",
];

const workTestimonials = testimonials.filter(t =>
  ["Mohammad Hussain", "David Carter", "Munna Kumar Gupta", "Saddam Hussain", "Nawaj Sarif"].includes(t.name)
);

export default function OurWorkPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "10rem 5% 6rem", background: "#060A14", position: "relative", overflow: "hidden" }}>
        <div className="float-3d" style={{ position: "absolute", right: "7%", top: "22%", width: 150, height: 150, borderRadius: "32%", border: "1px solid rgba(124,111,244,0.1)", pointerEvents: "none" }} />
        <div className="float-3d" style={{ position: "absolute", left: "5%", bottom: "20%", width: 80, height: 80, borderRadius: "50%", border: "1px solid rgba(251,146,60,0.08)", pointerEvents: "none", animationDelay: "2s" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(124,111,244,0.1) 0%, transparent 60%)" }} />

        <div style={{ position: "relative", textAlign: "center", maxWidth: 740, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--accent)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.2rem", justifyContent: "center", animation: "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both" }}>
            <span style={{ width: 20, height: 1, background: "var(--accent)" }} /> Our Work
          </div>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)", fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 1.0, marginBottom: "1.5rem", color: "#F0F6FF", animation: "fadeUp 0.8s 0.08s cubic-bezier(0.16,1,0.3,1) both" }}>
            Real Projects.{" "}
            <span style={{ background: "linear-gradient(135deg, #A78BFA 0%, #38BDF8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Real Clients.
            </span>
          </h1>
          <p style={{ fontSize: "1.05rem", color: "rgba(240,246,255,0.55)", lineHeight: 1.75, maxWidth: 540, margin: "0 auto", animation: "fadeUp 0.8s 0.16s cubic-bezier(0.16,1,0.3,1) both" }}>
            Every project below was taken from brief to live — development, design, SEO, and growth. One team. End-to-end. Zero outsourcing.
          </p>

          {/* Stats bar */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 0, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 100, padding: "0.65rem 0.5rem", marginTop: "2.5rem", animation: "fadeUp 0.8s 0.24s cubic-bezier(0.16,1,0.3,1) both", flexWrap: "wrap", justifyContent: "center" }}>
            {([
              { value: "8+", label: "Projects Completed" },
              { value: "4",  label: "US Clients" },
              { value: "2",  label: "Countries" },
              { value: "100%", label: "Live & Delivered" },
            ] as const).map((stat, i, arr) => (
              <div key={stat.label} style={{ display: "flex", alignItems: "center" }}>
                <div style={{ padding: "0.15rem 1.1rem", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1rem", fontWeight: 800, color: "#F0F6FF" }}>{stat.value}</div>
                  <div style={{ fontSize: "0.6rem", color: "rgba(240,246,255,0.38)", fontWeight: 500, whiteSpace: "nowrap" }}>{stat.label}</div>
                </div>
                {i < arr.length - 1 && <div style={{ width: 1, height: 26, background: "rgba(255,255,255,0.08)" }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST SIGNALS STRIP ── */}
      <div style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "1.1rem 5%", overflow: "hidden" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0", flexWrap: "wrap" }}>
          {trustSignals.map((t, i) => (
            <div key={t.label} style={{ display: "flex", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", padding: "0.3rem 1rem", whiteSpace: "nowrap" }}>
                <span style={{ fontSize: "0.85rem" }}>{t.icon}</span>
                <span style={{ fontSize: "0.72rem", color: "rgba(240,246,255,0.5)", fontWeight: 500 }}>{t.label}</span>
              </div>
              {i < trustSignals.length - 1 && <div style={{ width: 1, height: 16, background: "rgba(255,255,255,0.1)" }} />}
            </div>
          ))}
        </div>
      </div>

      {/* ── INDUSTRIES SERVED ── */}
      <div style={{ background: "#060A14", padding: "2rem 5% 0", textAlign: "center" }}>
        <div style={{ fontSize: "0.65rem", color: "rgba(240,246,255,0.28)", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 600, marginBottom: "0.9rem" }}>
          Industries Served
        </div>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "0.5rem" }}>
          {industries.map(ind => (
            <span key={ind} style={{ fontSize: "0.72rem", color: "rgba(240,246,255,0.45)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", padding: "0.3rem 0.8rem", borderRadius: 100, fontWeight: 500 }}>
              {ind}
            </span>
          ))}
        </div>
      </div>

      {/* ── PROJECTS GRID ── */}
      <section style={{ padding: "4rem 5% 7rem", background: "#060A14", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "10%", right: "-8%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,111,244,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "5%", left: "-8%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(251,146,60,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="clients-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem", position: "relative" }}>
          {clients.map((client, i) => {
            const isUSA = client.region === "USA";
            const accent = colorMap[client.color];
            return (
              <Reveal3D key={client.name} delay={i * 55}>
                <div className="client-card" style={{
                  position: "relative", overflow: "hidden",
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderTop: `2px solid ${accent}`,
                  borderRadius: 18,
                  padding: "1.6rem 1.4rem 1.4rem",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}>
                  {/* Decorative number — sits behind all content */}
                  <div style={{ position: "absolute", bottom: "0.5rem", right: "0.8rem", fontSize: "5rem", fontWeight: 900, lineHeight: 1, fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#F0F6FF", opacity: 0.04, userSelect: "none", pointerEvents: "none", zIndex: 0 }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* All real content sits above the decorative number */}
                  <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>

                  {/* Region + Live */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                    <span style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.07em", background: isUSA ? "rgba(124,111,244,0.12)" : "rgba(251,146,60,0.12)", color: isUSA ? "var(--accent)" : "var(--orange)", border: `1px solid ${isUSA ? "rgba(124,111,244,0.25)" : "rgba(251,146,60,0.25)"}`, padding: "0.22rem 0.6rem", borderRadius: 100 }}>
                      {isUSA ? "🇺🇸 USA" : "🇳🇵 Nepal"}
                    </span>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#34D399", boxShadow: "0 0 5px #34D399", display: "inline-block" }} />
                      <span style={{ fontSize: "0.58rem", color: "#34D399", fontWeight: 700, letterSpacing: "0.08em" }}>LIVE</span>
                    </div>
                  </div>

                  {/* Name */}
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.05rem", fontWeight: 800, color: "#F0F6FF", lineHeight: 1.2, marginBottom: "0.35rem" }}>
                    {client.name}
                  </div>

                  {/* Domain */}
                  <a href={`https://${client.domain}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.72rem", color: accent, fontWeight: 600, textDecoration: "none", opacity: 0.8, marginBottom: "0.35rem", display: "inline-block" }}>
                    {client.domain} ↗
                  </a>

                  {/* Industry · Location · Year */}
                  <div style={{ fontSize: "0.62rem", color: "rgba(240,246,255,0.25)", textTransform: "uppercase", letterSpacing: "0.09em", fontWeight: 600, marginBottom: "1rem" }}>
                    {client.industry} · {client.location} · {client.year}
                  </div>

                  <div style={{ height: 1, background: "rgba(255,255,255,0.05)", marginBottom: "0.9rem" }} />

                  {/* Service tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginBottom: "0.9rem" }}>
                    {client.services.map(s => (
                      <span key={s} style={{ fontSize: "0.57rem", fontWeight: 700, letterSpacing: "0.05em", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: accent, padding: "0.2rem 0.5rem", borderRadius: 100, textTransform: "uppercase" }}>
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Result metric */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "0.4rem", marginBottom: "1rem", padding: "0.5rem 0.7rem", background: "rgba(52,211,153,0.06)", borderRadius: 8, border: "1px solid rgba(52,211,153,0.15)" }}>
                    <span style={{ fontSize: "0.7rem", color: "#34D399", flexShrink: 0, marginTop: "0.05rem" }}>✓</span>
                    <span style={{ fontSize: "0.68rem", color: "rgba(240,246,255,0.65)", fontWeight: 600, lineHeight: 1.4 }}>{client.result}</span>
                  </div>

                  {/* View live */}
                  <a href={`https://${client.domain}`} target="_blank" rel="noopener noreferrer" className="view-project-link" style={{ marginTop: "auto", fontSize: "0.72rem", color: "rgba(240,246,255,0.3)", fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: "0.35rem" }}>
                    View Live Site →
                  </a>

                  </div>{/* end content wrapper */}
                </div>
              </Reveal3D>
            );
          })}
        </div>
      </section>

      {/* ── TESTIMONIALS MARQUEE ── */}
      <section style={{ padding: "7rem 0", background: "#070B18", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(124,111,244,0.05) 0%, transparent 65%)", pointerEvents: "none" }} />

        {/* Header */}
        <Reveal3D style={{ textAlign: "center", marginBottom: "4rem", position: "relative", padding: "0 5%" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--accent)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
            <span style={{ width: 20, height: 1, background: "var(--accent)" }} /> Client Voices
          </div>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.04em", color: "#F0F6FF", lineHeight: 1.1 }}>
            What Clients Say<br />
            <span style={{ background: "linear-gradient(135deg, #A78BFA 0%, #F472B6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>After Working With Us</span>
          </h2>
        </Reveal3D>

        {/* Scrolling track — edge fades */}
        <div style={{ position: "relative" }}>
          {/* Left fade */}
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 120, background: "linear-gradient(90deg, #070B18 0%, transparent 100%)", zIndex: 2, pointerEvents: "none" }} />
          {/* Right fade */}
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 120, background: "linear-gradient(270deg, #070B18 0%, transparent 100%)", zIndex: 2, pointerEvents: "none" }} />

          <div style={{ overflow: "hidden" }}>
            <div className="testimonial-track" style={{ display: "flex", gap: "1.25rem", width: "max-content", padding: "0.5rem 0" }}>
              {/* Duplicate for seamless loop */}
              {[...workTestimonials, ...workTestimonials].map((t, i) => (
                <div key={`${t.name}-${i}`} style={{
                  minWidth: 360, maxWidth: 360,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 20,
                  padding: "1.8rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  flexShrink: 0,
                }}>
                  {/* Stars + source */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", gap: "0.15rem" }}>
                      {Array.from({ length: t.stars }).map((_, si) => (
                        <span key={si} style={{ color: "#FBC02D", fontSize: "0.82rem" }}>★</span>
                      ))}
                    </div>
                    <span style={{ fontSize: "0.6rem", color: "rgba(240,246,255,0.28)", fontWeight: 500 }}>{t.source}</span>
                  </div>

                  {/* Quote */}
                  <p style={{ fontSize: "0.86rem", color: "rgba(240,246,255,0.68)", lineHeight: 1.75, fontStyle: "italic", flexGrow: 1 }}>
                    &ldquo;{t.text}&rdquo;
                  </p>

                  {/* Avatar + name */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", paddingTop: "0.75rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: t.color, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "0.85rem", color: "#fff", flexShrink: 0 }}>
                      {t.avatar}
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.83rem", fontWeight: 700, color: "#F0F6FF" }}>{t.name}</div>
                      <div style={{ fontSize: "0.68rem", color: "rgba(240,246,255,0.35)", marginTop: "0.1rem" }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE ENGAGE ── */}
      <section style={{ padding: "7rem 5%", background: "#060A14", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 60% at 80% 50%, rgba(56,189,248,0.04) 0%, transparent 65%)", pointerEvents: "none" }} />
        <Reveal3D style={{ textAlign: "center", marginBottom: "4rem", position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--cyan)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
            <span style={{ width: 20, height: 1, background: "var(--cyan)" }} /> Process
          </div>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.04em", color: "#F0F6FF", lineHeight: 1.1, marginBottom: "0.8rem" }}>
            How We Work With You
          </h2>
          <p style={{ fontSize: "0.9rem", color: "rgba(240,246,255,0.4)", maxWidth: 440, margin: "0 auto" }}>
            Designed for international clients — clear, async-friendly, and fully transparent from day one.
          </p>
        </Reveal3D>

        <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem", position: "relative" }}>
          {/* Connecting line behind steps */}
          <div style={{ position: "absolute", top: "2.6rem", left: "calc(12.5% + 1rem)", right: "calc(12.5% + 1rem)", height: 1, background: "linear-gradient(90deg, rgba(124,111,244,0.3) 0%, rgba(56,189,248,0.3) 100%)", pointerEvents: "none" }} className="process-line" />

          {processSteps.map((step, i) => (
            <Reveal3D key={step.num} delay={i * 80}>
              <div style={{ textAlign: "center", position: "relative", paddingTop: "0.5rem" }}>
                {/* Icon circle */}
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: `${step.color}15`, border: `1px solid ${step.color}30`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.2rem", fontSize: "1.3rem", position: "relative", zIndex: 1 }}>
                  {step.icon}
                </div>
                {/* Step number */}
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.65rem", fontWeight: 700, color: step.color, letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
                  STEP {step.num}
                </div>
                {/* Title */}
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1rem", fontWeight: 800, color: "#F0F6FF", marginBottom: "0.6rem" }}>
                  {step.title}
                </div>
                {/* Description */}
                <p style={{ fontSize: "0.8rem", color: "rgba(240,246,255,0.4)", lineHeight: 1.7 }}>
                  {step.desc}
                </p>
              </div>
            </Reveal3D>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "8rem 5%", background: "linear-gradient(160deg, #07092C 0%, #1A0D42 40%, #0E1A3F 70%, #07092C 100%)", textAlign: "center", position: "relative", overflow: "hidden" } as React.CSSProperties}>
        <div className="float-3d" style={{ position: "absolute", left: "5%", top: "18%", width: 120, height: 120, borderRadius: "30%", border: "1px solid rgba(167,139,250,0.12)", pointerEvents: "none" }} />
        <div className="float-3d" style={{ position: "absolute", right: "6%", bottom: "16%", width: 85, height: 85, borderRadius: "50%", border: "1px solid rgba(244,114,182,0.1)", pointerEvents: "none", animationDelay: "2.5s" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,111,244,0.18) 0%, transparent 65%)", pointerEvents: "none" }} />

        <Reveal3D style={{ position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.25)", color: "#34D399", fontSize: "0.72rem", fontWeight: 700, padding: "0.4rem 1rem", borderRadius: 100, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "2rem" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#34D399", animation: "pulse 2s infinite", display: "inline-block" }} />
            Now taking international projects
          </div>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)", fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 1.0, color: "#F0F6FF", marginBottom: "1.2rem" }}>
            Your Business,<br />
            <span style={{ background: "linear-gradient(135deg, #A78BFA 0%, #F472B6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Next on This Page.</span>
          </h2>
          <p style={{ fontSize: "1.05rem", color: "rgba(240,246,255,0.5)", maxWidth: 480, margin: "0 auto 1.5rem" }}>
            USA, Dubai, Qatar — wherever you are, we work in your timezone. Free discovery call, no commitment.
          </p>
          {/* Timezone context */}
          <div style={{ display: "flex", justifyContent: "center", gap: "1.2rem", marginBottom: "3rem", flexWrap: "wrap" }}>
            {["🇺🇸 EST / PST", "🇦🇪 GST (Dubai)", "🇶🇦 AST (Qatar)"].map(tz => (
              <span key={tz} style={{ fontSize: "0.75rem", color: "rgba(240,246,255,0.38)", fontWeight: 500 }}>{tz}</span>
            ))}
          </div>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary" style={{ fontSize: "1rem", padding: "1rem 2.8rem" }}>
              Book a Free Call →
            </Link>
            <Link href="/services" style={{ fontSize: "1rem", padding: "1rem 2.2rem", borderRadius: 100, border: "1px solid rgba(255,255,255,0.15)", color: "rgba(240,246,255,0.7)", textDecoration: "none", fontWeight: 600, display: "inline-flex", alignItems: "center" }}>
              See Our Services
            </Link>
          </div>
        </Reveal3D>
      </section>

      <style>{`
        .client-card { transition: background 0.25s, transform 0.3s, box-shadow 0.3s; }
        .client-card:hover { background: rgba(255,255,255,0.05) !important; transform: translateY(-4px); box-shadow: 0 20px 48px rgba(0,0,0,0.35); }
        .view-project-link:hover { color: rgba(240,246,255,0.7) !important; }

        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .testimonial-track {
          animation: marquee-scroll 38s linear infinite;
        }
        .testimonial-track:hover {
          animation-play-state: paused;
        }

        @media (max-width: 1024px) {
          .clients-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .process-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .process-line { display: none; }
        }
        @media (max-width: 640px) {
          .clients-grid { grid-template-columns: 1fr !important; }
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
