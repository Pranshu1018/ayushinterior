import { useEffect, useRef, useState } from 'preact/hooks';
import { submitLead, track, isValidPhone } from '../lib/lead';

type Props = { services: string[]; localities: string[]; initial?: string[]; area?: string };

const STATUS = ['New possession', 'Renovating my current home', 'Rental / investment property'];
const PROPERTY = ['Apartment', 'Villa / Bungalow', 'Independent house', 'Office / Shop'];
const SIZE = ['Single room', '1 BHK', '2 BHK', '3 BHK', '4 BHK+'];
const BUDGET = ['Under ₹2L', '₹2L – 5L', '₹5L – 10L', '₹10L – 20L', '₹20L+', 'Not sure yet'];
const WHEN = ['As soon as possible', 'In 1–3 months', 'In 3–6 months', 'Just exploring'];
const STEPS = ['Services', 'Your home', 'Contact'];

const Arrow = ({ left = false }: { left?: boolean }) => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d={left ? 'M19 12H5M11 6l-6 6 6 6' : 'M5 12h14M13 6l6 6-6 6'} />
  </svg>
);

function Chips({ options, value, onPick, multi = false }: { options: string[]; value: string | string[]; onPick: (v: string) => void; multi?: boolean }) {
  return (
    <div class="flex flex-wrap gap-2">
      {options.map((o) => {
        const on = multi ? (value as string[]).includes(o) : value === o;
        return (
          <button type="button" aria-pressed={on} onClick={() => onPick(o)}
            class={`rounded-full border px-4 py-2.5 text-[0.92rem] font-semibold tracking-[-0.01em] transition duration-200 ${on ? 'border-ink bg-ink text-white' : 'border-line bg-white text-ink hover:border-ink'}`}>
            {on && multi && <span class="mr-1.5 inline-block size-1.5 -translate-y-0.5 rounded-full bg-yellow" />}{o}
          </button>
        );
      })}
    </div>
  );
}

const Group = ({ title, error, children }: { title: string; error?: string; children: any }) => (
  <fieldset class="space-y-3">
    <legend class="mb-3 text-[0.75rem] font-bold uppercase tracking-[0.02em]">{title}</legend>
    {children}
    {error && <p class="text-[0.85rem] font-medium text-[#c2410c]" role="alert">{error}</p>}
  </fieldset>
);

const input = 'w-full border-0 border-b-2 border-line bg-transparent px-0 py-3 text-[1.15rem] font-medium tracking-[-0.02em] outline-none transition placeholder:text-grey/60 focus:border-ink';

