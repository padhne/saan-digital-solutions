"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000);
    camera.position.z = 5;

    const pCount = 1500;
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
      positions[i * 3]     = (Math.random() - 0.5) * 20;
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

    const icoGeo1 = new THREE.IcosahedronGeometry(1.8, 1);
    const icoMat1 = new THREE.MeshBasicMaterial({ color: 0x7C6FF4, wireframe: true, transparent: true, opacity: 0.16 });
    const ico = new THREE.Mesh(icoGeo1, icoMat1);
    ico.position.set(2.5, 0, -2);
    scene.add(ico);

    const icoGeo2 = new THREE.IcosahedronGeometry(1.2, 0);
    const icoMat2 = new THREE.MeshBasicMaterial({ color: 0xC084FC, wireframe: true, transparent: true, opacity: 0.11 });
    const ico2 = new THREE.Mesh(icoGeo2, icoMat2);
    ico2.position.set(-2, 1, -3);
    scene.add(ico2);

    const torusGeo = new THREE.TorusGeometry(1.2, 0.4, 8, 32);
    const torusMat = new THREE.MeshBasicMaterial({ color: 0x34D399, wireframe: true, transparent: true, opacity: 0.1 });
    const torus = new THREE.Mesh(torusGeo, torusMat);
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
      ico.rotation.x = t * 0.3;  ico.rotation.y = t * 0.4;
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

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(animId);
      } else {
        animate();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      geo.dispose();
      mat.dispose();
      icoGeo1.dispose(); icoMat1.dispose();
      icoGeo2.dispose(); icoMat2.dispose();
      torusGeo.dispose(); torusMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }}
    />
  );
}
