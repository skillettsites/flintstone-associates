export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Flintstone Associates"
    >
      {/* Thin serif F */}
      <path
        d="M4 6h18v2.5H7v14h12v2.5H7V44H4V6z"
        fill="currentColor"
      />
      {/* Serif details on F */}
      <path d="M3 6h2v2H3zM3 42h5v2H3z" fill="currentColor" />
      <path d="M20 6h2v2.5h-2zM17 22.5h2v2.5h-2z" fill="currentColor" />

      {/* Thin serif A - overlapping, in accent gold */}
      <path
        d="M30 6l-12 38h3.2L25 32h14l3.8 12H46L34 6h-4zm-3.5 23.5L31.5 13h1l5 16.5h-10z"
        fill="url(#fa-accent)"
        opacity="0.9"
      />
      {/* Serif details on A */}
      <path d="M17.5 44h4v-1h-4zM41.5 44h4v-1h-4z" fill="url(#fa-accent)" opacity="0.9" />

      <defs>
        <linearGradient id="fa-accent" x1="22" y1="6" x2="42" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#dbc08a" />
          <stop offset="1" stopColor="#b8923f" />
        </linearGradient>
      </defs>
    </svg>
  );
}
