import { IconGooglePlay, IconApple } from './Icons.jsx';
import { LINKS } from '../config/site.js';

// app: 'user' | 'vendor' | 'captain' | 'erp'
export default function StoreButtons({ app = 'user' }) {
  return (
    <div className="stores">
      <a className="store" href={LINKS.play[app]} target="_blank" rel="noopener noreferrer" aria-label="Get it on Google Play">
        <IconGooglePlay size={26} /><span><small>Get it on</small><b>Google Play</b></span>
      </a>
      <a className="store" href={LINKS.apple[app]} target="_blank" rel="noopener noreferrer" aria-label="Download on the App Store">
        <IconApple size={26} /><span><small>Download on the</small><b>App Store</b></span>
      </a>
    </div>
  );
}