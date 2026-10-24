/* Extra line icons + extra animated icons (merged into AnimatedIcon by Icons.jsx) */
const L = ({ size = 20, className = '', fill = 'none', children }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">{children}</svg>
);

export const IconStar = (p) => <L {...p} fill="currentColor"><path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" /></L>;
export const IconQuote = (p) => <L {...p} fill="currentColor"><path d="M3 21v-7c0-4.5 2.5-7.5 7-9l1 2.2C8.8 8 8 9.3 8 11h3v10zM14 21v-7c0-4.5 2.5-7.5 7-9l1 2.2c-2.2.8-3 2.1-3 3.8h3v10z" /></L>;
export const IconSend = (p) => <L {...p}><path d="m22 2-11 11M22 2l-7 20-4-9-9-4z" /></L>;
export const IconClock = (p) => <L {...p}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></L>;
export const IconShare = (p) => <L {...p}><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4" /></L>;
export const IconChevronL = (p) => <L {...p}><path d="m15 18-6-6 6-6" /></L>;
export const IconChevronR = (p) => <L {...p}><path d="m9 18 6-6-6-6" /></L>;

export const EXTRA = {
  bag: () => (<>
    <g className="t an-swing"><path className="so" strokeWidth="3" d="M17 18v-6a7 7 0 0 1 14 0v6" /></g>
    <g className="t an-bob">
      <path className="fl" d="M8 17h32l2.2 24.5a2.6 2.6 0 0 1-2.6 2.8H8.4a2.6 2.6 0 0 1-2.6-2.8z" />
      <path className="so" strokeWidth="3" d="M18 29c1.4 4.2 10.6 4.2 12 0" />
    </g>
  </>),
  gift: () => (<>
    <path className="fl" d="M8 24h32v18a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2z" />
    <path className="fo" d="M21 24h6v20h-6z" />
    <g className="t an-lid">
      <rect className="fo" x="5" y="15" width="38" height="9" rx="2.5" />
      <path className="fn" d="M21 15h6v9h-6z" />
      <path className="so" strokeWidth="2.6" d="M24 15c-3.5-8-12-6-9.5-1.8 1.4 2.4 6 1.8 9.5 1.8zM24 15c3.5-8 12-6 9.5-1.8-1.4 2.4-6 1.8-9.5 1.8z" />
    </g>
    <path className="so t an-twinkle" strokeWidth="2.2" d="M42 4v6M39 7h6" />
  </>),
  tag: () => (<>
    <g className="t an-wiggle">
      <path className="fo" d="M5 7a2 2 0 0 1 2-2h14.5a2 2 0 0 1 1.4.6l19.5 19.5a2 2 0 0 1 0 2.8L27.6 41.6a2 2 0 0 1-2.8 0L5.6 22.5A2 2 0 0 1 5 21z" />
      <circle className="fw ns" cx="13" cy="13" r="3.4" />
      <path stroke="#fff" strokeWidth="2.6" d="M30 20 20 30" />
      <circle className="fw ns" cx="21" cy="21" r="2.4" />
      <circle className="fw ns" cx="29" cy="29" r="2.4" />
    </g>
    <path className="so t an-twinkle" strokeWidth="2.2" d="M40 5v7M36.5 8.5h7" />
  </>),
  headset: () => (<>
    <path strokeWidth="3" d="M8 27v-5a16 16 0 0 1 32 0v5" />
    <rect className="fo" x="4.5" y="25" width="9" height="15" rx="4.5" />
    <rect className="fo" x="34.5" y="25" width="9" height="15" rx="4.5" />
    <path d="M39 40v.5a4.5 4.5 0 0 1-4.5 4.5H28" />
    <rect className="fn" x="22" y="42.5" width="6.5" height="5" rx="2.5" />
    <circle className="fo t an-bob" cx="17" cy="23" r="2.4" />
    <circle className="fo t an-bob" style={{ animationDelay: '.2s' }} cx="24" cy="23" r="2.4" />
    <circle className="fo t an-bob" style={{ animationDelay: '.4s' }} cx="31" cy="23" r="2.4" />
  </>),
  users: () => (<>
    <g className="t an-bob" style={{ animationDelay: '.5s' }}>
      <circle className="fw" cx="9.5" cy="22" r="5" />
      <path className="fl" d="M1.5 41c0-5.6 3.6-9.5 8-9.5s8 3.9 8 9.5z" />
    </g>
    <g className="t an-bob" style={{ animationDelay: '1s' }}>
      <circle className="fw" cx="38.5" cy="22" r="5" />
      <path className="fl" d="M30.5 41c0-5.6 3.6-9.5 8-9.5s8 3.9 8 9.5z" />
    </g>
    <g className="t an-bob">
      <circle className="fl" cx="24" cy="15" r="7" />
      <path className="fo" d="M10 43c0-8.5 6-14 14-14s14 5.5 14 14z" />
    </g>
  </>),
  phone: () => (<>
    <g className="t an-bob">
      <rect className="fw" x="12" y="3" width="24" height="42" rx="5.5" />
      <path d="M20.5 8h7" />
      <path className="so t an-dl" strokeWidth="3.2" d="M24 16v14M18 25l6 6 6-6" />
      <path className="so" strokeWidth="3" d="M19 39h10" />
    </g>
  </>),
};