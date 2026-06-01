"use client";
import { useState } from "react";

// Simple password protection — in production use NextAuth or similar
const ADMIN_PASSWORD = "saandigital2025";

// Mock submissions (in production, these would come from a database or CMS)
const mockSubmissions = [
  { id: 1, name: "Ramesh KC", email: "ramesh@example.com", service: "SEO & GEO Optimisation", budget: "NPR 25,000 – 75,000", message: "I need SEO for my hardware store in Kathmandu.", date: "2025-01-14", status: "new" },
  { id: 2, name: "Sita Rai", email: "sita@boutique.com", service: "Web / App Development", budget: "NPR 75,000 – 2,00,000", message: "Looking to build an e-commerce site for my clothing brand.", date: "2025-01-13", status: "contacted" },
  { id: 3, name: "Bikram Thapa", email: "bikram@hotel.np", service: "Full Growth Package", budget: "NPR 2,00,000+", message: "Need complete digital presence for our new hotel in Pokhara.", date: "2025-01-12", status: "proposal_sent" },
  { id: 4, name: "Anita Gurung", email: "anita@foods.com", service: "Ads Campaign Management", budget: "NPR 25,000 – 75,000", message: "Our Facebook ads are not working. Need help.", date: "2025-01-11", status: "new" },
  { id: 5, name: "Dev Maharjan", email: "dev@tech.np", service: "AI Integration", budget: "NPR 75,000 – 2,00,000", message: "Want to add a chatbot to our customer service portal.", date: "2025-01-10", status: "closed_won" },
];

