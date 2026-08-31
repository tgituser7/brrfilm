"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// Radius/height points tracing a classic brass bell silhouette: loop, neck,
// gently swelling shoulder and body, subtle waist, then flare to the rim.
const BELL_PROFILE: [number, number][] = [
  [0.0, 0],
  [0.05, -0.05],
  [0.07, -0.13],
  [0.06, -0.19],
  [0.15, -0.26],
  [0.3, -0.36],
  [0.44, -0.48],
  [0.54, -0.62],
  [0.6, -0.78],
  [0.615, -0.92],
  [0.6, -1.05],
  [0.62, -1.18],
  [0.7, -1.32],
  [0.82, -1.46],
  [0.9, -1.56],
  [0.94, -1.62],
  [0.905, -1.66],
];

export function Bell3D({
  className = "",
  trigger,
}: {
  className?: string;
  trigger?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const swingRef = useRef<() => void>(() => {});

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 20);
    camera.position.set(0, -0.35, 2.7);
    camera.lookAt(0, -1.0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    function resize() {
      if (!container) return;
      const size = container.clientWidth;
      renderer.setSize(size, size);
    }
    resize();
    window.addEventListener("resize", resize);

    scene.add(new THREE.HemisphereLight(0xfff6da, 0x6b4318, 1.6));
    scene.add(new THREE.AmbientLight(0xfff2d0, 1.0));
    const key = new THREE.DirectionalLight(0xfff0cc, 2.6);
    key.position.set(2, 3, 4);
    scene.add(key);
    const rimLight = new THREE.PointLight(0xffd98a, 2.2, 10);
    rimLight.position.set(-2, 0.8, 2.5);
    scene.add(rimLight);
    const under = new THREE.PointLight(0xffdca0, 1.8, 10);
    under.position.set(0.6, -2.2, 2.2);
    scene.add(under);
    const fill = new THREE.PointLight(0xffe6b0, 1.2, 10);
    fill.position.set(1, -1.2, 2);
    scene.add(fill);

    const profile = BELL_PROFILE.map(([r, y]) => new THREE.Vector2(r, y));
    const bellGeo = new THREE.LatheGeometry(profile, 64);
    const bellMat = new THREE.MeshStandardMaterial({
      color: 0xe6b84a,
      metalness: 0.55,
      roughness: 0.3,
    });
    const bell = new THREE.Mesh(bellGeo, bellMat);

    const loopGeo = new THREE.TorusGeometry(0.1, 0.032, 10, 24);
    const loop = new THREE.Mesh(loopGeo, bellMat);
    loop.rotation.x = Math.PI / 2;
    loop.position.y = 0.08;

    const mouthGeo = new THREE.CircleGeometry(0.86, 40);
    const mouthMat = new THREE.MeshStandardMaterial({
      color: 0x3d2810,
      metalness: 0.3,
      roughness: 0.8,
    });
    const mouth = new THREE.Mesh(mouthGeo, mouthMat);
    mouth.rotation.x = -Math.PI / 2;
    mouth.position.y = -1.64;

    const clapperGeo = new THREE.SphereGeometry(0.13, 16, 16);
    const clapperMat = new THREE.MeshStandardMaterial({
      color: 0xa5760f,
      metalness: 0.75,
      roughness: 0.35,
    });
    const clapper = new THREE.Mesh(clapperGeo, clapperMat);
    clapper.position.y = -1.5;

    const rodGeo = new THREE.CylinderGeometry(0.014, 0.014, 1.4, 8);
    const rodMat = new THREE.MeshStandardMaterial({
      color: 0x8a6a1f,
      metalness: 0.7,
      roughness: 0.4,
    });
    const rod = new THREE.Mesh(rodGeo, rodMat);
    rod.position.y = -0.8;

    const pivot = new THREE.Group();
    pivot.add(bell, loop, mouth, rod, clapper);
    scene.add(pivot);

    let swinging = false;
    let swingStart = 0;
    const clock = new THREE.Clock();
    let frameId: number;

    function animate() {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      if (swinging) {
        const elapsed = t - swingStart;
        const duration = 2.4;
        if (elapsed > duration) {
          swinging = false;
          pivot.rotation.z = 0;
        } else {
          const decay = Math.exp(-elapsed * 2.4);
          pivot.rotation.z = Math.sin(elapsed * 8.5) * 0.5 * decay;
        }
      } else {
        pivot.rotation.z = Math.sin(t * 0.7) * 0.015;
      }

      renderer.render(scene, camera);
    }
    animate();

    swingRef.current = () => {
      swinging = true;
      swingStart = clock.getElapsedTime();
    };

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      bellGeo.dispose();
      bellMat.dispose();
      loopGeo.dispose();
      mouthGeo.dispose();
      mouthMat.dispose();
      clapperGeo.dispose();
      clapperMat.dispose();
      rodGeo.dispose();
      rodMat.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  useEffect(() => {
    if (trigger) swingRef.current();
  }, [trigger]);

  return <div ref={containerRef} className={className} />;
}
