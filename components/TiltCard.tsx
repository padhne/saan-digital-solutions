"use client";
import { useRef, MouseEvent, ReactNode, CSSProperties } from "react";

interface Props {
  children: ReactNode;
  glowColor?: string;       // rgba or hex for the mouse-follow glow
  maxTilt?: number;         // degrees (default 14)
  className?: string;
  style?: CSSProperties;
  as?: "div" | "article";
}

export default function TiltCard({
  children,
  glowColor = "rgba(124,111,244,0.22)",
  maxTilt = 14,
  className = "",
  style = {},
  as: Tag = "div",
}: Props) {
  const cardRef  = useRef<HTMLDivElement>(null);
  const glowRef  = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x  = e.clientX - rect.left;
    const y  = e.clientY - rect.top;
    const cx = rect.width  / 2;
    const cy = rect.height / 2;

    const rX = ((y - cy) / cy) * -maxTilt;
    const rY = ((x - cx) / cx) *  maxTilt;

    card.style.transform =
      `perspective(1000px) rotateX(${rX}deg) rotateY(${rY}deg) scale3d(1.025,1.025,1.025)`;

    /* Mouse-follow glow */
    const glow = glowRef.current;
    if (glow) {
      glow.style.left    = `${x}px`;
      glow.style.top     = `${y}px`;
      glow.style.opacity = "1";
    }

    /* Shine overlay */
    const shine = shineRef.current;
    if (shine) {
      const pct = (x / rect.width) * 100;
      shine.style.background = `linear-gradient(${pct}deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0) 100%)`;
      shine.style.opacity = "1";
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)";
    const glow = glowRef.current;
    if (glow) glow.style.opacity = "0";
    const shine = shineRef.current;
    if (shine) shine.style.opacity = "0";
  };

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        transformStyle: "preserve-3d",
        willChange: "transform",
        transition: "transform 0.18s ease-out",
        position: "relative",
      }}
    >
      {/* Mouse-follow radial glow */}
      <div
        ref={glowRef}
        style={{
          position: "absolute",
          width: 280, height: 280,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 65%)`,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          transition: "opacity 0.35s",
          opacity: 0,
          zIndex: 1,
          mixBlendMode: "screen",
        }}
      />

      {/* Shine sweep */}
      <div
        ref={shineRef}
        style={{
          position: "absolute", inset: 0,
          borderRadius: "inherit",
          pointerEvents: "none",
          transition: "opacity 0.35s",
          opacity: 0,
          zIndex: 1,
        }}
      />

      {/* Actual content — lifted in Z so it appears above the glow */}
      <div style={{ position: "relative", zIndex: 2, height: "100%" }}>
        {children}
      </div>
    </div>
  );
}
