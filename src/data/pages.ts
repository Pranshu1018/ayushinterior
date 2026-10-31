// SEO landing pages: one per service and one per Navi Mumbai node.
// TODO-REAL: prices are starting points; replace placeholder projects with your own work in each area.

export type ServicePage = {
  slug: string;
  name: string;
  keyword: string; // primary search phrase, used in title and H1
  title?: string; // optional override; titles are generated from keyword + price
  description: string;
  h1: string;
  intro: string[];
  includes: string[];
  types: { name: string; body: string }[];
  prices: { item: string; range: string }[];
  timeline: string;
  materials: string[];
  faqs: { q: string; a: string }[];
  img: string;
};

export const servicePages: ServicePage[] = [
  {
    slug: 'home-interiors',
    name: 'Full Home Interiors',
    keyword: 'Full Home Interiors in Navi Mumbai',
    title: 'Interior Designers in Navi Mumbai | Full Home Interiors from ₹4.5L | Ayush Interior',
    description: 'Complete 1–4 BHK home interiors in Navi Mumbai: design, 3D views, modular kitchen, wardrobes, ceilings and painting by one team. Free site visit and written quote.',
    h1: 'Full home interiors in Navi Mumbai, designed and built by one team',
    intro: [
      'Whether you have just taken possession of a new flat in Kharghar or Ulwe, or want to transform a 20-year-old CIDCO apartment in Vashi, we handle the entire job: layout planning, 3D design, carpentry, civil work, electricals, ceilings, painting and final styling.',
      'You deal with one designer and one site supervisor, get one itemised quote and one timeline, and pay in stages as work is completed. No juggling five contractors, no surprise bills at the end.',
    ],
    includes: ['Space planning and furniture layout', 'Photo-real 3D views of every room', 'Modular kitchen and wardrobes', 'False ceiling and lighting plan', 'Electrical and plumbing changes', 'Painting, textures and wallpaper', 'Loose furniture and décor sourcing', 'Deep cleaning and handover'],
    types: [
      { name: 'New possession', body: 'Bare flats in Kharghar, Ulwe, Panvel and Taloja: we plan the full home before the first panel is cut.' },
      { name: 'Renovation of an older flat', body: 'CIDCO and older society flats in Vashi, Nerul and Sanpada: civil repairs, rewiring, new flooring and fresh interiors.' },
      { name: 'Rental-ready makeover', body: 'Durable, budget-friendly interiors for investment flats, fully managed for NRIs and out-of-town owners.' },
    ],
    prices: [
      { item: '1 BHK full interiors', range: '₹3L – ₹6L' },
      { item: '2 BHK full interiors', range: '₹4.5L – ₹9L' },
      { item: '3 BHK full interiors', range: '₹7L – ₹15L' },
      { item: 'Design + 3D only', range: 'from ₹35,000' },
    ],
    timeline: '45–60 days from design sign-off for a typical 2–3 BHK.',
    materials: ['BWP / BWR plywood (moisture-resistant for Navi Mumbai’s coastal humidity)', 'Hettich / Hafele hardware', 'Asian Paints or Berger', 'ISI-marked wiring and switches'],
    faqs: [
      { q: 'How much do full home interiors cost in Navi Mumbai?', a: 'A 2 BHK typically costs ₹4.5L to ₹9L depending on scope and finishes. You get an itemised written quote after a free site visit, before any work starts.' },
      { q: 'Do you handle society permissions?', a: 'Yes. We prepare the work schedule and documents most Navi Mumbai societies ask for, and follow society timings for noisy work.' },
      { q: 'Can I see the design before you start?', a: 'Yes. We share layouts and photo-real 3D views of every room. Work begins only after you approve the design and the quote.' },
    ],
    img: 'photo-1745301558339-44eb3217d5da',
  },
  {
    slug: 'modular-kitchen',
    name: 'Modular Kitchens',
    keyword: 'Modular Kitchen in Navi Mumbai',
    title: 'Modular Kitchen in Navi Mumbai | L, U & Parallel from ₹1.6L | Ayush Interior',
    description: 'Custom modular kitchens in Navi Mumbai in BWP plywood with soft-close hardware, quartz or granite tops and chimney points. Free design and site visit.',
    h1: 'Modular kitchens in Navi Mumbai, built for Indian cooking',
    intro: [
      'An Indian kitchen works hard: heavy tadka, big utensils, masala racks and daily cleaning. We design modular kitchens around how you cook, with tall units, tandem drawers, corner solutions and easy-clean finishes.',
      'Every carcass is BWP plywood, which stands up to Navi Mumbai’s monsoon humidity far better than particle board, with soft-close Hettich or Hafele hardware as standard.',
    ],
    includes: ['Kitchen measurement and layout design', '3D view with your chosen finishes', 'BWP carcass with laminate, acrylic or PU shutters', 'Quartz or granite countertop', 'Chimney, hob and RO points', 'Under-cabinet lighting', 'Dado tiles and plumbing changes', 'Installation and cleanup'],
    types: [
      { name: 'L-shaped', body: 'The most popular layout for 1–2 BHK flats: efficient corner use and a natural work triangle.' },
      { name: 'Parallel', body: 'Two counters facing each other, ideal for the long, narrow kitchens common in Navi Mumbai societies.' },
      { name: 'U-shaped & island', body: 'Maximum storage and counter space for larger 3 BHK flats and row houses.' },
    ],
    prices: [
      { item: 'Straight kitchen (8–10 ft)', range: '₹1.2L – ₹2L' },
      { item: 'L-shaped kitchen', range: '₹1.6L – ₹3L' },
      { item: 'Parallel kitchen', range: '₹1.8L – ₹3.2L' },
      { item: 'U-shaped kitchen', range: '₹2.4L – ₹4.5L' },
    ],
    timeline: '15–25 days from design approval, including 3–5 days of on-site installation.',
    materials: ['BWP plywood carcass', 'Laminate, acrylic or PU shutters', 'Hettich / Hafele soft-close hardware', 'Quartz, granite or Corian tops'],
    faqs: [
      { q: 'What is the cost of a modular kitchen in Navi Mumbai?', a: 'An L-shaped modular kitchen usually costs ₹1.6L to ₹3L depending on size, shutter finish and accessories. The exact price comes in a written quote after measurement.' },
      { q: 'Which material is best for kitchens in a humid city?', a: 'BWP (boiling water proof) plywood. It resists moisture and swelling far better than MDF or particle board, which matters in Navi Mumbai’s coastal climate.' },
      { q: 'Can you replace only the shutters or countertop?', a: 'Yes. We also do partial kitchen upgrades: new shutters, countertops, hardware or a chimney point without a full rebuild.' },
    ],
    img: 'photo-1683629357935-f3f4777ddf41',
  },
  {
    slug: 'wardrobes',
    name: 'Wardrobes & Storage',
    keyword: 'Wardrobe Designers in Navi Mumbai',
    title: 'Custom Wardrobes in Navi Mumbai | Sliding & Hinged from ₹1,450/sq ft | Ayush Interior',
    description: 'Made-to-measure sliding, hinged and walk-in wardrobes, TV units and lofts in Navi Mumbai. BWP ply, soft-close hardware and a 10-year woodwork warranty.',
    h1: 'Custom wardrobes and storage that fit every inch of your room',
    intro: [
      'Most Navi Mumbai flats are tight on space, so every wardrobe we build is measured to the millimetre: floor-to-ceiling units, lofts for suitcases, pull-out trouser racks, jewellery drawers and mirror shutters.',
      'Choose sliding shutters to save space in smaller bedrooms, or hinged shutters for full access. Either way you get BWP plywood, soft-close fittings and a 10-year warranty on woodwork.',
    ],
    includes: ['Room measurement and internal layout', 'Sliding, hinged or walk-in designs', 'Lofts and overhead storage', 'Internal drawers and accessories', 'Mirror, glass or profile shutters', 'TV units, study tables and crockery units'],
    types: [
      { name: 'Sliding wardrobes', body: 'Space-saving shutters for compact bedrooms, with soft-close tracks.' },
      { name: 'Hinged wardrobes', body: 'Classic full-access shutters, easier on budget and maintenance.' },
      { name: 'Walk-in wardrobes', body: 'Open or glass-front dressing areas for master bedrooms in larger flats.' },
    ],
    prices: [
      { item: 'Hinged wardrobe', range: '₹1,450 – ₹2,200 / sq ft' },
      { item: 'Sliding wardrobe', range: '₹1,750 – ₹2,800 / sq ft' },
      { item: 'Loft (per running ft)', range: 'from ₹1,200' },
      { item: 'TV unit', range: '₹22,000 – ₹65,000' },
    ],
    timeline: '12–20 days including factory time and installation.',
    materials: ['BWP / BWR plywood', 'Laminate, acrylic, PU or veneer finishes', 'Hettich / Hafele / Ebco fittings', 'Edge-banded, grain-matched panels'],
    faqs: [
      { q: 'How much does a wardrobe cost per square foot in Navi Mumbai?', a: 'Hinged wardrobes typically cost ₹1,450 to ₹2,200 per sq ft and sliding wardrobes ₹1,750 to ₹2,800, depending on finish and internal accessories.' },
      { q: 'Sliding or hinged: which is better?', a: 'Sliding saves floor space and suits smaller rooms; hinged gives full access and costs a little less. We help you choose during the site visit.' },
    ],
    img: 'photo-1722349674028-a148f4364e43',
  },
  {
    slug: 'bathroom-renovation',
    name: 'Bathroom Renovation',
    keyword: 'Bathroom Renovation in Navi Mumbai',
    title: 'Bathroom Renovation in Navi Mumbai | Leak-Proof from ₹85,000 | Ayush Interior',
    description: 'Complete bathroom renovation in Navi Mumbai: waterproofing with 48-hour leak test, concealed plumbing, tiles, fittings and vanity. Written warranty.',
    h1: 'Bathroom renovation in Navi Mumbai, waterproofed and leak-tested',
    intro: [
      'Seepage into the flat below is the most common problem in older Navi Mumbai buildings, and it almost always starts under the tiles. We break down to the base, apply proper waterproofing, and run a 48-hour water test before a single tile goes down.',
      'Then come concealed CPVC plumbing, large-format tiles, wall-hung fittings, a vanity and glass partition, finished in 10–14 days with a written leak warranty.',
    ],
    includes: ['Demolition and debris removal', 'Multi-coat waterproofing + 48h water test', 'Concealed CPVC plumbing', 'Wall and floor tiles', 'Sanitaryware and CP fittings', 'Vanity, mirror and glass partition', 'Exhaust and lighting'],
    types: [
      { name: 'Full renovation', body: 'Strip to the base and rebuild everything: the right choice when there is seepage.' },
      { name: 'Retiling and refresh', body: 'New tiles and fittings over sound waterproofing, for bathrooms without leaks.' },
      { name: 'Waterproofing only', body: 'Treatment for leaking bathrooms and balconies without a full redesign.' },
    ],
    prices: [
      { item: 'Full bathroom renovation', range: '₹85,000 – ₹2.2L' },
      { item: 'Retiling (walls + floor)', range: '₹45,000 – ₹90,000' },
      { item: 'Bathroom waterproofing', range: '₹18,000 – ₹35,000' },
      { item: 'Glass shower partition', range: 'from ₹14,000' },
    ],
    timeline: '10–14 days, including the 48-hour water test.',
    materials: ['Dr. Fixit / Fosroc waterproofing', 'Astral / Ashirvad CPVC pipes', 'Kajaria / Somany tiles', 'Jaquar / Hindware fittings'],
    faqs: [
      { q: 'How much does bathroom renovation cost in Navi Mumbai?', a: 'A complete bathroom renovation usually costs ₹85,000 to ₹2.2L depending on size, tiles and fittings. Waterproofing-only jobs start around ₹18,000.' },
      { q: 'Will this stop the leakage into my neighbour’s flat?', a: 'Yes, if the source is the bathroom floor. We waterproof down to the slab and water-test for 48 hours before tiling, and give a written leak warranty.' },
    ],
    img: 'photo-1564540583246-934409427776',
  },
  {
    slug: 'false-ceiling',
    name: 'False Ceiling & Lighting',
    keyword: 'False Ceiling in Navi Mumbai',
    title: 'False Ceiling in Navi Mumbai | Gypsum & POP from ₹95/sq ft | Ayush Interior',
    description: 'Gypsum and POP false ceilings with cove, profile and track lighting in Navi Mumbai. Designs for living rooms, bedrooms and offices. Free site visit.',
    h1: 'False ceilings and lighting that change how a room feels',
    intro: [
      'A well-designed false ceiling hides wiring and AC ducts, adds warm cove lighting and makes standard-height rooms feel finished. We design ceilings and lighting together, so every light has a purpose.',
      'We work with moisture-resistant gypsum boards for kitchens and bathrooms, and POP or gypsum for living rooms and bedrooms, with clean joints and no sagging.',
    ],
    includes: ['Ceiling design with lighting plan', 'Gypsum or POP framework', 'Cove, profile and track lighting', 'Concealed AC and wiring routes', 'Putty, primer and paint finish'],
    types: [
      { name: 'Gypsum board', body: 'Fast to install, smooth finish, moisture-resistant variants for wet areas.' },
      { name: 'POP', body: 'Ideal for curved and intricate designs in living and dining areas.' },
      { name: 'Wooden & PVC panels', body: 'Warm wood-look slats and low-maintenance panels for accent ceilings.' },
    ],
    prices: [
      { item: 'Gypsum false ceiling', range: '₹95 – ₹140 / sq ft' },
      { item: 'POP false ceiling', range: '₹110 – ₹160 / sq ft' },
      { item: 'Cove / profile lighting', range: 'from ₹350 / running ft' },
    ],
    timeline: '4–8 days for a typical 2 BHK.',
    materials: ['Saint-Gobain Gyproc boards', 'GI framework', 'Philips / Wipro LED lighting'],
    faqs: [
      { q: 'What is the cost of false ceiling per sq ft in Navi Mumbai?', a: 'Gypsum false ceilings typically cost ₹95 to ₹140 per sq ft and POP ₹110 to ₹160, excluding lights. Lighting is quoted separately based on your design.' },
      { q: 'Does a false ceiling reduce room height?', a: 'Usually by 4–6 inches. We design peripheral ceilings that keep the centre at full height when rooms are low.' },
    ],
    img: 'photo-1746439307632-cba0f8effbed',
  },
  {
    slug: 'painting',
    name: 'Painting & Textures',
    keyword: 'Home Painting in Navi Mumbai',
    title: 'Home Painting in Navi Mumbai | Interior, Textures & Damp Treatment | Ayush Interior',
    description: 'Interior painting, texture walls, wallpaper and damp treatment in Navi Mumbai. Furniture covered, floors protected, cracks repaired first. From ₹12/sq ft.',
    h1: 'Home painting in Navi Mumbai, with furniture covered and floors protected',
    intro: [
      'Fresh paint fails fast when damp and cracks are ignored, which is common after a Navi Mumbai monsoon. We repair cracks, treat seepage at the source, apply putty and primer, and only then paint.',
      'Our team moves and covers furniture, masks switches and floors, and leaves the home clean every evening.',
    ],
    includes: ['Furniture moving and covering', 'Crack filling and damp treatment', 'Putty and primer', 'Two coats of premium paint', 'Texture or accent walls', 'Wallpaper installation'],
    types: [
      { name: 'Repainting', body: 'Fresh coats for a lived-in home, done room by room.' },
      { name: 'Textures & accent walls', body: 'Stucco, metallic and designer finishes for living and bedroom walls.' },
      { name: 'Damp treatment', body: 'Seepage and fungus treatment before painting, so the finish lasts.' },
    ],
    prices: [
      { item: '1 BHK repaint', range: '₹18,000 – ₹35,000' },
      { item: '2 BHK repaint', range: '₹30,000 – ₹60,000' },
      { item: 'Texture / accent wall', range: 'from ₹6,500' },
      { item: 'Damp treatment', range: 'from ₹4,500' },
    ],
    timeline: '4–6 days for a typical 2 BHK.',
    materials: ['Asian Paints / Berger / Nerolac', 'Dr. Fixit damp treatment', 'Birla / JK wall putty'],
    faqs: [
      { q: 'How much does it cost to paint a 2 BHK in Navi Mumbai?', a: 'A 2 BHK repaint typically costs ₹30,000 to ₹60,000 depending on paint brand, wall condition and putty work.' },
      { q: 'When is the best time to paint?', a: 'October to May, after the monsoon. Painting during heavy rain traps moisture and causes peeling.' },
    ],
    img: 'photo-1637412816281-f80ec9948fea',
  },
  {
    slug: 'flooring-tiling',
    name: 'Flooring & Tiling',
    keyword: 'Flooring Contractors in Navi Mumbai',
    title: 'Flooring & Tiling in Navi Mumbai | Marble, Vitrified, Wooden | Ayush Interior',
    description: 'Vitrified, marble, Italian, wooden and SPC flooring installation in Navi Mumbai with clean levelling and finishing. Old floor removal available.',
    h1: 'Flooring and tiling in Navi Mumbai, levelled and finished cleanly',
    intro: [
      'Replacing the old mosaic or ceramic floors in a CIDCO flat is one of the biggest upgrades you can make. We remove old flooring, level the base and lay large-format vitrified, marble or wooden floors with tight joints.',
      'For homes where breaking floors is not practical, SPC and laminate flooring can go directly over existing tiles in a day or two.',
    ],
    includes: ['Old floor removal and debris disposal', 'Base levelling', 'Tile, marble or wooden flooring', 'Skirting and thresholds', 'Epoxy grouting and polishing'],
    types: [
      { name: 'Vitrified tiles', body: 'Durable, low-maintenance and available in large formats with marble looks.' },
      { name: 'Marble & Italian', body: 'Natural stone for a premium finish, with diamond polishing.' },
      { name: 'Wooden, laminate & SPC', body: 'Warm floors for bedrooms; SPC is waterproof and can go over old tiles.' },
    ],
    prices: [
      { item: 'Vitrified tile flooring', range: '₹110 – ₹220 / sq ft' },
      { item: 'Marble flooring', range: '₹250 – ₹600 / sq ft' },
      { item: 'SPC / laminate flooring', range: '₹140 – ₹260 / sq ft' },
    ],
    timeline: '5–10 days for a 2 BHK, depending on the material.',
    materials: ['Kajaria / Somany / Simpolo tiles', 'Epoxy grout', 'Pergo / Action Tesa laminate'],
    faqs: [
      { q: 'What does new flooring cost in Navi Mumbai?', a: 'Vitrified tile flooring usually costs ₹110 to ₹220 per sq ft including labour and material; marble ranges from ₹250 to ₹600 per sq ft.' },
      { q: 'Can new flooring go over my old tiles?', a: 'SPC and laminate can be laid over level existing tiles. Vitrified and marble need the old floor removed for proper levelling.' },
    ],
    img: 'photo-1706629503586-2731f65587ae',
  },
  {
    slug: 'pooja-unit',
    name: 'Pooja Units & Jaali Work',
    keyword: 'Pooja Unit Design in Navi Mumbai',
    title: 'Pooja Unit Design in Navi Mumbai | Mandir & CNC Jaali | Ayush Interior',
    description: 'Custom pooja units, wall-mounted mandirs, CNC jaali partitions and backlit panels in Navi Mumbai, designed to Vastu where you want it.',
    h1: 'Pooja units and jaali work, designed for your home and your traditions',
    intro: [
      'A pooja unit is often the heart of the home. We design wall-mounted mandirs for compact flats and full pooja rooms with CNC-cut jaali doors, backlit panels, bell hangings and storage for diyas and samagri.',
      'If you follow Vastu, we plan placement and orientation with you during the design stage.',
    ],
    includes: ['Pooja unit design with 3D view', 'CNC jaali doors and partitions', 'Backlit Corian or marble panels', 'Storage drawers', 'Warm accent lighting'],
    types: [
      { name: 'Wall-mounted mandir', body: 'Compact units for 1–2 BHK flats with no space for a separate room.' },
      { name: 'Floor-standing unit', body: 'Larger mandirs with storage below and a jaali backdrop.' },
      { name: 'Jaali partitions', body: 'Decorative CNC screens to separate living, dining and pooja spaces.' },
    ],
    prices: [
      { item: 'Wall-mounted mandir', range: '₹35,000 – ₹75,000' },
      { item: 'Floor-standing pooja unit', range: '₹60,000 – ₹1.5L' },
      { item: 'CNC jaali partition', range: 'from ₹1,100 / sq ft' },
    ],
    timeline: '10–18 days including CNC fabrication.',
    materials: ['MDF / ply CNC jaali with PU finish', 'Corian or marble backdrop', 'Warm LED strips'],
    faqs: [
      { q: 'How much does a pooja unit cost?', a: 'Wall-mounted mandirs typically cost ₹35,000 to ₹75,000; floor-standing units with storage range from ₹60,000 to ₹1.5L.' },
      { q: 'Do you design to Vastu?', a: 'Yes, if you want. We plan the direction and placement with you during design.' },
    ],
    img: 'photo-1745301558339-44eb3217d5da',
  },
  {
    slug: 'electrical-plumbing',
    name: 'Electrical & Plumbing',
    keyword: 'Electrician & Plumber in Navi Mumbai',
    title: 'Electrical & Plumbing Work in Navi Mumbai | Rewiring & Leak Repair | Ayush Interior',
    description: 'Home rewiring, switchboards, lighting, leak repairs and concealed plumbing in Navi Mumbai by trained in-house electricians and plumbers. From ₹199.',
    h1: 'Electrical and plumbing work in Navi Mumbai, done safely and neatly',
    intro: [
      'Older Navi Mumbai buildings often run on 20-year-old wiring that cannot handle today’s ACs, geysers and induction cooktops. We survey the load, give you a written plan and rewire with concealed conduits and modern distribution boards.',
      'For plumbing, we fix leaks, replace old GI lines with CPVC and fit taps, mixers, geysers and water purifiers, with a 30-day warranty on every repair.',
    ],
    includes: ['Load survey and written plan', 'Concealed rewiring', 'DB, MCB and RCCB installation', 'Lights, fans and switchboards', 'Leak detection and repair', 'CPVC line replacement', 'Fittings and geyser installation'],
    types: [
      { name: 'Repairs & installations', body: 'Switches, lights, fans, taps and leaks, usually same or next day.' },
      { name: 'Rewiring', body: 'Full concealed rewiring for older flats, usually in 5–8 days.' },
      { name: 'Plumbing upgrades', body: 'Replacing corroded GI pipes with CPVC during kitchen or bathroom work.' },
    ],
    prices: [
      { item: 'Electrician / plumber visit', range: 'from ₹199' },
      { item: 'MCB / DB replacement', range: 'from ₹899' },
      { item: 'Full 2 BHK rewiring', range: '₹55,000 – ₹90,000' },
    ],
    timeline: 'Repairs same or next day; rewiring 5–8 days for a 2 BHK.',
    materials: ['Polycab / Havells wires', 'Legrand / Anchor switches', 'Astral CPVC pipes'],
    faqs: [
      { q: 'How much does rewiring a flat cost in Navi Mumbai?', a: 'Full concealed rewiring for a 2 BHK typically costs ₹55,000 to ₹90,000 depending on points and brands.' },
      { q: 'Do you come for small repairs?', a: 'Yes. Visits start from ₹199 and the inspection is free if you go ahead with the work.' },
    ],
    img: 'photo-1711107796112-e5b4fe9aa075',
  },
];

