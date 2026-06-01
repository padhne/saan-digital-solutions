"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/services",      label: "Services"  },
  { href: "/case-studies",  label: "Work"      },
  { href: "/blog",          label: "Blog"      },
  { href: "/about",         label: "About"     },
  { href: "/careers",       label: "Careers"   },
];

export default function Navbar() {
  const pathname  = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0.85rem 5%",
        background: scrolled ? "rgba(6,10,20,0.97)" : "rgba(6,10,20,0.65)",
        backdropFilter: "blur(28px)",
        WebkitBackdropFilter: "blur(28px)",
        borderBottom: scrolled ? "1px solid rgba(124,111,244,0.15)" : "1px solid rgba(255,255,255,0.05)",
        transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
        boxShadow: scrolled ? "0 8px 40px rgba(0,0,0,0.4)" : "none",
      }}>
        {/* ── Logo ── */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <img
            src="/logo.png"
            alt="SAAN Digital Solutions"
            style={{ height: 42, width: "auto", objectFit: "contain", display: "block" }}
          />
        </Link>

        {/* ── Desktop Links ── */}
        <ul style={{ display: "flex", gap: "2.2rem", listStyle: "none", alignItems: "center" }}
          className="hidden-mobile">
          {navLinks.map(link => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link href={link.href} style={{
                  fontSize: "0.78rem", fontWeight: active ? 600 : 400,
                  color: active ? "var(--accent)" : "var(--white-dim)",
                  textDecoration: "none",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  transition: "color 0.25s",
                  position: "relative",
                  paddingBottom: "3px",
                }}>
                  {link.label}
                  {active && (
                    <span style={{
                      position: "absolute", bottom: 0, left: 0, right: 0,
                      height: "2px",
                      background: "linear-gradient(90deg, var(--accent), var(--purple))",
                      borderRadius: "2px",
                    }} />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ── Right Side ── */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
          <span style={{
            fontSize: "0.7rem", color: "var(--white-dim)",
            border: "1px solid var(--border)", padding: "0.25rem 0.7rem",
            borderRadius: 100, letterSpacing: "0.04em", fontWeight: 500,
            background: "rgba(255,255,255,0.04)",
          }} className="hidden-mobile">
            🇳🇵 Nepal
          </span>

          <Link href="/contact" className="btn-primary" style={{
            padding: "0.55rem 1.3rem", fontSize: "0.82rem", gap: "0.35rem",
          }}>
            Start Project →
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none", flexDirection: "column", gap: "4px",
              cursor: "pointer", background: "none", border: "none",
              padding: "0.4rem",
            }}
            className="hamburger"
            aria-label="Menu"
          >
            <span style={{
              display: "block", width: menuOpen ? 22 : 22, height: "1.5px",
              background: "var(--white)", borderRadius: "2px",
              transition: "all 0.3s",
              transform: menuOpen ? "rotate(45deg) translateY(5.5px)" : "none",
            }} />
            <span style={{
              display: "block", width: 22, height: "1.5px",
              background: "var(--white)", borderRadius: "2px",
              transition: "all 0.3s",
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: "block", width: menuOpen ? 22 : 14, height: "1.5px",
              background: "var(--white)", borderRadius: "2px",
              transition: "all 0.3s",
              transform: menuOpen ? "rotate(-45deg) translateY(-5.5px)" : "none",
            }} />
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 999,
          background: "rgba(6,10,20,0.98)", backdropFilter: "blur(24px)",
          display: "flex", flexDirection: "column", justifyContent: "center",
          alignItems: "center", gap: "1.8rem",
          padding: "2rem",
        }}>
          <button onClick={() => setMenuOpen(false)} style={{
            position: "absolute", top: "1.5rem", right: "5%",
            background: "var(--card)", border: "1px solid var(--border2)",
            color: "var(--white)", width: 38, height: 38, borderRadius: "50%",
            fontSize: "1.1rem", cursor: "pointer", display: "flex",
            alignItems: "center", justifyContent: "center",
          }}>✕</button>

          <img
            src="/logo.png"
            alt="SAAN Digital Solutions"
            style={{ height: 50, width: "auto", objectFit: "contain", marginBottom: "2rem" }}
          />
          <div style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em",
            color: "var(--white-faint)", textTransform: "uppercase",
            marginBottom: "0.5rem",
          }}>Navigation</div>

          {navLinks.map(link => (
            <Link key={link.href} href={link.href} style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "1.8rem", fontWeight: 800,
              color: pathname === link.href ? "var(--accent)" : "var(--white)",
              textDecoration: "none", letterSpacing: "-0.04em",
              transition: "color 0.2s",
            }}>
              {link.label}
            </Link>
          ))}

          <Link href="/contact" className="btn-primary" style={{ marginTop: "0.5rem", padding: "0.9rem 2.5rem" }}>
            Start Project →
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .hamburger     { display: flex !important; }
        }
      `}</style>
    </>
  );
}
