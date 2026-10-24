// import { useEffect, useState } from 'react';
// import { SectionHead } from './Reveal.jsx';
// import { IconQuote, IconChevronL, IconChevronR } from './IconsExtra.jsx';
// import { TESTIMONIALS } from '../config/site.js';

// export default function Testimonials() {
//   const n = TESTIMONIALS.length;
//   const [i, setI] = useState(0);
//   const [hold, setHold] = useState(false);

//   useEffect(() => {
//     if (n < 2 || hold) return;
//     const t = setInterval(() => setI((x) => (x + 1) % n), 6000);
//     return () => clearInterval(t);
//   }, [n, hold]);

//   if (!n) return null;
//   const t = TESTIMONIALS[i];
//   const initials = t.name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase();

//   return (
//     <section className="section" id="testimonials">
//       <div className="container">
//         <SectionHead eyebrow="Testimonials" title="People who shared love with us" />
//         <div className="tst" role="group" aria-label="Customer testimonials" onMouseEnter={() => setHold(true)} onMouseLeave={() => setHold(false)} onFocus={() => setHold(true)} onBlur={() => setHold(false)}>
//           <span className="tst-q"><IconQuote size={26} /></span>
//           <blockquote key={i} className="tst-s">
//             <p>{t.quote}</p>
//             <footer>
//               <span className="av">{initials}</span>
//               <div><b>{t.name}</b><small>{t.role}</small></div>
//             </footer>
//           </blockquote>
//           {n > 1 && (
//             <div className="tst-c">
//               <button type="button" className="tbtn" aria-label="Previous testimonial" onClick={() => setI((i - 1 + n) % n)}><IconChevronL /></button>
//               <div className="tdots">
//                 {TESTIMONIALS.map((_, k) => <button key={k} type="button" aria-label={`Show testimonial ${k + 1}`} aria-current={k === i} onClick={() => setI(k)} />)}
//               </div>
//               <button type="button" className="tbtn" aria-label="Next testimonial" onClick={() => setI((i + 1) % n)}><IconChevronR /></button>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }







import { useEffect, useRef, useState } from 'react';
import { SectionHead } from './Reveal.jsx';
import { IconPin } from './Icons.jsx';
import { IconQuote, IconChevronL, IconChevronR } from './IconsExtra.jsx';
import { TESTIMONIALS } from '../config/site.js';

const COLORS = ['#0B3FB8', '#F26B00', '#0E2F6E', '#C75A00'];

export default function Testimonials() {
  const n = TESTIMONIALS.length;
  const [i, setI] = useState(0);
  const [hold, setHold] = useState(false);
  const x0 = useRef(null);

  useEffect(() => {
    if (n < 2 || hold) return;
    const t = setInterval(() => setI((x) => (x + 1) % n), 7000);
    return () => clearInterval(t);
  }, [n, hold]);

  if (!n) return null;

  const go = (d) => setI((x) => (x + d + n) % n);
  const onTouchStart = (e) => { x0.current = e.touches[0].clientX; setHold(true); };
  const onTouchEnd = (e) => {
    if (x0.current !== null) {
      const dx = e.changedTouches[0].clientX - x0.current;
      if (Math.abs(dx) > 45) go(dx < 0 ? 1 : -1); // swipe left = next
    }
    x0.current = null;
    setHold(false);
  };

  const t = TESTIMONIALS[i];
  const initials = t.name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase();

  return (
    <section className="section" id="testimonials">
      <div className="container">
        <SectionHead eyebrow="Testimonials" title="People who shared love with us" sub="From busy city homes to village doorsteps." />
        <div
          className="tst" role="group" aria-label="Customer testimonials"
          onMouseEnter={() => setHold(true)} onMouseLeave={() => setHold(false)}
          onFocus={() => setHold(true)} onBlur={() => setHold(false)}
          onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}
        >
          <span className="tst-q"><IconQuote size={26} /></span>
          <blockquote key={i} className="tst-s">
            {t.tag && <span className="tst-tag">{t.tag}</span>}
            <p>{t.quote}</p>
            <footer>
              <span className="av" style={{ background: COLORS[i % COLORS.length] }}>{initials}</span>
              <div>
                <b>{t.name}</b>
                <small>{t.role}</small>
                {t.place && <small className="tst-pl"><IconPin size={13} />{t.place}</small>}
              </div>
            </footer>
          </blockquote>
          {n > 1 && (
            <div className="tst-c">
              <button type="button" className="tbtn" aria-label="Previous testimonial" onClick={() => go(-1)}><IconChevronL /></button>
              <div className="tdots">
                {TESTIMONIALS.map((_, k) => <button key={k} type="button" aria-label={`Show testimonial ${k + 1}`} aria-current={k === i} onClick={() => setI(k)} />)}
              </div>
              <button type="button" className="tbtn" aria-label="Next testimonial" onClick={() => go(1)}><IconChevronR /></button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}