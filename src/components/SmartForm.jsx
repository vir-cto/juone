// import { useId, useState } from 'react';
// import { submitForm, isEmail, isPhone } from '../lib/submitForm.js';
// import { CONTACT } from '../config/site.js';
// import { IconCheck } from './Icons.jsx';
// import { IconSend } from './IconsExtra.jsx';

// export default function SmartForm({
//   subject,
//   fields,
//   submitLabel = 'Send message',
//   successTitle = 'Thank you!',
//   successText = 'We have received your details and will get back to you shortly.',
// }) {
//   const uid = useId();
//   const blank = () => Object.fromEntries(fields.map((f) => [f.name, '']));
//   const [v, setV] = useState(blank);
//   const [err, setErr] = useState({});
//   const [state, setState] = useState('idle'); // idle | sending | done | fail
//   const [mode, setMode] = useState('api');
//   const [trap, setTrap] = useState('');

//   const validate = () => {
//     const e = {};
//     fields.forEach((f) => {
//       const val = v[f.name].trim();
//       if (f.required && !val) e[f.name] = `${f.label} is required`;
//       else if (val && f.type === 'email' && !isEmail(val)) e[f.name] = 'Enter a valid email address';
//       else if (val && f.type === 'tel' && !isPhone(val)) e[f.name] = 'Enter a valid 10-digit mobile number';
//     });
//     return e;
//   };

//   const onChange = (ev) => {
//     const { name, value } = ev.target;
//     setV((p) => ({ ...p, [name]: value }));
//     if (err[name]) setErr((p) => ({ ...p, [name]: undefined }));
//   };

//   const onSubmit = async (ev) => {
//     ev.preventDefault();
//     if (trap) return; // bots fill the hidden field
//     const form = ev.currentTarget;
//     const e = validate();
//     setErr(e);
//     const first = Object.keys(e)[0];
//     if (first) { form.elements.namedItem(first)?.focus(); return; }
//     setState('sending');
//     try {
//       const out = {};
//       fields.forEach((f) => { out[f.label] = v[f.name].trim(); });
//       const r = await submitForm(subject, out);
//       setMode(r.mode);
//       setV(blank());
//       setState('done');
//     } catch {
//       setState('fail');
//     }
//   };

//   if (state === 'done') {
//     return (
//       <div className="fm-done" role="status">
//         <span className="fm-ok"><IconCheck size={34} /></span>
//         <h3>{successTitle}</h3>
//         <p>{mode === 'mailto' ? `Your email app has opened with your details ready — just press send. If nothing opened, email us at ${CONTACT.email}.` : successText}</p>
//         <button type="button" className="btn btn-o" onClick={() => setState('idle')}>Submit another</button>
//       </div>
//     );
//   }

//   return (
//     <form className="fm" onSubmit={onSubmit} noValidate>
//       <div className="fm-g">
//         {fields.map((f) => {
//           const id = `${uid}-${f.name}`;
//           const common = {
//             id, name: f.name, value: v[f.name], onChange,
//             'aria-invalid': !!err[f.name],
//             'aria-describedby': err[f.name] ? `${id}-e` : undefined,
//           };
//           return (
//             <div key={f.name} className={`fld${f.full ? ' full' : ''}${err[f.name] ? ' bad' : ''}`}>
//               <label htmlFor={id}>{f.label}{f.required && <i>*</i>}</label>
//               {f.type === 'textarea' ? (
//                 <textarea {...common} rows={5} placeholder={f.placeholder} />
//               ) : f.type === 'select' ? (
//                 <select {...common}>
//                   <option value="">Select…</option>
//                   {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
//                 </select>
//               ) : (
//                 <input {...common} type={f.type || 'text'} inputMode={f.type === 'tel' ? 'tel' : undefined} placeholder={f.placeholder} />
//               )}
//               {err[f.name] && <small id={`${id}-e`} className="fld-e" role="alert">{err[f.name]}</small>}
//             </div>
//           );
//         })}
//       </div>
//       <input className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" name="company_site" value={trap} onChange={(e) => setTrap(e.target.value)} />
//       {state === 'fail' && <p className="fm-err" role="alert">Something went wrong. Please try again, or email us at {CONTACT.email}.</p>}
//       <button type="submit" className="btn btn-p btn-lg" disabled={state === 'sending'}>
//         {state === 'sending' ? 'Sending…' : <>{submitLabel}<IconSend size={18} /></>}
//       </button>
//     </form>
//   );
// }














import { useId, useState } from 'react';
import { submitForm, isEmail, isPhone, isPin } from '../lib/submitForm.js';
import { CONTACT } from '../config/site.js';
import { IconCheck } from './Icons.jsx';
import { IconSend } from './IconsExtra.jsx';

