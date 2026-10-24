// import { useState } from 'react';
// import { submitForm, isEmail } from '../lib/submitForm.js';
// import { IconSend } from './IconsExtra.jsx';

// export default function Newsletter() {
//   const [email, setEmail] = useState('');
//   const [st, setSt] = useState('idle'); // idle | sending | done | error
//   const [msg, setMsg] = useState('');

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     if (!isEmail(email)) { setSt('error'); setMsg('Please enter a valid email address.'); return; }
//     setSt('sending');
//     try {
//       const r = await submitForm('JuOne newsletter signup', { Email: email.trim() });
//       setSt('done');
//       setMsg(r.mode === 'mailto' ? 'Your email app opened — press send to confirm your subscription.' : 'Thank you for subscribing!');
//       setEmail('');
//     } catch {
//       setSt('error');
//       setMsg('Something went wrong. Please try again.');
//     }
//   };

//   return (
//     <section className="news" aria-labelledby="news-h">
//       <div className="container news-in">
//         <div>
//           <h3 id="news-h">Sign up to our newsletter</h3>
//           <p>Receive the latest news, updates and more every week.</p>
//         </div>
//         <div>
//           <form onSubmit={onSubmit} noValidate>
//             <input type="email" placeholder="Enter your email address" aria-label="Email address" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
//             <button type="submit" className="btn btn-p" disabled={st === 'sending'}>{st === 'sending' ? 'Sending…' : <>Subscribe <IconSend size={17} /></>}</button>
//           </form>
//           <p className={`news-m ${st}`} role="status">{msg}</p>
//         </div>
//       </div>
//     </section>
//   );
// }













import { useState } from 'react';
import { submitForm, isEmail } from '../lib/submitForm.js';
import { IconSend } from './IconsExtra.jsx';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [st, setSt] = useState('idle'); // idle | sending | done | error
  const [msg, setMsg] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isEmail(email)) { setSt('error'); setMsg('Please enter a valid email address.'); return; }
    setSt('sending');
    try {
      const r = await submitForm({
        kind: 'newsletter',
        subject: 'JuOne newsletter signup',
        values: { email: email.trim() },
        labels: { email: 'Email' },
      });
      setSt('done');
      setMsg(
        r.mode === 'mailto'
          ? 'Your email app opened — press send to confirm your subscription.'
          : r.duplicate ? 'You’re already subscribed — thank you!' : 'Thank you for subscribing!'
      );
      setEmail('');
    } catch {
      setSt('error');
      setMsg('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="news" aria-labelledby="news-h">
      <div className="container news-in">
        <div>
          <h3 id="news-h">Sign up to our newsletter</h3>
          <p>Receive the latest news, updates and more every week.</p>
        </div>
        <div>
          <form onSubmit={onSubmit} noValidate>
            <input type="email" placeholder="Enter your email address" aria-label="Email address" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
            <button type="submit" className="btn btn-p" disabled={st === 'sending'}>{st === 'sending' ? 'Sending…' : <>Subscribe <IconSend size={17} /></>}</button>
          </form>
          <p className={`news-m ${st}`} role="status">{msg}</p>
        </div>
      </div>
    </section>
  );
}