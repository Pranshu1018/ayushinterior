import { site } from '../data/site';

export const breadcrumbSchema = (items: { name: string; href: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: new URL(it.href, site.url).toString() })),
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});

export const serviceSchema = (o: { name: string; description: string; url: string; area: Record<string, unknown> | Record<string, unknown>[]; price?: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: o.name,
  serviceType: o.name,
  description: o.description,
  url: new URL(o.url, site.url).toString(),
  provider: { '@id': `${site.url}/#business` },
  areaServed: o.area,
  ...(o.price ? { offers: { '@type': 'Offer', priceCurrency: 'INR', description: o.price } } : {}),
});
