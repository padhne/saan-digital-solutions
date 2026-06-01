"use client";
import { useEffect, useRef } from "react";

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Load Three.js via CDN
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
    script.onload = () => {
      const THREE = (window as any).THREE;
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000);
      camera.position.z = 5;

      // Particles
      const pCount = 2000;
      const geo = new THREE.BufferGeometry();
      const positions = new Float32Array(pCount * 3);
      const colors = new Float32Array(pCount * 3);
      const palette = [
        new THREE.Color(0x7C6FF4),
        new THREE.Color(0xC084FC),
        new THREE.Color(0x38BDF8),
        new THREE.Color(0x34D399),
      ];
      for (let i = 0; i < pCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
        const c = palette[Math.floor(Math.random() * palette.length)];
        colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
      }
      geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      const mat = new THREE.PointsMaterial({ size: 0.035, vertexColors: true, transparent: true, opacity: 0.7 });
      const particles = new THREE.Points(geo, mat);
      scene.add(particles);

      // Wireframe shapes
      const ico = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.8, 1),
        new THREE.MeshBasicMaterial({ color: 0x7C6FF4, wireframe: true, transparent: true, opacity: 0.16 })
      );
      ico.position.set(2.5, 0, -2);
      scene.add(ico);

      const ico2 = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.2, 0),
        new THREE.MeshBasicMaterial({ color: 0xC084FC, wireframe: true, transparent: true, opacity: 0.11 })
      );
      ico2.position.set(-2, 1, -3);
      scene.add(ico2);

      const torus = new THREE.Mesh(
        new THREE.TorusGeometry(1.2, 0.4, 8, 32),
        new THREE.MeshBasicMaterial({ color: 0x34D399, wireframe: true, transparent: true, opacity: 0.1 })
      );
      torus.position.set(3, -1.5, -4);
      scene.add(torus);

      let mouseX = 0, mouseY = 0;
      const onMouse = (e: MouseEvent) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
      };
      document.addEventListener("mousemove", onMouse);

      let t = 0;
      let animId: number;
      const animate = () => {
        animId = requestAnimationFrame(animate);
        t += 0.005;
        particles.rotation.y = t * 0.05 + mouseX * 0.1;
        particles.rotation.x = mouseY * 0.05;
        ico.rotation.x = t * 0.3; ico.rotation.y = t * 0.4;
        ico2.rotation.x = -t * 0.2; ico2.rotation.z = t * 0.25;
        torus.rotation.x = t * 0.5; torus.rotation.z = t * 0.3;
        camera.position.x += (mouseX * 0.3 - camera.position.x) * 0.05;
        camera.position.y += (mouseY * 0.2 - camera.position.y) * 0.05;
        renderer.render(scene, camera);
      };
      animate();

      const onResize = () => {
        renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
        camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
        camera.updateProjectionMatrix();
      };
      window.addEventListener("resize", onResize);

      return () => {
        cancelAnimationFrame(animId);
        document.removeEventListener("mousemove", onMouse);
        window.removeEventListener("resize", onResize);
      };
    };
    document.head.appendChild(script);
    return () => { try { document.head.removeChild(script); } catch {} };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }}
    />
  );
}
