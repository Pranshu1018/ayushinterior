// TODO-REAL: address, phone, coordinates, rating and social links are placeholders. Replace before launch.
// Name, address and phone must match the Google Business Profile character for character.

export const site = {
  name: 'Ayush Interior',
  legal: 'Ayush Interior',
  url: 'https://ayushinteriors.in',
  city: 'Navi Mumbai',
  state: 'Maharashtra',
  regionCode: 'IN-MH',
  addressLines: ['Shop 4, Sector 17', 'Vashi, Navi Mumbai 400703'],
  street: 'Shop 4, Sector 17',
  locality: 'Vashi',
  postalCode: '400703',
  geo: { lat: 19.0771, lng: 72.9988 }, // TODO-REAL: copy the exact pin from your Google Business Profile
  phone: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  whatsapp: '919876543210',
  email: 'hello@ayushinteriors.in',
  hours: 'Mon–Sat, 9am–8pm',
  hoursSpec: { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '20:00' },
  founded: 2014,
  rating: 4.9,
  reviews: 212,
  googleUrl: 'https://g.page/r/your-profile-id',
  mapUrl: 'https://maps.google.com/?cid=your-cid',
  social: { Instagram: 'https://instagram.com/ayushinteriors', Facebook: 'https://facebook.com/ayushinteriors', YouTube: 'https://youtube.com/@ayushinteriors', Pinterest: 'https://pinterest.com/ayushinteriors' },
  localities: ['Vashi', 'Nerul', 'Seawoods', 'CBD Belapur', 'Kharghar', 'Sanpada', 'Airoli', 'Ghansoli', 'Kopar Khairane', 'Panvel', 'Ulwe', 'Kamothe', 'Kalamboli', 'Taloja', 'Juinagar', 'Dronagiri'],
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
