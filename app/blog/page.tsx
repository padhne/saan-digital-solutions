import Link from "next/link";
import { blogPosts } from "@/lib/data";
import TiltCard from "@/components/TiltCard";
import Reveal3D from "@/components/Reveal3D";

export const metadata = {
  title: "Blog | SEO, Web Development & Digital Marketing Tips for Nepal — SAAN Digital Solutions",
  description: "Free expert guides on SEO, GEO optimization, web development, Google & Meta ads, and AI automation for Nepal businesses. Stay ahead with insights from SAAN Digital Solutions, Kathmandu.",
  keywords: [
    "SEO tips Nepal", "digital marketing blog Nepal", "web development guide Nepal",
    "GEO optimization guide", "Google ads tips Nepal", "SAAN Digital blog",
    "Nepal business growth tips", "AI automation guide Nepal",
  ],
  alternates: { canonical: "https://saandigitalsolutions.com/blog" },
  openGraph: {
    title: "Blog | SEO, Web Dev & Digital Marketing Tips — SAAN Digital Solutions",
    description: "Free expert guides for Nepal businesses: SEO, GEO, web development, ads & AI. From Kathmandu's top digital agency.",
    url: "https://saandigitalsolutions.com/blog",
    type: "website",
  },
};

const colorMap: Record<string, string> = {
  accent: "var(--accent)", orange: "var(--orange)", blue: "var(--blue)", pink: "var(--pink)",
};
const dimMap: Record<string, string> = {
  accent: "var(--accent-dim)", orange: "var(--orange-dim)", blue: "var(--blue-dim)", pink: "var(--pink-dim)",
};

const categories = ["All", "SEO & GEO", "Ads & Growth", "Web Development", "AI & Automation"];

