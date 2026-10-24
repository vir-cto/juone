import { useEffect, useState } from 'react';
import { useInView, SectionHead } from './Reveal.jsx';
import { AnimatedIcon } from './Icons.jsx';
import { STATS } from '../config/site.js';

function Count({ to, run }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setN(to); return; }
    let raf, t0;
    const step = (t) => {
      if (t0 === undefined) t0 = t;
      const p = Math.min((t - t0) / 1800, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [run, to]);
  return <>{n.toLocaleString('en-IN')}</>;
}

export default function Stats() {
  const [ref, seen] = useInView({ threshold: 0.3 });
  return (
    <section className="section tight-t" id="stats">
      <div className="container">
        <SectionHead eyebrow="Our growth" title="JuOne by the numbers" />
        <div className="stats" ref={ref}>
          <div className="stats-g">
            {STATS.map((s) => (
              <div className="stat" key={s.label}>
                <div className="si"><AnimatedIcon name={s.icon} size={52} /></div>
                <b><Count to={s.value} run={seen} /><em>+</em></b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          <div className="stats-n"><AnimatedIcon name="chart" size={30} />Still increasing</div>
        </div>
      </div>
    </section>
  );
}