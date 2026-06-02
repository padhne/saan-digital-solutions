import Link from "next/link";
import { caseStudies } from "@/lib/data";
import TiltCard from "@/components/TiltCard";
import Reveal3D from "@/components/Reveal3D";

export const metadata = {
  title: "Case Studies | Proven Results for Nepal Businesses — SAAN Digital Solutions",
  description: "See exactly how SAAN Digital Solutions helped Nepal businesses grow online — real SEO rankings, website builds, ad campaign results, and revenue growth. 10+ successful projects.",
  keywords: [
    "SAAN Digital case studies", "digital agency results Nepal", "SEO success Nepal",
    "web development portfolio Nepal", "digital marketing results Kathmandu",
    "Nepal business growth case study", "SAAN Digital portfolio",
  ],
  alternates: { canonical: "https://saandigitalsolutions.com/case-studies" },
  openGraph: {
    title: "Case Studies | Real Results for Nepal Businesses — SAAN Digital Solutions",
    description: "Real proof: how SAAN Digital Solutions grew Nepal businesses with SEO, web development, and digital marketing. 10+ projects delivered.",
    url: "https://saandigitalsolutions.com/case-studies",
    type: "website",
  },
};

const colorMap: Record<string, string> = {
  accent: "var(--accent)", orange: "var(--orange)", blue: "var(--blue)", pink: "var(--pink)",
};
const dimMap: Record<string, string> = {
  accent: "var(--accent-dim)", orange: "var(--orange-dim)", blue: "var(--blue-dim)", pink: "var(--pink-dim)",
};