export type AreaPage = {
  slug: string;
  name: string;
  pin: string;
  nearby: string[];
  about: string; // what homes in this node are like and what people usually need
  focus: string[]; // services most requested here
};

export const areaPages: AreaPage[] = [
  { slug: 'vashi', name: 'Vashi', pin: '400703', nearby: ['Sanpada', 'Juinagar', 'Turbhe', 'Kopar Khairane'],
    about: 'Vashi is one of Navi Mumbai’s oldest and most established nodes, with many CIDCO-era buildings alongside newer towers. Much of our work here is renovating 15–30 year old flats: replacing old flooring, rewiring, fixing bathroom seepage and building modern kitchens and wardrobes.',
    focus: ['bathroom-renovation', 'modular-kitchen', 'flooring-tiling', 'electrical-plumbing'] },
  { slug: 'nerul', name: 'Nerul', pin: '400706', nearby: ['Seawoods', 'Juinagar', 'CBD Belapur', 'Sanpada'],
    about: 'Nerul is a well-connected residential node with a mix of older society buildings and newer complexes. Families here often ask for complete makeovers of lived-in homes, done room by room so they can stay in while we work.',
    focus: ['home-interiors', 'modular-kitchen', 'wardrobes', 'painting'] },
  { slug: 'seawoods', name: 'Seawoods', pin: '400706', nearby: ['Nerul', 'CBD Belapur', 'Karave'],
    about: 'Seawoods has some of Navi Mumbai’s more premium apartments. Clients here typically want design-led interiors: veneer and PU finishes, layered false ceilings with cove lighting, and statement pooja units.',
    focus: ['home-interiors', 'false-ceiling', 'pooja-unit', 'wardrobes'] },
  { slug: 'cbd-belapur', name: 'CBD Belapur', pin: '400614', nearby: ['Kharghar', 'Seawoods', 'Nerul'],
    about: 'CBD Belapur combines government and corporate offices with established residential sectors. Alongside home interiors, we fit out small offices and clinics here, often working evenings and weekends to avoid disrupting business.',
    focus: ['home-interiors', 'false-ceiling', 'electrical-plumbing', 'painting'] },
  { slug: 'kharghar', name: 'Kharghar', pin: '410210', nearby: ['CBD Belapur', 'Taloja', 'Kamothe', 'Panvel'],
    about: 'Kharghar is a planned, green node popular with young families, with a large number of newer high-rise societies. Most projects here are new-possession interiors where we plan the whole home, from kitchen and wardrobes to ceilings and lighting, before move-in.',
    focus: ['home-interiors', 'modular-kitchen', 'wardrobes', 'false-ceiling'] },
  { slug: 'airoli', name: 'Airoli', pin: '400708', nearby: ['Ghansoli', 'Rabale', 'Thane'],
    about: 'Airoli sits close to the Thane–Belapur IT corridor, and many homeowners here are working professionals in compact 1–2 BHK flats. Space-saving storage, sliding wardrobes and efficient parallel kitchens are our most common requests.',
    focus: ['wardrobes', 'modular-kitchen', 'home-interiors', 'painting'] },
  { slug: 'panvel', name: 'Panvel', pin: '410206', nearby: ['Kamothe', 'Kalamboli', 'Kharghar', 'Ulwe'],
    about: 'Panvel and New Panvel are growing fast, with many new projects handing over possession. We help buyers turn bare flats into complete homes on a planned budget, often with EMI options and staged payments.',
    focus: ['home-interiors', 'modular-kitchen', 'wardrobes', 'flooring-tiling'] },
  { slug: 'ulwe', name: 'Ulwe', pin: '410206', nearby: ['Dronagiri', 'Panvel', 'Kharghar'],
    about: 'Ulwe is one of Navi Mumbai’s newest nodes, close to the new Navi Mumbai International Airport and the Atal Setu. Many owners here are taking possession of new 1–2 BHK flats, and some are setting them up as rentals; we offer move-in-ready packages for both.',
    focus: ['home-interiors', 'modular-kitchen', 'wardrobes', 'painting'] },
];

export const getService = (slug: string) => servicePages.find((s) => s.slug === slug)!;
