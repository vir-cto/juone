import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import Reveal, { SectionHead } from '../components/Reveal.jsx';
import { AnimatedIcon, IconPin, IconArrow } from '../components/Icons.jsx';
import usePageTitle from '../hooks/usePageTitle.js';
import { CITIES, LINKS } from '../config/site.js';

const VALUES = [
  ['clock', 'Speed', 'Orders delivered in about 30 minutes, right to your doorstep.'],
  ['shield', 'Quality & reliability', 'Fresh, fast and exactly as expected — every time.'],
  ['users', 'Community first', 'We back local businesses and create growth through our franchising model.'],
  ['headset', 'Customer satisfaction', 'We deliver peace of mind, with support whenever you need it.'],
];

export default function About() {
  usePageTitle('About us');
  return (
    <>
      <PageHero title="About us" sub="Instant delivery of groceries, daily essentials and restaurant meals — in just 30 minutes." />

      <section className="section">
        <div className="container story">
          <div>
            <span className="eyebrow">Our story</span>
            <p>Welcome to JuOne, your ultimate destination for instant delivery of groceries, daily essentials and restaurant meals. Founded by Parthasarathi, our mission is to revolutionise convenience by delivering what you need in just 30 minutes, right to your doorstep.</p>
            <p>In today’s fast-paced world, time is invaluable. Recognising this, Parthasarathi created JuOne to meet the growing demand for a delivery service that prioritises speed, quality and reliability. Whether you’ve run out of groceries, need essentials urgently or crave a meal from your favourite restaurant, we’re here to serve you quickly and efficiently.</p>
            <p>Our app is designed with your needs in mind, with a simple, intuitive interface for easy ordering. Behind the scenes, we use advanced logistics technology and a highly trained delivery team to make sure your orders arrive fresh, fast and exactly as expected.</p>
            <p>JuOne is not just a service; it’s a community-driven initiative. We’re dedicated to supporting local businesses and creating growth opportunities through our unique franchising model. We are expanding rapidly into Eluru, Tirupati, Ganapavaram, Tanuku, Kakinada, Tadepalligudem, Nellore, Madanapalle, Vizag and Karimnagar in Telangana, so that every household has access to our delivery services.</p>
            <p>What sets us apart is our unwavering commitment to customer satisfaction. We don’t just deliver items — we deliver peace of mind. Join us on this journey to redefine the delivery experience. With JuOne, the future of convenience is here.</p>
          </div>
          <Reveal className="story-card">
            {[['clock', '30 minutes', 'Our delivery promise'], ['users', 'Community-driven', 'Supporting local businesses'], ['pin', `${CITIES.length} cities`, 'And growing fast']].map(([i, b, s]) => (
              <div className="sc-row" key={b}><AnimatedIcon name={i} size={46} /><p><b>{b}</b><small>{s}</small></p></div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <SectionHead eyebrow="What we stand for" title="Built around you" />
          <div className="vals">
            {VALUES.map(([icon, t, d], i) => (
              <Reveal key={t} delay={i * 90} className="fcard">
                <div className="fi"><AnimatedIcon name={icon} size={50} /></div>
                <h4>{t}</h4><p>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Where we operate" title="Expanding across Andhra Pradesh & Telangana" />
          <Reveal className="cities">{CITIES.map((c) => <span key={c}><IconPin size={16} />{c}</span>)}</Reveal>
        </div>
      </section>

      <section className="section tight-t">
        <div className="container">
          <Reveal className="cta-b">
            <h2>Join us on this journey</h2>
            <p>Order with JuOne, sell with JuOne or deliver with JuOne.</p>
            <div className="row-b c">
              <a className="btn btn-w" href={LINKS.play.user} target="_blank" rel="noopener noreferrer">Get the app <IconArrow size={18} /></a>
              <Link className="btn btn-gw" to="/vendor/apply">Become a vendor</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}