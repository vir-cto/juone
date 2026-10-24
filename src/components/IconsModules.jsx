/* Animated duotone icons for the JuOne modules (merged into AnimatedIcon by Icons.jsx) */
export const MODULE_ICONS = {
  ride: () => (<>
    <g className="an-speed"><path className="so" d="M1 18h6M0 24h7M2 30h5" /></g>
    <circle className="fw" cx="11" cy="36" r="5.5" />
    <circle className="fw" cx="37" cy="36" r="5.5" />
    <path className="t an-spin" strokeWidth="1.8" d="M11 31.5v9M6.5 36h9" />
    <path className="t an-spin" strokeWidth="1.8" d="M37 31.5v9M32.5 36h9" />
    <g className="t an-bob">
      <path className="so" strokeWidth="4" d="M13 34l7-7h9l8 9" />
      <path className="fo" d="M21 27c0-3 2-5 5-5h4l2 5z" />
      <rect className="fn" x="11.5" y="24" width="10" height="3.4" rx="1.7" />
      <path d="M33 27l-1-6h4M34.5 28l2.5 8" />
      <circle className="fo" cx="22" cy="10.5" r="4.6" />
      <path strokeWidth="3.2" d="M17 25l4-9M21 17l11 4M17 26l7 3-1 6" />
    </g>
  </>),

  stay: () => (<>
    <path className="so t an-twinkle" strokeWidth="2.2" d="M24 1.5v5M21.5 4h5" />
    <rect className="fl" x="9" y="9" width="30" height="33" rx="2.5" />
    {[[14, 14], [21.5, 14], [29, 14], [14, 22], [21.5, 22], [29, 22]].map(([x, y], k) => (
      <rect key={k} className="fo t an-twinkle" style={{ animationDelay: `${k * 0.35}s` }} x={x} y={y} width="5" height="5" rx="1" />
    ))}
    <rect className="fn" x="20.5" y="32" width="7" height="10" rx="1.2" />
    <path d="M4 42h40" />
  </>),

  homeservice: () => (<>
    <path className="fl" d="M6 24L24 8l18 16v18H6z" />
    <path className="fo" d="M33 10h5v10.5l-5-4.5z" />
    <circle className="so t an-gear" cx="24" cy="30" r="7.5" strokeWidth="3.6" strokeDasharray="2.945 2.945" />
    <circle className="fw" cx="24" cy="30" r="4.8" />
    <circle className="fo" cx="24" cy="30" r="2" />
    <path d="M3 42h42" />
    <path className="so t an-twinkle" strokeWidth="2.2" d="M40 3v6M37 6h6" />
  </>),

  digital: () => (<>
    <g className="t an-bob">
      <rect className="fw" x="10" y="4" width="22" height="40" rx="5" />
      <path d="M18 8.5h6" />
      <path className="fo t an-pulse" d="M22.5 15l-6 10h5l-2 9 7-11h-5z" />
      <path className="so" d="M18 39.5h6" />
    </g>
    <path className="so an-wave" strokeWidth="3" d="M37 16a9 9 0 0 1 0 14" />
    <path className="so an-wave" strokeWidth="3" style={{ animationDelay: '.3s' }} d="M41 12a15 15 0 0 1 0 22" />
  </>),
};