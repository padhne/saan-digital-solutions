"use client";
import { useEffect, useRef } from "react";

/* ─── Per-service 3D shape configs ─────────────────────────────────── */
const CONFIGS: Record<string, {
  build: (T: typeof import("three")) => import("three").Mesh;
  rx: number; ry: number; rz: number;   // rotation speeds per frame
  color: number;
}> = {
  "web-development": {
    color: 0x38BDF8,
    rx: 0.004, ry: 0.012, rz: 0.003,
    build: (T) => {
      const geo = new T.BoxGeometry(1.5, 1.5, 1.5);
      const mat = new T.MeshStandardMaterial({
        color: 0x38BDF8, metalness: 0.6, roughness: 0.2,
        emissive: 0x38BDF8, emissiveIntensity: 0.12,
      });
      const mesh = new T.Mesh(geo, mat);
      // Add wireframe overlay
      const wMat = new T.MeshBasicMaterial({ color: 0x38BDF8, wireframe: true, transparent: true, opacity: 0.25 });
      mesh.add(new T.Mesh(geo.clone(), wMat));
      return mesh;
    },
  },
  "brand-design": {
    color: 0xC084FC,
    rx: 0.007, ry: 0.009, rz: 0.005,
    build: (T) => {
      const geo = new T.IcosahedronGeometry(1.3, 1);
      const mat = new T.MeshStandardMaterial({
        color: 0xC084FC, metalness: 0.3, roughness: 0.5,
        emissive: 0xC084FC, emissiveIntensity: 0.18,
        wireframe: true,
      });
      return new T.Mesh(geo, mat);
    },
  },
  "seo-geo": {
    color: 0x7C6FF4,
    rx: 0.008, ry: 0.010, rz: 0.004,
    build: (T) => {
      const geo = new T.TorusGeometry(1.0, 0.38, 16, 40);
      const mat = new T.MeshStandardMaterial({
        color: 0x7C6FF4, metalness: 0.5, roughness: 0.3,
        emissive: 0x7C6FF4, emissiveIntensity: 0.15,
      });
      return new T.Mesh(geo, mat);
    },
  },
  "ads-campaigns": {
    color: 0xFB923C,
    rx: 0.010, ry: 0.007, rz: 0.008,
    build: (T) => {
      const geo = new T.OctahedronGeometry(1.3, 0);
      const mat = new T.MeshStandardMaterial({
        color: 0xFB923C, metalness: 0.4, roughness: 0.3,
        emissive: 0xFB923C, emissiveIntensity: 0.2,
        flatShading: true,
      });
      return new T.Mesh(geo, mat);
    },
  },
  "content-creation": {
    color: 0xF472B6,
    rx: 0.005, ry: 0.013, rz: 0.006,
    build: (T) => {
      const geo = new T.SphereGeometry(1.2, 14, 14);
      const mat = new T.MeshStandardMaterial({
        color: 0xF472B6, metalness: 0.2, roughness: 0.6,
        emissive: 0xF472B6, emissiveIntensity: 0.1,
        wireframe: true,
      });
      return new T.Mesh(geo, mat);
    },
  },
  "ai-automation": {
    color: 0x34D399,
    rx: 0.009, ry: 0.006, rz: 0.011,
    build: (T) => {
      const geo = new T.TorusKnotGeometry(0.85, 0.28, 80, 10, 2, 3);
      const mat = new T.MeshStandardMaterial({
        color: 0x34D399, metalness: 0.5, roughness: 0.3,
        emissive: 0x34D399, emissiveIntensity: 0.18,
      });
      return new T.Mesh(geo, mat);
    },
  },
};

interface Props {
  serviceId: string;
  size?: number;
}

export default function Service3DIcon({ serviceId, size = 80 }: Props) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let animId: number;
    let renderer: import("three").WebGLRenderer;

    import("three").then((T) => {
      const cfg = CONFIGS[serviceId] ?? CONFIGS["web-development"];

      /* Renderer */
      renderer = new T.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(size, size);
      renderer.setClearColor(0x000000, 0);
      mount.appendChild(renderer.domElement);

      /* Scene / Camera */
      const scene = new T.Scene();
      const camera = new T.PerspectiveCamera(50, 1, 0.1, 100);
      camera.position.z = 4.5;

      /* Lights */
      scene.add(new T.AmbientLight(0xffffff, 0.7));
      const pt = new T.PointLight(cfg.color, 3, 12);
      pt.position.set(3, 3, 4);
      scene.add(pt);
      const pt2 = new T.PointLight(cfg.color, 1.5, 8);
      pt2.position.set(-2, -2, -3);
      scene.add(pt2);

      /* Mesh */
      const mesh = cfg.build(T);
      scene.add(mesh);

      /* Animate */
      const tick = () => {
        animId = requestAnimationFrame(tick);
        mesh.rotation.x += cfg.rx;
        mesh.rotation.y += cfg.ry;
        mesh.rotation.z += cfg.rz;
        renderer.render(scene, camera);
      };
      tick();
    });

    return () => {
      cancelAnimationFrame(animId);
      renderer?.dispose();
      if (mount.firstChild) mount.removeChild(mount.firstChild);
    };
  }, [serviceId, size]);

  return (
    <div
      ref={mountRef}
      style={{ width: size, height: size, display: "block", flexShrink: 0 }}
    />
  );
}
