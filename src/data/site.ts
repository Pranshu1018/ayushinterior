// Business details. Name, address and phone must match the Google Business Profile and Justdial
// character for character (NAP consistency is a core local ranking signal).

export const site = {
  name: 'Ayush Interiors',
  legal: 'Ayush Interiors', // TODO-REAL: if the registered firm is "Aayush Enterprises", put that here (shown only in schema/legal text)
  url: 'https://ayushinteriors.in',
  city: 'Navi Mumbai',
  state: 'Maharashtra',
  regionCode: 'IN-MH',
  addressLines: ['Room No. 247, Sector 1', 'Kopar Khairane, Navi Mumbai 400709'],
  street: 'Room No. 247, Sector 1',
  locality: 'Kopar Khairane',
  postalCode: '400709',
  geo: { lat: 19.1036, lng: 73.0103 }, // TODO-REAL: copy the exact pin from Google Maps (right-click your listing's pin)
  phone: '+91 91374 47669',
  phoneHref: 'tel:+919137447669',
  whatsapp: '919137447669',
  email: 'hello@ayushinteriors.in', // TODO-REAL: confirm this mailbox exists, or replace with the email on your Google profile
  hours: 'Mon–Sat, 9am–8pm',
  hoursSpec: { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '20:00' },
  founded: 2014, // TODO-REAL: confirm the year you started; it is shown on the site and repeated by AI tools
  // Ratings are shown only when real (reviews > 0). Update as your Google reviews grow.
  rating: 0,
  reviews: 0,
  googleUrl: 'https://share.google/UQRyoMcvsTHnwAmyI', // TODO-REAL: replace with the maps.app.goo.gl "Share" link from Google Maps
  googleReviewUrl: 'https://share.google/UQRyoMcvsTHnwAmyI', // TODO-REAL: use the "Ask for reviews" link from Google Business Profile
  mapUrl: 'https://share.google/UQRyoMcvsTHnwAmyI',
  justdialReviewUrl: 'https://jsdl.in/RSL-ZOO1793449148',
  social: { Instagram: 'https://www.instagram.com/ayushinteriors.co/', Justdial: 'https://jsdl.in/RSL-ZOO1793449148' }, // TODO-REAL: add Facebook, YouTube, Houzz, IndiaMART as you create them
  localities: ['Kopar Khairane', 'Ghansoli', 'Vashi', 'Sanpada', 'Turbhe', 'Mahape', 'Airoli', 'Rabale', 'Nerul', 'Seawoods', 'Juinagar', 'CBD Belapur', 'Kharghar', 'Kamothe', 'Kalamboli', 'Panvel', 'Ulwe', 'Taloja', 'Dronagiri'],
} as const;

export const wa = (text: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
export const img = (id: string, w = 1200, h?: number, q = 72) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ''}&q=${q}`;
export const srcset = (id: string, widths: number[], ratio?: number) =>
  widths.map((w) => `${img(id, w, ratio ? Math.round(w * ratio) : undefined)} ${w}w`).join(', ');

// Root-relative so the menu works from inner pages too.
export const nav = [
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Transformation', href: '/#transformation' },
  { label: 'Areas we serve', href: '/interior-designers' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Get a Quote', href: '/#quote' },
];
