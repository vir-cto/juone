import PageHero from './PageHero.jsx';
import usePageTitle from '../hooks/usePageTitle.js';
import { LAST_UPDATED, CONTACT } from '../config/site.js';

export default function LegalPage({ doc }) {
  usePageTitle(doc.title);
  const go = (e, id) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };

  return (
    <>
      <PageHero title={doc.title} sub={doc.sub} />
      <section className="section">
        <div className="container legal">
          <aside className="toc" aria-label="On this page">
            <h5>On this page</h5>
            {doc.sections.map((s, i) => (
              <a key={i} href={`#sec-${i}`} onClick={(e) => go(e, `sec-${i}`)}>{i + 1}. {s.h}</a>
            ))}
          </aside>
          <article className="doc">
            <p className="meta">Last updated: {LAST_UPDATED}</p>
            {doc.intro.map((t, i) => <p key={i}>{t}</p>)}
            {doc.sections.map((s, i) => (
              <section id={`sec-${i}`} key={i}>
                <h2>{i + 1}. {s.h}</h2>
                {s.p?.map((t, j) => <p key={j}>{t}</p>)}
                {s.ul && <ul>{s.ul.map((t, j) => <li key={j}>{t}</li>)}</ul>}
              </section>
            ))}
            <div className="doc-ct">
              <h3>Questions about this {doc.title.toLowerCase()}?</h3>
              <p>Email <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or call <a href={`tel:${CONTACT.phone}`}>{CONTACT.phoneText}</a>.</p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}