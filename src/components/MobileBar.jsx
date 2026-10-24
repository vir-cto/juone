import { useEffect, useState } from 'react';
import { LINKS } from '../config/site.js';
import { IconGooglePlay, IconApple } from './Icons.jsx';

// Phones only (hidden by CSS above 768px). Slides up after the visitor scrolls past the hero.
export default function MobileBar() {
  const [show, setShow] = useState(false);
  const ios = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

  useEffect(() => {
    const on = () => setShow(window.scrollY > 520);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <div className={`mbar${show ? ' show' : ''}`} aria-hidden={!show}>
      <div><b>JuOne</b><small>Delivered in about 30 min</small></div>
      <a className="btn btn-p btn-s" href={ios ? LINKS.apple.user : LINKS.play.user} target="_blank" rel="noopener noreferrer" tabIndex={show ? 0 : -1}>
        {ios ? <IconApple size={18} /> : <IconGooglePlay size={18} />}Get the app
      </a>
    </div>
  );
}