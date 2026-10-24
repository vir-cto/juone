import Reveal, { SectionHead } from './Reveal.jsx';
import { AnimatedIcon } from './Icons.jsx';

const FEATURES = [
  ['shield', 'Trusted', 'Trusted by customers and store owners'],
  ['scooter', 'Delivery', 'Flexible delivery system'],
  ['bag', 'Shopping', 'Best shopping experience'],
  ['pin', 'Location', 'Location tracking system'],
  ['tag', 'Savings', 'Best prices on everyday essentials'],
];

export default function Features() {
  return (
    <section className="section soft" id="features">
      <div className="container">
        <SectionHead eyebrow="Features" title="Remarkable features you can count on" sub="Packed with outstanding features that make online ordering and delivery easier and smarter than ever before." />
        <div className="feat">
          {FEATURES.map(([icon, title, text], i) => (
            <Reveal key={title} delay={i * 90} className="fcard">
              <div className="fi"><AnimatedIcon name={icon} size={50} /></div>
              <h4>{title}</h4>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}