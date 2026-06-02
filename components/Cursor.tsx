"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      cursor.style.left = mx + "px";
      cursor.style.top = my + "px";
    };

    const animate = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    document.addEventListener("mousemove", onMove);

    const growEls = document.querySelectorAll("a, button, [data-cursor-grow]");
    const onEnter = () => { cursor.classList.add("grow"); ring.classList.add("grow"); };
    const onLeave = () => { cursor.classList.remove("grow"); ring.classList.remove("grow"); };

    growEls.forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMove);
      growEls.forEach(el => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" style={{ display: "none" }} id="cursor" />
      <div ref={ringRef} className="cursor-ring" style={{ display: "none" }} id="cursorRing" />
    </>
  );
}
