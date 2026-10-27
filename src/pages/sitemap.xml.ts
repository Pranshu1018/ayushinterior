import { site } from '../data/site';

export function GET() {
  const urls = ['/', '/privacy', '/terms'].map((p) => `  <url><loc>${site.url}${p}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
}
