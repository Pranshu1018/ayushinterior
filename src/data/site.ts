// TODO-REAL: every number, address and phone here is a placeholder. Replace before launch and keep
// name / address / phone identical to the Google Business Profile.

export const site = {
  name: 'Ayush Interior',
  legal: 'Ayush Interior',
  url: 'https://www.ayushinterior.com',
  city: 'Pune',
  state: 'Maharashtra',
  addressLines: ['Shop 4, Sunrise Arcade', 'Baner Road, Pune 411045'],
  street: 'Shop 4, Sunrise Arcade, Baner Road',
  postalCode: '411045',
  phone: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  whatsapp: '919876543210',
  email: 'hello@ayushinterior.com',
  hours: 'Mon–Sat, 9am–8pm',
  founded: 2014,
  rating: 4.9,
  reviews: 212,
  googleUrl: 'https://g.page/r/your-profile-id',
  social: { Instagram: 'https://instagram.com/', Facebook: 'https://facebook.com/', YouTube: 'https://youtube.com/', Pinterest: 'https://pinterest.com/' },
  localities: ['Baner', 'Aundh', 'Wakad', 'Hinjewadi', 'Balewadi', 'Kothrud', 'Pashan', 'Bavdhan', 'Viman Nagar', 'Kharadi', 'Koregaon Park', 'Kalyani Nagar', 'Magarpatta', 'Hadapsar', 'Pimple Saudagar', 'Shivaji Nagar'],
} as const;

export const wa = (text: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
export const img = (id: string, w = 1200, h?: number, q = 72) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ''}&q=${q}`;
export const srcset = (id: string, widths: number[], ratio?: number) =>
  widths.map((w) => `${img(id, w, ratio ? Math.round(w * ratio) : undefined)} ${w}w`).join(', ');

export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Transformation', href: '#transformation' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Get a Quote', href: '#quote' },
];
