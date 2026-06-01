"use client";
import { useEffect, useRef, useState, CSSProperties } from "react";

interface Props {
  num: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  style?: CSSProperties;
  className?: string;
}

function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4);
}

export default function CountUp3D({
  num,
  suffix = "",
  prefix = "",
  duration = 1800,
  style = {},
  className = "",
}: Props) {
  const [count, setCount] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setTriggered(true);
          el.classList.add("countup-3d-active");
          const start = performance.now();
          function frame(now: number) {
            const progress = Math.min((now - start) / duration, 1);
            setCount(Math.round(easeOutQuart(progress) * num));
            if (progress < 1) requestAnimationFrame(frame);
          }
          requestAnimationFrame(frame);
          obs.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [num, triggered, duration]);

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}{count}{suffix}
    </span>
  );
}
