import type { Metadata } from "next";
import Link from "next/link";
import { services, stats, testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "SAAN Digital Solutions | Web Development, SEO & Digital Marketing Nepal",
  description: "Nepal's #1 full-stack digital agency. We build websites, apps & systems — then grow them with SEO, GEO, paid ads & AI automation. Based in Kathmandu. Free consultation.",
  keywords: [
    "SAAN Digital Solutions", "SAAN Digital", "digital agency Nepal", "web development Nepal",
    "SEO Nepal", "digital marketing Kathmandu", "app development Nepal", "GEO optimization",
    "Google ads Nepal", "Facebook ads Nepal", "AI automation Nepal", "web design Nepal",
  ],
  alternates: { canonical: "https://saandigitalsolutions.com" },
  openGraph: {
    title: "SAAN Digital Solutions | Web Development, SEO & Digital Marketing Nepal",
    description: "Nepal's #1 full-stack digital agency. Web development, SEO, GEO, paid ads & AI automation — one team, total execution. Free consultation.",
    url: "https://saandigitalsolutions.com",
    type: "website",
  },
};
import HeroCanvasClient from "@/components/HeroCanvasClient";
import Service3DIcon from "@/components/Service3DIcon";
import TiltCard from "@/components/TiltCard";
import CountUp3D from "@/components/CountUp3D";
import Reveal3D from "@/components/Reveal3D";

const colorMap: Record<string, string> = {
  accent: "var(--accent)", purple: "var(--purple)", orange: "var(--orange)",
  pink: "var(--pink)", cyan: "var(--cyan)", blue: "var(--blue)",
};
const dimMap: Record<string, string> = {
  accent: "var(--accent-dim)", purple: "var(--purple-dim)", orange: "var(--orange-dim)",
  pink: "var(--pink-dim)", cyan: "var(--cyan-dim)", blue: "var(--blue-dim)",
};

const pipelineSteps = [
  { num: "01", icon: "💻", name: "Development", desc: "Web apps, mobile, and custom software built for scale", color: "#38BDF8", rgb: "56,189,248" },
  { num: "02", icon: "🎨", name: "Design & UX", desc: "Brand identity and UI/UX that converts visitors",       color: "#C084FC", rgb: "192,132,252" },
  { num: "03", icon: "📈", name: "SEO & GEO",   desc: "Rank on Google and AI engines like ChatGPT",             color: "#7C6FF4", rgb: "124,111,244" },
  { num: "04", icon: "🎯", name: "Ads & Growth", desc: "Meta, Google, TikTok ads + content that builds authority", color: "#FB923C", rgb: "251,146,60" },
  { num: "05", icon: "📊", name: "Analytics",   desc: "Data-driven dashboards and continuous growth tracking",  color: "#34D399", rgb: "52,211,153" },
];

