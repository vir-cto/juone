// // Single source of truth for the modules.
// // Used by: Services tabs, footer strip, hero counter.
// // Icon names: basket, food, bag, pill, parcel, store, scooter, headset, tag, gift, chart, users

// export const MODULES = [
//   { id: 'grocery', icon: 'basket', title: 'Grocery', short: 'Fresh daily essentials', text: 'Fresh produce, staples and daily essentials from trusted local grocers — ordered in a few taps and delivered to your door in about 30 minutes.', points: ['Fruits, vegetables & staples', 'Daily household essentials', 'Best prices on everyday items'] },
//   { id: 'food', icon: 'food', title: 'Food', short: 'Hot meals, delivered', text: 'Order from your favourite restaurants and food outlets and get freshly prepared meals delivered to your location, with live tracking all the way.', points: ['Restaurants near you', 'Live order tracking', 'Hot, fresh and on time'] },
//   { id: 'ecommerce', icon: 'bag', title: 'Ecommerce', short: 'Shop anything online', text: 'Buy goods online through one simple platform — browse a wide range of products, pay securely and have them delivered.', points: ['Wide range of products', 'Secure payments', 'Doorstep delivery'] },
//   { id: 'pharmacy', icon: 'pill', title: 'Pharmacy', short: 'Medicines & wellness', text: 'Order medicines and health products online and have them delivered to your home. Prescription medicines require a valid prescription.', points: ['Medicines & health products', 'Order anytime, from home', 'Delivered to your doorstep'] },
//   { id: 'parcel', icon: 'parcel', title: 'Parcel', short: 'Send & receive parcels', text: 'Send and receive parcels across your city with simple booking in the app, trusted delivery partners and live tracking.', points: ['Simple booking in the app', 'Trusted delivery partners', 'Track your parcel live'] },

//   // ── 6th module ── copy the line below, fill it in, delete the "//" and it appears everywhere:
//   // { id: 'sixth', icon: 'headset', title: 'MODULE NAME', short: 'One-line summary', text: 'Two lines describing this module.', points: ['Point one', 'Point two', 'Point three'] },
// ];








// Single source of truth for the JuOne modules.
// Used by: Services tabs, footer strip, hero phone + counter.
//
// Optional per module:  status: 'soon'  → shows a "Coming soon" badge (use it for modules not live yet)
// Icon names: basket, ride, bag, stay, homeservice, digital, food, pill, parcel, store, scooter, headset, tag, gift, chart, users

export const MODULES = [
  {
    id: 'jucart', icon: 'basket', title: 'JuCart', label: 'Cart',
    short: 'Food, groceries & pharmacy',
    text: 'Hot meals from nearby restaurants, fresh groceries and daily essentials, plus medicines and health products — all in one cart, delivered in about 30 minutes. Prescription medicines need a valid prescription.',
    points: ['Food from restaurants near you', 'Groceries & daily essentials', 'Pharmacy & health products'],
    cta: 'Order in the app',
  },
  {
    id: 'juride', icon: 'ride', title: 'JuRide', label: 'Ride',
    short: 'Book a ride in minutes',
    text: 'Book a ride in a few taps, track your ride partner live and reach your destination quickly and affordably.',
    points: ['Book in a few taps', 'Live trip tracking', 'Quick, affordable rides'],
    cta: 'Book a ride',
  },
  {
    id: 'jushopping', icon: 'bag', title: 'JuShopping', label: 'Shop',
    short: 'Shop online, delivered home',
    text: 'A full online marketplace — browse a wide range of products, pay securely and get your order delivered to your doorstep.',
    points: ['Wide range of products', 'Secure payments', 'Delivery to your doorstep'],
    cta: 'Start shopping',
  },
  {
    id: 'justay', icon: 'stay', title: 'JuStay', label: 'Stay',
    short: 'Hotels & comfortable stays',
    text: 'Find and book comfortable, budget-friendly stays for a night, a trip or a longer visit, with simple booking in the app.',
    points: ['Rooms & hotels near you', 'Simple online booking', 'Budget-friendly options'],
    cta: 'Book a stay',
  },
  {
    id: 'juhomeservices', icon: 'homeservice', title: 'JuHomeServices', label: 'Home',
    short: 'Trusted help at home',
    text: 'Book skilled professionals for everyday home needs — cleaning, repairs, appliance servicing and more — and have them come to your doorstep at a time you choose.',
    points: ['Skilled home professionals', 'Book a time that suits you', 'Service at your doorstep'],
    cta: 'Book a service',
  },
  {
    id: 'judigital', icon: 'digital', title: 'JuDigital', label: 'Digital',
    short: 'Everyday digital services',
    text: 'Handle everyday digital needs from the same app — recharges, bill payments and other online services — quickly and securely.',
    points: ['Recharges & bill payments', 'Quick and secure', 'All from one app'],
    cta: 'Explore digital services',
  },
];