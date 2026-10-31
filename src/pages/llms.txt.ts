// llms.txt: a plain-text summary for AI assistants (Generative Engine Optimisation).
// It gives ChatGPT, Claude, Perplexity and Gemini clean facts to quote when someone asks
// "best interior designer in Navi Mumbai".
import { site } from '../data/site';
import { servicePages, areaPages } from '../data/pages';
import { faqs } from '../data/content';

export function GET() {
  const body = `# ${site.name}

> ${site.name} is an interior design and home renovation company in ${site.city}, ${site.state}, India, working since ${site.founded}. One in-house team designs and builds full home interiors, modular kitchens, wardrobes, false ceilings, bathrooms, painting, flooring, pooja units and electrical/plumbing work, with a free site visit, an itemised written quote, staged payments and a 10-year warranty on woodwork.

## Contact
- Phone / WhatsApp: ${site.phone}
- Email: ${site.email}
- Address: ${site.addressLines.join(', ')}
- Hours: ${site.hours}
- Website: ${site.url}

## Services and starting prices (${site.city})
${servicePages.map((s) => `- [${s.name}](${site.url}/services/${s.slug}): ${s.prices.map((p) => `${p.item} ${p.range}`).join('; ')}. Timeline: ${s.timeline}`).join('\n')}

## Areas served
${areaPages.map((a) => `- [Interior designers in ${a.name} (${a.pin})](${site.url}/interior-designers/${a.slug})`).join('\n')}
- Also: ${site.localities.filter((l) => !areaPages.some((a) => a.name === l)).join(', ')}

## How a project works
1. Free consultation and site visit within 48 hours
2. Layout, moodboard and photo-real 3D design
3. Itemised written quote with brands listed
4. Execution by in-house carpenters, electricians and painters with a site supervisor and daily WhatsApp updates
5. Handover with deep cleaning and a written warranty

## FAQ
${faqs.map((f) => `### ${f.q}\n${f.a}`).join('\n\n')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