export default function Home() {
  return (
    <>
      {/* ══════════════════ HERO ══════════════════ */}
      <section className="hero-section" style={{
        position: "relative", minHeight: "100vh",
        display: "flex", alignItems: "center",
        padding: "8rem 5% 5rem", overflow: "hidden",
        background: "#060A14",
      }}>
        <HeroCanvasClient />

        {/* radial fade to bg */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "radial-gradient(ellipse 75% 75% at 50% 50%, transparent 25%, #060A14 72%)",
        }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 780 }}>
          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.6rem",
            background: "rgba(124,111,244,0.1)", border: "1px solid rgba(124,111,244,0.3)",
            color: "#A393FF", fontSize: "0.72rem", fontWeight: 700,
            padding: "0.38rem 1rem", borderRadius: 100, letterSpacing: "0.1em",
            textTransform: "uppercase", marginBottom: "2.2rem",
            animation: "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#34D399", animation: "pulse 2s infinite", display: "inline-block", boxShadow: "0 0 8px #34D399" }} />
            Nepal&apos;s #1 Full-Stack Digital Agency
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(3rem, 7.5vw, 6.2rem)",
            fontWeight: 800, lineHeight: 0.93, letterSpacing: "-0.055em",
            marginBottom: "2rem", color: "#F0F6FF",
            animation: "fadeUp 0.8s 0.08s cubic-bezier(0.16,1,0.3,1) both",
          }}>
            Build.{" "}
            <span style={{
              background: "linear-gradient(135deg, #A78BFA 0%, #F472B6 50%, #FB923C 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Launch.
            </span>
            <br />Dominate.
          </h1>

          {/* Sub */}
          <p style={{
            fontSize: "1.15rem", color: "rgba(240,246,255,0.65)", lineHeight: 1.8,
            maxWidth: 520, marginBottom: "2.8rem",
            animation: "fadeUp 0.8s 0.16s cubic-bezier(0.16,1,0.3,1) both",
          }}>
            We build your digital foundation — websites, apps &amp; systems — then drive growth through SEO, GEO, paid ads and content. <strong style={{ color: "#F0F6FF", fontWeight: 600 }}>One team, total execution.</strong>
          </p>

          {/* CTAs */}
          <div className="hero-ctas" style={{
            display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3.5rem",
            animation: "fadeUp 0.8s 0.24s cubic-bezier(0.16,1,0.3,1) both",
          }}>
            <Link href="/contact" className="btn-primary" style={{ fontSize: "0.95rem", padding: "0.95rem 2.5rem" }}>
              Start Your Project →
            </Link>
            <Link href="/case-studies" className="btn-outline" style={{ fontSize: "0.95rem", padding: "0.95rem 2.5rem" }}>
              See Our Work
            </Link>
          </div>

          {/* Tech stack */}
          <div style={{
            display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap",
            animation: "fadeUp 0.8s 0.32s cubic-bezier(0.16,1,0.3,1) both",
          }}>
            <span style={{ fontSize: "0.7rem", color: "rgba(240,246,255,0.3)", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500 }}>Stack</span>
            <div style={{ width: 1, height: 12, background: "rgba(255,255,255,0.15)" }} />
            <div style={{ display: "flex", gap: "0.45rem", flexWrap: "wrap" }}>
              {["React", "Next.js", "Node", "Python", "Flutter", "AWS"].map(tech => (
                <span key={tech} style={{
                  fontSize: "0.7rem", fontFamily: "'JetBrains Mono', monospace",
                  color: "rgba(163,147,255,0.8)",
                  background: "rgba(124,111,244,0.08)",
                  border: "1px solid rgba(124,111,244,0.18)",
                  padding: "0.22rem 0.6rem", borderRadius: 6,
                }}>{tech}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)",
          zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
          opacity: 0.4,
        }}>
          <span style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--white-faint)" }}>Scroll</span>
          <div style={{
            width: 1, height: 40,
            background: "linear-gradient(180deg, rgba(124,111,244,0.6), transparent)",
          }} />
        </div>
      </section>

      {/* ══════════════════ STATS ══════════════════ */}
      <div style={{ background: "linear-gradient(135deg, #2D1F8A 0%, #4C1D95 45%, #3730A3 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 70%)" }} />
        <div className="rg-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", position: "relative" }}>
          {stats.map((s, i) => (
            <Reveal3D key={i} delay={i * 90} style={{ padding: "3rem 2rem", textAlign: "center", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.12)" : "none" }}>
              <div style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                fontWeight: 800, color: "#FFFFFF",
                letterSpacing: "-0.05em", lineHeight: 1,
                marginBottom: "0.5rem",
              }}>
                <CountUp3D num={s.num} /><span style={{ color: "#C4B5FD" }}>{s.suffix}</span>
              </div>
              <div style={{ fontSize: "0.85rem", color: "rgba(196,181,253,0.9)", fontWeight: 600, marginBottom: "0.2rem" }}>{s.label}</div>
              <div style={{ fontSize: "0.72rem", color: "rgba(196,181,253,0.55)" }}>{s.sub}</div>
            </Reveal3D>
          ))}
        </div>
      </div>

      {/* ══════════════════ PIPELINE ══════════════════ */}
      <section data-theme="light" style={{ padding: "7rem 5% 8rem", background: "#FFFFFF", position: "relative", overflow: "hidden" }}>
        {/* Subtle grid pattern */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(circle, rgba(124,111,244,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }} />

        <div style={{ textAlign: "center", marginBottom: "5rem", position: "relative" }}>
          <span className="badge">Our Process</span>
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
            fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 1.0,
            marginBottom: "1.2rem", color: "#0D1117",
          }}>
            From Idea to{" "}
            <span style={{
              background: "linear-gradient(135deg, #7C6FF4 0%, #C084FC 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Market</span>
          </h2>
          <p style={{ fontSize: "1.05rem", color: "rgba(13,17,23,0.58)", lineHeight: 1.8, maxWidth: 520, margin: "0 auto" }}>
            Every business needs a seamless journey from concept to customers. We own the entire pipeline.
          </p>
        </div>

        <div className="rg-5" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1.5rem", position: "relative" }}>
          {/* Connector line */}
          <div style={{
            position: "absolute", top: 40, left: "10%", right: "10%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(124,111,244,0.25), rgba(192,132,252,0.25), transparent)",
            zIndex: 0,
          }} />

          {pipelineSteps.map((step, i) => (
            <Reveal3D key={step.num} delay={i * 110} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", position: "relative", zIndex: 1 }}>
              <div className="step-icon" style={{
                width: 80, height: 80, borderRadius: 22,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.9rem", marginBottom: "1.5rem",
                background: `rgba(${step.rgb},0.1)`,
                border: `2px solid ${step.color}30`,
                boxShadow: `0 8px 28px ${step.color}18`,
                transformStyle: "preserve-3d",
              }}>
                {step.icon}
              </div>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.62rem", color: step.color,
                letterSpacing: "0.1em", marginBottom: "0.5rem",
                fontWeight: 600,
              }}>{step.num}</div>
              <div style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.92rem", fontWeight: 700,
                color: "#0D1117", marginBottom: "0.5rem",
              }}>{step.name}</div>
              <div style={{ fontSize: "0.76rem", color: "rgba(13,17,23,0.55)", lineHeight: 1.65 }}>{step.desc}</div>
            </Reveal3D>
          ))}
        </div>
      </section>

      {/* ══════════════════ SERVICES PREVIEW ══════════════════ */}
      <section data-theme="light" style={{ padding: "7rem 5% 8rem", background: "#F2F0FF" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4rem", flexWrap: "wrap", gap: "2rem" }}>
          <div>
            <span className="badge">What We Do</span>
            <h2 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
              fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 1.0,
              color: "#0D1117",
            }}>
              Every Service<br />
              <span style={{
                background: "linear-gradient(135deg, #7C6FF4 0%, #C084FC 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>You Need to Grow</span>
            </h2>
          </div>
          <Link href="/services" className="btn-link">
            View All Services →
          </Link>
        </div>

        <div className="rg-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
          {services.map((svc) => (
            <Link key={svc.id} href={`/services#${svc.id}`} style={{ textDecoration: "none", display: "block" }}>
              <TiltCard
                glowColor={`${colorMap[svc.color]}28`}
                maxTilt={12}
                style={{
                  height: "100%",
                  background: "#FFFFFF",
                  border: `1px solid ${colorMap[svc.color]}18`,
                  borderRadius: 20,
                  padding: "2.5rem",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                  cursor: "pointer",
                }}
              >
                {/* Accent corner */}
                <div style={{
                  position: "absolute", top: 0, right: 0,
                  width: 100, height: 100,
                  background: `radial-gradient(circle at 100% 0%, ${colorMap[svc.color]}12 0%, transparent 70%)`,
                  borderRadius: "0 20px 0 0", pointerEvents: "none",
                }} />

                {/* 3D Icon */}
                <div style={{
                  width: 72, height: 72, borderRadius: 18,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: `${colorMap[svc.color]}12`,
                  border: `1px solid ${colorMap[svc.color]}25`,
                  marginBottom: "1.5rem",
                  overflow: "hidden",
                }}>
                  <Service3DIcon serviceId={svc.id} size={72} />
                </div>

                <div style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "1.05rem", fontWeight: 700,
                  color: "#0D1117", marginBottom: "0.65rem",
                }}>{svc.name}</div>
                <div style={{
                  fontSize: "0.875rem", color: "rgba(13,17,23,0.58)",
                  lineHeight: 1.75, marginBottom: "1.5rem",
                }}>{svc.short}</div>
                <span style={{
                  fontSize: "0.8rem", fontWeight: 700,
                  color: colorMap[svc.color],
                  display: "flex", alignItems: "center", gap: "0.35rem",
                }}>
                  Learn more →
                </span>
              </TiltCard>
            </Link>
          ))}
        </div>
      </section>

      {/* ══════════════════ TESTIMONIALS ══════════════════ */}
      <section className="home-testimonials" style={{ padding: "8rem 0", background: "#06101E", position: "relative", overflow: "hidden" }}>
        {/* ambient glow */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: 800, height: 400, borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(124,111,244,0.08) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />

        <div style={{ textAlign: "center", marginBottom: "5rem", padding: "0 5%", position: "relative" }}>
          <span className="badge">Client Stories</span>
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
            fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 1.0,
            color: "#F0F6FF", marginBottom: "1rem",
          }}>
            Trusted by{" "}
            <span style={{
              background: "linear-gradient(135deg, #A78BFA 0%, #F472B6 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>150+ Businesses</span>
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(240,246,255,0.55)", lineHeight: 1.75 }}>
            Real results. Real clients. Real Nepal businesses growing online.
          </p>
        </div>

        <div className="testimonials-track-wrapper" style={{ overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 150, background: "linear-gradient(90deg, #06101E, transparent)", zIndex: 2, pointerEvents: "none" }} />
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 150, background: "linear-gradient(-90deg, #06101E, transparent)", zIndex: 2, pointerEvents: "none" }} />

          <div className="testimonials-track" style={{ display: "flex", gap: "1.5rem", animation: "scrollLeft 40s linear infinite", width: "max-content" }}>
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="testimonial-card" style={{
                background: "linear-gradient(135deg, #0F1A2E 0%, #0B1524 100%)",
                border: "1px solid rgba(124,111,244,0.14)",
                borderRadius: 20, padding: "2rem 2.2rem",
                minWidth: 340, maxWidth: 340,
                position: "relative",
              }}>
                {/* Quote mark */}
                <div style={{
                  fontSize: "2.5rem", fontFamily: "Georgia, serif",
                  lineHeight: 0.8, color: "#7C6FF4", opacity: 0.4,
                  marginBottom: "1rem",
                }}>&ldquo;</div>
                <p style={{ fontSize: "0.9rem", color: "rgba(240,246,255,0.72)", lineHeight: 1.8, marginBottom: "1.8rem" }}>
                  {t.text}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: "50%",
                    background: `linear-gradient(135deg, ${t.color}, ${t.color}99)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 800, fontSize: "0.95rem", color: "#0D1117", flexShrink: 0,
                    boxShadow: `0 4px 16px ${t.color}40`,
                  }}>{t.avatar}</div>
                  <div>
                    <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#F0F6FF" }}>{t.name}</div>
                    <div style={{ fontSize: "0.75rem", color: "rgba(240,246,255,0.45)", marginTop: "0.1rem" }}>{t.role}</div>
                  </div>
                  <div style={{ marginLeft: "auto", color: "#FBBF24", fontSize: "0.75rem" }}>★★★★★</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ CTA ══════════════════ */}
      <section style={{
        padding: "8rem 5%", textAlign: "center",
        background: "linear-gradient(160deg, #07092C 0%, #1A0D42 40%, #0E1A3F 70%, #07092C 100%)",
        position: "relative", overflow: "hidden",
      }}>
        {/* 3D floating decorative shapes */}
        <div className="float-3d" style={{ position: "absolute", left: "4%", top: "15%", width: 140, height: 140, borderRadius: "32%", border: "1px solid rgba(167,139,250,0.12)", pointerEvents: "none" }} />
        <div className="float-3d" style={{ position: "absolute", right: "5%", bottom: "12%", width: 100, height: 100, borderRadius: "50%", border: "1px solid rgba(244,114,182,0.1)", pointerEvents: "none", animationDelay: "2s" }} />
        <div className="float-3d" style={{ position: "absolute", left: "12%", bottom: "20%", width: 60, height: 60, borderRadius: "40%", border: "1px solid rgba(251,146,60,0.1)", pointerEvents: "none", animationDelay: "4s" }} />
        {/* Orb */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,111,244,0.2) 0%, transparent 65%)", pointerEvents: "none" }} />
        {/* Stars decoration */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "120px 120px", opacity: 0.12 }} />

        <Reveal3D style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <span className="badge" style={{ marginBottom: "2rem" }}>Ready to Scale?</span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)", fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 0.95, color: "#F0F6FF", marginBottom: "1.5rem" }}>
            Let&apos;s Build Something{" "}
            <span style={{ background: "linear-gradient(135deg, #A78BFA 0%, #F472B6 50%, #FB923C 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Extraordinary
            </span>
          </h2>
          <p style={{ fontSize: "1.1rem", color: "rgba(240,246,255,0.6)", lineHeight: 1.8, maxWidth: 520, margin: "0 auto 3rem" }}>
            Join 150+ businesses that chose SAAN Digital Solutions. From first line of code to first paying customer.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2rem" }}>
            <Link href="/contact" className="btn-primary" style={{ fontSize: "1rem", padding: "1rem 2.8rem" }}>
              Start Your Project →
            </Link>
            <a href="https://wa.me/977XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: "1rem", padding: "1rem 2.2rem" }}>
              💬 WhatsApp Us
            </a>
          </div>
          <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
            {["Free discovery call", "No long-term contracts", "Results guaranteed"].map(point => (
              <span key={point} style={{ fontSize: "0.78rem", color: "rgba(240,246,255,0.4)", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <span style={{ color: "#34D399", fontSize: "0.7rem" }}>✓</span> {point}
              </span>
            ))}
          </div>
        </Reveal3D>
      </section>

      <style>{`
        @media (max-width: 580px) {
          .hero-section { padding: 6rem 4% 3rem !important; min-height: auto !important; }
          .hero-section h1 { font-size: clamp(2.4rem, 9vw, 3.5rem) !important; }
        }
        @media (max-width: 900px) {
          .testimonials-track { animation-duration: 60s !important; }
        }
      `}</style>
    </>
  );
}
