import Link from "next/link";
import TiltCard from "@/components/TiltCard";
import CountUp3D from "@/components/CountUp3D";
import Reveal3D from "@/components/Reveal3D";

export const metadata = {
  title: "About — SAAN Digital Solutions | Nepal's Full-Stack Digital Growth Team",
  description: "Learn about SAAN Digital Solutions — our story, team, values, and mission to power digital growth for businesses across Nepal and worldwide.",
};

const team = [
  { name: "Nawaj Sarif", role: "CEO & Head of Organic Growth", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80", color: "var(--accent)", bio: "Full-stack developer and digital growth strategist. Built SAAN Digital Solutions to solve the gap between tech and marketing. 5+ years in SEO. Expert in technical SEO, link building, and the emerging GEO landscape." },
  { name: "Samir Raeen", role: "Managing Director & Lead Developer", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&h=120&q=80", color: "var(--blue)", bio: "React, Next.js and Node.js specialist. Passionate about performance and clean architecture." },
  { name: "Tahir Hussain", role: "Business Development Manager", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80", color: "var(--orange)", bio: "Business development expert with a track record of driving growth and partnerships." },
  { name: "Sweta Shrestha", role: "Full-Stack Developer", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&h=120&q=80", color: "var(--pink)", bio: "Full-stack developer with expertise in modern web technologies and scalable architecture." },
  { name: "Yuvraj Singh", role: "Full-stack AI Developer", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80", color: "var(--cyan)", bio: "AI enthusiast and full-stack developer with a passion for creating intelligent applications." },
  { name: "Laxman Magrati", role: "Mobile App Developer", photo: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=120&h=120&q=80", color: "var(--green)", bio: "Mobile app developer with experience in building cross-platform applications." },
];

const statsData = [
  { num: 10, suffix: "+", label: "Projects Delivered" },
  { num: 98, suffix: "%", label: "Client Retention" },
  { num: 5,  suffix: "+", label: "Years Operating" },
  { num: 3, suffix: "+", label: "Countries Served" },
];

const values = [
  { icon: "🎯", title: "Results First", desc: "We measure success by your revenue, not our activity. Every strategy is tied to business outcomes." },
  { icon: "🔍", title: "Radical Transparency", desc: "You see everything: reports, budgets, results. No black boxes, no mystery metrics." },
  { icon: "⚡", title: "Speed to Execution", desc: "Ideas mean nothing without execution. We move fast and iterate based on data." },
  { icon: "🌱", title: "Long-term Partnership", desc: "We build relationships, not transactions. Your growth is our reputation." },
];

const storyParas = [
  "SAAN Digital Solutions was founded in 2021 by Nawaj Sarif after years of watching brilliant businesses struggle online — not because they lacked quality, but because they lacked digital execution.",
  "The first clients were local Nepal businesses: restaurants, trekking companies, and retailers. The results were transformational — and word spread fast.",
  "Today, SAAN Digital Solutions operates as a full-stack digital platform with specialists in development, design, SEO, GEO, paid media, and content — all under one roof, all working toward one goal: your growth.",
  "We remain proudly based in Kathmandu while serving clients across Nepal, India, and the US.",
];

export default function AboutPage() {
  return (
    <>
      {/* ── Header ── */}
      <section style={{ padding: "10rem 5% 6rem", background: "#060A14", position: "relative", overflow: "hidden" }}>
        {/* 3D floating decorative shapes */}
        <div className="float-3d" style={{ position: "absolute", right: "8%", top: "18%", width: 180, height: 180, borderRadius: "30%", border: "1px solid rgba(124,111,244,0.12)", pointerEvents: "none" }} />
        <div className="float-3d" style={{ position: "absolute", right: "18%", bottom: "12%", width: 90, height: 90, borderRadius: "50%", border: "1px solid rgba(192,132,252,0.1)", pointerEvents: "none", animationDelay: "2.5s" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(124,111,244,0.1) 0%, transparent 60%)" }} />

        <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
          {/* Text */}
          <div>
            <span className="badge" style={{ animation: "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both" }}>About Us</span>
            <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(2.8rem, 5vw, 4.5rem)", fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 0.95, marginBottom: "1.8rem", color: "#F0F6FF", animation: "fadeUp 0.8s 0.08s cubic-bezier(0.16,1,0.3,1) both" }}>
              We Build{" "}
              <span style={{ background: "linear-gradient(135deg, #A78BFA 0%, #F472B6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Businesses</span>,<br />Not Just Websites
            </h1>
            <p style={{ fontSize: "1.1rem", color: "rgba(240,246,255,0.62)", lineHeight: 1.85, marginBottom: "2rem", animation: "fadeUp 0.8s 0.16s cubic-bezier(0.16,1,0.3,1) both" }}>
              SAAN Digital Solutions was founded on a simple observation: most agencies either build things OR market things. Very few do both excellently. We built a team that does both — and then some.
            </p>
            <p style={{ fontSize: "0.95rem", color: "var(--white-dim)", lineHeight: 1.8, animation: "fadeUp 0.8s 0.24s cubic-bezier(0.16,1,0.3,1) both" }}>
              Since 2021, we&apos;ve helped 150+ businesses across Nepal and internationally turn their digital presence into their biggest revenue driver.
            </p>
          </div>

          {/* Stats grid with TiltCard + CountUp3D */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            {statsData.map((stat, i) => (
              <Reveal3D key={stat.label} delay={i * 100}>
                <TiltCard
                  maxTilt={10}
                  glowColor="rgba(124,111,244,0.2)"
                  style={{ background: "var(--card2)", border: "1px solid var(--border)", borderRadius: 20, padding: "2rem", textAlign: "center", cursor: "default" }}
                >
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "2.5rem", fontWeight: 800, color: "var(--accent)", letterSpacing: "-0.04em", lineHeight: 1 }}>
                    <CountUp3D num={stat.num} suffix={stat.suffix} />
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "var(--white-dim)", marginTop: "0.4rem" }}>{stat.label}</div>
                </TiltCard>
              </Reveal3D>
            ))}
          </div>
        </div>
      </section>

      {/* ── Story ── */}
      <section data-theme="light" style={{ padding: "7rem 5%", background: "#FFFFFF" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start" }}>
          {/* Story column */}
          <div>
            <Reveal3D>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--accent)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.2rem" }}>
                <span style={{ width: 20, height: 1, background: "var(--accent)" }} /> Our Story
              </div>
              <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: "1.5rem" }}>
                Started by a developer who got tired of watching good businesses fail online
              </h2>
            </Reveal3D>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {storyParas.map((para, i) => (
                <Reveal3D key={i} delay={i * 80}>
                  <p style={{ fontSize: "0.95rem", color: "var(--white-dim)", lineHeight: 1.8 }}>{para}</p>
                </Reveal3D>
              ))}
            </div>
          </div>

          {/* Values column */}
          <div>
            <Reveal3D>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--accent)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.2rem" }}>
                <span style={{ width: 20, height: 1, background: "var(--accent)" }} /> Our Values
              </div>
            </Reveal3D>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {values.map((v, i) => (
                <Reveal3D key={v.title} delay={i * 100}>
                  <div style={{ display: "flex", gap: "1.2rem", alignItems: "flex-start", padding: "1.2rem", borderRadius: 16 }}>
                    <div style={{ fontSize: "1.8rem", flexShrink: 0, marginTop: "0.1rem" }}>
                      {v.icon}
                    </div>
                    <div>
                      <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1rem", fontWeight: 700, marginBottom: "0.4rem" }}>{v.title}</h3>
                      <p style={{ fontSize: "0.88rem", color: "var(--white-dim)", lineHeight: 1.65 }}>{v.desc}</p>
                    </div>
                  </div>
                </Reveal3D>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section data-theme="light" style={{ padding: "7rem 5%", background: "#EEF0FF" }}>
        <Reveal3D>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--accent)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.2rem", justifyContent: "center" }}>
              <span style={{ width: 20, height: 1, background: "var(--accent)" }} /> The Team
            </div>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.04em" }}>
              The People Behind Your Growth
            </h2>
          </div>
        </Reveal3D>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
          {team.map((member, i) => (
            <Reveal3D key={member.name} delay={i * 80}>
              <TiltCard
                maxTilt={12}
                glowColor={`${member.color}22`}
                style={{ background: "var(--card2)", border: "1px solid var(--border)", borderRadius: 20, padding: "2rem", cursor: "default", height: "100%" }}
              >
                {/* Photo with 3D hover effect */}
                <div style={{ position: "relative", marginBottom: "1.2rem", display: "inline-block" }}>
                  <img
                    src={member.photo}
                    alt={member.name}
                    width={72}
                    height={72}
                    style={{ width: 72, height: 72, borderRadius: "50%", objectFit: "cover", border: `2px solid ${member.color}60`, display: "block", transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s" }}
                  />
                  {/* Color ring decoration */}
                  <div style={{ position: "absolute", inset: -4, borderRadius: "50%", border: `1px solid ${member.color}30`, pointerEvents: "none" }} />
                </div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.3rem" }}>{member.name}</div>
                <div style={{ fontSize: "0.78rem", color: member.color, fontWeight: 600, letterSpacing: "0.04em", marginBottom: "0.75rem", textTransform: "uppercase" }}>{member.role}</div>
                <p style={{ fontSize: "0.85rem", color: "var(--white-dim)", lineHeight: 1.65 }}>{member.bio}</p>
              </TiltCard>
            </Reveal3D>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "8rem 5%", textAlign: "center", background: "linear-gradient(160deg, #07092C 0%, #1A0D42 40%, #0E1A3F 70%, #07092C 100%)", position: "relative", overflow: "hidden" } as React.CSSProperties}>
        {/* 3D floating shapes */}
        <div className="float-3d" style={{ position: "absolute", left: "5%", top: "20%", width: 120, height: 120, borderRadius: "28%", border: "1px solid rgba(167,139,250,0.14)", pointerEvents: "none" }} />
        <div className="float-3d" style={{ position: "absolute", right: "6%", bottom: "15%", width: 80, height: 80, borderRadius: "50%", border: "1px solid rgba(244,114,182,0.12)", pointerEvents: "none", animationDelay: "3s" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,111,244,0.18) 0%, transparent 65%)", pointerEvents: "none" }} />

        <Reveal3D>
          <span className="badge" style={{ marginBottom: "2rem" }}>Work With Us</span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 0.95, color: "#F0F6FF", marginBottom: "1.5rem", position: "relative" }}>
            Ready to Build<br />
            <span style={{ background: "linear-gradient(135deg, #A78BFA 0%, #F472B6 50%, #FB923C 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Something Great?</span>
          </h2>
          <p style={{ fontSize: "1.05rem", color: "rgba(240,246,255,0.58)", lineHeight: 1.8, maxWidth: 460, margin: "0 auto 3rem" }}>
            Book a free discovery call. No commitments, no sales pressure — just honest strategy and clear next steps.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary" style={{ fontSize: "1rem", padding: "1rem 2.8rem", position: "relative" }}>
              Start Your Project →
            </Link>
            <Link href="/careers" className="btn-outline" style={{ fontSize: "1rem", padding: "1rem 2.2rem", position: "relative" }}>
              Join Our Team
            </Link>
          </div>
        </Reveal3D>
      </section>

      <style>{`
        @media (max-width: 900px) {
          section > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          section > div[style*="grid-template-columns: repeat(3"] { grid-template-columns: 1fr 1fr !important; }
          .reveal-3d-grid-wrapper { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 580px) {
          section > div[style*="grid-template-columns: repeat(3"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