const statusColors: Record<string, string> = {
  new: "var(--accent)", contacted: "var(--blue)", proposal_sent: "var(--purple)", closed_won: "var(--orange)", closed_lost: "var(--white-faint)",
};
const statusLabels: Record<string, string> = {
  new: "New", contacted: "Contacted", proposal_sent: "Proposal Sent", closed_won: "Won ✓", closed_lost: "Lost",
};

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) { setAuthed(true); setError(""); }
    else setError("Incorrect password");
  };

  if (!authed) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", background: "var(--dark)" }}>
        <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 24, padding: "3rem", width: "100%", maxWidth: 400, textAlign: "center" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>🔐</div>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.5rem" }}>Admin Panel</h1>
          <p style={{ fontSize: "0.85rem", color: "var(--white-dim)", marginBottom: "2rem" }}>SAAN Digital Solutions internal dashboard</p>
          <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter password" style={{ background: "var(--dark)", border: `1px solid ${error ? "var(--orange)" : "var(--border)"}`, borderRadius: 12, padding: "0.85rem 1rem", color: "var(--white)", fontSize: "0.9rem", outline: "none", fontFamily: "'Inter', sans-serif", textAlign: "center", letterSpacing: "0.1em" }} />
            {error && <p style={{ fontSize: "0.8rem", color: "var(--orange)", margin: 0 }}>{error}</p>}
            <button type="submit" style={{ background: "var(--accent)", color: "var(--black)", padding: "0.85rem", borderRadius: 100, fontSize: "0.9rem", fontWeight: 700, border: "none", cursor: "pointer", fontFamily: "'Inter', sans-serif" }}>
              Login →
            </button>
          </form>
        </div>
      </div>
    );
  }

  const filtered = mockSubmissions
    .filter(s => filter === "all" || s.status === filter)
    .filter(s => s.name.toLowerCase().includes(search.toLowerCase()) || s.email.toLowerCase().includes(search.toLowerCase()) || s.service.toLowerCase().includes(search.toLowerCase()));

  const stats = {
    total: mockSubmissions.length,
    new: mockSubmissions.filter(s => s.status === "new").length,
    won: mockSubmissions.filter(s => s.status === "closed_won").length,
    active: mockSubmissions.filter(s => ["contacted", "proposal_sent"].includes(s.status)).length,
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--dark)", paddingTop: "5rem" }}>
      {/* Admin Nav */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 900, background: "rgba(8,14,29,0.97)", backdropFilter: "blur(20px)", borderBottom: "1px solid var(--border)", padding: "0.75rem 5%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, letterSpacing: "-0.03em", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ background: "var(--accent)", color: "var(--black)", fontSize: "0.7rem", fontWeight: 700, padding: "0.2rem 0.55rem", borderRadius: 6, textTransform: "uppercase", letterSpacing: "0.06em" }}>Admin</span>
          SAAN Digital Solutions Dashboard
        </div>
        <button onClick={() => setAuthed(false)} style={{ background: "none", border: "1px solid var(--border)", color: "var(--white-dim)", padding: "0.4rem 0.9rem", borderRadius: 8, cursor: "pointer", fontSize: "0.8rem", fontFamily: "'Inter', sans-serif" }}>
          Logout
        </button>
      </div>

      <div style={{ padding: "3rem 5%" }}>
        {/* Overview Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem", marginBottom: "3rem" }}>
          {[
            { label: "Total Leads", value: stats.total, color: "var(--accent)", emoji: "📋" },
            { label: "New Leads", value: stats.new, color: "var(--blue)", emoji: "⚡" },
            { label: "Active", value: stats.active, color: "var(--purple)", emoji: "🔄" },
            { label: "Closed Won", value: stats.won, color: "var(--orange)", emoji: "🏆" },
          ].map(card => (
            <div key={card.label} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20, padding: "1.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                <div style={{ fontSize: "1.3rem" }}>{card.emoji}</div>
                <span style={{ fontSize: "0.7rem", color: card.color, background: `${card.color}18`, border: `1px solid ${card.color}30`, padding: "0.2rem 0.55rem", borderRadius: 6 }}>Live</span>
              </div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "2.5rem", fontWeight: 800, color: card.color, lineHeight: 1 }}>{card.value}</div>
              <div style={{ fontSize: "0.82rem", color: "var(--white-dim)", marginTop: "0.4rem" }}>{card.label}</div>
            </div>
          ))}
        </div>

        {/* Leads Table */}
        <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20, overflow: "hidden" }}>
          {/* Table Header */}
          <div style={{ padding: "1.5rem 2rem", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.1rem", fontWeight: 700 }}>Contact Submissions</h2>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search leads..."
                style={{ background: "var(--dark)", border: "1px solid var(--border)", borderRadius: 8, padding: "0.5rem 0.9rem", color: "var(--white)", fontSize: "0.82rem", outline: "none", fontFamily: "'Inter', sans-serif" }}
              />
              <select value={filter} onChange={e => setFilter(e.target.value)} style={{ background: "var(--dark)", border: "1px solid var(--border)", borderRadius: 8, padding: "0.5rem 0.8rem", color: "var(--white)", fontSize: "0.82rem", outline: "none", fontFamily: "'Inter', sans-serif" }}>
                <option value="all">All Status</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="proposal_sent">Proposal Sent</option>
                <option value="closed_won">Closed Won</option>
              </select>
            </div>
          </div>

          {/* Rows */}
          <div>
            {filtered.map((sub, i) => (
              <div key={sub.id} style={{ padding: "1.5rem 2rem", borderBottom: i < filtered.length - 1 ? "1px solid var(--border)" : "none", display: "grid", gridTemplateColumns: "1fr 1fr 1fr auto auto", gap: "1.5rem", alignItems: "center" }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>{sub.name}</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--white-dim)" }}>{sub.email}</div>
                </div>
                <div>
                  <div style={{ fontSize: "0.82rem" }}>{sub.service}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--white-dim)" }}>{sub.budget}</div>
                </div>
                <div>
                  <div style={{ fontSize: "0.82rem", color: "var(--white-dim)", lineHeight: 1.5 }}>{sub.message.slice(0, 60)}...</div>
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--white-faint)", whiteSpace: "nowrap" }}>{sub.date}</div>
                <div>
                  <span style={{ fontSize: "0.72rem", background: `${statusColors[sub.status]}18`, border: `1px solid ${statusColors[sub.status]}30`, color: statusColors[sub.status], padding: "0.25rem 0.65rem", borderRadius: 100, fontWeight: 600, whiteSpace: "nowrap" }}>
                    {statusLabels[sub.status]}
                  </span>
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <div style={{ padding: "3rem 2rem", textAlign: "center", color: "var(--white-dim)" }}>No submissions found</div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          div[style*="grid-template-columns: repeat(4"] { grid-template-columns: repeat(2,1fr) !important; }
          div[style*="grid-template-columns: 1fr 1fr 1fr auto auto"] { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 580px) {
          div[style*="grid-template-columns: repeat(4"] { grid-template-columns: 1fr 1fr !important; }
          div[style*="grid-template-columns: 1fr 1fr 1fr auto auto"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
