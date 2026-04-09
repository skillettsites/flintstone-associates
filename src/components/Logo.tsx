export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Flintstone Associates logo"
    >
      <rect width="40" height="40" rx="8" fill="url(#fa-grad)" />
      {/* Stylised F */}
      <path
        d="M8.5 10.5H19V14h-7v3.5h5.5v3.5H12V30H8.5V10.5z"
        fill="#0c0c0e"
      />
      {/* Divider line */}
      <rect x="20.5" y="12" width="1" height="16" rx="0.5" fill="#0c0c0e" opacity="0.35" />
      {/* Stylised A */}
      <path
        d="M28 10.5h-1.2L22 30h3.5l.9-3.2h4.2l.9 3.2H35L30.2 10.5H28zm-1 13.5l1.5-5.5L30 24h-3z"
        fill="#0c0c0e"
      />
      <defs>
        <linearGradient id="fa-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#dbc08a" />
          <stop offset="0.5" stopColor="#c9a96e" />
          <stop offset="1" stopColor="#a8863a" />
        </linearGradient>
      </defs>
    </svg>
  );
}
