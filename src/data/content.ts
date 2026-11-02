// TODO-REAL: projects, testimonials, prices and stats are placeholders. Replace with your real work.

export const P = {
  hero: 'photo-1768144092684-c1a5dd6c7aad',
  ctaDark: 'photo-1541194577687-8c63bf9e7ee3',
  footer: 'photo-1628752039723-35fd10d4ffcd',
};

export const stats = [
  { value: 2014, suffix: '', label: 'Year of establishment', note: '12 years crafting homes', thumbs: ['photo-1745301558339-44eb3217d5da', 'photo-1683629357935-f3f4777ddf41', 'photo-1633944095397-878622ebc01c'] },
  { value: 650, suffix: '+', label: 'Projects delivered', note: 'Homes, offices & showrooms', thumbs: ['photo-1576698483491-8c43f0862543', 'photo-1722349674028-a148f4364e43', 'photo-1656403002413-2ac6137237d6'] },
  { value: 98, suffix: '%', label: 'Clients refer us', note: 'Most new work comes from referrals', thumbs: ['photo-1691036561573-4b76998b60de', 'photo-1724582586529-62622e50c0b3', 'photo-1682662046426-f7589013d25e'] },
  { value: 14, suffix: '', label: 'Projects in progress', note: 'What we are building right now', thumbs: ['photo-1599420187429-774dbfc6ba5d', 'photo-1746439307632-cba0f8effbed', 'photo-1706629503586-2731f65587ae'] },
];

export const projects = [
  { name: 'The Jaali House', place: 'Kharghar, Navi Mumbai', year: 2025, type: '3BHK · Full interior', img: 'photo-1745301558339-44eb3217d5da' },
  { name: 'Sage & Oak Kitchen', place: 'Vashi, Navi Mumbai', year: 2025, type: 'Modular kitchen', img: 'photo-1683629357935-f3f4777ddf41' },
  { name: 'Marble Calm', place: 'Nerul, Navi Mumbai', year: 2024, type: 'Bathroom renovation', img: 'photo-1576698483491-8c43f0862543' },
  { name: 'Walnut Suite', place: 'Seawoods, Navi Mumbai', year: 2024, type: 'Master bedroom', img: 'photo-1633944095397-878622ebc01c' },
  { name: 'Indigo Living', place: 'Airoli, Navi Mumbai', year: 2023, type: '2BHK · Living & dining', img: 'photo-1682662046426-f7589013d25e' },
  { name: 'Dark Oak Dining', place: 'Palm Beach Road, Navi Mumbai', year: 2025, type: 'Row house · Dining', img: 'photo-1656403002413-2ac6137237d6' },
  { name: 'Quiet Grey', place: 'Ulwe, Navi Mumbai', year: 2024, type: '3BHK · Living room', img: 'photo-1724582586529-62622e50c0b3' },
];

export const services = [
  { slug: 'home-interiors', name: 'Full Home Interiors', desc: 'Design to handover for 1–4 BHK homes. One team, one quote, one timeline.', from: '₹4.5L', img: 'photo-1745301558339-44eb3217d5da' },
  { slug: 'modular-kitchen', name: 'Modular Kitchens', desc: 'L, U and parallel kitchens in BWP ply with soft-close hardware.', from: '₹1.6L', img: 'photo-1683629357935-f3f4777ddf41' },
  { slug: 'wardrobes', name: 'Wardrobes & Storage', desc: 'Sliding, hinged and walk-in wardrobes, TV units and lofts.', from: '₹1,450/sq ft', img: 'photo-1722349674028-a148f4364e43' },
  { slug: 'bathroom-renovation', name: 'Bathroom Renovation', desc: 'Waterproofing, tiles, concealed plumbing and fittings, leak-tested.', from: '₹85,000', img: 'photo-1564540583246-934409427776' },
  { slug: 'false-ceiling', name: 'False Ceiling & Lighting', desc: 'Gypsum and POP ceilings with cove, profile and track lighting.', from: '₹95/sq ft', img: 'photo-1746439307632-cba0f8effbed' },
  { slug: 'painting', name: 'Painting & Textures', desc: 'Premium paints, textures, wallpaper and accent walls, furniture covered.', from: '₹12/sq ft', img: 'photo-1637412816281-f80ec9948fea' },
  { slug: 'flooring-tiling', name: 'Flooring & Tiling', desc: 'Marble, vitrified, wooden and SPC flooring with clean finishing.', from: '₹110/sq ft', img: 'photo-1706629503586-2731f65587ae' },
  { slug: 'pooja-unit', name: 'Pooja Units & Jaali Work', desc: 'Custom mandirs, CNC jaali partitions and backlit panels.', from: '₹35,000', img: 'photo-1745301558339-44eb3217d5da' },
  { slug: 'society-maintenance', name: 'Society Maintenance & Repairs', desc: 'Annual maintenance, waterproofing, painting and repairs for housing societies.', from: 'On quote', img: 'photo-1581783898377-1c85bf937427' },
  { slug: 'electrical-plumbing', name: 'Electrical & Plumbing', desc: 'Rewiring, switchboards, lights, leaks and fittings, done safely.', from: '₹199', img: 'photo-1711107796112-e5b4fe9aa075' },
];