export default function SmartForm({
  kind,
  subject,
  fields,
  submitLabel = 'Send message',
  successTitle = 'Thank you!',
  successText = 'We have received your details and will get back to you shortly.',
}) {
  const uid = useId();
  const blank = () => Object.fromEntries(fields.map((f) => [f.name, f.type === 'checkbox' ? false : '']));
  const [v, setV] = useState(blank);
  const [err, setErr] = useState({});
  const [state, setState] = useState('idle'); // idle | sending | done | fail
  const [res, setRes] = useState(null);
  const [trap, setTrap] = useState('');

  const validate = () => {
    const e = {};
    fields.forEach((f) => {
      const val = v[f.name];
      if (f.type === 'checkbox') {
        if (f.required && !val) e[f.name] = 'Please tick this box to continue';
        return;
      }
      const s = val.trim();
      if (f.required && !s) e[f.name] = `${f.label} is required`;
      else if (s && f.type === 'email' && !isEmail(s)) e[f.name] = 'Enter a valid email address';
      else if (s && f.type === 'tel' && !isPhone(s)) e[f.name] = 'Enter a valid 10-digit mobile number';
      else if (s && f.type === 'pin' && !isPin(s)) e[f.name] = 'Enter a valid 6-digit pin code';
    });
    return e;
  };

  const onChange = (ev) => {
    const { name, value, type, checked } = ev.target;
    setV((p) => ({ ...p, [name]: type === 'checkbox' ? checked : value }));
    if (err[name]) setErr((p) => ({ ...p, [name]: undefined }));
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (trap) return; // bots fill the hidden field
    const form = ev.currentTarget;
    const e = validate();
    setErr(e);
    const first = Object.keys(e)[0];
    if (first) { form.elements.namedItem(first)?.focus(); return; }

    setState('sending');
    try {
      const values = {};
      const labels = {};
      fields.forEach((f) => {
        values[f.name] = f.type === 'checkbox' ? (v[f.name] ? 'Yes' : 'No') : v[f.name].trim();
        labels[f.name] = f.label;
      });
      const r = await submitForm({ kind, subject, values, labels });
      setRes(r);
      setV(blank());
      setState('done');
    } catch {
      setState('fail');
    }
  };

  if (state === 'done') {
    return (
      <div className="fm-done" role="status">
        <span className="fm-ok"><IconCheck size={34} /></span>
        <h3>{res?.duplicate ? 'You’re already on our list' : successTitle}</h3>
        {res?.id && res.mode === 'api' && !res.id.startsWith('NWS') && <p className="fm-id">Reference ID <b>{res.id}</b></p>}
        <p>
          {res?.mode === 'mailto'
            ? `Your email app has opened with your details ready — just press send. If nothing opened, email us at ${CONTACT.email}.`
            : res?.duplicate
              ? 'We already have your details and our team will contact you. There is no need to apply again.'
              : successText}
        </p>
        <button type="button" className="btn btn-o" onClick={() => setState('idle')}>Submit another</button>
      </div>
    );
  }

  return (
    <form className="fm" onSubmit={onSubmit} noValidate>
      <div className="fm-g">
        {fields.map((f) => {
          const id = `${uid}-${f.name}`;

          if (f.type === 'checkbox') {
            return (
              <div key={f.name} className={`fld full chk${err[f.name] ? ' bad' : ''}`}>
                <label htmlFor={id}>
                  <input id={id} type="checkbox" name={f.name} checked={v[f.name]} onChange={onChange} aria-invalid={!!err[f.name]} />
                  <span>{f.node || f.label}{f.required && <i> *</i>}</span>
                </label>
                {err[f.name] && <small className="fld-e" role="alert">{err[f.name]}</small>}
              </div>
            );
          }

          const common = {
            id, name: f.name, value: v[f.name], onChange,
            'aria-invalid': !!err[f.name],
            'aria-describedby': err[f.name] ? `${id}-e` : undefined,
          };
          return (
            <div key={f.name} className={`fld${f.full ? ' full' : ''}${err[f.name] ? ' bad' : ''}`}>
              <label htmlFor={id}>{f.label}{f.required && <i>*</i>}</label>
              {f.type === 'textarea' ? (
                <textarea {...common} rows={5} maxLength={1500} placeholder={f.placeholder} />
              ) : f.type === 'select' ? (
                <select {...common}>
                  <option value="">Select…</option>
                  {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              ) : f.type === 'pin' ? (
                <input {...common} type="text" inputMode="numeric" maxLength={6} autoComplete="postal-code" placeholder={f.placeholder} />
              ) : (
                <input {...common} type={f.type || 'text'} inputMode={f.type === 'tel' ? 'tel' : undefined} maxLength={f.max || 200} placeholder={f.placeholder} />
              )}
              {err[f.name] && <small id={`${id}-e`} className="fld-e" role="alert">{err[f.name]}</small>}
            </div>
          );
        })}
      </div>

      <input className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" name="company_site" value={trap} onChange={(e) => setTrap(e.target.value)} />
      {state === 'fail' && <p className="fm-err" role="alert">Something went wrong. Please try again, or email us at {CONTACT.email}.</p>}
      <button type="submit" className="btn btn-p btn-lg" disabled={state === 'sending'}>
        {state === 'sending' ? 'Sending…' : <>{submitLabel}<IconSend size={18} /></>}
      </button>
    </form>
  );
}