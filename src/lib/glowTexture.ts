import * as THREE from "three";

export function makeGlowTexture(stops: [number, string][] = [
  [0, "rgba(255, 253, 240, 1)"],
  [0.3, "rgba(255, 221, 140, 0.95)"],
  [0.65, "rgba(230, 178, 80, 0.5)"],
  [1, "rgba(230, 178, 80, 0)"],
]) {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const gradient = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2
  );
  for (const [offset, color] of stops) {
    gradient.addColorStop(offset, color);
  }
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}