export default function BlogPage() {
  const featured = blogPosts.filter(p => p.featured);
  const rest = blogPosts.filter(p => !p.featured);

  return (
    <>
      {/* Header */}
      <section style={{ padding: "10rem 5% 6rem", background: "#060A14", position: "relative", overflow: "hidden" }}>
        <div className="float-3d" style={{ position: "absolute", right: "6%", top: "20%", width: 140, height: 140, borderRadius: "30%", border: "1px solid rgba(124,111,244,0.1)", pointerEvents: "none" }} />
        <div className="float-3d" style={{ position: "absolute", left: "5%", bottom: "18%", width: 80, height: 80, borderRadius: "50%", border: "1px solid rgba(192,132,252,0.08)", pointerEvents: "none", animationDelay: "3.5s" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(124,111,244,0.1) 0%, transparent 60%)" }} />
        <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--accent)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.2rem", justifyContent: "center", animation: "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both" }}>
            <span style={{ width: 20, height: 1, background: "var(--accent)" }} /> Resources & Insights
          </div>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: "1.5rem", animation: "fadeUp 0.8s 0.08s cubic-bezier(0.16,1,0.3,1) both" }}>
            Practical Guides for<br />Digital Growth in Nepal
          </h1>
          <p style={{ fontSize: "1.05rem", color: "var(--white-dim)", lineHeight: 1.75, animation: "fadeUp 0.8s 0.16s cubic-bezier(0.16,1,0.3,1) both" }}>
            No fluff. Just actionable insights on SEO, GEO, ads, and web development — straight from our team.
          </p>
        </div>

        {/* Categories */}
        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", marginTop: "3rem", flexWrap: "wrap" }}>
          {categories.map((cat, i) => (
            <button key={cat} className="hover-3d-pop" style={{
              padding: "0.5rem 1.2rem", borderRadius: 100, fontSize: "0.82rem", fontWeight: 500,
              cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
              background: i === 0 ? "var(--accent)" : "var(--card)",
              color: i === 0 ? "var(--black)" : "var(--white-dim)",
              border: i === 0 ? "none" : "1px solid var(--border)",
              transition: "all 0.25s",
              animation: `fadeUp 0.6s ${i * 60}ms cubic-bezier(0.16,1,0.3,1) both`,
            }}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Posts */}
      <section data-theme="light" style={{ padding: "7rem 5%", background: "#FFFFFF" }}>
        <Reveal3D style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--accent)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            <span style={{ width: 20, height: 1, background: "var(--accent)" }} /> Featured
          </div>
        </Reveal3D>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem", marginBottom: "5rem" }}>
          {featured.map((post, i) => (
            <Reveal3D key={post.slug} delay={i * 100}>
              <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                <TiltCard
                  maxTilt={10}
                  glowColor={`${colorMap[post.color]}22`}
                  style={{
                    background: "var(--card)", border: "1px solid var(--border)", borderRadius: 24,
                    padding: "2.5rem", position: "relative", overflow: "hidden", height: "100%",
                    display: "flex", flexDirection: "column", cursor: "pointer",
                  }}
                >
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    style={{ width: "calc(100% + 5rem)", marginLeft: "-2.5rem", marginTop: "-2.5rem", height: 160, objectFit: "cover", display: "block", marginBottom: "1.5rem", opacity: 0.75, transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)" }}
                  />
                  <div style={{ fontSize: "2rem", marginBottom: "1rem", transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)" }}>{post.emoji}</div>
                  <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "0.72rem", background: dimMap[post.color], border: `1px solid ${colorMap[post.color]}30`, color: colorMap[post.color], padding: "0.2rem 0.6rem", borderRadius: 100, fontWeight: 500 }}>{post.category}</span>
                    <span style={{ fontSize: "0.72rem", color: "var(--white-faint)" }}>{post.readTime}</span>
                  </div>
                  <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.3rem", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.2, marginBottom: "0.75rem", flex: 1 }}>{post.title}</h2>
                  <p style={{ fontSize: "0.88rem", color: "var(--white-dim)", lineHeight: 1.7, marginBottom: "1.5rem" }}>{post.excerpt}</p>
                  <div style={{ fontSize: "0.82rem", color: "var(--white-dim)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                    <span style={{ color: colorMap[post.color], fontWeight: 600 }}>Read More →</span>
                  </div>
                </TiltCard>
              </Link>
            </Reveal3D>
          ))}
        </div>

        {/* All Posts */}
        <Reveal3D style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--accent)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            <span style={{ width: 20, height: 1, background: "var(--accent)" }} /> All Articles
          </div>
        </Reveal3D>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {rest.map((post, i) => (
            <Reveal3D key={post.slug} delay={i * 70}>
              <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block" }}>
                <article style={{
                  background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20,
                  padding: "2rem", display: "flex", gap: "2rem", alignItems: "center",
                }}
                  className="hover-3d-slide"
                >
                  <div className="hover-icon-3d" style={{ fontSize: "2rem", flexShrink: 0 }}>
                    {post.emoji}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
                      <span style={{ fontSize: "0.72rem", background: dimMap[post.color], border: `1px solid ${colorMap[post.color]}30`, color: colorMap[post.color], padding: "0.15rem 0.55rem", borderRadius: 100, fontWeight: 500 }}>{post.category}</span>
                      <span style={{ fontSize: "0.72rem", color: "var(--white-faint)" }}>{post.readTime}</span>
                      <span style={{ fontSize: "0.72rem", color: "var(--white-faint)" }}>·</span>
                      <span style={{ fontSize: "0.72rem", color: "var(--white-faint)" }}>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                    </div>
                    <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.05rem", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.3, marginBottom: "0.4rem" }}>{post.title}</h3>
                    <p style={{ fontSize: "0.82rem", color: "var(--white-dim)", lineHeight: 1.6 }}>{post.excerpt.slice(0, 120)}...</p>
                  </div>
                  <div style={{ color: colorMap[post.color], fontWeight: 600, fontSize: "1.2rem", flexShrink: 0 }}>→</div>
                </article>
              </Link>
            </Reveal3D>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ padding: "8rem 5%", background: "linear-gradient(160deg, #07092C 0%, #1A0D42 40%, #0E1A3F 70%, #07092C 100%)", textAlign: "center", position: "relative", overflow: "hidden" } as React.CSSProperties}>
        <div className="float-3d" style={{ position: "absolute", left: "5%", top: "22%", width: 110, height: 110, borderRadius: "28%", border: "1px solid rgba(167,139,250,0.12)", pointerEvents: "none" }} />
        <div className="float-3d" style={{ position: "absolute", right: "7%", bottom: "20%", width: 75, height: 75, borderRadius: "50%", border: "1px solid rgba(244,114,182,0.1)", pointerEvents: "none", animationDelay: "2s" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,111,244,0.18) 0%, transparent 65%)", pointerEvents: "none" }} />

        <Reveal3D style={{ position: "relative" }}>
          <span className="badge" style={{ marginBottom: "2rem" }}>Stay Updated</span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 1.0, color: "#F0F6FF", marginBottom: "1rem" }}>
            Get Growth Insights{" "}
            <span style={{ background: "linear-gradient(135deg, #A78BFA 0%, #F472B6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Weekly</span>
          </h2>
          <p style={{ fontSize: "1.05rem", color: "rgba(240,246,255,0.58)", marginBottom: "2.5rem" }}>No spam. Just actionable digital marketing insights for Nepal businesses — delivered every week.</p>
          <form style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap", maxWidth: 480, margin: "0 auto" }}>
            <input type="email" placeholder="your@email.com" style={{
              flex: 1, minWidth: 220,
              background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)",
              borderRadius: 100, padding: "0.85rem 1.4rem", color: "#F0F6FF",
              fontSize: "0.9rem", outline: "none", fontFamily: "'Inter', sans-serif",
              transition: "border-color 0.25s, box-shadow 0.25s",
            }} />
            <button type="submit" className="btn-primary" style={{ padding: "0.85rem 1.8rem", fontSize: "0.9rem", border: "none", cursor: "pointer", fontFamily: "'Inter', sans-serif" }}>
              Subscribe →
            </button>
          </form>
        </Reveal3D>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section > div[style*="grid-template-columns: repeat(2"] { grid-template-columns: 1fr !important; }
          article[style*="display: flex"][style*="gap: 2rem"] { flex-direction: column !important; }
        }
      `}</style>
    </>
  );
}
