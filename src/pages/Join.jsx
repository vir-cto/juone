// import PageHero from '../components/PageHero.jsx';
// import Reveal from '../components/Reveal.jsx';
// import SmartForm from '../components/SmartForm.jsx';
// import StoreButtons from '../components/StoreButtons.jsx';
// import { AnimatedIcon, IconCheck } from '../components/Icons.jsx';
// import usePageTitle from '../hooks/usePageTitle.js';

// const KINDS = {
//   vendor: {
//     title: 'Vendor registration',
//     sub: 'List your store on JuOne and reach more customers.',
//     icon: 'store', app: 'vendor', kick: 'Seller app', head: 'Become a best Seller',
//     points: ['Manage multiple stores in one place', 'Real-time order alerts', 'Reach more local customers'],
//     subject: 'JuOne vendor registration', submit: 'Register as vendor',
//     successTitle: 'Registration received!', successText: 'Thanks for your interest. Our team will contact you shortly to complete your onboarding.',
//     fields: [
//       { name: 'owner', label: 'Owner / contact name', required: true, placeholder: 'Full name' },
//       { name: 'store', label: 'Store name', required: true, placeholder: 'Your store or restaurant name' },
//       { name: 'phone', label: 'Phone number', type: 'tel', required: true, placeholder: '10-digit mobile number' },
//       { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'you@example.com' },
//       { name: 'type', label: 'Store type', type: 'select', required: true, options: ['Grocery / Supermarket', 'Restaurant / Food', 'Pharmacy', 'E-commerce / Retail', 'Other'] },
//       { name: 'city', label: 'City', required: true, placeholder: 'e.g. Tirupati' },
//       { name: 'address', label: 'Store address', type: 'textarea', required: true, full: true, placeholder: 'Full store address' },
//     ],
//   },
//   deliveryman: {
//     title: 'Deliveryman registration',
//     sub: 'Deliver with JuOne on your own schedule and earn on every order.',
//     icon: 'scooter', app: 'captain', kick: 'Deliveryman app', head: 'Become a smart Deliveryman',
//     points: ['Flexible working hours', 'Orders assigned near you', 'Earn on every delivery'],
//     subject: 'JuOne deliveryman registration', submit: 'Register as deliveryman',
//     successTitle: 'Registration received!', successText: 'Thanks for applying. Our team will contact you shortly with the next steps.',
//     fields: [
//       { name: 'name', label: 'Full name', required: true, placeholder: 'Your full name' },
//       { name: 'phone', label: 'Phone number', type: 'tel', required: true, placeholder: '10-digit mobile number' },
//       { name: 'email', label: 'Email (optional)', type: 'email', placeholder: 'you@example.com' },
//       { name: 'city', label: 'City', required: true, placeholder: 'e.g. Tirupati' },
//       { name: 'vehicle', label: 'Vehicle', type: 'select', required: true, options: ['Motorcycle / Scooter', 'Bicycle', 'Electric vehicle', 'Other'] },
//       { name: 'licence', label: 'Driving licence', type: 'select', required: true, options: ['Yes', 'No', 'Applied for'] },
//       { name: 'address', label: 'Address (optional)', type: 'textarea', full: true, placeholder: 'Where do you live?' },
//     ],
//   },
// };

// export default function Join({ kind }) {
//   const k = KINDS[kind];
//   usePageTitle(k.title);
//   return (
//     <>
//       <PageHero title={k.title} sub={k.sub} />
//       <section className="section">
//         <div className="container join">
//           <Reveal className="join-side card">
//             <div className="app-ic"><AnimatedIcon name={k.icon} size={56} /></div>
//             <span className="kick">{k.kick}</span>
//             <h2 className="card-h">{k.head}</h2>
//             <ul className="ticks">{k.points.map((p) => <li key={p}><IconCheck />{p}</li>)}</ul>
//             <p className="join-n">Already registered? Download the app:</p>
//             <StoreButtons app={k.app} />
//           </Reveal>
//           <Reveal className="card" delay={100}>
//             <h2 className="card-h">Tell us about you</h2>
//             <SmartForm key={kind} subject={k.subject} fields={k.fields} submitLabel={k.submit} successTitle={k.successTitle} successText={k.successText} />
//           </Reveal>
//         </div>
//       </section>
//     </>
//   );
// }













import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import SmartForm from '../components/SmartForm.jsx';
import StoreButtons from '../components/StoreButtons.jsx';
import { AnimatedIcon, IconCheck } from '../components/Icons.jsx';
import usePageTitle from '../hooks/usePageTitle.js';

