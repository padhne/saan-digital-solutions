import Link from "next/link";
import { jobs } from "@/lib/data";
import TiltCard from "@/components/TiltCard";
import Reveal3D from "@/components/Reveal3D";

export const metadata = {
  title: "Careers at SAAN Digital Solutions | Jobs in Digital Agency Nepal",
  description: "Join Nepal's fastest-growing digital agency. SAAN Digital Solutions is hiring web developers, SEO specialists, marketers & designers in Kathmandu. Competitive pay, remote-friendly. Apply now.",
  keywords: [
    "jobs Nepal digital agency", "developer jobs Kathmandu", "SEO jobs Nepal",
    "digital marketing jobs Nepal", "careers SAAN Digital Solutions",
    "web developer jobs Nepal", "remote jobs Nepal digital", "SAAN Digital hiring",
  ],
  alternates: { canonical: "https://saandigitalsolutions.com/careers" },
  openGraph: {
    title: "Careers | Join SAAN Digital Solutions — Nepal's Top Digital Agency",
    description: "We're hiring! Web developers, SEO specialists & marketers. Join Nepal's #1 digital agency in Kathmandu.",
    url: "https://saandigitalsolutions.com/careers",
    type: "website",
  },
};

const colorMap: Record<string, string> = {
  accent: "var(--accent)", purple: "var(--purple)", orange: "var(--orange)",
  blue: "var(--blue)", pink: "var(--pink)", cyan: "var(--cyan)",
};
const dimMap: Record<string, string> = {
  accent: "var(--accent-dim)", purple: "var(--purple-dim)", orange: "var(--orange-dim)",
  blue: "var(--blue-dim)", pink: "var(--pink-dim)", cyan: "var(--cyan-dim)",
};

const perks = [
  { icon: "💰", title: "Competitive Salary", desc: "Market-rate pay with performance bonuses and annual increments", color: "var(--cyan)" },
  { icon: "🏠", title: "Remote Friendly", desc: "Hybrid work culture — Kathmandu office + work from anywhere", color: "var(--blue)" },
  { icon: "📚", title: "Learning Budget", desc: "NPR 25,000/year for courses, conferences, and tools", color: "var(--purple)" },
  { icon: "🚀", title: "Fast Growth", desc: "Work on real client projects from day one. No bench time.", color: "var(--accent)" },
  { icon: "🏥", title: "Health Coverage", desc: "Medical insurance for you and immediate family members", color: "var(--pink)" },
  { icon: "🎉", title: "Team Culture", desc: "Monthly team events, annual retreats, and a culture that actually cares", color: "var(--orange)" },
];

const headerTags = ["Growth-focused", "Remote-friendly", "Real projects", "Top pay"];

