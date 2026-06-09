import Link from "next/link";

export const metadata = {
  title: "404 – Page Not Found | SAAN Digital Solutions",
  description: "The page you're looking for doesn't exist. Head back to SAAN Digital Solutions.",
};

export default function NotFound() {
  return (
    <>
      <section style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #07092C 0%, #0E0B30 40%, #060A14 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "6rem 5%",
        position: "relative", overflow: "hidden",
      }}>
        {/* Background glow */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700, height: 700, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,111,244,0.12) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", right: "8%", top: "20%",
          width: 160, height: 160, borderRadius: "30%",
          border: "1px solid rgba(167,139,250,0.1)", pointerEvents: "none",
          animation: "float3d 6s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", left: "6%", bottom: "18%",
          width: 90, height: 90, borderRadius: "50%",
          border: "1px solid rgba(244,114,182,0.1)", pointerEvents: "none",
          animation: "float3d 8s ease-in-out infinite",
          animationDelay: "2s",
        }} />

        <div style={{ position: "relative", maxWidth: 560 }}>
          {/* 404 number */}
          <div style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(6rem, 18vw, 11rem)",
            fontWeight: 800,
            letterSpacing: "-0.06em",
            lineHeight: 1,
            background: "linear-gradient(135deg, #A78BFA 0%, #F472B6 50%, #FB923C 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "1rem",
            animation: "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both",
          }}>
            404
          </div>

          <h1 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
            fontWeight: 800, letterSpacing: "-0.04em",
            color: "#F0F6FF", marginBottom: "1.2rem",
            animation: "fadeUp 0.8s 0.08s cubic-bezier(0.16,1,0.3,1) both",
          }}>
            Page Not Found
          </h1>

          <p style={{
            fontSize: "1rem", color: "rgba(240,246,255,0.55)",
            lineHeight: 1.8, marginBottom: "2.8rem",
            animation: "fadeUp 0.8s 0.16s cubic-bezier(0.16,1,0.3,1) both",
          }}>
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>

          <div style={{
            display: "flex", gap: "1rem", justifyContent: "center",
            flexWrap: "wrap",
            animation: "fadeUp 0.8s 0.24s cubic-bezier(0.16,1,0.3,1) both",
          }}>
            <Link href="/" className="btn-primary" style={{ fontSize: "0.95rem", padding: "0.9rem 2.4rem" }}>
              ← Back to Home
            </Link>
            <Link href="/contact" className="btn-outline" style={{ fontSize: "0.95rem", padding: "0.9rem 2rem" }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
