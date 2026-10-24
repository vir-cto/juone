import { Link } from 'react-router-dom';
import Reveal, { SectionHead } from './Reveal.jsx';
import StoreButtons from './StoreButtons.jsx';
import { AnimatedIcon, IconCheck, IconArrow } from './Icons.jsx';

const APPS = [
  { app: 'vendor', icon: 'store', kick: 'Seller app', title: 'Become a best Seller', text: 'Take your store online and manage orders, stock and customers from one place.', points: ['Manage multiple stores', 'Real-time order alerts', 'Reach more local customers'], to: '/vendor/apply', link: 'Register as vendor' },
  { app: 'captain', icon: 'scooter', kick: 'Deliveryman app', title: 'Become a smart Deliveryman', text: 'Deliver on your own schedule and earn on every order you complete.', points: ['Flexible working hours', 'Orders assigned near you', 'Earn on every delivery'], to: '/deliveryman/apply', link: 'Register as deliveryman' },
  { app: 'erp', icon: 'chart', kick: 'JuOne ERP', title: 'Run your business smarter', text: 'Billing, inventory and reports together in one simple dashboard.', points: ['Inventory & billing', 'Sales reports & insights', 'One view of your business'] },
];

export default function Apps() {
  return (
    <section className="section soft" id="apps">
      <div className="container">
        <SectionHead eyebrow="Earn Money" title="Grow & earn with JuOne" sub="Earn money by using different platforms." />
        <div className="apps">
          {APPS.map((a, i) => (
            <Reveal key={a.app} delay={i * 120} className="app">
              <div className="app-ic"><AnimatedIcon name={a.icon} size={56} /></div>
              <span className="kick">{a.kick}</span>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
              <ul className="ticks">{a.points.map((p) => <li key={p}><IconCheck />{p}</li>)}</ul>
              <div className="app-ft">
                <StoreButtons app={a.app} />
                {a.to && <Link className="app-ln" to={a.to}>{a.link} <IconArrow size={18} /></Link>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}