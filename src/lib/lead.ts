// Lead submission. Posts to PUBLIC_LEAD_WEBHOOK (a Google Apps Script web app that
// writes to a Sheet and emails the business, see docs/lead-webhook.gs). A CRM webhook can
// replace or sit next to it later without touching the forms.

export type Lead = {
  source: 'quote-form' | 'quick-form';
  services: string[];
  workType?: string;
  property?: string;
  size?: string;
  urgency?: string;
  budget?: string;
  details?: string;
  locality?: string;
  pincode?: string;
  name?: string;
  phone: string;
  contactPref?: string;
  bestTime?: string;
  email?: string;
  estimate?: string;
};

const ATTR_KEY = 'ai_attr';

/** Called on every page load; keeps the first-touch campaign data for this session. */
export function captureAttribution() {
  try {
    if (sessionStorage.getItem(ATTR_KEY)) return;
    const p = new URLSearchParams(location.search);
    const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid', 'gbraid', 'wbraid'];
    const attr: Record<string, string> = { landing: location.pathname, referrer: document.referrer || '' };
    keys.forEach((k) => { const v = p.get(k); if (v) attr[k] = v; });
    sessionStorage.setItem(ATTR_KEY, JSON.stringify(attr));
  } catch { /* storage blocked: attribution is best-effort */ }
}

function readAttribution(): Record<string, string> {
  try { return JSON.parse(sessionStorage.getItem(ATTR_KEY) || '{}'); } catch { return {}; }
}

export function track(event: string, params: Record<string, unknown> = {}) {
  const w = window as any;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
  if (typeof w.gtag === 'function') w.gtag('event', event, params);
}

export const isValidPhone = (v: string) => /^[6-9]\d{9}$/.test(v.replace(/\D/g, '').slice(-10)) && v.replace(/\D/g, '').length >= 10;
export const cleanPhone = (v: string) => v.replace(/\D/g, '').slice(-10);

export async function submitLead(lead: Lead): Promise<{ ref: string }> {
  const ref = 'AI-' + Date.now().toString(36).toUpperCase().slice(-5);
  const payload = {
    ...lead,
    phone: '+91' + cleanPhone(lead.phone),
    services: lead.services.join(', '),
    ref,
    page: location.pathname,
    submittedAt: new Date().toISOString(),
    ...readAttribution(),
  };

  const url = import.meta.env.PUBLIC_LEAD_WEBHOOK as string | undefined;
  if (url) {
    // Apps Script does not return CORS headers; no-cors + text/plain still delivers the body.
    await fetch(url, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(payload) });
  } else {
    console.info('[lead] PUBLIC_LEAD_WEBHOOK is not set, so this lead was not sent anywhere:', payload);
  }

  try {
    sessionStorage.setItem('ai_last_lead', JSON.stringify({ ref, name: lead.name, services: lead.services, locality: lead.locality, urgency: lead.urgency, details: lead.details }));
  } catch { /* ignore */ }
  track('generate_lead', { lead_source: lead.source, services: payload.services });
  return { ref };
}
