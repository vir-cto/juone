import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo.jsx';
import { AnimatedIcon, IconMenu, IconClose, IconChevron, IconGlobe } from './Icons.jsx';
import { LINKS } from '../config/site.js';

const NAV = [['/', 'Home'], ['/about-us', 'About us'], ['/privacy-policy', 'Privacy policy'], ['/terms-and-conditions', 'Terms and condition'], ['/contact-us', 'Contact us']];

function Dropdown({ label, icon, children }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const away = (e) => { if (!ref.current?.contains(e.target)) setOpen(false); };
    const esc = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', away);
    document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('mousedown', away); document.removeEventListener('keydown', esc); };
  }, []);
  return (
    <div className="dd" ref={ref}>
      <button type="button" className="dd-btn" aria-haspopup="menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        {icon}{label}<IconChevron size={16} className={open ? 'flip' : ''} />
      </button>
      {open && <div className="dd-menu" role="menu" onClick={() => setOpen(false)}>{children}</div>}
    </div>
  );
}

const JoinLinks = () => (
  <>
    <Link to="/vendor/apply" className="dd-item" role="menuitem"><AnimatedIcon name="store" size={30} />Vendor registration</Link>
    <Link to="/deliveryman/apply" className="dd-item" role="menuitem"><AnimatedIcon name="scooter" size={30} />Deliveryman registration</Link>
  </>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const on = () => setStuck(window.scrollY > 8);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useEffect(() => {
    document.body.classList.toggle('no-scroll', open);
    return () => document.body.classList.remove('no-scroll');
  }, [open]);

  const links = NAV.map(([to, t]) => (
    <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>{t}</NavLink>
  ));

  return (
    <header className={`nav${stuck ? ' stuck' : ''}`}>
      <div className="container nav-in">
        <Logo />
        <nav className="nav-links" aria-label="Primary">{links}</nav>
        <div className="nav-act">
          <Dropdown label="Join us"><JoinLinks /></Dropdown>
          <Dropdown label="EN" icon={<IconGlobe size={16} />}><button type="button" className="dd-item" role="menuitem">English</button></Dropdown>
          <a className="btn btn-p btn-s" href={LINKS.play.user} target="_blank" rel="noopener noreferrer">Get the app</a>
        </div>
        <button type="button" className="nav-tg" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>
      <div className={`nav-m${open ? ' open' : ''}`}>
        {links}
        <div className="nav-m-join"><JoinLinks /></div>
        <a className="btn btn-p" href={LINKS.play.user} target="_blank" rel="noopener noreferrer">Get the app</a>
      </div>
    </header>
  );
}