// import Reveal from './Reveal.jsx';
// import StoreButtons from './StoreButtons.jsx';
// import { AnimatedIcon, IconPin, IconSearch } from './Icons.jsx';
// import { CITIES } from '../config/site.js';
// import { MODULES } from '../data/modules.js';

// const CATS = [['basket', 'Grocery'], ['food', 'Food'], ['pill', 'Pharmacy'], ['parcel', 'Parcel']];

// function Phone() {
//   return (
//     <div className="phone" aria-hidden="true">
//       <div className="ph-scr">
//         <div className="ph-loc"><IconPin size={16} /><div><small>Deliver to</small><b>Tirupati</b></div></div>
//         <div className="ph-search"><IconSearch size={15} />Search groceries, food, medicines…</div>
//         <div className="ph-cats">
//           {CATS.map(([i, l]) => <div key={l}><span><AnimatedIcon name={i} size={30} /></span><em>{l}</em></div>)}
//         </div>
//         <div className="ph-ban">
//           <div><small>Mega Savings</small><b>Your savings start here</b><span className="ph-pill">Shop now</span></div>
//           <AnimatedIcon name="shield" size={58} />
//         </div>
//         <div className="ph-trk">
//           <div><AnimatedIcon name="scooter" size={32} /><p><b>Order on the way</b><small>Live tracking on</small></p></div>
//           <div className="ph-bar"><i /></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function CityMarquee() {
//   const list = [...CITIES, ...CITIES];
//   return (
//     <div className="mq" aria-label="Cities we serve">
//       <div className="mq-h">Growing across Andhra Pradesh &amp; Telangana</div>
//       <div className="mq-t"><div className="mq-r">{list.map((c, i) => <span key={i}><IconPin size={16} />{c}</span>)}</div></div>
//     </div>
//   );
// }

// export default function Hero() {
//   return (
//     <section className="hero">
//       <div className="hero-bg" aria-hidden="true"><i className="bl b1" /><i className="bl b2" /><i className="dots" /></div>
//       <div className="container hero-g">
//         <div>
//           <Reveal className="chip"><span className="pdot" />Delivery in just 30 minutes</Reveal>
//           <Reveal as="h1" delay={80} className="hero-t">Your Life, Simplified: <span className="grad">One App</span> for Everything</Reveal>
//           <Reveal as="p" delay={160} className="hero-s">One App for Shopping, Orders &amp; Savings.</Reveal>
//           <Reveal as="p" delay={240} className="hero-l">Groceries, food, medicines, parcels and more from the stores you trust — delivered to your doorstep and tracked live.</Reveal>
//           <Reveal delay={320} className="hero-cta"><StoreButtons app="user" /></Reveal>
//           <Reveal delay={400} className="proof">
//             {[['clock', '30 min', 'Fast delivery'], ['basket', `${MODULES.length} modules`, 'One super app'], ['pin', 'Live', 'Order tracking']].map(([i, b, s]) => (
//               <div key={b}><AnimatedIcon name={i} size={38} /><p><b>{b}</b><small>{s}</small></p></div>
//             ))}
//           </Reveal>
//         </div>
//         <div className="hero-vis">
//           <Phone />
//           <div className="fbd a"><AnimatedIcon name="clock" size={36} /><p><b>30 min</b><small>Express delivery</small></p></div>
//           <div className="fbd b"><AnimatedIcon name="pin" size={36} /><p><b>Live tracking</b><small>Know where it is</small></p></div>
//           <div className="fbd c"><AnimatedIcon name="shield" size={36} /><p><b>Secure payments</b><small>Safe &amp; trusted</small></p></div>
//         </div>
//       </div>
//     </section>
//   );
// }








import Reveal from './Reveal.jsx';
import StoreButtons from './StoreButtons.jsx';
import { AnimatedIcon, IconPin, IconSearch } from './Icons.jsx';
import { CITIES } from '../config/site.js';
import { MODULES } from '../data/modules.js';

function Phone() {
  return (
    <div className="phone" aria-hidden="true">
      <div className="ph-scr">
        <div className="ph-loc"><IconPin size={16} /><div><small>Deliver to</small><b>Tirupati</b></div></div>
        <div className="ph-search"><IconSearch size={15} />Search food, rides, stays, services…</div>
        <div className="ph-cats">
          {MODULES.slice(0, 6).map((m) => (
            <div key={m.id}><span><AnimatedIcon name={m.icon} size={30} /></span><em>{m.label || m.title}</em></div>
          ))}
        </div>
        <div className="ph-ban">
          <div><small>Mega Savings</small><b>Your savings start here</b><span className="ph-pill">Shop now</span></div>
          <AnimatedIcon name="shield" size={58} />
        </div>
        <div className="ph-trk">
          <div><AnimatedIcon name="scooter" size={32} /><p><b>Order on the way</b><small>Live tracking on</small></p></div>
          <div className="ph-bar"><i /></div>
        </div>
      </div>
    </div>
  );
}

export function CityMarquee() {
  const list = [...CITIES, ...CITIES];
  return (
    <div className="mq" aria-label="Cities we serve">
      <div className="mq-h">Growing across Andhra Pradesh &amp; Telangana</div>
      <div className="mq-t"><div className="mq-r">{list.map((c, i) => <span key={i}><IconPin size={16} />{c}</span>)}</div></div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true"><i className="bl b1" /><i className="bl b2" /><i className="dots" /></div>
      <div className="container hero-g">
        <div>
          <Reveal className="chip"><span className="pdot" />Delivery in just 30 minutes</Reveal>
          <Reveal as="h1" delay={80} className="hero-t">Your Life, Simplified: <span className="grad">One App</span> for Everything</Reveal>
          <Reveal as="p" delay={160} className="hero-s">One App for Shopping, Orders &amp; Savings.</Reveal>
          <Reveal as="p" delay={240} className="hero-l">Food, groceries, medicines, rides, shopping, stays, home services and digital services — all in one app, with live tracking.</Reveal>
          <Reveal delay={320} className="hero-cta"><StoreButtons app="user" /></Reveal>
          <Reveal delay={400} className="proof">
            {[['clock', '30 min', 'Fast delivery'], ['basket', `${MODULES.length} modules`, 'One super app'], ['pin', 'Live', 'Order tracking']].map(([i, b, s]) => (
              <div key={b}><AnimatedIcon name={i} size={38} /><p><b>{b}</b><small>{s}</small></p></div>
            ))}
          </Reveal>
        </div>
        <div className="hero-vis">
          <Phone />
          <div className="fbd a"><AnimatedIcon name="clock" size={36} /><p><b>30 min</b><small>Express delivery</small></p></div>
          <div className="fbd b"><AnimatedIcon name="pin" size={36} /><p><b>Live tracking</b><small>Know where it is</small></p></div>
          <div className="fbd c"><AnimatedIcon name="shield" size={36} /><p><b>Secure payments</b><small>Safe &amp; trusted</small></p></div>
        </div>
      </div>
    </section>
  );
}