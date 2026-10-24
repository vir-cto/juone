import { Link } from 'react-router-dom';

export default function PageHero({ title, sub, crumb }) {
  return (
    <section className="phero">
      <div className="container">
        <nav className="crumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link><span>/</span><b>{crumb || title}</b>
        </nav>
        <h1>{title}</h1>
        {sub && <p>{sub}</p>}
      </div>
    </section>
  );
}