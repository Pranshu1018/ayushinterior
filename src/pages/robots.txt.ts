import { site } from '../data/site';

// Search engines and AI assistants (ChatGPT, Claude, Perplexity, Gemini) are all welcome:
// being quotable in AI answers is part of being found.
export function GET() {
  const body = `User-agent: *
Allow: /
Disallow: /thank-you

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: ${site.url}/sitemap.xml
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
}
