"use client";
import Link from "next/link";

const footerLinks = {
  Services: [
    { label: "Web Development",  href: "/services" },
    { label: "Brand & UI/UX",    href: "/services" },
    { label: "SEO & GEO",        href: "/services" },
    { label: "Ads Campaigns",    href: "/services" },
    { label: "Content Creation", href: "/services" },
    { label: "AI Integration",   href: "/services" },
  ],
  Company: [
    { label: "About Us",     href: "/about"         },
    { label: "Case Studies", href: "/case-studies"  },
    { label: "Blog",         href: "/blog"          },
    { label: "Careers",      href: "/careers"       },
    { label: "Contact",      href: "/contact"       },
  ],
  Connect: [
    { label: "YouTube",   href: "#"                             },
    { label: "Instagram", href: "#"                             },
    { label: "LinkedIn",  href: "#"                             },
    { label: "Facebook",  href: "#"                             },
    { label: "TikTok",    href: "#"                             },
    { label: "Email Us",  href: "mailto:hello@saandigitalsolutions.com"  },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "#0B1220", position: "relative", overflow: "hidden" }}>
      {/* Top gradient bar */}
      <div style={{
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(124,111,244,0.5), rgba(192,132,252,0.5), transparent)",
      }} />

      {/* Background glow */}
      <div style={{
        position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
        width: "80%", height: "60%",
        background: "radial-gradient(ellipse at bottom, rgba(124,111,244,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ padding: "4rem 5% 0", position: "relative" }}>
        <div className="rg-footer" style={{
          display: "grid", gridTemplateColumns: "1.8fr 1fr 1fr 1fr",
          gap: "4rem", marginBottom: "4rem",
        }}>
          {/* ── Brand ── */}
          <div>
            <Link href="/" style={{ textDecoration: "none", display: "inline-block", marginBottom: "1.4rem" }}>
              <img
                src="/footer-logo.png"
                alt="SAAN Digital Solutions"
                style={{ height: 72, width: "auto", objectFit: "contain", display: "block" }}
              />
            </Link>

            <p style={{ fontSize: "0.875rem", color: "var(--white-dim)", lineHeight: 1.8, maxWidth: 270, marginBottom: "2rem" }}>
              Nepal&apos;s full-stack digital growth platform. From development to execution — one team, total results.
            </p>

            {/* Location badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "rgba(124,111,244,0.08)", border: "1px solid rgba(124,111,244,0.18)",
              padding: "0.4rem 0.9rem", borderRadius: 100,
              fontSize: "0.72rem", color: "var(--white-dim)",
              fontFamily: "'JetBrains Mono', monospace",
              marginBottom: "2rem",
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%",
                background: "#34D399", display: "inline-block",
                boxShadow: "0 0 8px #34D399",
              }} />
              Kathmandu, Nepal 🇳🇵
            </div>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "0.6rem" }}>
              {[
                { icon: "▶", label: "YouTube" },
                { icon: "📸", label: "Instagram" },
                { icon: "in", label: "LinkedIn" },
                { icon: "f", label: "Facebook" },
              ].map(s => (
                <a key={s.label} href="#" title={s.label} style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.85rem", textDecoration: "none",
                  color: "var(--white-dim)", transition: "all 0.25s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(124,111,244,0.15)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(124,111,244,0.35)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#A393FF";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--white-dim)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "";
                }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Link columns ── */}
          {Object.entries(footerLinks).map(([col, links]) => (
            <div key={col}>
              <h4 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.78rem", fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase",
                color: "var(--white-faint)", marginBottom: "1.5rem",
              }}>
                {col}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {links.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom Bar ── */}
        <div className="footer-bottom" style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "1.75rem 0 2.5rem",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          flexWrap: "wrap", gap: "1rem",
        }}>
          <div style={{ fontSize: "0.75rem", color: "var(--white-faint)" }}>
            © 2025 <span style={{ color: "var(--white-dim)" }}>SAAN Digital Solutions</span>. All rights reserved. Built with ♥ in Kathmandu, Nepal.
          </div>
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            {["Privacy Policy", "Terms of Service", "Sitemap"].map(t => (
              <Link key={t} href="#" style={{
                fontSize: "0.72rem", color: "var(--white-faint)",
                textDecoration: "none", transition: "color 0.25s",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)"}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "var(--white-faint)"}
              >
                {t}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 580px) {
          footer { padding-left: 4% !important; padding-right: 4% !important; }
          footer .footer-bottom { flex-direction: column !important; gap: 0.75rem !important; text-align: center !important; }
          footer .footer-bottom > div:last-child { justify-content: center !important; }
        }
      `}</style>
    </footer>
  );
}