export const transformations = [
  {
    id: 'living', tab: 'Living Room', title: 'A 40-year-old room, reborn', place: 'Seawoods, Navi Mumbai', days: 38, budget: '₹6.2L',
    before: 'photo-1784294460266-ff0690c51861', after: 'photo-1600210491892-03d54c0aaf87',
    scope: ['Wall plaster & POP repair', 'Wooden ceiling beams', 'Arched windows', 'Lighting plan', 'Custom furniture'],
  },
  {
    id: 'kitchen', tab: 'Kitchen', title: 'Cramped kitchen to modular L', place: 'Vashi, Navi Mumbai', days: 21, budget: '₹2.4L',
    before: 'photo-1705538851801-4de1c763df2a', after: 'photo-1722605090433-41d1183a792d',
    scope: ['L-shaped modular units', 'Quartz counter', 'Chimney & hob points', 'Under-cabinet lights', 'Dado tiles'],
  },
  {
    id: 'bathroom', tab: 'Bathroom', title: 'From bare walls to spa calm', place: 'Nerul, Navi Mumbai', days: 14, budget: '₹1.7L',
    before: 'photo-1611433162346-aec991ef7484', after: 'photo-1662624914003-9bb2095ca7a0',
    scope: ['Full waterproofing + 48h test', 'Concealed plumbing', 'Large-format tiles', 'Freestanding tub', 'Heated towel rail'],
  },
];

export const process = [
  { n: '01', title: 'Free consultation', body: 'A call or studio visit to understand your home, your taste and your budget.', img: 'photo-1600494603989-9650cf6ddd3d' },
  { n: '02', title: 'Site visit & measurement', body: 'Our designer measures every wall and checks plumbing, wiring and structure.', img: 'photo-1599420187429-774dbfc6ba5d' },
  { n: '03', title: 'Concept & moodboard', body: 'Layouts, materials and colour palettes, sketched around how you live.', img: 'photo-1649688066830-a0cf04d1bc41' },
  { n: '04', title: '3D visualisation', body: 'See your home in photo-real 3D before a single panel is cut.', img: 'photo-1680210851280-77f3e542f2e0' },
  { n: '05', title: 'Transparent quote', body: 'An itemised, written quote with brands and finishes. No hidden costs.', img: 'photo-1637412816281-f80ec9948fea' },
  { n: '06', title: 'Execution', body: 'In-house carpenters, electricians and painters, with a dedicated site supervisor.', img: 'photo-1722349674028-a148f4364e43', star: true },
  { n: '07', title: 'Handover & warranty', body: 'Deep cleaning, final walkthrough and a written warranty on all woodwork.', img: 'photo-1633944095397-878622ebc01c' },
];

export const offers = ['Free site visit & measurement', '10% off your first project', 'Free 3D design on bookings above ₹3L', 'Easy EMI options', '10-year warranty on woodwork', 'Daily WhatsApp updates'];

export const testimonials = [
  {
    name: 'Priya & Rohan Kulkarni', home: '3BHK · Kharghar', quote: 'From the first 3D render to the last cushion, they turned our empty flat into a home we never want to leave.',
    story: 'Priya and Rohan wanted warm, Indian-modern interiors with a proper pooja space. We designed a CNC jaali mandir as the centrepiece and finished the home in 52 days.',
  },
  {
    name: 'Anand Deshpande', home: 'Row house · Palm Beach Road', quote: 'The quote was exactly what we paid. Not a rupee more. That alone is rare in this industry.',
    story: 'A dated row-house dining and living area, redone with dark oak panelling, a statement chandelier and concealed storage, delivered within the agreed budget.',
  },
  {
    name: 'Sneha Joshi', home: '2BHK · Nerul', quote: 'We were in Dubai the whole time. Daily photo updates on WhatsApp meant we never had to fly down.',
    story: 'An NRI client renovating a rental flat for move-in. Full repaint, modular kitchen, two bathrooms and wardrobes, fully managed remotely.',
  },
];

export const advantages = {
  inhouse: { title: 'In-house Design & Execution', img: '' },
  pricing: { title: 'Transparent, Itemised Pricing', img: 'photo-1680210851280-77f3e542f2e0' },
  threeD: { title: '3D Before We Build', img: 'photo-1691036561573-4b76998b60de' },
  stack: ['photo-1745301558339-44eb3217d5da', 'photo-1576698483491-8c43f0862543', 'photo-1683629357935-f3f4777ddf41', 'photo-1633944095397-878622ebc01c'],
  warranty: { title: '10-Year Warranty', img: 'photo-1763392199003-27cee33bae31' },
  detail: { title: 'Serious Attention to Detail', img: 'photo-1578500407234-8885e502d309' },
};

export const faqs = [
  { q: 'How much does a full home interior cost in Navi Mumbai?', a: 'A 2BHK typically ranges from ₹4.5L to ₹9L depending on scope, materials and finishes. You get an itemised, written quote after a free site visit, so you know the exact cost before anything starts.' },
  { q: 'How long does a project take?', a: 'Modular kitchens take 15–25 days, bathrooms 10–14 days and full 2–3BHK interiors 45–60 days from design sign-off. You get a written timeline with your quote.' },
  { q: 'Will I see the design before work starts?', a: 'Yes. We share layouts, a moodboard and photo-real 3D views. Work begins only after you approve the design and the quote.' },
  { q: 'Do you take a big advance?', a: 'No. A 10% booking amount, then payments in stages as work is completed and checked by you. Every payment comes with a GST invoice.' },
  { q: 'Which materials and brands do you use?', a: 'BWP/BWR plywood, Hettich or Hafele hardware, Asian Paints or Berger, and ISI-marked electricals. Every brand is listed in your quote, and you can choose alternatives.' },
  { q: 'Do you offer a warranty?', a: 'Yes: a 10-year warranty on woodwork and modular units, and 1 year on workmanship for civil, painting and electrical work, all in writing.' },
];

export const quoteServices = [
  'Full Home Interiors', 'Modular Kitchen', 'Wardrobes & Storage', 'Bathroom Renovation', 'False Ceiling & Lighting',
  'Painting & Textures', 'Flooring & Tiling', 'Pooja Unit / Jaali', 'Electrical & Plumbing', 'Society Maintenance', 'Something else',
];