export default function CaseStudiesPage() {
  const featured = caseStudies.filter(c => c.featured);
  const rest = caseStudies.filter(c => !c.featured);

  return (
    <>
      {/* Header */}
      <section style={{ padding: "10rem 5% 6rem", background: "#060A14", position: "relative", overflow: "hidden" }}>
        <div className="float-3d" style={{ position: "absolute", right: "7%", top: "22%", width: 150, height: 150, borderRadius: "32%", border: "1px solid rgba(124,111,244,0.1)", pointerEvents: "none" }} />
        <div className="float-3d" style={{ position: "absolute", left: "5%", bottom: "20%", width: 80, height: 80, borderRadius: "50%", border: "1px solid rgba(251,146,60,0.08)", pointerEvents: "none", animationDelay: "2s" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(124,111,244,0.1) 0%, transparent 60%)" }} />
        <div style={{ position: "relative", textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--accent)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.2rem", justifyContent: "center", animation: "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both" }}>
            <span style={{ width: 20, height: 1, background: "var(--accent)" }} /> Our Work
          </div>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: "1.5rem", animation: "fadeUp 0.8s 0.08s cubic-bezier(0.16,1,0.3,1) both" }}>
            Real Results.<br />Real Businesses.
          </h1>
          <p style={{ fontSize: "1.05rem", color: "var(--white-dim)", lineHeight: 1.75, animation: "fadeUp 0.8s 0.16s cubic-bezier(0.16,1,0.3,1) both" }}>
            Every case study below is backed by data. No vanity metrics — only revenue, traffic, and ROI.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section data-theme="light" style={{ padding: "7rem 5%", background: "#FFFFFF" }}>
        <Reveal3D style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--accent)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.8rem" }}>
            <span style={{ width: 20, height: 1, background: "var(--accent)" }} /> Featured
          </div>
        </Reveal3D>

        <div className="rg-2" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem" }}>
          {featured.map((cs, i) => (
            <Reveal3D key={cs.slug} delay={i * 120}>
              <Link href={`/case-studies/${cs.slug}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                <TiltCard
                  maxTilt={9}
                  glowColor={`${colorMap[cs.color]}20`}
                  style={{
                    background: "var(--card)", border: "1px solid var(--border)", borderRadius: 24,
                    padding: "2.5rem", position: "relative", overflow: "hidden",
                    cursor: "pointer", height: "100%",
                  }}
                >
                  <img
                    src={cs.coverImage}
                    alt={cs.title}
                    style={{ width: "calc(100% + 5rem)", marginLeft: "-2.5rem", marginTop: "-2.5rem", height: 180, objectFit: "cover", display: "block", marginBottom: "2rem", opacity: 0.7, transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)" }}
                  />
                  <div style={{ position: "absolute", top: 0, right: 0, width: 200, height: 200, background: `radial-gradient(circle at 100% 0%, ${colorMap[cs.color]}08 0%, transparent 60%)` }} />
                  <div style={{ fontSize: "3rem", marginBottom: "1.5rem", transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)" }}>{cs.emoji}</div>
                  <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.2rem", flexWrap: "wrap" }}>
                    {cs.tags.map(t => (
                      <span key={t} style={{ fontSize: "0.72rem", background: dimMap[cs.color], border: `1px solid ${colorMap[cs.color]}30`, color: colorMap[cs.color], padding: "0.2rem 0.6rem", borderRadius: 100, fontWeight: 500 }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.3rem", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.2, marginBottom: "0.75rem" }}>{cs.title}</div>
                  <p style={{ fontSize: "0.88rem", color: "var(--white-dim)", lineHeight: 1.7, marginBottom: "2rem" }}>{cs.summary}</p>

                  {/* Result metric boxes with 3D depth effect */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}>
                    {cs.results.slice(0, 2).map((r) => (
                      <div key={r.metric} className="hover-3d-rise" style={{ background: "var(--dark)", borderRadius: 12, padding: "1rem" }}>
                        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.5rem", fontWeight: 800, color: colorMap[cs.color], letterSpacing: "-0.03em" }}>{r.value}</div>
                        <div style={{ fontSize: "0.75rem", color: "var(--white-dim)", marginTop: "0.25rem" }}>{r.metric}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: "1.5rem", fontSize: "0.85rem", color: colorMap[cs.color], fontWeight: 600 }}>
                    Read Case Study →
                  </div>
                </TiltCard>
              </Link>
            </Reveal3D>
          ))}
        </div>
      </section>

      {/* Rest */}
      <section data-theme="light" style={{ padding: "0 5% 7rem", background: "#EEF0FF" }}>
        <div className="rg-2" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}>
          {rest.map((cs, i) => (
            <Reveal3D key={cs.slug} delay={i * 90}>
              <Link href={`/case-studies/${cs.slug}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                <div className="hover-3d-rise" style={{
                  background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20,
                  padding: "2rem", display: "flex", gap: "1.5rem", alignItems: "flex-start",
                  height: "100%",
                }}>
                  <div className="hover-icon-3d" style={{ fontSize: "2.5rem", flexShrink: 0 }}>{cs.emoji}</div>
                  <div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.5rem", lineHeight: 1.3 }}>{cs.title}</div>
                    <p style={{ fontSize: "0.82rem", color: "var(--white-dim)", lineHeight: 1.6, marginBottom: "1rem" }}>{cs.summary}</p>
                    <div style={{ fontSize: "0.78rem", color: colorMap[cs.color], fontWeight: 600 }}>Read Case Study →</div>
                  </div>
                </div>
              </Link>
            </Reveal3D>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "8rem 5%", background: "linear-gradient(160deg, #07092C 0%, #1A0D42 40%, #0E1A3F 70%, #07092C 100%)", textAlign: "center", position: "relative", overflow: "hidden" } as React.CSSProperties}>
        <div className="float-3d" style={{ position: "absolute", left: "5%", top: "18%", width: 120, height: 120, borderRadius: "30%", border: "1px solid rgba(167,139,250,0.12)", pointerEvents: "none" }} />
        <div className="float-3d" style={{ position: "absolute", right: "6%", bottom: "16%", width: 85, height: 85, borderRadius: "50%", border: "1px solid rgba(244,114,182,0.1)", pointerEvents: "none", animationDelay: "2.5s" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,111,244,0.18) 0%, transparent 65%)", pointerEvents: "none" }} />

        <Reveal3D style={{ position: "relative" }}>
          <span className="badge" style={{ marginBottom: "2rem" }}>Get Similar Results</span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)", fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 1.0, color: "#F0F6FF", marginBottom: "1.2rem" }}>
            Want Results<br />
            <span style={{ background: "linear-gradient(135deg, #A78BFA 0%, #F472B6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Like These?</span>
          </h2>
          <p style={{ fontSize: "1.05rem", color: "rgba(240,246,255,0.58)", marginBottom: "3rem", maxWidth: 440, margin: "0 auto 3rem" }}>
            Let&apos;s build your success story. Book a free discovery call and we&apos;ll show you exactly how.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: "1rem", padding: "1rem 2.8rem" }}>
            Start Your Project →
          </Link>
        </Reveal3D>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section > div[style*="grid-template-columns: repeat(2"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
