// import { CONTACT, FORM_ENDPOINT } from '../config/site.js';

// export const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v).trim());
// export const isPhone = (v) => /^(\+91|91|0)?[6-9]\d{9}$/.test(String(v).replace(/[\s\-()]/g, ''));

// /**
//  * Sends form data.
//  * - If FORM_ENDPOINT is set → POSTs JSON to it.
//  * - Otherwise → opens the visitor's email app addressed to CONTACT.email.
//  */
// export async function submitForm(subject, fields) {
//   if (FORM_ENDPOINT) {
//     const res = await fetch(FORM_ENDPOINT, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
//       body: JSON.stringify({ _subject: subject, ...fields }),
//     });
//     if (!res.ok) throw new Error('Request failed');
//     return { mode: 'api' };
//   }
//   const body = Object.entries(fields).map(([k, v]) => `${k}: ${v}`).join('\n');
//   window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
//   return { mode: 'mailto' };
// }













import { CONTACT, FORM_ENDPOINT } from '../config/site.js';

export const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v).trim());
export const isPhone = (v) => /^(\+91|91|0)?[6-9]\d{9}$/.test(String(v).replace(/[\s\-()]/g, ''));
export const isPin = (v) => /^\d{6}$/.test(String(v).trim());

/**
 * submitForm({ kind, subject, values, labels })
 *  kind: 'vendor' | 'deliveryman' | 'contact' | 'newsletter'
 * With FORM_ENDPOINT set → saved to the Google Sheet. Otherwise → opens the visitor's email app.
 */
export async function submitForm({ kind, subject, values, labels = {} }) {
  if (FORM_ENDPOINT && !FORM_ENDPOINT.startsWith('PASTE')) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 25000);
    try {
      // No custom headers on purpose: a "simple request" avoids the CORS preflight that Apps Script can't answer.
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: JSON.stringify({ type: kind, subject, values, page: window.location.pathname }),
        signal: ctrl.signal,
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || 'Request failed');
      return { mode: 'api', id: data.id, duplicate: !!data.duplicate };
    } finally {
      clearTimeout(timer);
    }
  }
  const body = Object.entries(values).map(([k, v]) => `${labels[k] || k}: ${v}`).join('\n');
  window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return { mode: 'mailto' };
}