export default function QuoteForm({ services, localities, initial = [], area = '' }: Props) {
  const [step, setStep] = useState(0);
  const [d, setD] = useState({ services: initial, status: '', property: '', size: '', budget: '', when: '', name: '', phone: '', locality: area, email: '', details: '', consent: true });
  const [err, setErr] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const started = useRef(false);
  const t0 = useRef(Date.now());
  const honey = useRef<HTMLInputElement>(null);
  const top = useRef<HTMLDivElement>(null);

  const touch = () => { if (!started.current) { started.current = true; track('quote_start'); } };
  const set = (k: string, v: any) => { touch(); setD((p) => ({ ...p, [k]: v })); setErr((e) => ({ ...e, [k]: '' })); };
  const toggle = (v: string) => set('services', d.services.includes(v) ? d.services.filter((x) => x !== v) : [...d.services, v]);

  // Service rows elsewhere on the page preselect a service.
  useEffect(() => {
    const on = (e: Event) => {
      const v = (e as CustomEvent).detail as string;
      const match = services.find((s) => s.toLowerCase().startsWith(v.toLowerCase().split(' ')[0])) ?? v;
      setD((p) => ({ ...p, services: p.services.includes(match) ? p.services : [...p.services, match] }));
      setStep(0);
    };
    addEventListener('quote:service', on);
    // A row may have been clicked before this island hydrated.
    const pending = (window as any).__quoteService as string | undefined;
    if (pending) on(new CustomEvent('quote:service', { detail: pending }));
    return () => removeEventListener('quote:service', on);
  }, []);

  const validate = (s: number) => {
    const e: Record<string, string> = {};
    if (s === 0 && !d.services.length) e.services = 'Pick at least one service.';
    if (s === 1) { if (!d.property) e.property = 'Choose your property type.'; if (!d.when) e.when = 'When would you like to start?'; }
    if (s === 2) {
      if (d.name.trim().length < 2) e.name = 'Please enter your name.';
      if (!isValidPhone(d.phone)) e.phone = 'Enter a valid 10-digit mobile number.';
      if (!d.locality.trim()) e.locality = 'Which area is the property in?';
      if (d.email && !/^\S+@\S+\.\S+$/.test(d.email)) e.email = 'That email looks incomplete.';
      if (!d.consent) e.consent = 'We need your OK to contact you.';
    }
    setErr(e);
    return !Object.keys(e).length;
  };
  const go = (n: number) => { setStep(n); const y = top.current?.getBoundingClientRect().top ?? 0; if (y < 0) scrollBy({ top: y - 100, behavior: 'smooth' }); };
  const next = () => { if (validate(step)) { track(`quote_step_${step + 1}`); go(step + 1); } };

  const submit = async (e: Event) => {
    e.preventDefault();
    if (!validate(2) || sending) return;
    if (honey.current?.value || Date.now() - t0.current < 4000) { location.href = '/thank-you'; return; }
    setSending(true);
    try {
      await submitLead({
        source: 'quote-form', services: d.services, workType: d.status, property: d.property, size: d.size,
        budget: d.budget, urgency: d.when, name: d.name.trim(), phone: d.phone, locality: d.locality.trim(),
        email: d.email.trim(), details: d.details.trim(),
      });
      location.href = '/thank-you';
    } catch {
      setSending(false);
      setErr({ form: 'Could not send right now. Please call or WhatsApp us.' });
    }
  };

  return (
    <form ref={top as any} onSubmit={submit} noValidate class="rounded-[14px] bg-white p-6 shadow-[0_30px_80px_-40px_rgb(0_0_0/0.25)] sm:p-9">
      <div class="flex items-end justify-between gap-4">
        <p class="text-[3.2rem] font-semibold leading-none tracking-[-0.06em] tabular-nums">0{step + 1}<span class="text-[1.2rem] text-grey">/03</span></p>
        <p class="pb-1 text-[0.8rem] font-semibold text-grey">{STEPS[step]}</p>
      </div>
      <div class="mt-4 grid grid-cols-3 gap-1.5" aria-hidden="true">
        {STEPS.map((_, i) => <span class={`h-[3px] rounded-full transition-colors duration-500 ${i <= step ? 'bg-ink' : 'bg-line'}`} />)}
      </div>

      <div key={step} class="q-step mt-8 space-y-8">
        {step === 0 && (
          <Group title="What are we working on? (pick all that apply)" error={err.services}>
            <Chips options={services} value={d.services} onPick={toggle} multi />
          </Group>
        )}
        {step === 1 && (
          <>
            <Group title="Home status"><Chips options={STATUS} value={d.status} onPick={(v) => set('status', v)} /></Group>
            <Group title="Property type" error={err.property}><Chips options={PROPERTY} value={d.property} onPick={(v) => set('property', v)} /></Group>
            <Group title="Size"><Chips options={SIZE} value={d.size} onPick={(v) => set('size', v)} /></Group>
            <Group title="Approximate budget"><Chips options={BUDGET} value={d.budget} onPick={(v) => set('budget', d.budget === v ? '' : v)} /></Group>
            <Group title="When do you want to start?" error={err.when}><Chips options={WHEN} value={d.when} onPick={(v) => set('when', v)} /></Group>
          </>
        )}
        {step === 2 && (
          <div class="grid gap-7 sm:grid-cols-2">
            <label class="block"><span class="text-[0.75rem] font-bold uppercase">Your name</span>
              <input class={input} value={d.name} autocomplete="name" placeholder="Full name" onInput={(e) => set('name', (e.target as HTMLInputElement).value)} />
              {err.name && <span class="mt-1 block text-[0.85rem] text-[#c2410c]" role="alert">{err.name}</span>}
            </label>
            <label class="block"><span class="text-[0.75rem] font-bold uppercase">Mobile number</span>
              <span class="flex items-center gap-2"><span class="border-b-2 border-line py-3 text-[1.15rem] font-medium text-grey">+91</span>
                <input class={input} type="tel" inputMode="numeric" autocomplete="tel-national" maxLength={11} placeholder="98765 43210" value={d.phone} onInput={(e) => set('phone', (e.target as HTMLInputElement).value.replace(/[^\d ]/g, ''))} /></span>
              {err.phone && <span class="mt-1 block text-[0.85rem] text-[#c2410c]" role="alert">{err.phone}</span>}
            </label>
            <label class="block"><span class="text-[0.75rem] font-bold uppercase">Area / locality</span>
              <input class={input} list="q-localities" value={d.locality} placeholder="e.g. Kharghar" onInput={(e) => set('locality', (e.target as HTMLInputElement).value)} />
              <datalist id="q-localities">{localities.map((l) => <option value={l} />)}</datalist>
              {err.locality && <span class="mt-1 block text-[0.85rem] text-[#c2410c]" role="alert">{err.locality}</span>}
            </label>
            <label class="block"><span class="text-[0.75rem] font-bold uppercase">Email <span class="font-medium normal-case text-grey">(optional)</span></span>
              <input class={input} type="email" autocomplete="email" value={d.email} placeholder="you@example.com" onInput={(e) => set('email', (e.target as HTMLInputElement).value)} />
              {err.email && <span class="mt-1 block text-[0.85rem] text-[#c2410c]" role="alert">{err.email}</span>}
            </label>
            <label class="block sm:col-span-2"><span class="text-[0.75rem] font-bold uppercase">Anything we should know? <span class="font-medium normal-case text-grey">(optional)</span></span>
              <textarea class={`${input} resize-none`} rows={2} maxLength={800} value={d.details} placeholder="e.g. Possession in March, want a pooja unit and a modular kitchen" onInput={(e) => set('details', (e.target as HTMLTextAreaElement).value)} />
            </label>
            <input ref={honey} type="text" name="company" tabIndex={-1} autocomplete="off" class="hidden" aria-hidden="true" />
            <label class="flex items-start gap-3 text-[0.85rem] text-grey sm:col-span-2">
              <input type="checkbox" class="mt-0.5 size-4 accent-black" checked={d.consent} onChange={(e) => set('consent', (e.target as HTMLInputElement).checked)} />
              <span>I agree to be contacted by call or WhatsApp about this request. We never share your number. <a href="/privacy" class="underline">Privacy</a></span>
            </label>
            {err.consent && <p class="text-[0.85rem] text-[#c2410c] sm:col-span-2" role="alert">{err.consent}</p>}
            {err.form && <p class="rounded-lg bg-[#fff1e6] p-3 text-[0.9rem] text-[#c2410c] sm:col-span-2" role="alert">{err.form}</p>}
          </div>
        )}
      </div>

      <div class="mt-10 flex items-center justify-between gap-3 border-t border-line pt-6">
        {step > 0
          ? <button type="button" onClick={() => go(step - 1)} class="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-grey transition hover:text-ink"><Arrow left /> Back</button>
          : <span class="text-[0.8rem] text-grey">Takes about a minute</span>}
        {step < 2
          ? <button type="button" onClick={next} class="pill pill-dark min-w-[12rem]">Continue <span class="dot"><Arrow /></span></button>
          : <button type="submit" disabled={sending} class="pill pill-dark min-w-[14rem] disabled:opacity-70">{sending ? 'Sending…' : 'Get my free quote'} <span class="dot"><Arrow /></span></button>}
      </div>
    </form>
  );
}
