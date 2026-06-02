import Link from "next/link";
import { services } from "@/lib/data";
import TiltCard from "@/components/TiltCard";
import Reveal3D from "@/components/Reveal3D";

export const metadata = {
  title: "Digital Services Nepal | Web Dev, SEO, Ads & AI Automation — SAAN Digital Solutions",
  description: "Full-stack digital services for Nepal businesses: custom web & app development, SEO, GEO optimization, Google & Meta ads, content creation, brand design, and AI automation. SAAN Digital Solutions, Kathmandu.",
  keywords: [
    "web development services Nepal", "SEO services Nepal", "digital marketing services Nepal",
    "app development Kathmandu", "GEO optimization Nepal", "Google ads management Nepal",
    "Facebook ads Nepal", "AI automation Nepal", "brand design Nepal", "content creation Nepal",
    "SAAN Digital services", "full stack development Nepal",
  ],
  alternates: { canonical: "https://saandigitalsolutions.com/services" },
  openGraph: {
    title: "Digital Services | Web Dev, SEO, Ads & AI — SAAN Digital Solutions Nepal",
    description: "Everything your Nepal business needs: web & app development, SEO, GEO, paid ads, content, and AI automation under one roof.",
    url: "https://saandigitalsolutions.com/services",
    type: "website",
  },
};