export default function CareersPage() {
  return (
    <>
      {/* Header */}
      <section style={{ padding: "10rem 5% 6rem", background: "#060A14", position: "relative", overflow: "hidden" }}>
        <div className="float-3d" style={{ position: "absolute", right: "7%", top: "20%", width: 160, height: 160, borderRadius: "30%", border: "1px solid rgba(124,111,244,0.1)", pointerEvents: "none" }} />
        <div className="float-3d" style={{ position: "absolute", right: "20%", bottom: "15%", width: 80, height: 80, borderRadius: "50%", border: "1px solid rgba(52,211,153,0.08)", pointerEvents: "none", animationDelay: "2.5s" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(124,111,244,0.1) 0%, transparent 60%)" }} />
        <div style={{ position: "relative", maxWidth: 700 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--accent)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.2rem", animation: "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both" }}>
            <span style={{ width: 20, height: 1, background: "var(--accent)" }} /> We&apos;re Hiring
          </div>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: "1.5rem", animation: "fadeUp 0.8s 0.08s cubic-bezier(0.16,1,0.3,1) both" }}>
            Build the Future of<br />Digital Nepal With Us
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--white-dim)", lineHeight: 1.75, maxWidth: 560, animation: "fadeUp 0.8s 0.16s cubic-bezier(0.16,1,0.3,1) both" }}>
            We&apos;re a team of builders, marketers, and creatives obsessed with one thing: growing businesses. If you want to work on real problems with real impact — let&apos;s talk.
          </p>
          <div style={{ display: "flex", gap: "1rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
            {headerTags.map((tag, i) => (
              <span key={tag} className="hover-3d-pop" style={{
                background: "var(--accent-dim)", border: "1px solid var(--accent-glow)", color: "var(--accent)",
                fontSize: "0.78rem", padding: "0.35rem 0.85rem", borderRadius: 100, fontWeight: 500,
                animation: `fadeUp 0.6s ${0.24 + i * 0.06}s cubic-bezier(0.16,1,0.3,1) both`,
              }}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section data-theme="light" style={{ padding: "7rem 5%", background: "#EEF0FF" }}>
        <Reveal3D>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--accent)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.2rem", justifyContent: "center" }}>
              <span style={{ width: 20, height: 1, background: "var(--accent)" }} /> Why SAAN Digital Solutions
            </div>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.04em" }}>
              Perks & Benefits
            </h2>
          </div>
        </Reveal3D>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
          {perks.map((p, i) => (
            <Reveal3D key={p.title} delay={i * 80}>
              <TiltCard
                maxTilt={12}
                glowColor={`${p.color}22`}
                style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20, padding: "2rem", cursor: "default", height: "100%" }}
              >
                <div className="hover-icon-3d" style={{ fontSize: "2rem", marginBottom: "1rem" }}>{p.icon}</div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem", color: p.color }}>{p.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--white-dim)", lineHeight: 1.65 }}>{p.desc}</p>
              </TiltCard>
            </Reveal3D>
          ))}
        </div>
      </section>

      {/* Open Roles */}
      <section data-theme="light" style={{ padding: "0 5% 7rem", background: "#FFFFFF" }}>
        <Reveal3D>
          <div style={{ paddingTop: "7rem", marginBottom: "3rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--accent)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.2rem" }}>
              <span style={{ width: 20, height: 1, background: "var(--accent)" }} /> Open Positions
            </div>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.04em" }}>
              {jobs.length} Roles Available
            </h2>
          </div>
        </Reveal3D>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {jobs.map((job, i) => (
            <Reveal3D key={job.id} delay={i * 80}>
              <div className="hover-3d-slide" style={{
                background: "var(--card2)", border: "1px solid var(--border)", borderRadius: 20,
                padding: "2rem", display: "grid", gridTemplateColumns: "1fr auto",
                gap: "2rem", alignItems: "center",
              }}>
                <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                  <div className="hover-icon-3d" style={{
                    width: 52, height: 52, borderRadius: 14, display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: "1.4rem", flexShrink: 0,
                    background: dimMap[job.color], border: `1px solid ${colorMap[job.color]}30`,
                  }}>
                    {job.emoji}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.3rem" }}>{job.title}</div>
                    <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
                      {[job.type, job.location, job.department, job.salary].map(tag => (
                        <span key={tag} style={{ fontSize: "0.75rem", color: "var(--white-dim)", background: "var(--dark)", padding: "0.2rem 0.6rem", borderRadius: 6, border: "1px solid var(--border)" }}>{tag}</span>
                      ))}
                    </div>
                    <p style={{ fontSize: "0.85rem", color: "var(--white-dim)", lineHeight: 1.6, maxWidth: 580 }}>{job.desc}</p>
                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.75rem" }}>
                      {job.requirements.map(r => (
                        <span key={r} className="hover-3d-pop" style={{ fontSize: "0.72rem", color: colorMap[job.color], background: dimMap[job.color], border: `1px solid ${colorMap[job.color]}25`, padding: "0.2rem 0.55rem", borderRadius: 6 }}>{r}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <Link href="/contact" className="hover-3d-btn" style={{
                  background: "var(--accent)", color: "var(--black)",
                  padding: "0.7rem 1.5rem", borderRadius: 100,
                  fontSize: "0.85rem", fontWeight: 700, textDecoration: "none",
                  whiteSpace: "nowrap", flexShrink: 0,
                }}>
                  Apply Now →
                </Link>
              </div>
            </Reveal3D>
          ))}
        </div>

        {/* Spontaneous */}
        <Reveal3D style={{ marginTop: "3rem" }}>
          <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20, padding: "2.5rem", textAlign: "center" }}>
            <div className="hover-icon-3d" style={{ fontSize: "2rem", marginBottom: "1rem" }}>🌟</div>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Don&apos;t see your role?</h3>
            <p style={{ fontSize: "0.88rem", color: "var(--white-dim)", marginBottom: "1.5rem" }}>We&apos;re always looking for exceptional people. Send us your CV and tell us how you&apos;d add value.</p>
            <a href="mailto:careers@saandigital.com" className="btn-link" style={{ display: "inline-block" }}>
              Send Spontaneous Application →
            </a>
          </div>
        </Reveal3D>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section > div[style*="grid-template-columns: repeat(3"] { grid-template-columns: 1fr 1fr !important; }
          div[style*="grid-template-columns: 1fr auto"] { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 580px) {
          section > div[style*="grid-template-columns: repeat(3"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
