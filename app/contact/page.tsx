"use client";
import { useState, useEffect, useRef } from "react";

const contactItems = [
  { icon: "📍", label: "Location", value: "Kathmandu, Nepal · Serving worldwide" },
  { icon: "📧", label: "Email", value: "hello@saandigitalsolutions.com", href: "mailto:hello@saandigitalsolutions.com" },
  { icon: "💬", label: "WhatsApp Nepal", value: "+977 98XX-XXXXXX", href: "https://wa.me/977XXXXXXXXXX" },
  { icon: "⏰", label: "Response Time", value: "Within 2 hours · Sun–Fri 9am–6pm NPT" },
];

const socials = [
  { icon: "▶", label: "YouTube" },
  { icon: "📸", label: "Instagram" },
  { icon: "in", label: "LinkedIn" },
  { icon: "f", label: "Facebook" },
];

function useReveal3D(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => el.classList.add("visible"), delay);
        obs.unobserve(el);
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "Web Development", budget: "Let's discuss", message: "" });

  const formRef = useReveal3D(0);
  const infoRef = useReveal3D(150);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Header */}
      <section style={{ padding: "10rem 5% 6rem", background: "#060A14", position: "relative", overflow: "hidden" }}>
        <div className="float-3d" style={{ position: "absolute", right: "6%", top: "22%", width: 150, height: 150, borderRadius: "30%", border: "1px solid rgba(124,111,244,0.1)", pointerEvents: "none" }} />
        <div className="float-3d" style={{ position: "absolute", right: "22%", bottom: "12%", width: 75, height: 75, borderRadius: "50%", border: "1px solid rgba(52,211,153,0.08)", pointerEvents: "none", animationDelay: "3s" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(124,111,244,0.1) 0%, transparent 60%)" }} />
        <div style={{ position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--accent)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.2rem", animation: "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both" }}>
            <span style={{ width: 20, height: 1, background: "var(--accent)" }} /> Get In Touch
          </div>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: "1rem", animation: "fadeUp 0.8s 0.08s cubic-bezier(0.16,1,0.3,1) both" }}>
            Start Your Digital<br />Growth Journey
          </h1>
          <p style={{ fontSize: "1.05rem", color: "var(--white-dim)", lineHeight: 1.75, maxWidth: 500, animation: "fadeUp 0.8s 0.16s cubic-bezier(0.16,1,0.3,1) both" }}>
            Tell us about your project and we&apos;ll respond within 2 hours with a custom proposal. Free discovery call included.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section data-theme="light" style={{ padding: "7rem 5%", background: "#FFFFFF", display: "grid", gridTemplateColumns: "1fr 380px", gap: "6rem", alignItems: "start" }}>
        {/* Form */}
        <div ref={formRef} className="reveal-3d">
          {submitted ? (
            <div style={{
              background: "var(--card)", border: "1px solid var(--accent-glow)", borderRadius: 24, padding: "3rem", textAlign: "center",
              animation: "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both",
            }}>
              <div style={{ fontSize: "4rem", marginBottom: "1.5rem", animation: "float3d 4s ease-in-out infinite", display: "inline-block", transformStyle: "preserve-3d" }}>🎉</div>
              <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1rem" }}>Message Sent!</h2>
              <p style={{ color: "var(--white-dim)", lineHeight: 1.7 }}>We&apos;ve received your message and will be in touch within 2 hours. In the meantime, feel free to WhatsApp us for faster response.</p>
              <a href="https://wa.me/977XXXXXXXXXX" target="_blank" style={{
                display: "inline-block", marginTop: "2rem", background: "#25D366", color: "#000",
                padding: "0.8rem 2rem", borderRadius: 100, fontSize: "0.9rem", fontWeight: 700, textDecoration: "none",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "perspective(300px) translateZ(8px) translateY(-3px)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 12px 32px rgba(37,211,102,0.35)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "none";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                }}
              >
                💬 Continue on WhatsApp
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                  <label style={{ fontSize: "0.75rem", color: "var(--white-dim)", letterSpacing: "0.05em", fontWeight: 500 }}>Your Name *</label>
                  <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Rajesh Shrestha" style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12, padding: "0.85rem 1rem", color: "var(--white)", fontSize: "0.9rem", outline: "none", fontFamily: "'Inter', sans-serif", transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s" }} onFocus={e => { (e.target as HTMLInputElement).style.borderColor = "var(--accent)"; (e.target as HTMLInputElement).style.boxShadow = "0 0 0 3px var(--accent-dim)"; (e.target as HTMLInputElement).style.transform = "perspective(400px) translateZ(4px)"; }} onBlur={e => { (e.target as HTMLInputElement).style.borderColor = "var(--border)"; (e.target as HTMLInputElement).style.boxShadow = "none"; (e.target as HTMLInputElement).style.transform = "none"; }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                  <label style={{ fontSize: "0.75rem", color: "var(--white-dim)", letterSpacing: "0.05em", fontWeight: 500 }}>Email Address *</label>
                  <input required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="hello@yourbiz.com" style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12, padding: "0.85rem 1rem", color: "var(--white)", fontSize: "0.9rem", outline: "none", fontFamily: "'Inter', sans-serif", transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s" }} onFocus={e => { (e.target as HTMLInputElement).style.borderColor = "var(--accent)"; (e.target as HTMLInputElement).style.boxShadow = "0 0 0 3px var(--accent-dim)"; (e.target as HTMLInputElement).style.transform = "perspective(400px) translateZ(4px)"; }} onBlur={e => { (e.target as HTMLInputElement).style.borderColor = "var(--border)"; (e.target as HTMLInputElement).style.boxShadow = "none"; (e.target as HTMLInputElement).style.transform = "none"; }} />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                  <label style={{ fontSize: "0.75rem", color: "var(--white-dim)", letterSpacing: "0.05em", fontWeight: 500 }}>Phone / WhatsApp</label>
                  <input value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} placeholder="+977 98XXXXXXXX" style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12, padding: "0.85rem 1rem", color: "var(--white)", fontSize: "0.9rem", outline: "none", fontFamily: "'Inter', sans-serif", transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s" }} onFocus={e => { (e.target as HTMLInputElement).style.borderColor = "var(--accent)"; (e.target as HTMLInputElement).style.boxShadow = "0 0 0 3px var(--accent-dim)"; (e.target as HTMLInputElement).style.transform = "perspective(400px) translateZ(4px)"; }} onBlur={e => { (e.target as HTMLInputElement).style.borderColor = "var(--border)"; (e.target as HTMLInputElement).style.boxShadow = "none"; (e.target as HTMLInputElement).style.transform = "none"; }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                  <label style={{ fontSize: "0.75rem", color: "var(--white-dim)", letterSpacing: "0.05em", fontWeight: 500 }}>Service Needed</label>
                  <select value={form.service} onChange={e => setForm(f => ({ ...f, service: e.target.value }))} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12, padding: "0.85rem 1rem", color: "var(--white)", fontSize: "0.9rem", outline: "none", fontFamily: "'Inter', sans-serif", WebkitAppearance: "none", transition: "border-color 0.25s, transform 0.25s" }} onFocus={e => { (e.target as HTMLSelectElement).style.borderColor = "var(--accent)"; (e.target as HTMLSelectElement).style.transform = "perspective(400px) translateZ(4px)"; }} onBlur={e => { (e.target as HTMLSelectElement).style.borderColor = "var(--border)"; (e.target as HTMLSelectElement).style.transform = "none"; }}>
                    {["Web / App Development", "Brand & UI/UX Design", "SEO & GEO Optimisation", "Ads Campaign Management", "Content Creation", "AI Integration", "Full Growth Package"].map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                <label style={{ fontSize: "0.75rem", color: "var(--white-dim)", letterSpacing: "0.05em", fontWeight: 500 }}>Budget Range</label>
                <select value={form.budget} onChange={e => setForm(f => ({ ...f, budget: e.target.value }))} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12, padding: "0.85rem 1rem", color: "var(--white)", fontSize: "0.9rem", outline: "none", fontFamily: "'Inter', sans-serif", WebkitAppearance: "none", transition: "border-color 0.25s, transform 0.25s" }} onFocus={e => { (e.target as HTMLSelectElement).style.borderColor = "var(--accent)"; (e.target as HTMLSelectElement).style.transform = "perspective(400px) translateZ(4px)"; }} onBlur={e => { (e.target as HTMLSelectElement).style.borderColor = "var(--border)"; (e.target as HTMLSelectElement).style.transform = "none"; }}>
                  {["Under NPR 25,000", "NPR 25,000 – 75,000", "NPR 75,000 – 2,00,000", "NPR 2,00,000+", "Let's discuss"].map(b => <option key={b}>{b}</option>)}
                </select>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                <label style={{ fontSize: "0.75rem", color: "var(--white-dim)", letterSpacing: "0.05em", fontWeight: 500 }}>Tell us about your project *</label>
                <textarea required value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} placeholder="I need a website + SEO for my restaurant in Kathmandu. I want to rank #1 for relevant searches and get more bookings..." rows={5} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12, padding: "0.85rem 1rem", color: "var(--white)", fontSize: "0.9rem", outline: "none", fontFamily: "'Inter', sans-serif", resize: "vertical", transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s" }} onFocus={e => { (e.target as HTMLTextAreaElement).style.borderColor = "var(--accent)"; (e.target as HTMLTextAreaElement).style.boxShadow = "0 0 0 3px var(--accent-dim)"; (e.target as HTMLTextAreaElement).style.transform = "perspective(600px) translateZ(4px)"; }} onBlur={e => { (e.target as HTMLTextAreaElement).style.borderColor = "var(--border)"; (e.target as HTMLTextAreaElement).style.boxShadow = "none"; (e.target as HTMLTextAreaElement).style.transform = "none"; }} />
              </div>
              <button type="submit" disabled={loading} style={{
                background: loading ? "var(--border)" : "var(--accent)", color: "var(--black)",
                padding: "0.9rem 2rem", borderRadius: 100, fontSize: "0.9rem", fontWeight: 700,
                border: "none", cursor: loading ? "not-allowed" : "pointer",
                fontFamily: "'Inter', sans-serif",
                transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
              }}
                onMouseEnter={e => {
                  if (!loading) {
                    (e.currentTarget as HTMLButtonElement).style.transform = "perspective(400px) translateZ(10px) translateY(-2px)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 12px 36px rgba(124,111,244,0.45)";
                  }
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "none";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
                }}
                onMouseDown={e => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "perspective(400px) translateZ(4px)";
                }}
                onMouseUp={e => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "perspective(400px) translateZ(10px) translateY(-2px)";
                }}
              >
                {loading ? (
                  <>
                    <span style={{ width: 14, height: 14, borderRadius: "50%", border: "2px solid rgba(0,0,0,0.3)", borderTopColor: "var(--black)", animation: "spin 0.8s linear infinite", display: "inline-block" }} />
                    Sending...
                  </>
                ) : "Send Message →"}
              </button>
            </form>
          )}
        </div>

        {/* Info */}
        <div ref={infoRef} className="reveal-3d" style={{ position: "sticky", top: "6rem" }}>
          <div style={{ marginBottom: "2rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--accent)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
              <span style={{ width: 20, height: 1, background: "var(--accent)" }} /> Contact Info
            </div>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.4rem", fontWeight: 700, letterSpacing: "-0.03em" }}>
              Based in Kathmandu,<br />Nepal
            </h3>
          </div>

          {contactItems.map((item, i) => (
            <div key={item.label} style={{
              display: "flex", gap: "1rem", alignItems: "flex-start",
              padding: "1.3rem 0", borderBottom: "1px solid var(--border)",
              transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)",
              animationDelay: `${i * 0.08}s`,
            }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.transform = "perspective(600px) translateZ(6px) translateX(4px)"}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.transform = "none"}
            >
              <div style={{
                width: 42, height: 42, borderRadius: 12,
                background: "var(--accent-dim)", border: "1px solid var(--accent-glow)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1rem", flexShrink: 0,
                transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
              }}
                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.transform = "perspective(200px) rotateY(-20deg) rotateX(10deg) scale(1.1)"}
                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.transform = "none"}
              >
                {item.icon}
              </div>
              <div>
                <div style={{ fontSize: "0.72rem", color: "var(--white-faint)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.2rem" }}>{item.label}</div>
                {item.href ? (
                  <a href={item.href} style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--white)", textDecoration: "none", transition: "color 0.25s" }} onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)"} onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "var(--white)"}>{item.value}</a>
                ) : (
                  <div style={{ fontSize: "0.9rem", fontWeight: 500 }}>{item.value}</div>
                )}
              </div>
            </div>
          ))}

          {/* Socials */}
          <div style={{ marginTop: "2rem" }}>
            <div style={{ fontSize: "0.72rem", color: "var(--white-faint)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "1rem" }}>Follow Us</div>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {socials.map((s, i) => (
                <a key={s.label} href="#" title={s.label} style={{
                  width: 42, height: 42, borderRadius: 10,
                  background: "var(--card)", border: "1px solid var(--border)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1rem", textDecoration: "none", color: "var(--white-dim)",
                  transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                  animationDelay: `${i * 0.06}s`,
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent-glow)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "perspective(200px) translateZ(8px) translateY(-3px)";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 24px rgba(124,111,244,0.2)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--white-dim)";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "none";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                  }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          section[style*="grid-template-columns: 1fr 380px"] { grid-template-columns: 1fr !important; }
          div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          aside, div[style*="position: sticky"] { position: static !important; }
        }
      `}</style>
    </>
  );
}
