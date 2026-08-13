const SIZE = 21;
const CELL = 8;
const FINDERS: [number, number][] = [
  [0, 0],
  [SIZE - 7, 0],
  [0, SIZE - 7],
];

function mulberry32(seed: number) {
  let s = seed;
  return () => {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function inFinderZone(x: number, y: number) {
  return FINDERS.some(([fx, fy]) => x >= fx && x < fx + 7 && y >= fy && y < fy + 7);
}

const rand = mulberry32(1108);
const modules: boolean[][] = Array.from({ length: SIZE }, (_, y) =>
  Array.from({ length: SIZE }, (_, x) => (inFinderZone(x, y) ? false : rand() > 0.52))
);

export function FakeQR({ className = "h-full w-full" }: { className?: string }) {
  const px = SIZE * CELL;

  return (
    <svg
      viewBox={`0 0 ${px} ${px}`}
      className={className}
      role="img"
      aria-label="Placeholder QR code"
    >
      <rect x={0} y={0} width={px} height={px} fill="#fffbf3" />

      {modules.map((row, y) =>
        row.map(
          (on, x) =>
            on && (
              <rect
                key={`${x}-${y}`}
                x={x * CELL}
                y={y * CELL}
                width={CELL}
                height={CELL}
                fill="#22060b"
              />
            )
        )
      )}

      {FINDERS.map(([fx, fy]) => (
        <g key={`${fx}-${fy}`}>
          <rect x={fx * CELL} y={fy * CELL} width={7 * CELL} height={7 * CELL} fill="#22060b" />
          <rect
            x={(fx + 1) * CELL}
            y={(fy + 1) * CELL}
            width={5 * CELL}
            height={5 * CELL}
            fill="#fffbf3"
          />
          <rect
            x={(fx + 2) * CELL}
            y={(fy + 2) * CELL}
            width={3 * CELL}
            height={3 * CELL}
            fill="#22060b"
          />
        </g>
      ))}
    </svg>
  );
}
