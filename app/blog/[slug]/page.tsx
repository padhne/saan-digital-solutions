import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";

export async function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title} — SAAN Digital Solutions Blog`, description: post.excerpt };
}

const colorMap: Record<string, string> = {
  accent: "var(--accent)", orange: "var(--orange)", blue: "var(--blue)", pink: "var(--pink)",
};

// In a real project, these would be MDX files. This is a demo content generator.
function generateContent(post: { title: string; excerpt: string; category: string }) {
  return `
## Introduction

${post.excerpt}

This guide covers everything you need to know about ${post.category} in 2025 — from foundational concepts to advanced tactics you can implement this week.

## Why This Matters in 2025

The digital landscape has shifted dramatically. Businesses that adapt early gain an enormous competitive advantage, while those that wait find themselves playing catch-up in an increasingly competitive market.

The key insight is simple: **execution speed matters more than perfection**. The businesses growing fastest right now are those that test, learn, and iterate — not those waiting for the perfect strategy.

## Core Principles

### 1. Start with Data

Every successful campaign starts with understanding your current baseline. Before you change anything, measure everything:
- Current traffic sources and volumes
- Conversion rates at each funnel stage
- Cost per acquisition across channels
- Revenue attribution by channel

### 2. Focus on High-Impact Levers

Not all activities deliver equal results. The Pareto principle applies strongly here — 20% of your actions will drive 80% of your results. Identify and double down on those high-impact levers.

### 3. Build Systems, Not Campaigns

The businesses that win long-term aren't running one-off campaigns. They're building systems: content pipelines, SEO flywheels, ad funnels, and retention engines that compound over time.

## Implementation Framework

**Week 1:** Audit and baseline
**Week 2–3:** Quick wins and low-hanging fruit
**Week 4–8:** Core system implementation
**Ongoing:** Optimization and scaling

## Common Mistakes to Avoid

1. **Skipping the foundation** — Trying to scale before fixing core issues
2. **Too many channels at once** — Master one before adding another
3. **Ignoring data** — Gut feelings don't scale; data does
4. **Inconsistency** — Most strategies need 90+ days to show full results

## Conclusion

The businesses that win online aren't the ones with the biggest budgets — they're the ones with the clearest strategy and the most consistent execution.

If you'd like help implementing any of this for your business, [get in touch with our team](/contact) for a free discovery call.
  `;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) notFound();

  const color = colorMap[post.color] || "var(--accent)";
  const related = blogPosts.filter(p => p.slug !== slug && p.category === post.category).slice(0, 2);
  const content = generateContent(post);

  return (
    <>
      {/* Header */}
      <section style={{ padding: "10rem 5% 5rem", background: "#060A14", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(124,111,244,0.1) 0%, transparent 60%)" }} />
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse 60% 50% at 50% 0%, ${color}05 0%, transparent 60%)` }} />
        <div style={{ position: "relative", maxWidth: 780, margin: "0 auto" }}>
          <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--white-dim)", fontSize: "0.82rem", textDecoration: "none", marginBottom: "2rem" }}>
            ← Back to Blog
          </Link>
          <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ fontSize: "0.72rem", background: `${color}18`, border: `1px solid ${color}30`, color, padding: "0.2rem 0.7rem", borderRadius: 100, fontWeight: 600 }}>{post.category}</span>
            <span style={{ fontSize: "0.75rem", color: "var(--white-faint)" }}>{post.readTime}</span>
            <span style={{ fontSize: "0.75rem", color: "var(--white-faint)" }}>·</span>
            <span style={{ fontSize: "0.75rem", color: "var(--white-faint)" }}>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
          </div>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            {post.title}
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--white-dim)", lineHeight: 1.75 }}>{post.excerpt}</p>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section data-theme="light" style={{ padding: "5rem 5%", background: "#FFFFFF", display: "grid", gridTemplateColumns: "1fr 300px", gap: "5rem", maxWidth: 1200, margin: "0 auto" }}>
        {/* Article */}
        <article>
          <div style={{
            fontSize: "1rem", color: "var(--white-dim)", lineHeight: 1.9,
          }}>
            {content.split("\n").map((line, i) => {
              if (line.startsWith("## ")) return <h2 key={i} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.6rem", fontWeight: 800, color: "var(--white)", letterSpacing: "-0.03em", marginTop: "3rem", marginBottom: "1rem" }}>{line.slice(3)}</h2>;
              if (line.startsWith("### ")) return <h3 key={i} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.2rem", fontWeight: 700, color: "var(--white)", marginTop: "2rem", marginBottom: "0.75rem" }}>{line.slice(4)}</h3>;
              if (line.startsWith("**") && line.endsWith("**")) return <p key={i} style={{ fontWeight: 600, color: "var(--white)", marginBottom: "0.75rem" }}>{line.slice(2, -2)}</p>;
              if (line.match(/^\d+\. /)) return <p key={i} style={{ marginBottom: "0.5rem", paddingLeft: "1.5rem" }}>{line}</p>;
              if (line.startsWith("- ")) return <p key={i} style={{ marginBottom: "0.4rem", paddingLeft: "1rem", borderLeft: `2px solid ${color}` }}>{line.slice(2)}</p>;
              if (line.trim() === "") return <br key={i} />;
              return <p key={i} style={{ marginBottom: "1rem" }}>{line}</p>;
            })}
          </div>

          {/* CTA */}
          <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20, padding: "2rem", marginTop: "4rem", textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>🚀</div>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Need help implementing this?</h3>
            <p style={{ fontSize: "0.88rem", color: "var(--white-dim)", marginBottom: "1.5rem" }}>Our team can implement this strategy for your business in weeks, not months.</p>
            <Link href="/contact" style={{ background: "var(--accent)", color: "var(--black)", padding: "0.75rem 1.8rem", borderRadius: 100, fontSize: "0.9rem", fontWeight: 700, textDecoration: "none" }}>
              Book Free Consultation →
            </Link>
          </div>
        </article>

        {/* Sidebar */}
        <aside style={{ position: "sticky", top: "6rem", alignSelf: "start" }}>
          <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20, padding: "1.5rem", marginBottom: "1.5rem" }}>
            <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.9rem", fontWeight: 700, marginBottom: "1rem" }}>Tags</h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {post.tags.map(t => (
                <span key={t} style={{ fontSize: "0.75rem", background: `${color}15`, border: `1px solid ${color}30`, color, padding: "0.25rem 0.65rem", borderRadius: 100, fontWeight: 500 }}>{t}</span>
              ))}
            </div>
          </div>

          {related.length > 0 && (
            <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20, padding: "1.5rem" }}>
              <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.9rem", fontWeight: 700, marginBottom: "1rem" }}>Related Articles</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {related.map(r => (
                  <Link key={r.slug} href={`/blog/${r.slug}`} style={{ textDecoration: "none" }}>
                    <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                      <span style={{ fontSize: "1.3rem" }}>{r.emoji}</span>
                      <div>
                        <div style={{ fontSize: "0.82rem", fontWeight: 600, lineHeight: 1.3, marginBottom: "0.2rem" }}>{r.title}</div>
                        <div style={{ fontSize: "0.72rem", color: "var(--white-faint)" }}>{r.readTime}</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </section>

      <style>{`
        @media (max-width: 900px) {
          section[style*="grid-template-columns: 1fr 300px"] { grid-template-columns: 1fr !important; }
          aside { position: static !important; }
        }
      `}</style>
    </>
  );
}
