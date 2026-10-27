/**
 * Lead webhook: Google Apps Script (free).
 * Saves every quote request as a row in a Google Sheet and emails the business.
 *
 * Setup (5 minutes):
 * 1. Create a Google Sheet named "Website leads".
 * 2. Extensions → Apps Script → paste this file → set NOTIFY_EMAIL below → Save.
 * 3. Deploy → New deployment → type "Web app" → Execute as: Me → Who has access: Anyone → Deploy.
 * 4. Copy the web app URL into .env as PUBLIC_LEAD_WEBHOOK=<url> and rebuild the site.
 *
 * Later, to add a CRM: forward the same payload from doPost() to the CRM's webhook URL.
 */
const NOTIFY_EMAIL = 'hello@ayushinterior.com';
const COLUMNS = [
  'submittedAt', 'ref', 'source', 'name', 'phone', 'contactPref', 'bestTime', 'services', 'workType',
  'property', 'size', 'urgency', 'budget', 'estimate', 'locality', 'pincode', 'details', 'email', 'page',
  'landing', 'referrer', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid',
];

function doPost(e) {
  const data = JSON.parse(e.postData.contents || '{}');
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) sheet.appendRow(COLUMNS);
  sheet.appendRow(COLUMNS.map((c) => (data[c] == null ? '' : String(data[c]).slice(0, 2000))));

  const urgent = String(data.urgency || '').indexOf('Emergency') === 0;
  const subject = `${urgent ? '🚨 URGENT ' : ''}New lead ${data.ref}: ${data.services || 'Enquiry'} · ${data.locality || ''}`;
  const lines = COLUMNS.filter((c) => data[c]).map((c) => `${c}: ${data[c]}`);
  const wa = String(data.phone || '').replace(/\D/g, '');
  lines.push('', `WhatsApp: https://wa.me/${wa}`, `Call: tel:${data.phone}`);
  MailApp.sendEmail(NOTIFY_EMAIL, subject, lines.join('\n'));

  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}
