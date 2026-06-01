import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/data";

export async function generateStaticParams() {
  return caseStudies.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = caseStudies.find(c => c.slug === slug);
  if (!cs) return {};
  return { title: `${cs.title} — SAAN Digital Solutions Case Study`, description: cs.summary };
}

const colorMap: Record<string, string> = {
  accent: "var(--accent)", orange: "var(--orange)", blue: "var(--blue)", pink: "var(--pink)",
};

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = caseStudies.find(c => c.slug === slug);
  if (!cs) notFound();

  const color = colorMap[cs.color] || "var(--accent)";

  return (
    <>
      {/* Header */}
      <section style={{ padding: "10rem 5% 6rem", background: "#060A14", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(124,111,244,0.1) 0%, transparent 60%)" }} />
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse 60% 50% at 30% 50%, ${color}06 0%, transparent 60%)` }} />
        <div style={{ position: "relative" }}>
          <Link href="/case-studies" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--white-dim)", fontSize: "0.82rem", textDecoration: "none", marginBottom: "2rem" }}>
            ← Back to Case Studies
          </Link>
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.72rem", background: `${color}18`, border: `1px solid ${color}30`, color, padding: "0.2rem 0.7rem", borderRadius: 100, fontWeight: 600 }}>{cs.industry}</span>
            <span style={{ fontSize: "0.72rem", background: `${color}18`, border: `1px solid ${color}30`, color, padding: "0.2rem 0.7rem", borderRadius: 100, fontWeight: 600 }}>{cs.service}</span>
          </div>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: "1.5rem", maxWidth: 800 }}>
            {cs.title}
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--white-dim)", lineHeight: 1.75, maxWidth: 600 }}>{cs.summary}</p>
        </div>
      </section>

      {/* Results */}
      <section style={{ padding: "5rem 5%", background: "linear-gradient(135deg, #3730A3 0%, #6D28D9 50%, #4338CA 100%)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
          {cs.results.map(r => (
            <div key={r.metric} style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 20, padding: "2rem", textAlign: "center", backdropFilter: "blur(8px)" }}>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "2.5rem", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.04em", lineHeight: 1 }}>{r.value}</div>
              <div style={{ fontSize: "0.85rem", fontWeight: 600, marginTop: "0.5rem", color: "#E0E7FF" }}>{r.metric}</div>
              <div style={{ fontSize: "0.72rem", color: "rgba(224,231,255,0.65)", marginTop: "0.2rem" }}>{r.period}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section data-theme="light" style={{ padding: "7rem 5%", background: "#FFFFFF", display: "grid", gridTemplateColumns: "1fr 360px", gap: "6rem", alignItems: "start" }}>
        <div>
          <div style={{ marginBottom: "3rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
              <span style={{ width: 20, height: 1, background: color }} /> The Challenge
            </div>
            <p style={{ fontSize: "1rem", color: "var(--white-dim)", lineHeight: 1.85 }}>{cs.challenge}</p>
          </div>
          <div style={{ marginBottom: "3rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
              <span style={{ width: 20, height: 1, background: color }} /> Our Solution
            </div>
            <p style={{ fontSize: "1rem", color: "var(--white-dim)", lineHeight: 1.85 }}>{cs.solution}</p>
          </div>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
              <span style={{ width: 20, height: 1, background: color }} /> Tags
            </div>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {cs.tags.map(t => (
                <span key={t} style={{ fontSize: "0.78rem", background: `${color}15`, border: `1px solid ${color}30`, color, padding: "0.3rem 0.75rem", borderRadius: 100, fontWeight: 500 }}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ position: "sticky", top: "6rem" }}>
          <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20, padding: "2rem", marginBottom: "1.5rem" }}>
            <div style={{ fontSize: "0.72rem", color: "var(--white-faint)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "1.2rem" }}>Project Info</div>
            {[
              { label: "Client", value: cs.client },
              { label: "Industry", value: cs.industry },
              { label: "Service", value: cs.service },
            ].map(item => (
              <div key={item.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.75rem 0", borderBottom: "1px solid var(--border)" }}>
                <span style={{ fontSize: "0.82rem", color: "var(--white-dim)" }}>{item.label}</span>
                <span style={{ fontSize: "0.85rem", fontWeight: 600 }}>{item.value}</span>
              </div>
            ))}
          </div>
          <Link href="/contact" style={{ display: "block", textAlign: "center", background: color, color: "var(--black)", padding: "0.9rem 1.5rem", borderRadius: 100, fontSize: "0.9rem", fontWeight: 700, textDecoration: "none" }}>
            Get Similar Results →
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          section[style*="grid-template-columns: repeat(4"] { grid-template-columns: repeat(2,1fr) !important; }
          section[style*="grid-template-columns: 1fr 360px"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
