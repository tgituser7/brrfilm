"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import * as THREE from "three";
import { makeGlowTexture } from "@/lib/glowTexture";

const PARTICLE_COUNT = 140;
const HOLD_MS = 2200;
const FADE_MS = 700;

export function WelcomeIntro() {
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  function dismiss() {
    setFadingOut(true);
    setTimeout(() => setMounted(false), FADE_MS);
  }

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // One-time sync from a browser-only API; server always renders the
      // animated default, so this necessarily happens post-mount.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setReducedMotion(true);
      setMounted(false);
      return;
    }

    const timer = setTimeout(dismiss, HOLD_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (reducedMotion || !mounted) return;
    const container = canvasContainerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-8, 8, 5, -5, 0.1, 20);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    const pixelRatio = Math.min(window.devicePixelRatio, 2);
    renderer.setPixelRatio(pixelRatio);
    container.appendChild(renderer.domElement);

    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const dirX = new Float32Array(PARTICLE_COUNT);
    const dirY = new Float32Array(PARTICLE_COUNT);
    const speed = new Float32Array(PARTICLE_COUNT);
    const delay = new Float32Array(PARTICLE_COUNT);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3] = 0;
      positions[i * 3 + 1] = 0;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2;
      const angle = Math.random() * Math.PI * 2;
      dirX[i] = Math.cos(angle);
      dirY[i] = Math.sin(angle);
      speed[i] = 4 + Math.random() * 5;
      delay[i] = Math.random() * 0.35;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    function resize() {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      const aspect = w / h;
      const viewHeight = 10;
      camera.left = (-viewHeight * aspect) / 2;
      camera.right = (viewHeight * aspect) / 2;
      camera.top = viewHeight / 2;
      camera.bottom = -viewHeight / 2;
      camera.updateProjectionMatrix();
    }
    resize();
    window.addEventListener("resize", resize);

    const material = new THREE.PointsMaterial({
      size: 20 * pixelRatio,
      map: makeGlowTexture(),
      transparent: true,
      opacity: 1,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: false,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let frameId: number;
    const clock = new THREE.Clock();
    const lifespan = 2.4;

    function animate() {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      const pos = geometry.attributes.position as THREE.BufferAttribute;

      let anyAlive = false;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const local = Math.max(0, t - delay[i]);
        if (local < lifespan) anyAlive = true;
        const eased = 1 - Math.pow(1 - Math.min(local / lifespan, 1), 3);
        const dist = eased * speed[i];
        pos.setXY(i, dirX[i] * dist, dirY[i] * dist);
      }
      pos.needsUpdate = true;
      material.opacity = Math.max(0, 1 - t / lifespan);

      renderer.render(scene, camera);
      if (!anyAlive) cancelAnimationFrame(frameId);
    }
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      geometry.dispose();
      material.map?.dispose();
      material.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [reducedMotion, mounted]);

  if (!mounted) return null;

  return (
    <div
      onClick={dismiss}
      role="presentation"
      className={`fixed inset-0 z-[200] flex cursor-pointer items-center justify-center bg-devotional transition-opacity duration-700 ${
        fadingOut ? "opacity-0" : "opacity-100"
      }`}
      style={{ transitionDuration: `${FADE_MS}ms` }}
    >
      <div ref={canvasContainerRef} className="pointer-events-none absolute inset-0" />
      <div className="animate-welcome-in relative flex flex-col items-center">
        <span className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-gold/50 shadow-lg shadow-maroon-950/40">
          <Image
            src="/guriji.jpeg"
            alt=""
            fill
            sizes="80px"
            className="object-cover object-top"
          />
        </span>
        <p className="mt-4 font-heading text-2xl font-bold text-gold-light sm:text-3xl">
          ॥ राधे राधे ॥
        </p>
      </div>
    </div>
  );
}
