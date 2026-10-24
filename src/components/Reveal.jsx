import { useEffect, useRef, useState } from 'react';

export function useInView(opts = { threshold: 0.15 }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) { setSeen(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, opts);
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, seen];
}

export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children }) {
  const [ref, seen] = useInView();
  return <Tag ref={ref} className={`reveal${seen ? ' in' : ''} ${className}`} style={{ '--d': `${delay}ms` }}>{children}</Tag>;
}

export function SectionHead({ eyebrow, title, sub }) {
  return (
    <Reveal className="sec-head">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </Reveal>
  );
}