const CONSENT = {
  name: 'consent', type: 'checkbox', required: true, full: true,
  label: 'I agree to the Privacy policy',
  node: (
    <>I agree to the <Link to="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy policy</Link> and allow JuOne to contact me by phone, SMS, WhatsApp or email about my registration.</>
  ),
};

const KINDS = {
  vendor: {
    title: 'Vendor registration',
    sub: 'List your store on JuOne and reach more customers.',
    icon: 'store', app: 'vendor', kick: 'Seller app', head: 'Become a best Seller',
    points: ['Manage multiple stores in one place', 'Real-time order alerts', 'Reach more local customers'],
    subject: 'JuOne vendor registration', submit: 'Register as vendor',
    successTitle: 'Registration received!',
    successText: 'Thanks for your interest. Our team will contact you shortly to complete your onboarding.',
    fields: [
      { name: 'owner', label: 'Owner / contact name', required: true, placeholder: 'Full name' },
      { name: 'store', label: 'Store name', required: true, placeholder: 'Your store or restaurant name' },
      { name: 'phone', label: 'Phone number', type: 'tel', required: true, placeholder: '10-digit mobile number' },
      { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'you@example.com' },
      { name: 'type', label: 'Store type', type: 'select', required: true, options: ['Grocery / Supermarket', 'Restaurant / Food', 'Pharmacy', 'E-commerce / Retail', 'Other'] },
      { name: 'city', label: 'City / town', required: true, placeholder: 'e.g. Tirupati' },
      { name: 'pincode', label: 'Pin code', type: 'pin', required: true, placeholder: '6-digit pin code' },
      { name: 'gstin', label: 'GST number (optional)', placeholder: 'If you have one', max: 15 },
      { name: 'fssai', label: 'FSSAI licence no. (optional)', placeholder: 'For food businesses', full: true, max: 14 },
      { name: 'address', label: 'Store address', type: 'textarea', required: true, full: true, placeholder: 'Full store address' },
      CONSENT,
    ],
  },
  deliveryman: {
    title: 'Deliveryman registration',
    sub: 'Deliver with JuOne on your own schedule and earn on every order.',
    icon: 'scooter', app: 'captain', kick: 'Deliveryman app', head: 'Become a smart Deliveryman',
    points: ['Flexible working hours', 'Orders assigned near you', 'Earn on every delivery'],
    subject: 'JuOne deliveryman registration', submit: 'Register as deliveryman',
    successTitle: 'Registration received!',
    successText: 'Thanks for applying. Our team will contact you shortly with the next steps.',
    fields: [
      { name: 'name', label: 'Full name', required: true, placeholder: 'Your full name' },
      { name: 'phone', label: 'Phone number', type: 'tel', required: true, placeholder: '10-digit mobile number' },
      { name: 'email', label: 'Email (optional)', type: 'email', placeholder: 'you@example.com' },
      { name: 'city', label: 'City / town / village', required: true, placeholder: 'e.g. Tirupati' },
      { name: 'pincode', label: 'Pin code', type: 'pin', required: true, placeholder: '6-digit pin code' },
      { name: 'vehicle', label: 'Vehicle', type: 'select', required: true, options: ['Motorcycle / Scooter', 'Bicycle', 'Electric vehicle', 'Other'] },
      { name: 'licence', label: 'Driving licence', type: 'select', required: true, options: ['Yes', 'No', 'Applied for'] },
      { name: 'availability', label: 'Availability', type: 'select', required: true, options: ['Full-time', 'Part-time', 'Weekends only'] },
      { name: 'address', label: 'Address (optional)', type: 'textarea', full: true, placeholder: 'Where do you live?' },
      { name: 'age18', type: 'checkbox', required: true, full: true, label: 'I am 18 years of age or older' },
      CONSENT,
    ],
  },
};

export default function Join({ kind }) {
  const k = KINDS[kind];
  usePageTitle(k.title);
  return (
    <>
      <PageHero title={k.title} sub={k.sub} />
      <section className="section">
        <div className="container join">
          <Reveal className="join-side card">
            <div className="app-ic"><AnimatedIcon name={k.icon} size={56} /></div>
            <span className="kick">{k.kick}</span>
            <h2 className="card-h">{k.head}</h2>
            <ul className="ticks">{k.points.map((p) => <li key={p}><IconCheck />{p}</li>)}</ul>
            <p className="join-n">Already registered? Download the app:</p>
            <StoreButtons app={k.app} />
          </Reveal>
          <Reveal className="card" delay={100}>
            <h2 className="card-h">Tell us about you</h2>
            <SmartForm key={kind} kind={kind} subject={k.subject} fields={k.fields} submitLabel={k.submit} successTitle={k.successTitle} successText={k.successText} />
          </Reveal>
        </div>
      </section>
    </>
  );
}