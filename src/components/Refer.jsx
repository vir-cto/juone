import { useState } from 'react';
import Reveal from './Reveal.jsx';
import { AnimatedIcon } from './Icons.jsx';
import { IconShare } from './IconsExtra.jsx';
import { LINKS } from '../config/site.js';

const STEPS = [
  ['Invite your friends', 'Share JuOne with friends and family in one tap.'],
  ['They join & order', 'Your friend signs up and places an order.'],
  ['You earn points', 'Collect points you can use to save on future orders.'],
];

export default function Refer() {
  const [msg, setMsg] = useState('');

  const share = async () => {
    const data = { title: 'JuOne', text: 'Shop groceries, food, medicines and more with JuOne — delivered in about 30 minutes.', url: LINKS.play.user };
    try {
      if (navigator.share) { await navigator.share(data); return; }
      await navigator.clipboard.writeText(`${data.text} ${data.url}`);
      setMsg('Invite link copied!');
    } catch (e) {
      if (e?.name !== 'AbortError') setMsg('Could not share — please copy the link from the Play Store page.');
    }
    setTimeout(() => setMsg(''), 3500);
  };

  return (
    <section className="section" id="refer">
      <div className="container">
        <Reveal className="refer">
          <div>
            <span className="eyebrow">Refer &amp; earn</span>
            <h2 className="refer-h">Earn points by referring your friends</h2>
            <p className="refer-p">Love JuOne? Share it with the people you care about and get rewarded.</p>
            <div className="steps">
              {STEPS.map(([b, s], i) => (
                <div className="step" key={b}><span className="n">{i + 1}</span><div><b>{b}</b><span>{s}</span></div></div>
              ))}
            </div>
            <div className="row-b">
              <button type="button" className="btn btn-p" onClick={share}><IconShare size={18} />Invite friends</button>
              <a className="btn btn-o" href={LINKS.play.user} target="_blank" rel="noopener noreferrer">Get the app</a>
            </div>
            <p className="share-m" role="status">{msg}</p>
          </div>
          <div className="ref-vis" aria-hidden="true">
            <div className="ref-orb"><AnimatedIcon name="gift" size={170} /></div>
            <div className="fbd a"><AnimatedIcon name="users" size={36} /><p><b>Invite friends</b><small>Share your link</small></p></div>
            <div className="fbd b"><AnimatedIcon name="tag" size={36} /><p><b>Earn points</b><small>On every referral</small></p></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}