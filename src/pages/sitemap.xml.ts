import { site } from '../data/site';
import { servicePages, areaPages } from '../data/pages';

export function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const pages: [string, string][] = [
    ['/', '1.0'],
    ['/services', '0.9'],
    ...servicePages.map((s): [string, string] => [`/services/${s.slug}`, '0.9']),
    ['/interior-designers', '0.8'],
    ...areaPages.map((a): [string, string] => [`/interior-designers/${a.slug}`, '0.8']),
    ['/privacy', '0.2'],
    ['/terms', '0.2'],
  ];
  const body = pages
    .map(([p, pr]) => `  <url><loc>${site.url}${p}</loc><lastmod>${today}</lastmod><priority>${pr}</priority></url>`)
    .join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>`, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
