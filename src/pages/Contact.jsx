import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import SmartForm from '../components/SmartForm.jsx';
import { IconPhone, IconMail, IconPin } from '../components/Icons.jsx';
import { IconClock } from '../components/IconsExtra.jsx';
import usePageTitle from '../hooks/usePageTitle.js';
import { CONTACT } from '../config/site.js';

const MAP = `https://www.google.com/maps/search/?api=1&query=${CONTACT.map}`;
const EMBED = `https://www.google.com/maps?q=${CONTACT.map}&z=15&output=embed`;

const FIELDS = [
  { name: 'name', label: 'Your name', required: true, placeholder: 'Full name' },
  { name: 'phone', label: 'Phone number', type: 'tel', required: true, placeholder: '10-digit mobile number' },
  { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'you@example.com', full: true },
  { name: 'subject', label: 'Subject', placeholder: 'How can we help?', full: true },
  { name: 'message', label: 'Message', type: 'textarea', required: true, placeholder: 'Write your message…', full: true },
];

export default function Contact() {
  usePageTitle('Contact us');
  return (
    <>
      <PageHero title="Contact us" sub="Any question or remarks? Just write us a message!" />
      <section className="section">
        <div className="container ct">
          <div>
            <div className="ct-cards">
              <Reveal className="ctc"><span className="ci"><IconPhone /></span><div><h4>Call us</h4><a href={`tel:${CONTACT.phone}`}>{CONTACT.phoneText}</a></div></Reveal>
              <Reveal className="ctc" delay={80}><span className="ci"><IconMail /></span><div><h4>Email</h4><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></div></Reveal>
              <Reveal className="ctc" delay={160}><span className="ci"><IconPin /></span><div><h4>Address</h4><a href={MAP} target="_blank" rel="noopener noreferrer">{CONTACT.address}</a></div></Reveal>
              <Reveal className="ctc" delay={240}><span className="ci"><IconClock /></span><div><h4>Time</h4><p>{CONTACT.hours}</p></div></Reveal>
            </div>
            <div className="map">
              <iframe title="JuOne location on Google Maps" src={EMBED} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            </div>
          </div>
          <Reveal className="card">
            <h2 className="card-h">Send us a message</h2>
            <SmartForm kind="contact" subject="JuOne website enquiry" fields={FIELDS} submitLabel="Send message" successTitle="Message sent!" successText="Thanks for reaching out. Our team will get back to you shortly." />          </Reveal>
        </div>
      </section>
    </>
  );
}