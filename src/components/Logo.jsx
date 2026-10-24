import { useState } from 'react';
import { Link } from 'react-router-dom';

// Uses /logo.png (public folder). If the file is missing, a text wordmark is shown instead.
export default function Logo({ large = false }) {
  const [bad, setBad] = useState(false);
  return (
    <Link to="/" className={`logo${large ? ' lg' : ''}`} aria-label="JuOne home">
      {bad ? <span className="logo-tx"><b>JU</b>one</span> : <img src="/logo.png" alt="JuOne" onError={() => setBad(true)} />}
    </Link>
  );
}