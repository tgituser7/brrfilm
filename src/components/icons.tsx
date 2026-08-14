type IconProps = { className?: string };

const base = "h-7 w-7";

export function IconSun({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="9" stroke="currentColor" strokeWidth="1.6" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * Math.PI) / 4;
        const x1 = 24 + Math.cos(angle) * 15;
        const y1 = 24 + Math.sin(angle) * 15;
        const x2 = 24 + Math.cos(angle) * 20;
        const y2 = 24 + Math.sin(angle) * 20;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

export function IconEarth({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="15" stroke="currentColor" strokeWidth="1.6" />
      <ellipse cx="24" cy="24" rx="15" ry="6.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M9 24h30" stroke="currentColor" strokeWidth="1.4" />
      <path d="M24 9v30" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function IconLotusHeart({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M24 34s-11-7.2-11-15.4C13 13.6 16.9 10 21 10c1.6 0 3 .6 3 2 0-1.4 1.4-2 3-2 4.1 0 8 3.6 8 8.6C35 26.8 24 34 24 34Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M15 34c3 2.2 6 3.6 9 3.6s6-1.4 9-3.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconDrop({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M24 8c6 8.4 11 15.5 11 21.2C35 35.7 30 40 24 40s-11-4.3-11-10.8C13 23.5 18 16.4 24 8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M18.5 28.5c0 3 2.4 5.5 5.5 5.9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function IconHandHeart({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M10 26c0-9 6-15 14-15s14 6 14 15"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M24 21c-1.4-2.1-3.4-3-5.2-2.1-1.9 1-2.5 3.3-1.2 5.2 1 1.5 4.1 4 6.4 5.6 2.3-1.6 5.4-4.1 6.4-5.6 1.3-1.9.7-4.2-1.2-5.2-1.8-.9-3.8 0-5.2 2.1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M8 30c1 4.5 4.5 8 9 9M40 30c-1 4.5-4.5 8-9 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function IconFlute({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M11 30 30 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="16" cy="25" r="1.3" fill="currentColor" />
      <circle cx="20" cy="21" r="1.3" fill="currentColor" />
      <circle cx="24" cy="17" r="1.3" fill="currentColor" />
      <path d="M30 11c3 1 6.5 4.5 7.5 7.5M11 30c1 3 4.5 6.5 7.5 7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconOm({ className = base }: IconProps) {
  return (
    <span className={`${className} inline-flex items-center justify-center font-heading leading-none`} aria-hidden="true">
      ॐ
    </span>
  );
}

export function IconCow({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M14 14c-1.5-2.5-1-5.5 1.5-6.5 2-.8 3.8.4 4.5 2.3 1.2-.9 2.5-1.4 4-1.4s2.8.5 4 1.4c.7-1.9 2.5-3.1 4.5-2.3C35 8.5 35.5 11.5 34 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 20c0-4.4 5.4-8 12-8s12 3.6 12 8c0 5-2.4 8.6-5 10.6-.2 2.6-.4 5-2 6.6-1.2 1.2-3 1.8-5 1.8s-3.8-.6-5-1.8c-1.6-1.6-1.8-4-2-6.6-2.6-2-5-5.6-5-10.6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="21" r="1.1" fill="currentColor" />
      <circle cx="28" cy="21" r="1.1" fill="currentColor" />
      <path d="M22 25.5c.6.6 1.4.9 2 .9s1.4-.3 2-.9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M7 19c1.5-1 3-1 4.5 0M41 19c-1.5-1-3-1-4.5 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconFarmer({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="24" cy="15" r="5.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M16.5 12.5c2-2.4 4.6-3.6 7.5-3.6s5.5 1.2 7.5 3.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M15 13c3-1 6-1.4 9-1.4s6 .4 9 1.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path
        d="M13 39c.5-8 4.5-13 11-13s10.5 5 11 13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconVillage({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M8 24 22 12l14 12" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M11 22v16h22V22" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M19 38v-9h6v9" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M31 17V13h4v6.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

export function IconNamaste({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M24 10c0 6-2.5 8-4.5 10.5-2.4 3-2.4 7-.3 9.3 1 1.1 2.7 1.7 4.8 1.7s3.8-.6 4.8-1.7c2.1-2.3 2.1-6.3-.3-9.3-2-2.5-4.5-4.5-4.5-10.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M24 10v3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M15 38c2.6-2.4 5.8-3.6 9-3.6s6.4 1.2 9 3.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconPlay({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 5.5v13l11-6.5-11-6.5Z" />
    </svg>
  );
}

export function IconFeather({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg viewBox="0 0 48 64" fill="none" className={className} aria-hidden="true">
      <path
        d="M24 4C13 12 9 26 12 38c1.8 7 6.5 13 12 18 5.5-5 10.2-11 12-18 3-12-1-26-12-34Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <ellipse cx="24" cy="18" rx="5.5" ry="7.5" stroke="currentColor" strokeWidth="1.1" />
      <path d="M24 8v48" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      {[14, 20, 26, 32, 38, 44].map((y) => (
        <g key={y}>
          <path d={`M24 ${y}c-3 1.5-5.5 3-7.5 5.5`} stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
          <path d={`M24 ${y}c3 1.5 5.5 3 7.5 5.5`} stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
        </g>
      ))}
    </svg>
  );
}

export function IconTarget({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="15" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="24" cy="24" r="9" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="24" cy="24" r="3" fill="currentColor" />
    </svg>
  );
}

export function IconEye({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 24C8 15 15.5 10 24 10s16 5 20 14c-4 9-11.5 14-20 14S8 33 4 24Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="24" cy="24" r="2" fill="currentColor" />
    </svg>
  );
}

export function IconShoppingBag({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M14 16h20l2 24a3 3 0 0 1-3 3.3H15a3 3 0 0 1-3-3.3l2-24Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M18 16v-2a6 6 0 0 1 12 0v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M17 22c1.4 1.6 3.5 2.6 7 2.6s5.6-1 7-2.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function IconDonate({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M24 38S9 29 9 18.5C9 13.3 13 9.5 18 9.5c2.7 0 5 1.2 6 3.2 1-2 3.3-3.2 6-3.2 5 0 9 3.8 9 9C39 29 24 38 24 38Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M24 16v9M20 20.5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconLotusDivider({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path d="M32 44c-10-4-16-12-16-20 6 0 12 4 16 10 4-6 10-10 16-10 0 8-6 16-16 20Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M32 44c-6-3-10-8-10-13.5 4 0 8 2.8 10 6.8 2-4 6-6.8 10-6.8 0 5.5-4 10.5-10 13.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M20 50c4-3 8-4 12-4s8 1 12 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}
