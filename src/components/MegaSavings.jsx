import Reveal from './Reveal.jsx';
import { AnimatedIcon, IconArrow } from './Icons.jsx';
import { LINKS } from '../config/site.js';

export default function MegaSavings() {
  return (
    <section className="section tight-t" id="savings">
      <div className="container promo">
        <Reveal className="pcard or">
          <div>
            <span className="eyebrow">Mega Savings</span>
            <h3>JuOne Mega Savings</h3>
            <p>Your savings start here — don’t wait, grab your product now.</p>
            <a className="btn btn-p" href={LINKS.play.user} target="_blank" rel="noopener noreferrer">Shop now <IconArrow size={18} /></a>
          </div>
          <div className="art"><AnimatedIcon name="tag" size={130} /></div>
        </Reveal>
        <Reveal className="pcard bl" delay={120}>
          <div>
            <span className="eyebrow">Daily essentials</span>
            <h3>Groceries that save</h3>
            <p>Grab the best prices on your daily essentials.</p>
            <a className="btn btn-o" href={LINKS.play.user} target="_blank" rel="noopener noreferrer">Order groceries <IconArrow size={18} /></a>
          </div>
          <div className="art"><AnimatedIcon name="basket" size={120} /></div>
        </Reveal>
      </div>
    </section>
  );
}