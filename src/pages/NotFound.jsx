import { Link } from 'react-router-dom';
import { AnimatedIcon } from '../components/Icons.jsx';
import usePageTitle from '../hooks/usePageTitle.js';

export default function NotFound() {
  usePageTitle('Page not found');
  return (
    <section className="nf">
      <div className="container">
        <AnimatedIcon name="pin" size={84} className="nf-i" />
        <h1>404</h1>
        <h2>We couldn’t find that page</h2>
        <p>The link may be broken or the page may have moved.</p>
        <div className="row-b c">
          <Link className="btn btn-p" to="/">Back to home</Link>
          <Link className="btn btn-o" to="/contact-us">Contact us</Link>
        </div>
      </div>
    </section>
  );
}