// import { useState } from 'react';
// import Reveal, { SectionHead } from './Reveal.jsx';
// import { AnimatedIcon, IconCheck, IconArrow } from './Icons.jsx';
// import { LINKS } from '../config/site.js';
// import { MODULES as SERVICES } from '../data/modules.js';



// export default function Services() {
//   const [idx, setIdx] = useState(0);
//   const s = SERVICES[idx];

//   const onKey = (e) => {
//     const next = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? (idx + 1) % SERVICES.length
//       : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? (idx - 1 + SERVICES.length) % SERVICES.length : null;
//     if (next === null) return;
//     e.preventDefault();
//     setIdx(next);
//     document.getElementById(`tab-${SERVICES[next].id}`)?.focus();
//   };

//   return (
//     <section className="section" id="services">
//       <div className="container">
//         <SectionHead eyebrow="Our services" title="All-in-one e-commerce solutions" sub="Enjoy all services in one platform." />
//         <Reveal className="svc">
//           <div className="svc-tabs" role="tablist" aria-label="Services" aria-orientation="vertical" onKeyDown={onKey}>
//             {SERVICES.map((x, i) => (
//               <button key={x.id} id={`tab-${x.id}`} type="button" role="tab" className="svc-tab" aria-selected={i === idx} aria-controls="svc-panel" tabIndex={i === idx ? 0 : -1} onClick={() => setIdx(i)}>
//                 <span className="ic"><AnimatedIcon name={x.icon} size={38} /></span>
//                 <span><b>{x.title}</b><small>{x.short}</small></span>
//               </button>
//             ))}
//           </div>
//           <div key={s.id} id="svc-panel" role="tabpanel" aria-labelledby={`tab-${s.id}`} className="svc-panel">
//             <div>
//               <span className="kick">{s.title}</span>
//               <h3>{s.short}</h3>
//               <p>{s.text}</p>
//               <ul className="ticks">{s.points.map((p) => <li key={p}><IconCheck />{p}</li>)}</ul>
//               <a className="btn btn-p" href={LINKS.play.user} target="_blank" rel="noopener noreferrer">Order in the app <IconArrow size={18} /></a>
//             </div>
//             <div className="svc-art"><AnimatedIcon name={s.icon} size={150} /></div>
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }






import { useState } from 'react';
import Reveal, { SectionHead } from './Reveal.jsx';
import { AnimatedIcon, IconCheck, IconArrow } from './Icons.jsx';
import { LINKS } from '../config/site.js';
import { MODULES } from '../data/modules.js';

export default function Services() {
  const [idx, setIdx] = useState(0);
  const s = MODULES[idx];

  const onKey = (e) => {
    const next = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? (idx + 1) % MODULES.length
      : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? (idx - 1 + MODULES.length) % MODULES.length : null;
    if (next === null) return;
    e.preventDefault();
    setIdx(next);
    document.getElementById(`tab-${MODULES[next].id}`)?.focus();
  };

  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHead eyebrow="Our modules" title="One super app for every everyday need" sub={`${MODULES.length} modules. One account. One app.`} />
        <Reveal className="svc">
          <div className="svc-tabs" role="tablist" aria-label="JuOne modules" aria-orientation="vertical" onKeyDown={onKey}>
            {MODULES.map((x, i) => (
              <button key={x.id} id={`tab-${x.id}`} type="button" role="tab" className="svc-tab" aria-selected={i === idx} aria-controls="svc-panel" tabIndex={i === idx ? 0 : -1} onClick={() => setIdx(i)}>
                <span className="ic"><AnimatedIcon name={x.icon} size={38} /></span>
                <span><b>{x.title}</b><small>{x.short}</small></span>
                {x.status === 'soon' && <em className="soon">Soon</em>}
              </button>
            ))}
          </div>
          <div key={s.id} id="svc-panel" role="tabpanel" aria-labelledby={`tab-${s.id}`} className="svc-panel">
            <div>
              <span className="kick">{s.title}</span>
              {s.status === 'soon' && <span className="soon-chip">Coming soon</span>}
              <h3>{s.short}</h3>
              <p>{s.text}</p>
              <ul className="ticks">{s.points.map((p) => <li key={p}><IconCheck />{p}</li>)}</ul>
              <a className="btn btn-p" href={LINKS.play.user} target="_blank" rel="noopener noreferrer">{s.cta || 'Open in the app'} <IconArrow size={18} /></a>
            </div>
            <div className="svc-art"><AnimatedIcon name={s.icon} size={150} /></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}