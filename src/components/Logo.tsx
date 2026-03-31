export default function Logo({ width = 32, height = 32 }: { width?: number; height?: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer diamond */}
      <path
        d="M32 4L58 32L32 60L6 32L32 4Z"
        fill="url(#logo-grad)"
        opacity="0.9"
      />
      {/* Inner diamond offset */}
      <path
        d="M32 14L48 32L32 50L16 32L32 14Z"
        fill="white"
        opacity="0.25"
      />
      {/* Gavel line — horizontal strike */}
      <rect x="12" y="29" width="40" height="6" rx="3" fill="white" opacity="0.9" />
      {/* Gavel head — small block on right */}
      <rect x="44" y="24" width="8" height="16" rx="2" fill="white" opacity="0.7" />
      <defs>
        <linearGradient id="logo-grad" x1="6" y1="4" x2="58" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366f1" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
