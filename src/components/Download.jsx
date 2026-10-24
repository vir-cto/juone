import Reveal from './Reveal.jsx';
import StoreButtons from './StoreButtons.jsx';
import { AnimatedIcon, IconCheck, IconPin } from './Icons.jsx';

export default function Download() {
  return (
    <section className="section soft" id="download">
      <div className="container">
        <Reveal className="dl">
          <div>
            <span className="eyebrow">User app</span>
            <h2 className="dl-h">Shop smarter with the JuOne app</h2>
            <p className="dl-p">Food, groceries, rides, shopping, stays, home services and digital services — everything in one app.</p>
            <ul className="ticks">
              {['Fast 30-minute delivery', 'Live order tracking', 'Mega savings on daily essentials'].map((t) => <li key={t}><IconCheck />{t}</li>)}
            </ul>
            <StoreButtons app="user" />
          </div>
          <div className="dl-vis" aria-hidden="true">
            <div className="phone">
              <div className="ph-scr">
                <div className="ph-loc"><IconPin size={16} /><div><small>Delivering to</small><b>Your doorstep</b></div></div>
                <div className="dl-ring"><AnimatedIcon name="scooter" size={96} /></div>
                <div className="dl-tt"><b>Your order is on the way</b><small>Arriving in about 30 min</small></div>
                <div className="ph-trk">
                  <div><AnimatedIcon name="pin" size={30} /><p><b>Live tracking</b><small>Rider is nearby</small></p></div>
                  <div className="ph-bar"><i /></div>
                </div>
              </div>
            </div>
            <div className="fbd a"><AnimatedIcon name="tag" size={36} /><p><b>Mega Savings</b><small>Best daily prices</small></p></div>
            <div className="fbd b"><AnimatedIcon name="clock" size={36} /><p><b>30 min</b><small>Express delivery</small></p></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}