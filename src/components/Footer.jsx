// import { Link } from 'react-router-dom';
// import Logo from './Logo.jsx';
// import StoreButtons from './StoreButtons.jsx';
// import { IconInstagram, IconFacebook, IconPin, IconMail, IconPhone } from './Icons.jsx';
// import { LINKS, CONTACT } from '../config/site.js';

// const MAP = `https://www.google.com/maps/search/?api=1&query=${CONTACT.map}`;

// export default function Footer() {
//   return (
//     <footer className="ft">
//       <div className="container ft-g">
//         <div>
//           <Logo large />
//           <p>Welcome to JuOne, your one-stop destination for seamless online shopping. We offer a wide range of high-quality products, secure payments, and fast delivery to enhance your everyday life.</p>
//           <div className="soc">
//             <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="JuOne on Instagram"><IconInstagram /></a>
//             <a href={LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="JuOne on Facebook"><IconFacebook /></a>
//           </div>
//           <StoreButtons app="user" />
//         </div>
//         <div>
//           <h5>Company</h5>
//           <ul>
//             <li><Link to="/about-us">About us</Link></li>
//             <li><Link to="/contact-us">Contact us</Link></li>
//             <li><Link to="/vendor/apply">Vendor registration</Link></li>
//             <li><Link to="/deliveryman/apply">Deliveryman registration</Link></li>
//           </ul>
//         </div>
//         <div>
//           <h5>Support</h5>
//           <ul>
//             <li><Link to="/privacy-policy">Privacy policy</Link></li>
//             <li><Link to="/terms-and-conditions">Terms and condition</Link></li>
//             <li><Link to="/refund">Refund Policy</Link></li>
//           </ul>
//         </div>
//         <div>
//           <h5>Contact Us</h5>
//           <ul className="ft-c">
//             <li><IconPin /><a href={MAP} target="_blank" rel="noopener noreferrer">{CONTACT.address}</a></li>
//             <li><IconMail /><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
//             <li><IconPhone /><a href={`tel:${CONTACT.phone}`}>{CONTACT.phoneText}</a></li>
//           </ul>
//         </div>
//       </div>
//       <div className="container ft-b">
//         <span>© {new Date().getFullYear()} JuOne. All rights reserved.</span>
//         <span>One App for Shopping, Orders &amp; Savings.</span>
//       </div>
//     </footer>
//   );
// }











import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import StoreButtons from './StoreButtons.jsx';
import { AnimatedIcon, IconInstagram, IconFacebook, IconPin, IconMail, IconPhone } from './Icons.jsx';
import { LINKS, CONTACT, DEVELOPER } from '../config/site.js';
import { MODULES } from '../data/modules.js';

const MAP = `https://www.google.com/maps/search/?api=1&query=${CONTACT.map}`;

export default function Footer() {
  const dev = DEVELOPER.url
    ? <a href={DEVELOPER.url} target="_blank" rel="noopener noreferrer">{DEVELOPER.name}</a>
    : <b>{DEVELOPER.name}</b>;

  return (
    <footer className="ft">
      <div className="container ft-g">
        <div>
          <Logo large />
          <p>Welcome to JuOne, your one-stop destination for seamless online shopping. We offer a wide range of high-quality products, secure payments, and fast delivery to enhance your everyday life.</p>
          <div className="soc">
            <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="JuOne on Instagram"><IconInstagram /></a>
            <a href={LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="JuOne on Facebook"><IconFacebook /></a>
          </div>
          <StoreButtons app="user" />
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            <li><Link to="/about-us">About us</Link></li>
            <li><Link to="/contact-us">Contact us</Link></li>
            <li><Link to="/vendor/apply">Vendor registration</Link></li>
            <li><Link to="/deliveryman/apply">Deliveryman registration</Link></li>
          </ul>
        </div>
        <div>
          <h5>Support</h5>
          <ul>
            <li><Link to="/privacy-policy">Privacy policy</Link></li>
            <li><Link to="/terms-and-conditions">Terms and conditions</Link></li>
            <li><Link to="/refund">Refund Policy</Link></li>
          </ul>
        </div>
        <div>
          <h5>Contact Us</h5>
          <ul className="ft-c">
            <li><IconPin /><a href={MAP} target="_blank" rel="noopener noreferrer">{CONTACT.address}</a></li>
            <li><IconMail /><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
            <li><IconPhone /><a href={`tel:${CONTACT.phone}`}>{CONTACT.phoneText}</a></li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="ft-mod">
          <h5>One super app · {MODULES.length} modules</h5>
          <ul className="ft-mod-l">
            {MODULES.map((m) => (
              <li key={m.id}>
                <Link to="/#services" className="ft-chip">
                  <i><AnimatedIcon name={m.icon} size={24} /></i>{m.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container ft-b">
        <span>© {new Date().getFullYear()} JuOne. All rights reserved.</span>
        <span className="dev">{DEVELOPER.label} {dev}</span>
      </div>
    </footer>
  );
}