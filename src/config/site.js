const APPLE = 'https://www.apple.com/app-store/'; // kept as-is; replace per app once iOS apps are live

export const LINKS = {
  play: {
    user: 'https://play.google.com/store/apps/details?id=com.juone.juuserapp',
    vendor: 'https://play.google.com/store/apps/details?id=com.juone.juvendor',
    captain: 'https://play.google.com/store/apps/details?id=com.juone.captain',
    erp: 'https://play.google.com/store/apps/details?id=com.juone.erp',
  },
  apple: { user: APPLE, vendor: APPLE, captain: APPLE, erp: APPLE },
  instagram: 'https://www.instagram.com/juone.in',
  facebook: 'https://www.facebook.com/juone.in',
};

export const CONTACT = {
  phone: '+919701289900',
  phoneText: '+91 97012 89900',
  email: 'support@juone.in',
  address: '13-6-759, Sandhya Theatre Road, Tata Nagar, Tirupati, Andhra Pradesh 517501',
  hours: 'Monday – Sunday, 12:00 AM – 11:59 PM',
  map: '13.627173717474637,79.43179454392991',
};

export const CITIES = ['Tirupati', 'Eluru', 'Ganapavaram', 'Tanuku', 'Kakinada', 'Tadepalligudem', 'Nellore', 'Madanapalle', 'Vizag', 'Karimnagar'];

export const LAST_UPDATED = '24 October 2026';

// Google Apps Script web-app URL (ends in /exec). All forms save to the Google Sheet through it.
// The URL stays the same when you redeploy a new version of the script.
// If this is empty, forms fall back to opening the visitor's email app, addressed to CONTACT.email.
export const FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbw4kXj8fc1NqrALY2Ng81RYlrD3PZ2rkcCiWZjulXlNBfIr8Ii0nGdVx5U-3As53LB4CQ/exec';

// ⚠ PLACEHOLDER numbers: replace with your real figures before launch.
export const STATS = [
  { icon: 'phone', label: 'Downloads', value: 10000 },
  { icon: 'store', label: 'Sellers', value: 500 },
  { icon: 'scooter', label: 'Deliverymen', value: 300 },
  { icon: 'users', label: 'Customers', value: 8000 },
];

export const DEVELOPER = {
  label: 'Designed & developed by',
  name: 'Vir Tecnologies',
  url: 'https://virtechnologies.in/',
};

// ⚠ DRAFTS: replace with real quotes (with the person's permission) before launch.
// Keep the village line only if you really deliver there.
export const TESTIMONIALS = [
  { quote: 'Guests came home suddenly in the evening and the shops near us were closing. I ordered vegetables and milk in the app and it reached in about half an hour. Now I keep JuOne for such moments.', name: 'Lakshmi K.', role: 'Homemaker', place: 'Tirupati', tag: 'City family' },
  { quote: 'After school I am tired and the traffic is bad. I order the month’s rice, dal and oil in the app and it comes home while I rest. The delivery boy was polite and checked the bag with me.', name: 'Ramesh B.', role: 'School teacher', place: 'Tanuku', tag: 'Working family' },
  { quote: 'Our village is far from town. When my mother needed medicines, I used to ride a long way for them. Now I order from my phone and it is brought to our village. It is a big relief for our family.', name: 'Venkata Ramana', role: 'Farmer', place: 'A village near Eluru', tag: 'Village family' },
  { quote: 'I run a small kirana shop. After joining as a seller, I started getting orders on my phone, even from streets that never came to my shop. My son helps me with the app, and I am happy.', name: 'Savitri M.', role: 'Kirana store owner', place: 'Ganapavaram', tag: 'Local seller' },
];