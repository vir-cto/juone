import { EXTRA } from './IconsExtra.jsx';
import { MODULE_ICONS } from './IconsModules.jsx';

/* ---------- Line icons (inherit currentColor) ---------- */
const L = ({ size = 20, className = '', children }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">{children}</svg>
);
export const IconPhone = (p) => <L {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></L>;
export const IconMail = (p) => <L {...p}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></L>;
export const IconPin = (p) => <L {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></L>;
export const IconArrow = (p) => <L {...p}><path d="M5 12h14M12 5l7 7-7 7" /></L>;
export const IconCheck = (p) => <L {...p}><path d="M20 6 9 17l-5-5" /></L>;
export const IconMenu = (p) => <L {...p}><path d="M4 6h16M4 12h16M4 18h16" /></L>;
export const IconClose = (p) => <L {...p}><path d="M18 6 6 18M6 6l12 12" /></L>;
export const IconChevron = (p) => <L {...p}><path d="m6 9 6 6 6-6" /></L>;
export const IconSearch = (p) => <L {...p}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></L>;
export const IconGlobe = (p) => <L {...p}><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></L>;
export const IconInstagram = (p) => <L {...p}><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.4A4 4 0 1 1 12.6 8 4 4 0 0 1 16 11.4zM17.5 6.5h.01" /></L>;
export const IconFacebook = (p) => <L {...p}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></L>;

/* ---------- Store icons ---------- */
export const IconGooglePlay = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#00C3FF" d="M4 2.5v19l9-9.5z" /><path fill="#32D17C" d="M4 2.5l13 7.5-4 2z" />
    <path fill="#FF3D4A" d="M4 21.5l13-7.5-4-2z" /><path fill="#FFC400" d="M17 10l3.5 2-3.5 2-4-2z" />
  </svg>
);
export const IconApple = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
  </svg>
);

/* ---------- Animated duotone icons (48×48, theme colours via CSS) ---------- */
const I = {
  shield: () => (<>
    <path className="fl t an-pulse" d="M24 4l16 6v11c0 10.5-6.6 18.6-16 22C14.6 39.6 8 31.5 8 21V10z" />
    <path className="so an-draw" strokeWidth="3.4" d="M16 24.5l6 6 11-12.5" />
  </>),
  scooter: () => (<>
    <g className="an-speed"><path className="so" d="M1 18h7M0 24h8M3 30h5" /></g>
    <g className="t an-bob"><rect className="fo" x="10" y="12" width="16" height="15" rx="2.5" /><path d="M9 31h22M32 31l3 7M31 31l4-14h5" /></g>
    <circle className="fw" cx="14" cy="39" r="5" /><circle className="fw" cx="36" cy="39" r="5" />
    <path className="t an-spin" strokeWidth="1.8" d="M14 35v8M10 39h8" /><path className="t an-spin" strokeWidth="1.8" d="M36 35v8M32 39h8" />
  </>),
  pin: () => (<>
    <ellipse className="so t an-ripple" cx="24" cy="42" rx="9" ry="3" />
    <ellipse className="so t an-ripple" style={{ animationDelay: '1s' }} cx="24" cy="42" rx="9" ry="3" />
    <g className="t an-hop"><path className="fo" d="M24 3c-7.2 0-13 5.6-13 12.6C11 25.5 24 40 24 40s13-14.5 13-24.4C37 8.6 31.2 3 24 3z" /><circle className="fw ns" cx="24" cy="15.5" r="5.2" /></g>
  </>),
  clock: () => (<>
    <path d="M20 5h8M24 5v5" /><path className="so" d="M37.5 11l2.5-2.5" />
    <circle className="fw" cx="24" cy="27" r="16.5" />
    <path className="so" strokeWidth="2" d="M24 15v2M36 27h-2M24 39v-2M12 27h2" />
    <path className="so an-hand" strokeWidth="3" d="M24 27V18" /><circle className="fo" cx="24" cy="27" r="2.4" />
  </>),
  basket: () => (<>
    <g className="t an-bob"><circle className="fl" cx="16" cy="17" r="6.5" /><path className="so" d="M16 10.5c0-2.2 1.2-3.6 3.4-4" /></g>
    <g className="t an-bob" style={{ animationDelay: '.7s' }}><rect className="fn" x="30" y="5" width="4" height="5" rx="1" /><rect className="fo" x="28" y="10" width="8" height="14" rx="2.2" /></g>
    <path className="fl" d="M6 23h36l-4.2 19H10.2z" /><path d="M3.5 23h41M17 29v8M24 29v8M31 29v8" />
  </>),
  food: () => (<>
    {[16, 24, 32].map((x, i) => <path key={x} className="so t an-steam" style={{ animationDelay: `${i * 0.5}s` }} d={`M${x} 11c-2.5-2.5 2.5-4.5 0-7`} />)}
    <g className="t an-lid"><path className="fl" d="M7 34a17 17 0 0 1 34 0z" /><circle className="fo" cx="24" cy="15" r="2.6" /></g>
    <path d="M3 38h42" /><path className="so" d="M9 43h30" />
  </>),
  pill: () => (<>
    <g className="t an-wiggle"><g transform="rotate(-40 24 24)">
      <rect className="fw ns" x="6" y="15" width="36" height="18" rx="9" />
      <path className="fo" d="M24 15h9a9 9 0 0 1 0 18h-9z" />
      <rect x="6" y="15" width="36" height="18" rx="9" /><path d="M24 15v18" />
    </g></g>
    <path className="so t an-twinkle" strokeWidth="2.2" d="M40 6v7M36.5 9.5h7" />
  </>),
  parcel: () => (<>
    <ellipse className="fn" cx="24" cy="44" rx="12" ry="2.5" opacity=".12" />
    <g className="t an-hop"><path className="fl" d="M6 15l18-9 18 9v19l-18 9-18-9z" /><path d="M6 15l18 9 18-9M24 24v19" /><path className="so" strokeWidth="3" d="M15 10.5l18 9" /></g>
  </>),
  store: () => (<>
    <path className="fl" d="M8 22h32v20H8z" />
    <rect className="fn" x="13" y="28" width="12" height="14" />
    <g className="t an-door"><rect className="fo" x="13" y="28" width="12" height="14" /></g>
    <rect className="fw" x="29" y="28" width="7" height="8" rx="1" />
    <path className="fo" d="M5 21l3.4-13h31.2L43 21z" /><path stroke="#fff" strokeWidth="2.2" d="M16.5 8L15 21M24 8v13M31.5 8L33 21" />
    <path d="M3 42h42" />
  </>),
  chart: () => (<>
    <rect className="fo t an-grow" x="8" y="26" width="8" height="14" rx="2" />
    <rect className="fo t an-grow" style={{ animationDelay: '.3s' }} x="20" y="17" width="8" height="23" rx="2" />
    <rect className="fo t an-grow" style={{ animationDelay: '.6s' }} x="32" y="8" width="8" height="32" rx="2" />
    <path d="M4 43h40" />
  </>),
};


Object.assign(I, EXTRA, MODULE_ICONS);
export function AnimatedIcon({ name, size = 48, className = '' }) {
  const Inner = I[name];
  if (!Inner) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={`aicon ${className}`} aria-hidden="true" focusable="false">
      <Inner />
    </svg>
  );
}