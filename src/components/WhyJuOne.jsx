import { Link } from 'react-router-dom';
import Reveal from './Reveal.jsx';
import { AnimatedIcon, IconArrow } from './Icons.jsx';

const ITEMS = [
  ['store', 'Easy to manage multiple stores'],
  ['bag', 'Easy to manage e-commerce'],
  ['parcel', 'Easy to manage parcel delivery'],
  ['pin', 'Easy to manage location tracking'],
  ['basket', 'Easy to manage grocery business'],
  ['headset', 'Easy to get help & support'],
];

export default function WhyJuOne() {
  return (
    <section className="section" id="why">
      <div className="container why-w">
        <Reveal className="why-lead">
          <div>
            <span className="eyebrow">Why JuOne</span>
            <h2>What’s so special about JuOne?</h2>
            <p>Everything your stores, deliveries and customers need — together in one platform.</p>
          </div>
          <div className="why-art"><AnimatedIcon name="users" size={90} /></div>
          <Link className="btn btn-w" to="/contact-us">Talk to us <IconArrow size={18} /></Link>
        </Reveal>
        <div className="why">
          {ITEMS.map(([icon, text], i) => (
            <Reveal key={text} delay={i * 70} className="wcard">
              <span className="wi"><AnimatedIcon name={icon} size={44} /></span>
              <h4>{text}</h4>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}