const colorMap: Record<string, string> = {
  accent: "var(--accent)", purple: "var(--purple)", orange: "var(--orange)",
  pink: "var(--pink)", cyan: "var(--cyan)", blue: "var(--blue)",
};

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section style={{ padding: "10rem 5% 6rem", background: "#060A14", position: "relative", overflow: "hidden" }}>
        <div className="float-3d" style={{ position: "absolute", right: "8%", top: "25%", width: 160, height: 160, borderRadius: "35%", border: "1px solid rgba(124,111,244,0.1)", pointerEvents: "none" }} />
        <div className="float-3d" style={{ position: "absolute", right: "22%", bottom: "15%", width: 80, height: 80, borderRadius: "50%", border: "1px solid rgba(192,132,252,0.08)", pointerEvents: "none", animationDelay: "3s" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(124,111,244,0.12) 0%, transparent 60%)" }} />
        <div style={{ position: "relative", maxWidth: 700 }}>
          <span className="badge" style={{ animation: "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both" }}>Our Services</span>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)", fontWeight: 800, letterSpacing: "-0.055em", lineHeight: 0.95, marginBottom: "1.8rem", color: "#F0F6FF", animation: "fadeUp 0.8s 0.08s cubic-bezier(0.16,1,0.3,1) both" }}>
            Everything Your Business<br />
            <span style={{ background: "linear-gradient(135deg, #A78BFA 0%, #F472B6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Needs to Grow</span>
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(240,246,255,0.62)", lineHeight: 1.85, maxWidth: 540, animation: "fadeUp 0.8s 0.16s cubic-bezier(0.16,1,0.3,1) both" }}>
            From building your digital foundation to scaling it globally — we cover the entire spectrum under one integrated team.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section style={{ background: "#060A14" }}>
        {services.map((svc, i) => (
          <div key={svc.id} id={svc.id} style={{
            padding: "7rem 5%",
            background: i % 2 === 0
              ? "linear-gradient(135deg, #060A14 0%, #0B1020 100%)"
              : "linear-gradient(135deg, #0D1226 0%, #081020 100%)",
            position: "relative", overflow: "hidden",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}>
            {/* Per-service ambient glow */}
            <div style={{
              position: "absolute",
              [i % 2 === 0 ? "right" : "left"]: "-5%",
              top: "50%", transform: "translateY(-50%)",
              width: 500, height: 500, borderRadius: "50%",
              background: `radial-gradient(circle, ${colorMap[svc.color]}12 0%, transparent 65%)`,
              pointerEvents: "none",
            }} />
            {/* Service number watermark */}
            <div style={{
              position: "absolute", top: "2rem",
              [i % 2 === 0 ? "right" : "left"]: "5%",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "8rem", fontWeight: 900,
              color: `${colorMap[svc.color]}08`,
              lineHeight: 1, pointerEvents: "none",
              userSelect: "none",
            }}>
              {String(i + 1).padStart(2, "0")}
            </div>
            {/* 3D floating decoration per service */}
            <div className="float-3d" style={{
              position: "absolute",
              [i % 2 === 0 ? "left" : "right"]: "3%",
              top: "15%",
              width: 100, height: 100, borderRadius: "30%",
              border: `1px solid ${colorMap[svc.color]}15`,
              pointerEvents: "none",
              animationDelay: `${i * 1.2}s`,
            }} />

            <div className="rg-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center", position: "relative" }}>
              {/* ── Text ── */}
              <Reveal3D
                className={i % 2 === 0 ? "reveal-3d" : "reveal-3d"}
                style={{ order: i % 2 === 0 ? 0 : 1 }}
                delay={0}
              >
                {/* Service label */}
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: "0.6rem",
                  background: `${colorMap[svc.color]}14`,
                  border: `1px solid ${colorMap[svc.color]}30`,
                  color: colorMap[svc.color],
                  fontSize: "0.68rem", fontWeight: 700,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  padding: "0.28rem 0.85rem", borderRadius: 100,
                  marginBottom: "1.5rem",
                }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: colorMap[svc.color], display: "inline-block", animation: "pulse 2s infinite" }} />
                  {svc.name}
                </div>

                <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(1.9rem, 3vw, 2.7rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, color: "#F0F6FF", marginBottom: "1.2rem" }}>
                  {svc.short}
                </h2>
                <p style={{ fontSize: "0.95rem", color: "rgba(240,246,255,0.58)", lineHeight: 1.85, marginBottom: "2rem" }}>
                  {svc.desc}
                </p>

                {/* Feature checklist with stagger */}
                <div className="rg-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.65rem", marginBottom: "2rem" }}>
                  {svc.features.map((f, fi) => (
                    <Reveal3D key={f} delay={fi * 60} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.84rem", color: "rgba(240,246,255,0.65)" }}>
                      <span style={{ color: colorMap[svc.color], flexShrink: 0, marginTop: "0.1rem", fontWeight: 700, fontSize: "0.8rem" }}>✓</span>
                      {f}
                    </Reveal3D>
                  ))}
                </div>

                {/* Meta badges */}
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
                  <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "0.65rem 1rem" }}>
                    <div style={{ fontSize: "0.62rem", color: "rgba(240,246,255,0.3)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.25rem" }}>Timeline</div>
                    <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#F0F6FF" }}>{svc.timeline}</div>
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "0.65rem 1rem", flex: 1 }}>
                    <div style={{ fontSize: "0.62rem", color: "rgba(240,246,255,0.3)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.25rem" }}>Deliverables</div>
                    <div style={{ fontSize: "0.82rem", color: "rgba(240,246,255,0.7)" }}>{svc.deliverables.join(" · ")}</div>
                  </div>
                </div>

                <Link href="/contact" style={{
                  display: "inline-flex", alignItems: "center", gap: "0.55rem",
                  background: `linear-gradient(135deg, ${colorMap[svc.color]} 0%, ${colorMap[svc.color]}CC 100%)`,
                  color: "#FFFFFF",
                  padding: "0.88rem 2.2rem", borderRadius: 100,
                  fontSize: "0.9rem", fontWeight: 700, textDecoration: "none",
                  boxShadow: `0 8px 32px ${colorMap[svc.color]}35`,
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}>
                  Get Started →
                </Link>
              </Reveal3D>

              {/* ── Visual Card with TiltCard ── */}
              <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                <Reveal3D delay={150}>
                  <TiltCard
                    maxTilt={8}
                    glowColor={`${colorMap[svc.color]}20`}
                    style={{
                      borderRadius: 24, overflow: "hidden",
                      border: `1px solid ${colorMap[svc.color]}25`,
                      boxShadow: `0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px ${colorMap[svc.color]}10`,
                      background: "#0F1B2D",
                    }}
                  >
                    <div style={{ position: "relative", overflow: "hidden" }}>
                      <img
                        src={svc.coverImage}
                        alt={svc.name}
                        style={{ width: "100%", height: 230, objectFit: "cover", display: "block", opacity: 0.85 }}
                      />
                      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, transparent 40%, #0F1B2D 100%)` }} />
                      <div className="hover-icon-3d" style={{
                        position: "absolute", bottom: "1.5rem", left: "1.5rem",
                        width: 52, height: 52, borderRadius: 14,
                        background: `${colorMap[svc.color]}22`,
                        border: `1px solid ${colorMap[svc.color]}45`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "1.6rem",
                        backdropFilter: "blur(8px)",
                      }}>
                        {svc.icon}
                      </div>
                    </div>

                    <div style={{ padding: "1.8rem 2rem" }}>
                      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.25rem", fontWeight: 800, color: "#F0F6FF", letterSpacing: "-0.03em", marginBottom: "1rem" }}>
                        {svc.name}
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                        {svc.features.slice(0, 4).map(f => (
                          <span key={f} style={{
                            fontSize: "0.72rem",
                            background: `${colorMap[svc.color]}12`,
                            border: `1px solid ${colorMap[svc.color]}28`,
                            color: colorMap[svc.color],
                            padding: "0.22rem 0.65rem", borderRadius: 100, fontWeight: 500,
                          }}>{f}</span>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                </Reveal3D>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ padding: "8rem 5%", background: "linear-gradient(160deg, #07092C 0%, #1A0D42 40%, #0E1A3F 70%, #07092C 100%)", textAlign: "center", position: "relative", overflow: "hidden" } as React.CSSProperties}>
        <div className="float-3d" style={{ position: "absolute", left: "6%", top: "20%", width: 120, height: 120, borderRadius: "30%", border: "1px solid rgba(167,139,250,0.12)", pointerEvents: "none" }} />
        <div className="float-3d" style={{ position: "absolute", right: "8%", bottom: "18%", width: 80, height: 80, borderRadius: "50%", border: "1px solid rgba(244,114,182,0.1)", pointerEvents: "none", animationDelay: "2.5s" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,111,244,0.18) 0%, transparent 65%)", pointerEvents: "none" }} />

        <Reveal3D style={{ position: "relative" }}>
          <span className="badge" style={{ marginBottom: "2rem" }}>Free Strategy Call</span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)", fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 1.0, color: "#F0F6FF", marginBottom: "1.2rem" }}>
            Not Sure Which Service<br />
            <span style={{ background: "linear-gradient(135deg, #A78BFA 0%, #F472B6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>You Need?</span>
          </h2>
          <p style={{ fontSize: "1.05rem", color: "rgba(240,246,255,0.58)", marginBottom: "3rem", maxWidth: 460, margin: "0 auto 3rem" }}>
            Book a free 30-minute discovery call. We&apos;ll audit your current digital presence and map the right strategy — no commitment required.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: "1rem", padding: "1rem 2.8rem" }}>
            Book Free Discovery Call →
          </Link>
        </Reveal3D>
      </section>

      <style>{`
        @media (max-width: 580px) {
          .services-header { padding: 6rem 4% 3rem !important; }
        }
      `}</style>
    </>
  );
}
